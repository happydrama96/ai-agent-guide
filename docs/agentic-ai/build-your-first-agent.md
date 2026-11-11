---
title: 직접 만들기 실습
description: 문서 폴더를 스스로 탐색해 답하는 에이전트를 TypeScript로 만들어 보기
sidebar_position: 4
---

# 직접 만들기 실습

> 공식 문서: [Claude API 도구 사용](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) · [Anthropic TypeScript SDK](https://github.com/anthropics/anthropic-sdk-typescript) · [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview)

## 한 줄 요약

로컬 문서 폴더를 **스스로 탐색하고 읽어서 질문에 답하는 조사 에이전트**를 30분 안에 만듭니다. 먼저 루프를 직접 짜서 원리를 보고, 같은 기능을 SDK 헬퍼로 줄여 봅니다.

## 무엇을 만드나

```text
질문: "MCP 서버를 안전하게 연결하는 방법을 요약해 줘"
  [1] 도구 호출: list_files {}                       ← 어떤 문서가 있는지 확인
  [2] 도구 호출: read_file {"path":"integrations/mcp.md"}  ← 관련 문서를 골라 읽음
  최종 답변 + 근거 파일 경로
```

에이전트는 **읽기 전용 도구 두 개**만 가집니다. 지정한 폴더 밖은 읽을 수 없게 막아, 처음 만드는 에이전트로도 안전합니다. 이 사이트의 `docs` 폴더로 바로 실습할 수 있습니다.

## 준비

| 항목 | 기준 |
| --- | --- |
| Node.js | 20 이상 (`node -v`로 확인) |
| API 키 | [Claude Console](https://platform.claude.com/)에서 발급해 `ANTHROPIC_API_KEY` 환경 변수로 설정 |
| 비용 | 실행마다 토큰 요금이 발생합니다. 가격은 [공식 요금 페이지](https://platform.claude.com/docs/en/about-claude/pricing)에서 확인 |

```bash
mkdir my-first-agent && cd my-first-agent
npm init -y
npm pkg set type=module
npm install @anthropic-ai/sdk zod
npm install -D tsx typescript @types/node
```

API 키는 코드에 쓰지 말고 환경 변수로 넣습니다.

```bash
# macOS·Linux
export ANTHROPIC_API_KEY="sk-ant-..."
```

```powershell
# Windows PowerShell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
```

## 1단계: 한 번 호출해 보기

`hello.ts`를 만들고 실행합니다. 여기까지는 에이전트가 아니라 단일 호출입니다.

```ts title="hello.ts"
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // ANTHROPIC_API_KEY 환경 변수를 읽습니다

const response = await client.messages.create({
  model: "claude-opus-5-5",
  max_tokens: 16000,
  messages: [{ role: "user", content: "에이전트 AI를 한 문장으로 설명해 줘." }],
});

for (const block of response.content) {
  if (block.type === "text") console.log(block.text);
}
```

```bash
npx tsx hello.ts
```

**성공 기준**: 한국어 한 문장이 출력됩니다. `401` 오류가 나면 API 키 설정을 확인하세요.

## 2단계: 도구 만들기

에이전트가 쓸 실제 함수입니다. 모델과 상관없는 평범한 코드이고, **안전 장치는 여기에 둡니다.**

```ts title="tools.ts"
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

// 에이전트가 접근할 수 있는 유일한 폴더. 이 밖은 읽지 못하게 막습니다.
export const ROOT = path.resolve(process.argv[2] ?? "./docs");

function safePath(relative: string): string {
  const full = path.resolve(ROOT, relative);
  if (full !== ROOT && !full.startsWith(ROOT + path.sep)) {
    throw new Error(`허용된 폴더(${ROOT}) 밖의 경로입니다: ${relative}`);
  }
  return full;
}

export async function listFiles(dir = "."): Promise<string> {
  const entries = await readdir(safePath(dir), { withFileTypes: true, recursive: true });
  const files = entries
    .filter((e) => e.isFile() && /\.(md|mdx|txt)$/.test(e.name))
    .map((e) => path.relative(ROOT, path.join(e.parentPath, e.name)));
  return files.slice(0, 200).join("\n") || "(파일 없음)";
}

export async function readDoc(file: string): Promise<string> {
  const text = await readFile(safePath(file), "utf8");
  // 너무 긴 파일은 앞부분만 돌려주고 잘렸다는 사실을 알립니다.
  return text.length > 20000 ? text.slice(0, 20000) + "\n\n[...20000자 이후 생략]" : text;
}
```

## 3단계: 에이전트 루프 직접 짜기

[핵심 개념](/agentic-ai/concepts)의 루프를 그대로 코드로 옮긴 것입니다. 주석의 1)~4)를 따라 읽어 보세요.

```ts title="agent-loop.ts"
import Anthropic from "@anthropic-ai/sdk";
import { listFiles, readDoc, ROOT } from "./tools.ts";

const client = new Anthropic();

// 1) 도구 정의: 모델은 이 이름·설명·스키마만 보고 사용법을 판단합니다.
const tools: Anthropic.Tool[] = [
  {
    name: "list_files",
    description: "문서 폴더 안의 Markdown·텍스트 파일 경로 목록을 반환한다. 어떤 문서가 있는지 모를 때 먼저 사용한다.",
    input_schema: {
      type: "object",
      properties: { dir: { type: "string", description: "문서 폴더 기준 하위 경로. 생략하면 전체." } },
      additionalProperties: false,
    },
  },
  {
    name: "read_file",
    description: "list_files로 확인한 경로의 파일 내용을 읽는다.",
    input_schema: {
      type: "object",
      properties: { path: { type: "string", description: "list_files가 돌려준 상대 경로" } },
      required: ["path"],
      additionalProperties: false,
    },
  },
];

async function runTool(name: string, input: Record<string, unknown>): Promise<string> {
  switch (name) {
    case "list_files":
      return listFiles(typeof input.dir === "string" ? input.dir : ".");
    case "read_file":
      if (typeof input.path !== "string") throw new Error("path는 문자열이어야 합니다");
      return readDoc(input.path);
    default:
      throw new Error(`알 수 없는 도구: ${name}`);
  }
}

const question = process.argv[3] ?? "이 문서들에서 MCP 서버를 안전하게 연결하는 방법을 요약해 줘.";
const messages: Anthropic.MessageParam[] = [{ role: "user", content: question }];
const MAX_TURNS = 15; // 종료 조건 없는 루프는 비용 폭주의 원인입니다.

for (let turn = 1; turn <= MAX_TURNS; turn++) {
  // 2) 모델 호출
  const response = await client.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    system: `너는 ${ROOT} 폴더의 문서만 근거로 답하는 조사 에이전트다. 답변 끝에 근거로 쓴 파일 경로를 나열한다.`,
    tools,
    messages,
  });

  // 3) 모델 응답을 대화 기록에 그대로 추가 (텍스트만 뽑지 말 것)
  messages.push({ role: "assistant", content: response.content });

  if (response.stop_reason === "refusal") {
    console.error("모델이 요청을 거절했습니다:", response.stop_details?.explanation);
    break;
  }
  if (response.stop_reason === "max_tokens") {
    console.error("출력 한도에 도달했습니다. max_tokens를 늘리세요.");
    break;
  }
  if (response.stop_reason !== "tool_use") {
    // end_turn: 최종 답변
    for (const block of response.content) if (block.type === "text") console.log(block.text);
    break;
  }

  // 4) 요청된 도구를 실행하고 결과를 한 메시지에 모아 돌려줌
  const results: Anthropic.ToolResultBlockParam[] = [];
  for (const block of response.content) {
    if (block.type !== "tool_use") continue;
    console.error(`[${turn}] 도구 호출: ${block.name} ${JSON.stringify(block.input)}`);
    try {
      const output = await runTool(block.name, block.input as Record<string, unknown>);
      results.push({ type: "tool_result", tool_use_id: block.id, content: output });
    } catch (err) {
      // 오류도 결과로 돌려주면 모델이 다른 방법을 시도합니다.
      results.push({ type: "tool_result", tool_use_id: block.id, content: String(err), is_error: true });
    }
  }
  messages.push({ role: "user", content: results });
}
```

실행할 때 첫 번째 인자는 문서 폴더, 두 번째는 질문입니다.

```bash
npx tsx agent-loop.ts ../ai-agent-guide-main/docs "Cursor와 Claude Code 셋업의 차이를 정리해 줘"
```

**성공 기준**: 터미널에 `[1] 도구 호출: list_files ...`, `[2] 도구 호출: read_file ...` 같은 로그가 찍힌 뒤 근거 파일 경로가 붙은 답변이 나옵니다. 모델이 **어떤 파일을 읽을지 스스로 고르는 것**이 단일 호출과의 차이입니다.

### 코드에서 꼭 기억할 다섯 가지

| 포인트 | 이유 |
| --- | --- |
| `response.content` 전체를 기록에 추가 | 도구 호출 블록이 빠지면 다음 요청이 오류가 남 |
| 도구 결과는 한 `user` 메시지에 모아서 | 모델이 여러 도구를 동시에 호출할 수 있음 |
| 실패도 `is_error: true` 결과로 돌려줌 | 모델이 오류를 보고 다른 경로를 시도함 |
| `stop_reason`을 먼저 확인 | 거절·출력 한도 같은 상황을 놓치지 않음 |
| `MAX_TURNS` 상한 | 무한 반복과 비용 폭주 방지 |

## 4단계: SDK 헬퍼로 줄이기

같은 에이전트를 SDK의 Tool Runner(베타)로 만들면 루프 코드가 사라집니다. 도구 입력은 Zod 스키마로 자동 검증됩니다.

```ts title="agent-runner.ts"
import Anthropic from "@anthropic-ai/sdk";
import { betaZodTool } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { listFiles, readDoc, ROOT } from "./tools.ts";

const client = new Anthropic();

const listFilesTool = betaZodTool({
  name: "list_files",
  description: "문서 폴더 안의 Markdown·텍스트 파일 경로 목록을 반환한다. 어떤 문서가 있는지 모를 때 먼저 사용한다.",
  inputSchema: z.object({ dir: z.string().optional().describe("문서 폴더 기준 하위 경로") }),
  run: async ({ dir }) => listFiles(dir ?? "."),
});

const readFileTool = betaZodTool({
  name: "read_file",
  description: "list_files로 확인한 경로의 파일 내용을 읽는다.",
  inputSchema: z.object({ path: z.string().describe("list_files가 돌려준 상대 경로") }),
  run: async ({ path }) => readDoc(path),
});

const question = process.argv[3] ?? "이 문서들에서 MCP 서버를 안전하게 연결하는 방법을 요약해 줘.";

// 도구 호출 → 실행 → 결과 전달 루프를 SDK가 대신 돌립니다.
const finalMessage = await client.beta.messages.toolRunner({
  model: "claude-opus-5-5",
  max_tokens: 16000,
  max_iterations: 15,
  // 안전 분류기가 거절하면 서버가 자동으로 대체 모델로 다시 시도합니다.
  betas: ["server-side-fallback-2026-07-01"],
  fallbacks: "default",
  system: `너는 ${ROOT} 폴더의 문서만 근거로 답하는 조사 에이전트다. 답변 끝에 근거로 쓴 파일 경로를 나열한다.`,
  tools: [listFilesTool, readFileTool],
  messages: [{ role: "user", content: question }],
});

if (finalMessage.stop_reason === "refusal") {
  console.error("요청이 거절되었습니다.");
} else {
  for (const block of finalMessage.content) if (block.type === "text") console.log(block.text);
}
```

```bash
npx tsx agent-runner.ts ../ai-agent-guide-main/docs "업데이트 원칙을 알려 줘"
```

직접 루프와 헬퍼 중 무엇을 쓸지는 이렇게 고릅니다.

| 상황 | 선택 |
| --- | --- |
| 원리를 배우거나, 매 턴 세밀한 제어가 필요 | 직접 루프 |
| 내 도구만 쓰는 일반적인 에이전트 | Tool Runner |
| 파일 편집·셸 실행 같은 내장 도구가 필요 | [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) |
| 실행 환경과 장기 세션까지 맡기고 싶음 | [Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) |

## 5단계: 확장 과제

난이도 순서입니다. 하나씩 붙여 보며 에이전트가 어떻게 달라지는지 관찰하세요.

| 과제 | 배우는 것 | 힌트 |
| --- | --- | --- |
| `search_files(keyword)` 도구 추가 | 도구 설계, 도구 선택 | 설명에 "경로를 모를 때 list_files보다 먼저"라고 쓰고 호출 순서 변화를 관찰 |
| 매 호출의 토큰 사용량 출력 | 비용 감각 | `response.usage.input_tokens`, `output_tokens` 누적 |
| 같은 질문 10개로 정답률 측정 | 평가 | [평가·관측·보안](/agentic-ai/evaluation-safety)의 평가 세트 만들기 |
| `write_note` 도구 + 실행 전 사용자 승인 | Human-in-the-loop | 도구 실행 직전에 터미널에서 y/n 입력 받기 |
| 문서 내용 속 "지시문"에 속는지 시험 | 프롬프트 인젝션 | 문서 하나에 "이전 지시를 무시하라"를 넣고 반응 확인 |
| 도구를 MCP 서버로 분리 | 표준 프로토콜 | [MCP 공식 SDK](https://modelcontextprotocol.io/docs/sdk)로 같은 두 도구를 서버로 노출 |

## 흔한 오류

| 증상 | 원인 | 해결 |
| --- | --- | --- |
| `401 authentication_error` | API 키 미설정·오타 | 환경 변수를 같은 터미널에서 설정했는지 확인 |
| `tool_use ids were found without tool_result blocks` | 도구 결과를 빠뜨리거나 여러 메시지로 나눔 | 모든 `tool_use`에 대한 결과를 한 `user` 메시지에 모음 |
| `Cannot use import statement outside a module` | ESM 설정 누락 | `npm pkg set type=module` 실행 |
| 같은 도구를 계속 반복 호출 | 도구 결과가 모호하거나 오류 메시지가 불친절 | 결과에 다음 행동 힌트를 담고, 최대 반복 수 유지 |
| `429 rate_limit_error` | 요청 한도 초과 | 잠시 후 재시도. SDK는 기본으로 2회 재시도함 |

<div className="guide-meta">
**최종 확인일:** 2026-11-11<br />
**기준 버전:** @anthropic-ai/sdk 1.8.0 · zod 4 · Node.js 20+ · claude-opus-5-5
</div>
