---
title: Claude Code
description: Claude Code 설치, 인증, 프로젝트 연결 실전 셋업
sidebar_position: 1
---

# Claude Code 셋업

> 공식 문서: [설치](https://code.claude.com/docs/en/setup) · [인증](https://code.claude.com/docs/en/authentication) · [설정](https://code.claude.com/docs/en/settings) · [메모리·지침 파일](https://code.claude.com/docs/en/memory)

## 한 줄 요약

터미널과 Git에 익숙할수록 강력하지만, 처음에는 현재 폴더와 승인 권한을 좁게 잡아야 편합니다.

## 이런 사람에게

- 여러 파일을 읽고 고치고 테스트하는 개발 작업을 한 흐름으로 맡기려는 사람
- 터미널 명령, Git diff, 테스트 결과를 직접 검토할 수 있는 사람
- 편집기 자동완성이 중심이라면 Cursor나 Copilot이 더 자연스러울 수 있습니다.

## 설치

공식 설치 페이지에서 운영체제별 최신 방식을 먼저 확인하세요. 공식 문서는 네이티브 설치를 권장하며, 대표 설치와 확인 명령은 다음과 같습니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `curl -fsSL https://claude.ai/install.sh \| bash` | macOS·Linux·WSL용 네이티브 설치 | 새 환경에 처음 설치할 때 |
| `irm https://claude.ai/install.ps1 \| iex` | Windows PowerShell용 네이티브 설치 | Windows에 처음 설치할 때 |
| `brew install --cask claude-code` | Homebrew 설치(stable 채널) | macOS에서 패키지 관리자로 관리할 때 |
| `winget install Anthropic.ClaudeCode` | WinGet 설치 | Windows에서 패키지 관리자로 관리할 때 |
| `npm install -g @anthropic-ai/claude-code` | npm 전역 설치(Node.js 22 이상 권장) | 조직 표준이 Node 패키지일 때 |
| `claude --version` | 설치 버전 확인 | 설치 직후와 오류 신고 전 |
| `claude doctor` | 세션을 열지 않고 설치·설정 파일 상태를 읽기 전용으로 진단 | 실행 경로나 업데이트가 이상할 때 |

네이티브 설치는 백그라운드에서 자동 업데이트되지만 Homebrew, WinGet, Linux 패키지 관리자 설치는 기본적으로 자동 업데이트되지 않습니다. 이 경우 `brew upgrade claude-code`나 `winget upgrade Anthropic.ClaudeCode`처럼 각 관리자의 업그레이드 명령을 직접 실행하세요. npm 설치는 `sudo`로 실행하지 않습니다.

설치 스크립트는 실행 전 공식 URL인지 확인합니다. 회사 PC라면 보안 정책상 전역 설치나 원격 스크립트 실행이 막힐 수 있으니 승인된 배포 방식을 따르세요.

## 인증

처음 실행하면 브라우저 인증 흐름이 열립니다. 브라우저가 열리지 않으면 `c`를 눌러 로그인 URL을 복사해 직접 엽니다. Claude 구독(개인·Team·Enterprise), Claude Console, 조직이 제공한 Amazon Bedrock·Google Cloud Agent Platform(Vertex AI)·Microsoft Foundry 중 실제 계약에 맞는 방식을 선택합니다. 어떤 요금제에 Claude Code가 포함되는지는 바뀔 수 있으니 공식 인증 문서에서 확인하세요.

Claude Console은 API 키를 만들지 않고 Console 계정으로 로그인하는 방식도 제공합니다. API 키를 쓸 때는 저장소 파일이나 셸 기록에 직접 적지 말고 조직의 비밀 저장소와 환경 변수 주입을 사용하세요.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude` | 대화형 세션 시작과 최초 로그인 | 처음 인증하거나 작업을 시작할 때 |
| `claude auth login` | 세션을 열지 않고 셸에서 로그인 | 첫 세션 전에 미리 인증하거나 원격 환경을 준비할 때 |
| `claude auth status --text` | 로그인 상태를 읽기 쉬운 형태로 출력 | 스크립트·원격 환경에서 인증 여부를 확인할 때 |
| `/login` | 세션 안에서 계정 인증 변경 | 다른 계정·조직으로 전환할 때 |
| `/status` | 버전, 모델, 계정, 연결 상태 확인 | 권한이나 과금 주체가 헷갈릴 때 |
| `/logout` | 로컬 인증 해제 | 공용 장비 반납이나 계정 전환 전 |

## 프로젝트 연결

터미널에서 **프로젝트 루트로 이동한 뒤** 시작합니다. 첫 세션에서는 읽기 전용 탐색을 요청하고, `CLAUDE.md`에는 빌드·테스트 명령, 수정 금지 경로, 코드 규칙만 짧게 적습니다. 저장소에 `CLAUDE.md`는 없고 다른 에이전트용 `AGENTS.md`만 있으면 Claude Code가 `AGENTS.md`를 프로젝트 지침으로 읽습니다(v2.1.277 이상). 둘 다 있으면 기본값은 `CLAUDE.md`만 읽으며, 이 동작은 `/config`의 Project instructions 항목에서 바꿀 수 있습니다.

개인 설정은 사용자 범위, 팀 규칙은 저장소에 커밋되는 프로젝트 범위로 분리하세요.

| 범위 | 파일 | 언제 쓰나 |
| --- | --- | --- |
| 사용자 | `~/.claude/settings.json` | 모든 프로젝트에 적용할 개인 설정 |
| 프로젝트 공유 | `.claude/settings.json` | 팀 권한, hooks, 플러그인처럼 커밋해 함께 쓸 설정 |
| 프로젝트 개인 | `.claude/settings.local.json` | 이 저장소에서만 쓸 개인 설정(커밋하지 않음) |

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude` | 현재 폴더를 작업 컨텍스트로 세션 시작 | 프로젝트 루트에서 작업할 때 |
| `/init` | 프로젝트를 분석해 `CLAUDE.md` 초안 생성 | 새 저장소에 지침을 처음 만들 때 |
| `/import` | Codex, Gemini CLI, Cursor의 지침·MCP·명령·Skills 설정 가져오기 | 다른 코딩 에이전트에서 옮겨 올 때(`--dry-run`으로 미리 보기) |
| `/memory` | `CLAUDE.md` 편집과 자동 메모리 확인·끄기 | 규칙이 먹지 않는 것 같을 때 |
| `/permissions` | 허용·확인·차단 규칙과 작업 디렉터리 점검 | 파일·셸 권한을 조정할 때 |

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude "이 저장소 구조를 설명해줘"` | 첫 요청과 함께 대화형 세션 시작 | 탐색부터 바로 시작할 때 |
| `claude -c` | 현재 폴더의 최근 대화 이어가기 | 직전 작업을 계속할 때 |
| `claude -r` | 이전 세션을 골라 재개 | 여러 작업 중 하나로 돌아갈 때 |
| `claude -p "질문"` | 한 번 답하고 종료 | 스크립트나 빠른 조회에 쓸 때 |
| `/plan` | 계획 모드로 전환 | 큰 변경 전에 수정 없이 계획부터 볼 때 |
| `/diff` | 작업 트리 변경과 Claude가 한 수정 확인 | 커밋 전에 diff를 검토할 때 |
| `/rewind` | 대화와 코드를 이전 체크포인트로 되돌리기 | 잘못된 방향으로 수정이 진행됐을 때 |
| `/compact` | 긴 대화 컨텍스트 요약 | 세션이 길어지고 초점이 흐려질 때 |
| `/usage` | 세션 비용·사용량 확인(`/cost`는 별칭) | 긴 작업의 사용량을 점검할 때 |
| `/clear` | 대화 컨텍스트 초기화 | 전혀 다른 작업으로 바꿀 때 |

## 잘하는 것·못하는 것

### 잘하는 것

- 파일 간 호출 흐름을 추적하고 관련 변경을 묶는 일
- 테스트·린트 명령을 실행해 수정과 검증을 반복하는 일
- 계획, diff, 실패 원인을 터미널 흐름에서 함께 다루는 일

### 못하는 것

- 조직의 숨은 정책이나 연결하지 않은 문서를 알아내는 일
- 테스트가 없는 요구사항의 정답을 보장하는 일
- 승인 없이 운영 데이터나 외부 시스템을 안전하게 다루는 일

## 흔한 오류

| 증상 | 먼저 볼 것 | 해결 |
| --- | --- | --- |
| `command not found: claude` | 설치 경로가 `PATH`에 있는지 | 새 터미널을 열고 `claude doctor`로 설치 유형과 경로 확인 |
| 로그인 브라우저가 열리지 않음 | 프록시·기본 브라우저 정책 | 로그인 화면에서 `c`로 URL을 복사해 열고, 회사 프록시 허용 목록 확인 |
| 파일을 찾지 못함 | 세션을 시작한 현재 폴더 | 종료 후 프로젝트 루트에서 다시 시작하거나 허용 디렉터리 추가 |
| 명령 승인이 계속 뜸 | 프로젝트 지침과 권한 범위 | 반복되는 안전한 읽기 명령만 좁게 허용하고 쓰기·배포는 유지 |
| 업데이트가 반영되지 않음 | 설치 방식(Homebrew·WinGet·npm 등) | `claude doctor`로 설치 유형과 마지막 업데이트 결과를 보고 해당 관리자의 업그레이드 명령 실행 |
| 회사 인증서 오류 | 사설 CA와 프록시 환경 변수 | 보안팀이 배포한 CA 번들을 사용하고 임의의 TLS 검증 해제는 피함 |

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** Claude Code 2.1.316 · code.claude.com 공식 문서 최신판
</div>
