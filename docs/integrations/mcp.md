---
title: MCP 서버 연결
description: MCP 서버를 최소 권한으로 고르고 연결하고 검증하는 방법
sidebar_position: 1
---

# MCP 서버 연결

> 공식 문서: [MCP 2026-07-28 사양](https://modelcontextprotocol.io/specification/2026-07-28/architecture) · [사양 변경 사항](https://modelcontextprotocol.io/specification/2026-07-28/changelog) · [Claude Code MCP](https://code.claude.com/docs/en/mcp) · [Cursor MCP](https://cursor.com/docs/mcp) · [ChatGPT·Codex MCP](https://learn.chatgpt.com/docs/extend/mcp) · [Copilot MCP](https://docs.github.com/en/copilot/concepts/customizations/mcp) · [Copilot CLI MCP](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)

MCP는 에이전트가 외부 데이터와 도구를 같은 방식으로 발견하고 호출하게 하는 규약입니다. 편리함보다 **서버 출처, 읽기·쓰기 범위, 토큰 보관**을 먼저 봐야 합니다.

## 연결 전 체크

| 확인 | 통과 기준 | 이유 |
| --- | --- | --- |
| 서버 출처 | 벤더 또는 검토한 소스에서 설치 | MCP 도구는 파일 읽기와 명령 실행 능력을 가질 수 있음 |
| 데이터 범위 | 필요한 폴더·저장소·워크스페이스만 | 서버마다 연결은 분리돼도 허용한 데이터는 서버가 처리함 |
| 도구 권한 | 읽기 전용으로 시작 | 쓰기·삭제·배포는 결과 영향이 큼 |
| 인증 | 환경 변수, OAuth, 비밀 저장소 사용 | 토큰을 설정 파일과 Git 기록에 남기지 않기 위해 |
| 종료 절차 | 설정 제거와 토큰 폐기 경로 확인 | 연결 해제만으로 원격 토큰이 폐기되지 않을 수 있음 |

## 전송 방식 고르기

2026-07-28 사양의 표준 전송은 로컬 프로세스를 실행하는 `stdio`와 단일 엔드포인트에 요청하는 Streamable HTTP입니다. 예전 HTTP+SSE 전송은 Deprecated로 분류됐고, 사양의 기능 수명 정책에 따라 최소 12개월 유예 뒤 제거될 예정입니다. 새로 연결하는 원격 서버는 Streamable HTTP를 우선합니다.

| 방식 | 적합한 상황 | 주의점 |
| --- | --- | --- |
| `stdio` | 로컬 파일·개발 도구, 한 사용자 환경 | 실행할 패키지와 인자 검토, 환경 변수로 비밀값 주입 |
| Streamable HTTP | 팀 공용 원격 서비스, OAuth 기반 연결 | HTTPS, 서버 출처, 허용 범위, 토큰 대상 서버 확인 |
| HTTP+SSE (Deprecated) | 아직 SSE만 제공하는 기존 서버 | 서버 제공자에게 Streamable HTTP 엔드포인트가 있는지 먼저 확인 |

## 2026-07-28 사양에서 달라진 점

| 변화 | 사용자에게 보이는 영향 |
| --- | --- |
| 프로토콜 세션과 `initialize` 핸드셰이크 제거, 요청마다 버전·기능을 `_meta`에 담음 | 서버를 여러 인스턴스로 나눠 운영하기 쉬워짐. 구버전 서버와는 버전 협상 단계에서 실패할 수 있음 |
| `server/discover` 추가 | 클라이언트가 서버의 지원 버전과 기능을 먼저 조회할 수 있음 |
| Multi Round-Trip Requests | 서버가 추가 입력이 필요하면 결과로 요청하고, 클라이언트가 답을 붙여 같은 요청을 다시 보냄 |
| Roots·Sampling·Logging Deprecated | 기존 서버는 당분간 동작하지만 새 서버는 도구 인자나 설정으로 대체 |
| Tasks가 공식 확장(`io.modelcontextprotocol/tasks`)으로 이동 | 오래 걸리는 작업은 클라이언트와 서버가 모두 확장을 지원해야 사용 가능 |
| 인증 강화: 발급자(`iss`) 검증, 자격 증명을 발급자에 묶음, 동적 클라이언트 등록(DCR)보다 Client ID Metadata Document(CIMD) 권장 | OAuth 서버를 바꾸면 재인증·재등록이 필요할 수 있음 |

전체 목록은 [사양 변경 사항](https://modelcontextprotocol.io/specification/2026-07-28/changelog)과 [2026-07-28 사양 발표](https://blog.modelcontextprotocol.io/posts/2026-07-28/)에서 확인합니다. 2026-11-02 확인 기준으로 이보다 새로운 사양 버전은 공개되지 않았습니다.

## 제품별 지원 범위

공식 문서에 적힌 내용만 옮겼습니다. 사양 버전을 명시하지 않은 제품은 "명시 없음"으로 두고, 실제 동작은 서버 연결 후 도구 목록으로 확인합니다.

| 제품 | 2026-07-28 사양 | 전송 | 인증 |
| --- | --- | --- | --- |
| Claude Code | MCP TypeScript SDK 2.0 기반 런타임(v2)이 2026-07-28 리비전을 지원. v2.1.274 이후 일부 세션에서 기본 적용되며 `MCP_SDK_GENERATION`, `MCP_PROTOCOL_NEGOTIATION` 환경 변수로 조정 | `stdio`, HTTP, SSE(Deprecated), WebSocket(`add-json`으로만) | OAuth(`/mcp`, `claude mcp login`), DCR과 CIMD 지원, 헤더 토큰 |
| Cursor | 명시 없음. Tools, Prompts, Resources, Roots, Elicitation, Apps 확장 지원을 명시 | `stdio`, SSE, Streamable HTTP | OAuth(PKCE), `auth` 객체로 고정 클라이언트 ID 지정 |
| ChatGPT·Codex | 명시 없음 | `stdio`, Streamable HTTP. ChatGPT 웹은 플러그인으로 원격 MCP만 사용 | Bearer 토큰, OAuth(CIMD·DCR), 신뢰된 1st-party 서버의 ChatGPT 세션 인증 |
| GitHub Copilot | 명시 없음. cloud agent와 code review는 Tools만 사용(Resources·Prompts 미지원) | CLI 기준 `local`(stdio), `http`(Streamable HTTP), `sse`(Deprecated지만 지원) | 제품·IDE마다 다름. cloud agent·code review는 저장소 설정의 OAuth 원격 서버 미지원 |

## 연결 절차

제품마다 메뉴와 설정 위치가 다릅니다. 이름은 기능과 범위를 드러내게 짓고, 첫 연결 뒤에는 도구 목록부터 확인합니다.

| 제품 | 연결 경로 | 먼저 할 검증 |
| --- | --- | --- |
| Claude Code | `claude mcp add …` 또는 `.mcp.json`(프로젝트 공유)·`~/.claude.json`(로컬·사용자) → `/mcp` | `/mcp` 또는 `claude mcp list`에서 서버 상태와 노출 도구 확인 |
| Cursor | 사이드바 **Customize**에서 마켓플레이스 설치·켜기/끄기, 직접 추가는 `.cursor/mcp.json`(프로젝트)·`~/.cursor/mcp.json`(전역) | 서버를 켠 뒤 Agent에게 도구 목록만 요청 |
| ChatGPT 웹 | **Plugins** 탭에서 플러그인 설치(원격 MCP 포함), 워크스페이스는 관리자 권한에 따라 다름 | 관리자 허용 여부, OAuth 범위, 읽기 전용 질문 확인 |
| ChatGPT 데스크톱·Codex | 데스크톱 **Settings → MCP servers → Add server** 또는 `codex mcp add`, 설정은 `~/.codex/config.toml`(신뢰한 프로젝트는 `.codex/config.toml`) 공유 | `/mcp`로 활성 서버 확인 |
| GitHub Copilot | IDE의 MCP 설정(VS Code는 `.vscode/mcp.json`), Copilot CLI `/mcp add` 또는 `copilot mcp add` | `/mcp`, `/mcp show 이름`으로 서버 상태와 허용 도구 확인 |

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude mcp add --transport http 이름 URL` | Claude Code에 원격 HTTP 서버 추가 | 팀 공용 원격 서버를 연결할 때 |
| `claude mcp add --transport stdio --env KEY=값 이름 -- 명령 인자` | Claude Code에 로컬 `stdio` 서버 추가. `--` 뒤는 서버 명령으로 그대로 전달 | 로컬 개발 도구를 연결할 때 |
| `claude mcp add --scope project …` | `.mcp.json`에 저장해 저장소로 공유 | 팀원이 같은 서버 설정을 써야 할 때 |
| `claude mcp list` / `claude mcp get 이름` | 서버 목록·상태와 개별 설정 확인 | 연결 실패 원인을 좁힐 때 |
| `claude mcp login 이름` / `claude mcp logout 이름` | 셸에서 OAuth 로그인·저장된 자격 증명 삭제 | 재인증하거나 계정을 바꿀 때 |
| `claude mcp remove 이름` | 서버 제거와 로컬 OAuth 토큰 삭제(원격 폐기는 아님) | 연결을 끝낼 때 |
| `codex mcp add 이름 --env KEY=값 -- 명령` | Codex에 `stdio` 서버 추가 | 로컬 서버를 Codex·데스크톱 앱에서 함께 쓸 때 |
| `codex mcp add 이름 --url URL` | Codex에 원격 Streamable HTTP 서버 추가 | 원격 서버를 연결할 때 |
| `codex mcp list` / `codex mcp login 이름` | 서버 목록 확인, OAuth 로그인 | 연결 상태와 인증을 확인할 때 |
| `copilot mcp add 이름 -- 명령 인자` | Copilot CLI 사용자 설정(`~/.copilot/mcp-config.json`)에 로컬 서버 추가 | 터미널에서 바로 서버를 등록할 때 |
| `copilot mcp add --transport http 이름 URL` | Copilot CLI에 원격 HTTP 서버 추가 | 원격 서버를 연결할 때 |
| `/mcp` | 각 도구 안에서 MCP 상태 확인(Claude Code는 OAuth 로그인 포함) | 세션 중 서버·도구 상태를 볼 때 |
| `/mcp disable 이름` / `/mcp enable 이름` | Copilot CLI에서 서버를 끄고 켬 | 문제 서버를 잠시 분리할 때 |

명령 옵션은 버전마다 바뀔 수 있으므로 `claude mcp --help`, `codex mcp --help`, `copilot mcp --help`로 현재 설치본을 확인합니다.

## 설정 파일 모양

일반적인 `stdio` 설정의 모양은 다음과 같습니다. 실제 키 이름과 환경 변수 문법은 제품마다 다르므로 아래 표와 공식 문서를 따르세요.

```json
{
  "mcpServers": {
    "docs-readonly": {
      "command": "approved-mcp-server",
      "args": ["--root", "./docs"],
      "env": {
        "SERVICE_TOKEN": "${SERVICE_TOKEN}"
      }
    }
  }
}
```

| 제품 | 파일 | 다른 점 |
| --- | --- | --- |
| Claude Code | `.mcp.json`, `~/.claude.json` | `${VAR}`, `${VAR:-기본값}` 치환. 원격은 `"type": "http"` |
| Cursor | `.cursor/mcp.json`, `~/.cursor/mcp.json` | 환경 변수는 `${env:VAR}` 형식 |
| Codex·ChatGPT 데스크톱 | `~/.codex/config.toml` | JSON이 아닌 TOML `[mcp_servers.이름]` 표, 원격은 `url`과 `bearer_token_env_var` |
| Copilot CLI | `~/.copilot/mcp-config.json`, `.mcp.json`, `.github/mcp.json` | `"type": "local"` 또는 `"http"`, 허용 도구를 `tools` 배열로 지정 |
| VS Code Copilot | `.vscode/mcp.json` | 최상위 키가 `servers`라서 Copilot CLI는 읽지 않음 |

Codex의 같은 설정은 다음과 같습니다.

```toml
[mcp_servers.docs-readonly]
command = "approved-mcp-server"
args = ["--root", "./docs"]
env_vars = ["SERVICE_TOKEN"]
```

토큰 실제 값은 설정에 넣지 않습니다. 환경 변수 치환을 지원하지 않는 클라이언트라면 OS 비밀 저장소, 제품의 OAuth, 조직이 승인한 자격 증명 방식을 사용합니다.

## 서버 찾기

| 경로 | 성격 |
| --- | --- |
| [공식 MCP Registry](https://registry.modelcontextprotocol.io/) | MCP 기여자가 운영하는 공개 서버 목록과 API |
| [GitHub MCP Registry](https://github.com/mcp) | Copilot CLI `/mcp search`의 기본 검색 대상. 조직이 별도 레지스트리와 허용 목록을 지정할 수 있음 |
| Cursor Marketplace | **Customize**에서 원클릭 설치, 팀 관리자가 배포 가능 |
| ChatGPT 플러그인 | 워크스페이스 관리자가 허용한 플러그인과 도구만 사용 |

레지스트리에 올라와 있다는 사실이 보안 검토를 대신하지 않습니다. 위의 **연결 전 체크**를 그대로 적용합니다.

## 연결 직후 3단계 검증

1. **발견:** 서버 상태와 도구 이름만 조회합니다.
2. **읽기:** 공개 또는 테스트 데이터 한 건을 읽고 원본과 비교합니다.
3. **거부:** 허용 범위 밖 리소스를 요청해 접근이 차단되는지 확인합니다.

```text
연결된 MCP 도구를 실행하지 말고 목록만 보여줘.
각 도구의 읽기/쓰기 여부, 접근 대상, 실행 전에 필요한 승인을 표로 정리해줘.
```

## 흔한 실패

| 증상 | 원인 후보 | 확인 순서 |
| --- | --- | --- |
| 서버가 시작되지 않음 | 실행 파일 경로, 런타임, 인자 오류 | 절대 경로 → 런타임 버전 → 서버 stderr 순서로 확인 |
| 연결은 됐지만 도구가 없음 | 기능 발견 실패, 클라이언트 미지원 | 서버 로그와 클라이언트 지원 기능을 공식 문서에서 대조 |
| 버전 불일치 오류 | 클라이언트와 서버의 프로토콜 리비전 차이 | 서버 SDK 버전 확인. Claude Code는 `MCP_PROTOCOL_NEGOTIATION=legacy`로 이전 방식 협상을 시험 |
| SSE 서버만 연결 실패 | Deprecated 전송, 클라이언트별 지원 차이 | 서버의 Streamable HTTP 엔드포인트 유무 확인 |
| 프로젝트 서버가 안 보임 | 폴더·프로젝트 신뢰 전 | Claude Code는 `.mcp.json` 승인, Copilot CLI는 폴더 신뢰, Codex는 신뢰한 프로젝트만 `.codex/config.toml` 읽음 |
| `401` | 만료·대상 불일치 토큰 | OAuth 재인증 후 토큰이 해당 서버용인지 확인 |
| `403` | 필요한 scope 부족 | 필요한 작업에 한해 최소 scope로 다시 승인 |
| 회사에서만 연결 실패 | 프록시, CA, DNS, 방화벽, 조직 MCP 정책 | 네트워크 진단 결과와 서버 도메인을 보안팀에 전달하고 조직의 MCP 허용 목록 확인 |

## 연결 끊기

클라이언트 설정에서 서버를 비활성화하거나 제거한 뒤, 원격 서비스의 **계정 → 연결된 앱 → 해당 MCP 앱 → 접근 취소** 경로에서 토큰도 폐기합니다. 예를 들어 `claude mcp remove`는 로컬에 저장된 OAuth 토큰을 지우지만 원격에서 폐기하지는 않습니다. 로컬 설정과 셸 기록에 비밀값이 남지 않았는지 확인합니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** MCP 사양 2026-07-28(최신) · Claude Code·Cursor·ChatGPT/Codex·GitHub Copilot MCP 공식 문서 2026-11-02 확인본
</div>
