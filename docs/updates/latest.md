---
title: 업데이트 소식
description: 실제 사용과 이 가이드에 영향을 준 최신 변화
sidebar_position: 1
---

# 업데이트 소식

> 공식 문서: [Claude Code 변경 기록](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · [Cursor 변경 기록](https://cursor.com/changelog) · [ChatGPT 변경 기록](https://learn.chatgpt.com/docs/changelog) · [GitHub Copilot 변경 기록](https://github.blog/changelog/label/copilot/)

기능 출시 소식을 전부 옮기지 않습니다. 설치, 권한, 프로젝트 연결, 명령어처럼 **기존 사용법을 바꾸는 내용**만 반영합니다.

## 2026-11-02 · 정기 확인

8월 26일 이후 각 벤더의 공식 변경 기록과 문서를 다시 확인했습니다. 여러 제품의 공식 문서 주소가 옮겨져 상단 링크도 함께 교체했습니다.

### Claude Code

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| 공식 문서 주소 | `docs.anthropic.com/en/docs/claude-code/*`가 `code.claude.com/docs/en/*`로 이동 ([개요](https://code.claude.com/docs/en/overview)) | 모든 페이지의 Claude Code 공식 링크 교체 |
| 설치·인증 | Homebrew·WinGet 설치 경로 추가(자동 업데이트 안 됨), `claude auth login`·`claude auth status` 제공 ([설치](https://code.claude.com/docs/en/setup) · [인증](https://code.claude.com/docs/en/authentication)) | 셋업 설치·인증 표 갱신 |
| 지침 파일 | `CLAUDE.md`가 없으면 `AGENTS.md`를 프로젝트 지침으로 읽음(v2.1.277 이상) ([메모리](https://code.claude.com/docs/en/memory)) | 셋업 프로젝트 연결과 비교표에 반영 |
| 명령어 | `/cost`가 `/usage` 별칭으로 바뀜. `/doctor`가 진단·수정 제안 Skill로 바뀜. `/import`, `/diff`, `/plan`, `/rewind`, 내장 `/code-review`·`/security-review`, 백그라운드 세션(`/background`, `claude agents`, `claude attach`) 추가 ([명령어](https://code.claude.com/docs/en/commands) · [CHANGELOG](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)) | 치트시트에 작업 흐름·백그라운드 세션 절 신설 |
| 플러그인 | 세션 안 `/plugin install`이 설치 범위 선택 화면을 엶. 플러그인 명령은 `/<플러그인>:<명령>` 형식. `anthropics/claude-code`의 `claude-code-plugins` 마켓플레이스가 deprecated 상태로 바뀌고 `claude-community` 마켓플레이스가 새로 생김 ([플러그인 설치](https://code.claude.com/docs/en/discover-plugins) · [Anthropic 마켓플레이스](https://code.claude.com/docs/en/plugins/anthropic-marketplaces)) | 플러그인·개발 스킬 지도의 설치법과 명령 표기 수정 |
| Skills | claude.ai에서 켠 Skills가 로컬 세션에 동기화됨. 끄려면 `syncClaudeAiSkills: false` ([Skills](https://code.claude.com/docs/en/skills)) | 개발 스킬 지도에 추가 |

### Cursor

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| CLI | 기본 명령이 `agent`로 바뀌고 `cursor-agent`는 별칭으로 남음. 공식 문서에서 Beta 표기가 사라짐. Windows 네이티브 PowerShell 설치 지원 ([CLI 설치](https://cursor.com/docs/cli/installation) · [CLI 변경 기록](https://cursor.com/docs/cli/changelog)) | 셋업·치트시트·문제 해결의 CLI 명령을 `agent …`로 교체 |
| 편집기 | 인라인 수정이 없어지고 `Ctrl+K`가 선택 영역을 참조한 Agent를 엶. Agents Window(Cursor 3)에서 여러 작업 공간과 병렬 에이전트를 다룸 ([Agents Window](https://cursor.com/docs/agent/agents-window) · [키보드 단축키](https://cursor.com/docs/reference/keyboard-shortcuts)) | 단축키 표와 프로젝트 연결 절 갱신 |
| 규칙 | `.cursor/rules/`는 `.mdc`만 읽음. 하위 폴더 `AGENTS.md` 지원. `/create-rule` 추가 ([Rules](https://cursor.com/docs/rules)) | 지침 위치 정리, 규칙 오류 행 추가 |
| 공식 문서 주소 | `docs.cursor.com/*`가 `cursor.com/docs` 첫 화면으로 리다이렉트됨 | 모든 페이지의 Cursor 링크를 현행 주소로 교체 |

### ChatGPT·Codex

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| Plugins 탭 | 외부 연결이 **Plugins** 탭으로 통합됨. **Desktop only** 플러그인은 데스크톱에서만 사용 ([Plugins](https://learn.chatgpt.com/docs/plugins)) | `설정 → 연결/앱` 경로를 `Plugins → 검색 → +`로 교체 |
| 데스크톱 앱 | macOS·Windows·Linux에서 Chat·Work·Codex를 한 앱으로 전환. 단축키 변경(Quick chat `Ctrl+Alt+N` 등) ([빠른 시작](https://learn.chatgpt.com/docs/quickstart) · [명령 레퍼런스](https://learn.chatgpt.com/docs/reference/commands)) | 셋업 설치 절과 치트시트 단축키 수정 |
| 프로젝트 | Chats·Sources 구분, 데스크톱에서 로컬 폴더 추가, 대화 일괄 이동 ([프로젝트](https://learn.chatgpt.com/docs/projects)) | 프로젝트 연결 절 갱신 |
| 가져오기 | Codex CLI `/import`와 데스크톱 **설정 → Import**로 Claude Code·Cursor의 지침·Skills·MCP·hooks를 가져옴 ([Import](https://learn.chatgpt.com/docs/import)) | Codex 지도에 명령 표 추가 |
| Codex CLI | 최신 안정판 0.166.0. `/config`·`/presets` 추가, `codex mcp-server` 제거(09-05). Skill은 Codex에서 `$이름`, ChatGPT에서 `@이름`으로 호출 ([릴리스](https://github.com/openai/codex/releases) · [Skills와 플러그인](https://learn.chatgpt.com/docs/skills-and-plugins)) | Skill 호출 표기 수정, 기준 버전 갱신 |
| 관리자 제어 | Admin console → **Plugins**에서 설치 정책·앱 접근·도구를 정하고 **Permissions & roles**에서 역할별 권한 지정 ([Plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors)) | 플러그인 페이지와 사내 문서 연동에 관리자 경로 반영 |

### GitHub Copilot

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| VS Code Chat | Copilot harness가 새 세션 기본값이 되고 `@workspace` 같은 Chat 참여자는 지원 안 됨 ([AI 기능 치트시트](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)) | `@workspace`를 `#codebase`로 교체, `/plan`·`/init` 등 추가 |
| 지침 파일 | CLI와 VS Code 모두 `AGENTS.md`, `CLAUDE.md`를 읽고 모든 지침을 우선순위 없이 합침 ([CLI 지침](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions)) | "우선순위 확인" 안내를 "충돌 제거"로 수정 |
| 권한 | Assisted permissions GA(안전한 요청만 자동 진행) ([Changelog](https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available)) | 치트시트에 CLI 권한 표 신설 |
| CLI | 설치 경로가 npm·WinGet·Homebrew·스크립트로 늘어남. `/diagnostics` 대신 `/diagnose`, `/review`·`/delegate`·`/plugin` 문서화 ([CLI 명령](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)) | 셋업 설치 표와 치트시트 명령 교체 |
| 플러그인 | 저장소 기본 플러그인과 엔터프라이즈 플러그인 제어 GA ([Changelog](https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available)) | 플러그인 관리 명령과 우선순위 추가 |

### MCP

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| 사양 | 2026-07-28보다 새 사양 없음 ([변경 사항](https://modelcontextprotocol.io/specification/2026-07-28/changelog)) | 2026-07-28의 주요 변경(세션 제거, HTTP+SSE deprecated 등) 표 추가 |
| 클라이언트 지원 | Claude Code만 2026-07-28 지원을 문서에 명시(SDK 2.0 런타임, 일부 세션부터 기본 적용). Cursor·ChatGPT/Codex·Copilot은 사양 버전을 명시하지 않음 ([Claude Code MCP](https://code.claude.com/docs/en/mcp)) | 제품별 지원 표, 명령어, 설정 파일 위치 갱신 |

## 2026-09-28 · Codex 플러그인·Skills 구조 정리

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| OpenAI Plugins | 플러그인은 Skills, 앱 연결, MCP 서버, agents, commands, hooks를 선택적으로 묶는 현재 배포 단위 | 내장 Skill, 절차형 플러그인, 연결형 플러그인을 구분해 설명 |
| `openai/skills` | 저장소가 deprecated 상태이며 새 예제는 `openai/plugins`를 사용하라고 안내 | 이전 카탈로그 Skill을 현재 추천 목록과 분리하고 기존 환경 참고용으로 표시 |
| Superpowers | Codex 공식 디렉터리에서 설계·TDD·디버깅·검증·병렬 작업 Skills를 묶어 제공 | GitHub, Codex Security와 함께 개발 기본 조합으로 정리 |
| 연결형 플러그인 | GitHub, Figma, Vercel, Supabase 등은 계정 연결과 원격 데이터 접근이 필요 | `🔗` 표시와 권한·데이터 전송·외부 상태 변경 주의사항 추가 |
| `migrate-to-codex` | 공개 Plugins Directory에서 정확히 일치하는 항목을 확인하지 못함 | 추측해 설치법을 싣지 않고 공식 Claude Code 마이그레이션 가이드만 연결 |

자세한 선택 기준과 설치 후 확인 방법은 [Codex 개발 스킬·플러그인 지도](../plugins/codex-dev-skills.md)에서 확인할 수 있습니다.

## 2026-09-28 · Claude Code 플러그인·Skills 재검증

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| Claude Code 공식 플러그인 | 현재 배포 기준은 `anthropics/claude-plugins-official` 마켓플레이스이며 `플러그인@마켓플레이스` 형식으로 설치 | 예전 `anthropics/claude-code/plugins` 목록을 설치 기준으로 단정하지 않고 공식 마켓플레이스를 우선하도록 문서화 |
| Claude Code Skills | 개인, 프로젝트, 하위 디렉터리, 플러그인 Skill의 로딩 범위가 다르고 cloud session은 로컬 개인 경로를 읽지 않음 | 로컬·팀·cloud 범위별 경로와 공유 방식 추가 |
| `security-guidance` | 패턴 경고 외에 작업 종료 시 diff 리뷰와 커밋 시 agent 리뷰를 수행하며 관련 코드를 설정된 모델 endpoint로 전송 | 단순 로컬 hook으로 소개하지 않고 데이터 전송·비용·비활성화 항목 추가 |
| Superpowers | Claude Code 공식 마켓플레이스에서 설치할 수 있고, Skills가 설계·TDD·디버깅·검증·브랜치 마무리 순서를 자동으로 적용 | 이름만 나열하지 않고 언제 쓰며 기존 workflow와 어떻게 충돌하는지 정리 |
| Claude Code 최신 변경 기록 | `prompt-audit`은 오래된 모델용 프롬프트 패턴을 점검하고, 플러그인 검증·상세·제거 명령의 오류 처리가 개선됨 | 이번 검증에서 공식 마켓플레이스 이름과 플러그인 로딩 범위를 다시 확인 |

새 정리는 [Claude Code 개발 스킬 지도](../plugins/claude-code-dev-skills.md)에서 확인할 수 있습니다. 공식 플러그인을 전부 설치하라는 뜻이 아니라 기존 팀 절차에서 빈 단계만 고르기 위한 참조표입니다.

## 2026-08-26 · 사이트 첫 공개 기준선

| 제품·표준 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| MCP | 2026-07-28 사양에서 stateless core와 요청별 메타데이터 모델 도입 | MCP 개념과 기준 버전을 새 사양으로 작성하고 구버전 세션 설명을 기준으로 삼지 않음 |
| ChatGPT | OpenAI Docs의 현재 제품 구분이 웹·데스크톱, 프로젝트, Work·Codex 흐름을 함께 안내 | ChatGPT 셋업을 웹·데스크톱 Projects 중심으로 쓰고 API·CLI 인증과 분리 |
| Cursor | 편집기 빠른 시작과 별도로 Cursor CLI Beta 문서 제공 | 편집기와 선택형 CLI 명령을 나눠 표기 |
| GitHub Copilot | CLI에서 지침 초기화와 MCP 관리 명령 제공 | `.github/copilot-instructions.md`, `/init`, `/mcp` 항목 추가 |
| Claude Code | 네이티브 설치와 기존 npm 설치 경로가 함께 문서화 | 설치 방식을 한 가지로 단정하지 않고 진단 명령 포함 |

MCP 변경의 원문 요약은 [2026-07-28 사양 발표](https://blog.modelcontextprotocol.io/posts/2026-07-28/)에서 확인할 수 있습니다. 실제 클라이언트가 새 사양의 모든 기능을 같은 시점에 지원한다고 가정하지 않습니다.

## 업데이트 원칙

1. 공식 문서 또는 공식 변경 기록을 먼저 확인합니다.
2. 계정·요금제·점진 배포 차이는 단정하지 않고 표시합니다.
3. 메뉴는 이미지 대신 **설정 → 항목 → 동작** 형태로 기록합니다.
4. 명령어 변경은 셋업과 치트시트를 함께 고칩니다.
5. 페이지 하단의 최종 확인일과 기준 버전을 갱신합니다.

## 다음 확인 목록

- Cursor·ChatGPT/Codex·Copilot 공식 문서에 MCP 2026-07-28 사양 지원 명시 여부
- Copilot 로컬 sandbox 설정 방법(GA 발표 후 설정 문서 확인)
- Cursor CLI의 네이티브 Windows 미지원 기능 목록
- 내장 `/code-review`와 `code-review` 플러그인의 역할 구분
- Superpowers와 Claude Code 기본 workflow의 중복 범위

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** MCP 2026-07-28 · Claude Code 공식 Plugins·Skills 문서 · 각 벤더 공식 변경 기록 최신판
</div>
