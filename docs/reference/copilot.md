---
title: GitHub Copilot 치트시트
description: VS Code와 Copilot CLI 명령어 빠른 참조
sidebar_position: 4
---

# GitHub Copilot 치트시트

> 공식 문서: [VS Code AI 기능 치트시트](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet) · [Copilot CLI 명령 레퍼런스](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) · [Copilot CLI 지침 추가](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions)

## VS Code 대화

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+Alt+I` / `Control+Command+I` | Chat 보기 열기 | 질문·계획·Agent 작업을 시작할 때 |
| `Ctrl+I` / `Cmd+I` | 인라인 대화 열기 | 현재 선택 범위를 수정할 때 |
| `#codebase` | 워크스페이스 의미 검색을 강제 | 저장소 구조나 구현 위치를 찾을 때 |
| `#파일명` | 특정 파일·폴더·심볼을 컨텍스트로 첨부 | 근거 범위를 분명히 할 때 |
| `/plan` | 구현 전 조사와 계획 제안 | 여러 파일을 바꾸기 전에 |
| `/explain` | 코드 설명 요청 | 낯선 코드의 역할을 파악할 때 |
| `/fix` | 문제 수정 제안 | 선택한 오류를 고칠 때 |
| `/tests` | 테스트 초안 요청 | 선택 코드의 테스트를 만들 때 |
| `/init` | 워크스페이스 지침 생성·갱신 | 저장소 지침 초안이 필요할 때 |
| `/instructions` | 지침 파일 구성 | 적용 중인 규칙을 확인·수정할 때 |
| `/compact` | 대화 컨텍스트 압축 | 긴 세션에서 답이 흐려질 때 |

`@workspace` 같은 Chat 참여자는 Copilot harness에서 지원되지 않습니다. 파일을 직접 첨부하거나 `#codebase`, 또는 Skills·MCP 도구가 든 플러그인을 쓰세요. 권한은 Chat의 권한 선택기에서 수동 승인, Assisted permissions, Allow all 중 고릅니다.

## Copilot CLI 세션

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot` | 대화형 CLI 시작 | 터미널에서 에이전트 작업할 때 |
| `copilot init` | 저장소 지침 분석·초안 생성 | `.github/copilot-instructions.md`를 만들 때 |
| `copilot instruction list` | 현재 디렉터리에서 읽는 지침 파일 목록 | 어떤 규칙이 적용되는지 확인할 때 |
| `/init` | 현재 세션에서 지침과 에이전트 기능 초기화 | 대화 중 저장소 지침을 만들 때 |
| `/instructions` | 지침 파일 보기·켜고 끄기 | 규칙 충돌을 확인할 때 |
| `/model` | 사용 모델 또는 Auto 선택 | 작업 성격에 맞춰 모델을 바꿀 때 |
| `/plan` | 코딩 전 구현 계획 작성 | 큰 변경을 시작하기 전 |
| `/review` | 변경 사항 코드 리뷰 | 커밋·PR 전에 |
| `/delegate` | 원격 저장소에 PR로 작업 위임 | 로컬 세션을 비우고 클라우드 에이전트에 맡길 때 |
| `/compact` | 대화 기록 요약으로 컨텍스트 절약 | 긴 세션을 이어갈 때 |
| `/clear` | 새 대화 시작(`/new`, `/reset`과 같음) | 다른 작업으로 전환할 때 |
| `/exit` | 현재 세션 종료 | 세션을 마칠 때 |

## Copilot CLI 권한

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/permissions` | 권한 모드 확인·전환(`default`, `assisted`, `allow-all`) | 승인 빈도와 위험 수준을 조정할 때 |
| `/add-dir 경로` | 디렉터리 파일 접근 허용 | 저장소 밖 경로가 필요할 때 |
| `/list-dirs` | 허용된 디렉터리 목록 | 파일 접근 범위를 확인할 때 |
| `--allow-tool` / `--deny-tool` | 시작 시 도구 허용·차단 규칙 지정 | 스크립트나 반복 실행에서 권한을 고정할 때 |

## Copilot CLI 연결과 진단

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/mcp list` | MCP 서버 상태 목록 | 연결 문제를 확인할 때 |
| `/mcp add` | MCP 서버 추가 | 검토한 서버를 연결할 때 |
| `/mcp auth 서버명` | 원격 MCP 인증 | OAuth가 필요한 서버를 연결할 때 |
| `/mcp disable 서버명` | MCP 서버 비활성화 | 문제 서버를 지우지 않고 격리할 때 |
| `/plugin` | 플러그인 설치·업데이트·제거·마켓플레이스 관리 | 플러그인 상태를 확인할 때 |
| `/settings` | CLI 설정 보기·변경(`/config`와 같음) | 동작을 조정할 때 |
| `/diagnose` | 현재 세션 로그에서 오류·이상 동작 분석 | 재현 정보를 수집할 때 |
| `copilot update` | CLI 최신 버전 설치 | 문서의 명령이 보이지 않을 때 |

## 안전 메모

`copilot init`이 만든 지침은 초안입니다. 저장소에 커밋하기 전에 빌드·테스트 명령과 수정 금지 경로가 실제와 맞는지 검토하세요. CLI는 `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`까지 함께 읽고 우선순위 없이 합치므로 파일 사이 충돌을 없애고, 지침을 고친 뒤에는 새 세션을 시작합니다.

Assisted permissions는 모델이 명령·경로·URL 요청을 분류해 명백히 안전한 것만 자동 진행하는 모드이며, 나머지는 여전히 승인을 요청합니다. `allow-all`(`/yolo`)은 모든 확인을 건너뛰므로 격리된 환경에서만 씁니다. MCP 쓰기 도구와 자동 실행은 읽기 흐름이 검증된 후에만 허용합니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** VS Code 1.144 · Copilot CLI 1.0.105 · Copilot CLI 공식 레퍼런스 2026-11 기준
</div>
