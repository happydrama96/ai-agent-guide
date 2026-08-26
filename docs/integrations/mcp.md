---
title: MCP 서버 연결
description: MCP 서버를 최소 권한으로 고르고 연결하고 검증하는 방법
sidebar_position: 1
---

# MCP 서버 연결

> 공식 문서: [MCP 2026-07-28 사양](https://modelcontextprotocol.io/specification/2026-07-28/architecture) · [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp) · [Cursor MCP](https://docs.cursor.com/en/context/mcp) · [ChatGPT·Codex MCP](https://learn.chatgpt.com/docs/extend/mcp) · [Copilot MCP](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)

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

2026-07-28 사양의 표준 전송은 로컬 프로세스를 실행하는 `stdio`와 단일 엔드포인트에 요청하는 Streamable HTTP입니다.

| 방식 | 적합한 상황 | 주의점 |
| --- | --- | --- |
| `stdio` | 로컬 파일·개발 도구, 한 사용자 환경 | 실행할 패키지와 인자 검토, 환경 변수로 비밀값 주입 |
| Streamable HTTP | 팀 공용 원격 서비스, OAuth 기반 연결 | HTTPS, 서버 출처, 허용 범위, 토큰 대상 서버 확인 |

## 연결 절차

제품마다 메뉴와 설정 위치가 다릅니다. 이름은 기능과 범위를 드러내게 짓고, 첫 연결 뒤에는 도구 목록부터 확인합니다.

| 제품 | 연결 경로 | 먼저 할 검증 |
| --- | --- | --- |
| Claude Code | `claude mcp add …` 또는 프로젝트·사용자 설정 → `/mcp` | `/mcp`에서 서버 상태와 노출 도구 확인 |
| Cursor | **Cursor Settings → Tools & MCP → New MCP Server** 또는 `.cursor/mcp.json` | 서버를 켠 뒤 Agent에게 도구 목록만 요청 |
| ChatGPT | 제공되는 제품·워크스페이스에서 **설정 → 연결/플러그인** | 관리자 승인, OAuth 범위, 읽기 전용 질문 확인 |
| GitHub Copilot | IDE의 MCP 설정 또는 Copilot CLI `/mcp` | 서버 상태, 저장소 범위, 승인 프롬프트 확인 |

일반적인 `stdio` 설정의 모양은 다음과 같습니다. 실제 키 이름은 제품 공식 문서를 따르세요.

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

토큰 실제 값은 설정에 넣지 않습니다. 환경 변수 치환을 지원하지 않는 클라이언트라면 OS 비밀 저장소, 제품의 OAuth, 조직이 승인한 자격 증명 방식을 사용합니다.

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
| `401` | 만료·대상 불일치 토큰 | OAuth 재인증 후 토큰이 해당 서버용인지 확인 |
| `403` | 필요한 scope 부족 | 필요한 작업에 한해 최소 scope로 다시 승인 |
| 회사에서만 연결 실패 | 프록시, CA, DNS, 방화벽 | 네트워크 진단 결과와 서버 도메인을 보안팀에 전달 |

## 연결 끊기

클라이언트 설정에서 서버를 비활성화하거나 제거한 뒤, 원격 서비스의 **계정 → 연결된 앱 → 해당 MCP 앱 → 접근 취소** 경로에서 토큰도 폐기합니다. 로컬 설정과 셸 기록에 비밀값이 남지 않았는지 확인합니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** MCP 사양 2026-07-28 · 각 클라이언트 공식 문서 최신판
</div>
