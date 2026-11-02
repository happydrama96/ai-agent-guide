---
title: Cursor 치트시트
description: Cursor 편집기 단축키와 Cursor CLI 빠른 참조
sidebar_position: 2
---

# Cursor 치트시트

> 공식 문서: [키보드 단축키](https://cursor.com/docs/reference/keyboard-shortcuts) · [Cursor CLI 개요](https://cursor.com/docs/cli/overview) · [CLI 명령](https://cursor.com/docs/cli/reference/parameters) · [CLI 슬래시 명령](https://cursor.com/docs/cli/reference/slash-commands)

## 편집기

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+I` / `Cmd+I` | Agent 사이드 패널 열기·닫기 | 여러 파일 작업을 요청할 때 |
| `Ctrl+K` / `Cmd+K` | 선택 영역을 참조한 새 Agent 대화 열기 | 작은 범위를 빠르게 바꿀 때(예전 인라인 수정을 대체) |
| `Shift+Tab` | Agent 모드 전환(Plan 등) | 구현 전에 계획을 먼저 받을 때 |
| `Ctrl+.` / `Cmd+.` | 모드 메뉴 열기 | Agent·Plan·Ask 등 모드를 골라 바꿀 때 |
| `Tab` | 제안 수락 | 자동완성 결과가 맞을 때 |
| `Esc` | 제안 취소 | 자동완성이 의도와 다를 때 |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | 명령 팔레트 열기 | 기능 이름으로 명령을 찾을 때 |
| `Ctrl+Shift+J` / `Cmd+Shift+J` | Cursor Settings 열기 | 계정·모델·인덱싱 설정을 볼 때 |

Agents Window는 명령 팔레트의 **Open Agents Window**로 열고, **Open IDE**로 편집기 화면에 돌아옵니다. 모든 단축키는 `Ctrl+R` → `Ctrl+S`(macOS는 `Cmd+R` → `Cmd+S`)로 여는 키보드 단축키 설정에서 바꿀 수 있습니다.

## CLI 시작과 세션

CLI 명령 이름은 `agent`입니다. 이전 이름 `cursor-agent`는 호환용 별칭으로 동작합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `agent` | 대화형 CLI 시작 | 터미널에서 프로젝트 작업할 때 |
| `agent "요청"` | 첫 요청과 함께 시작 | 할 일이 분명할 때 |
| `agent --plan "요청"` | Plan 모드로 시작 | 수정 전에 질문과 계획부터 받을 때 |
| `agent --mode=ask "질문"` | 읽기 전용 Ask 모드로 시작 | 코드를 바꾸지 않고 탐색만 할 때 |
| `agent ls` | 이전 세션 목록 | 재개할 세션을 찾을 때 |
| `agent resume` | 최근 세션 재개 | 직전 작업을 계속할 때 |
| `agent --continue` | 이전 세션 이어서 진행 | 마지막 대화를 바로 이을 때 |
| `agent --resume="세션-ID"` | 지정 세션 재개 | 특정 작업으로 돌아갈 때 |

## CLI 대화 중 슬래시 명령

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plan` | Plan 모드로 전환 | 구현 방향을 먼저 합의할 때 |
| `/ask` | 읽기 전용 Ask 모드 전환 | 질문·탐색만 할 때 |
| `/model` | 모델 선택 | 작업 성격에 맞게 모델을 바꿀 때 |
| `/mcp list` | MCP 서버 목록 확인 | 연결된 도구를 점검할 때 |
| `/sandbox` | 샌드박스·네트워크 접근 설정 | 명령 실행 범위를 제한할 때 |
| `/summarize` | 대화 요약으로 컨텍스트 줄이기 | 긴 세션이 느려지거나 맥락이 흐려질 때 |
| `/resume` | 최근 대화 골라 재개 | 세션 안에서 다른 작업으로 돌아갈 때 |

대화 중 메시지 앞에 `&`를 붙이면 작업을 Cloud Agent로 넘겨 자리를 비운 동안 계속 실행할 수 있습니다. 넘긴 작업은 [cursor.com/agents](https://cursor.com/agents)에서 확인합니다.

## CLI 자동화와 인증

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `agent -p "질문"` | 비대화형 결과 출력 | 스크립트·CI에서 읽기 작업할 때 |
| `agent -p --output-format json "질문"` | JSON 결과 출력 | 구조화된 후처리가 필요할 때 |
| `agent login` | 브라우저 로그인 | CLI를 처음 인증할 때 |
| `agent status` | 인증 상태 확인 | 로그인 오류를 볼 때 |
| `agent logout` | 인증 제거 | 장비 반납이나 계정 전환 전 |
| `agent mcp list` | 설정된 MCP 서버 목록 | CLI에서 MCP 연결을 점검할 때 |
| `agent update` | CLI 업데이트 | 자동 업데이트가 막힌 환경에서 최신판으로 맞출 때 |

## 안전 메모

`-p`(print) 모드는 쓰기·셸 도구에도 접근할 수 있고, `--force`(별칭 `--yolo`)를 함께 주면 명시적으로 거부되지 않은 명령과 파일 변경을 바로 적용합니다. `--force` 없이 실행하면 변경은 제안만 됩니다. 읽기·분석 단계와 게시·커밋 단계를 분리하고, CI에서는 수정 가능 경로와 Git 권한을 별도 단계로 제한하세요. 자동화 인증은 `CURSOR_API_KEY` 환경 변수로 주입하고 키 값을 명령 기록에 남기지 마세요.

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** Cursor 3.27 · Cursor CLI v2026.10.22
</div>
