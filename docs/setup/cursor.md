---
title: Cursor
description: Cursor 편집기와 선택형 CLI 설치, 인증, 프로젝트 연결
sidebar_position: 2
---

# Cursor 셋업

> 공식 문서: [설치](https://cursor.com/help/getting-started/install) · [빠른 시작](https://cursor.com/docs/get-started/quickstart) · [Cursor CLI 설치](https://cursor.com/docs/cli/installation) · [Privacy Mode](https://cursor.com/help/security-and-privacy/privacy)

## 한 줄 요약

코드를 보며 작은 수정부터 에이전트 작업까지 이어가기 좋고, 첫 프로젝트에서는 인덱싱과 Privacy Mode를 먼저 확인해야 합니다.

## 이런 사람에게

- VS Code 계열 사용감 안에서 AI 자동완성(Tab)과 Agent를 함께 쓰려는 사람
- 변경 파일을 편집기 diff로 바로 검토하고 싶은 사람
- 여러 저장소의 에이전트를 한 화면에서 병렬로 돌리고 싶은 사람(Agents Window)
- 터미널만으로 모든 흐름을 운영하려면 Claude Code나 Cursor CLI 쪽이 더 맞을 수 있습니다.

## 설치

[공식 다운로드](https://cursor.com/download)에서 운영체제 설치 파일을 받아 실행합니다. macOS는 Applications 폴더로 옮기고, Windows는 설치 프로그램 안내를 따르며, Linux는 `apt`·`dnf` 패키지나 AppImage를 씁니다. 첫 실행의 설정 마법사는 나중에도 명령 팔레트에서 **Cursor: Start Onboarding**으로 다시 열 수 있습니다.

CLI는 선택 사항입니다. 명령 이름은 `agent`이고, 이전 이름 `cursor-agent`는 호환용 별칭으로 남아 있습니다. Windows는 WSL 없이 PowerShell에서도 설치할 수 있습니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `cursor .` | 현재 폴더를 Cursor로 열기 | 셸에서 프로젝트를 바로 열 때 |
| `curl https://cursor.com/install -fsS \| bash` | Cursor CLI 설치 | macOS·Linux·Windows WSL에서 터미널 에이전트도 쓸 때 |
| `irm 'https://cursor.com/install?win32=true' \| iex` | Cursor CLI 설치(Windows 네이티브) | WSL 없이 PowerShell에서 CLI를 쓸 때 |
| `agent --version` | Cursor CLI 설치 확인 | CLI 설치 직후 |
| `agent update` | CLI 수동 업데이트 | 기본 자동 업데이트가 막힌 환경에서 최신판으로 맞출 때 |

## 인증

첫 실행 때 나오는 로그인 안내를 따르거나, 편집기에서 **Cursor Settings → General → Account → Sign in** 경로로 로그인합니다. 설정 단축키는 `Ctrl+Shift+J`이고 macOS에서는 `Cmd+Shift+J`입니다. CLI는 브라우저 로그인을 권장하며, 자동화에서만 **Cursor Dashboard → API Keys**에서 만든 사용자 API 키를 `CURSOR_API_KEY` 환경 변수로 주입합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `agent login` | 브라우저 계정 인증 | CLI를 처음 쓸 때 |
| `agent status` | 로그인 상태 확인 | 인증 오류를 점검할 때 |
| `agent logout` | 로컬 인증 정보 제거 | 공용 장비 반납이나 계정 전환 전 |

## 프로젝트 연결

**파일 → 폴더 열기**로 프로젝트 루트를 엽니다. 처음에는 **Cursor Settings → Indexing**에서 인덱싱 범위와 진행 상태를 확인하고, 비밀값·생성물·대용량 데이터는 `.cursorignore`에 둡니다. `.gitignore`에 있는 파일은 자동으로 제외되지만, 터미널 명령과 MCP 도구는 `.cursorignore` 대상 파일도 읽을 수 있습니다.

지침은 용도에 따라 나눠 둡니다.

- **프로젝트 규칙:** `.cursor/rules/` 아래 `.mdc` 파일. 적용 방식(항상·자동 판단·특정 파일·수동)을 고를 수 있고, 일반 `.md` 파일은 규칙으로 읽히지 않습니다. Agent 대화창의 `/create-rule`로도 만듭니다.
- **단순 프로젝트 지침:** 루트나 하위 폴더의 `AGENTS.md`. 하위 폴더 파일은 그 폴더 작업에 더 구체적으로 적용됩니다.
- **개인 규칙:** 사이드바 **Customize → Rules**. 모든 프로젝트에 적용됩니다.

여러 저장소나 클라우드 에이전트를 함께 다루려면 명령 팔레트에서 **Open Agents Window**를 실행합니다. 기존 편집기 화면으로 돌아올 때는 **Open IDE**를 실행합니다.

Privacy Mode는 **Cursor Settings → General → Privacy Mode**에서 확인합니다. 팀 계정은 관리자가 켜짐 상태를 강제할 수 있습니다. 회사 정책상 코드 전송이 제한되면 프로젝트를 열기 전에 담당자 승인을 받으세요.

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+I` / `Cmd+I` | Agent 사이드 패널 열기·닫기 | 여러 파일 작업을 요청할 때 |
| `Ctrl+K` / `Cmd+K` | 선택 영역을 참조한 새 Agent 대화 열기 | 범위가 작은 변경을 맡길 때(예전 인라인 수정을 대체) |
| `Shift+Tab` | Agent 모드 전환(Plan 등) | 바로 고치기 전에 계획부터 검토할 때 |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | 명령 팔레트 열기 | 설정·진단 명령을 이름으로 찾을 때 |
| `agent` | 터미널 대화형 세션 시작 | 편집기 밖에서 프로젝트 작업할 때 |
| `agent resume` | 최근 CLI 세션 재개 | 이전 작업을 이어갈 때 |
| `agent ls` | 저장된 CLI 세션 목록 | 재개할 대화를 찾을 때 |

## 잘하는 것·못하는 것

### 잘하는 것

- 작성 중인 코드에 맞춘 자동완성과 선택 영역을 참조한 수정 요청
- 열린 프로젝트를 인덱싱해 여러 파일에 걸친 구현과 질문 처리
- 변경 diff를 편집기 안에서 보고 부분 수락·거절하는 흐름

### 못하는 것

- 인덱싱에서 제외되거나 열지 않은 저장소의 맥락 파악
- 생성 코드의 요구사항·보안·성능 정답 보장
- 조직 정책을 대신 판단하거나 민감정보 반출을 자동으로 막는 일

## 흔한 오류

| 증상 | 먼저 볼 것 | 해결 |
| --- | --- | --- |
| AI 기능이 응답하지 않음 | **Cursor Settings → Network → Run Diagnostics** | 프록시가 HTTP/2를 막으면 같은 화면의 **HTTP Compatibility Mode**를 HTTP/1.1로 바꾸고 재시작. 결과는 조직 네트워크 담당자에게 전달 |
| 저장소 질문 답이 얕음 | **Cursor Settings → Indexing** 진행 상태 | 인덱싱 완료 후 다시 묻고 `.cursorignore`가 필요한 파일을 막지 않는지 확인 |
| 확장 충돌이 의심됨 | 확장을 모두 끈 상태에서 재현되는지 | `cursor --disable-extensions`로 열고 하나씩 다시 활성화 |
| CLI가 인증되지 않음 | `agent status` 결과 | `agent login`으로 다시 인증하고 자동화 키는 `CURSOR_API_KEY` 환경 변수로 주입 |
| `agent` 명령을 찾을 수 없음 | 설치 경로가 PATH에 있는지 | macOS·Linux·WSL은 `~/.local/bin`을 PATH에 추가하고 셸을 다시 열기 |
| 규칙이 적용되지 않음 | 규칙 파일 위치·확장자와 대상 glob | `.cursor/rules` 아래 파일이 `.mdc`인지 확인하고 적용 범위를 단순화한 뒤 새 대화에서 재검증 |

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** Cursor 3.27 · Cursor CLI v2026.10.22
</div>
