---
title: GitHub Copilot
description: VS Code 중심 GitHub Copilot 설치, 인증, 저장소 연결
sidebar_position: 4
---

# GitHub Copilot 셋업

> 공식 문서: [빠른 시작](https://docs.github.com/en/copilot/get-started/quickstart-for-using-github-copilot-on-github-com) · [VS Code 설정](https://code.visualstudio.com/docs/setup/copilot) · [사용자 지정 지침](https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions) · [Copilot CLI 설치](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)

## 한 줄 요약

GitHub와 VS Code가 이미 표준인 팀에서 도입 마찰이 낮고, 저장소 지침과 기존 리뷰 절차를 함께 쓰면 효과가 큽니다.

## 이런 사람에게

- VS Code·Visual Studio·JetBrains 또는 GitHub 안에서 작업 흐름을 유지하려는 사람
- 조직의 GitHub 계정·정책·저장소 권한과 함께 관리하려는 팀
- 독립 터미널 에이전트가 중심이면 Claude Code나 Copilot CLI도 비교해 보세요.

## 설치

VS Code를 최신 안정 버전으로 맞춘 뒤 **상태 표시줄 Copilot 아이콘 → Use AI Features → 로그인 방식 선택** 순서로 진행합니다. 확장 목록에서 게시자가 GitHub인 **GitHub Copilot Chat** 확장이 활성 상태인지 확인하세요. 조직 장비라면 확장 허용 목록과 Copilot 좌석 배정 여부를 먼저 확인합니다. AI 기능을 아예 숨기려면 설정 `chat.disableAIFeatures`를 켭니다.

선택형 Copilot CLI는 아래 중 하나로 설치합니다. 지원 환경이 빠르게 바뀌므로 설치 전 [공식 CLI 설치 문서](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)를 확인하세요. npm 설치는 Node.js 22 이상, Windows는 PowerShell 6 이상이 필요하며, 조직이나 엔터프라이즈가 Copilot CLI를 꺼 두었으면 사용할 수 없습니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `npm install -g @github/copilot` | npm으로 CLI 설치 | Node.js 환경이 이미 있을 때 |
| `winget install GitHub.Copilot` | WinGet으로 CLI 설치 | Windows에서 |
| `brew install --cask copilot-cli` | Homebrew로 CLI 설치 | macOS·Linux에서 |
| `copilot version` | 버전 표시와 업데이트 확인 | 설치 직후, 문제 보고 전 |
| `copilot update` | 최신 버전 내려받아 설치 | 문서의 새 명령이 보이지 않을 때 |

## 인증

VS Code에서 **계정 → Sign in with GitHub to use GitHub Copilot → 브라우저 승인** 순서로 인증합니다. 명령 팔레트의 **GitHub Copilot: Sign in**도 같은 동작입니다. GHE.com 계정은 로그인 창에서 **Continue with GHE.com**을 고르고 인스턴스 URL을 입력합니다.

개인 계정과 회사 계정이 함께 있으면 Copilot 좌석이 부여된 계정인지 확인하세요. 계정을 바꿀 때는 **계정 → 현재 계정 → Sign out** 후 다시 로그인하고, 워크스페이스별로 다른 계정을 쓰려면 **계정 → Manage Extension Account Preferences → GitHub Copilot Chat**에서 고릅니다. 구독이 없는 계정으로 로그인하면 Copilot Free로 가입될 수 있습니다. 조직 정책 때문에 모델이나 기능이 보이지 않을 수 있습니다.

Copilot CLI는 처음 실행할 때 `/login`(터미널에서는 `copilot login`)으로 브라우저 인증을 합니다. 자동화 환경에서는 **Copilot Requests** 권한을 준 개인 fine-grained 토큰을 `COPILOT_GITHUB_TOKEN` 환경 변수로 넘깁니다.

## 프로젝트 연결

저장소 루트를 VS Code 워크스페이스로 엽니다. 팀 공통 규칙은 `.github/copilot-instructions.md`, 경로별 규칙은 `.github/instructions/이름.instructions.md`(`applyTo` 글롭으로 대상 지정)에 두고 Git으로 검토합니다. 빌드·테스트 명령, 코드 스타일, 수정 금지 경로를 짧고 검증 가능하게 적으세요.

Copilot은 `AGENTS.md`와 `CLAUDE.md`도 지침으로 읽습니다. 적용되는 지침 파일은 **모두 합쳐지고 정해진 우선순위가 없으므로** 파일끼리 내용이 충돌하지 않게 관리하세요. 개인 규칙은 `~/.copilot/copilot-instructions.md`에 둡니다. 지침은 Chat·Agent 요청에 쓰이며, 타이핑 중 나오는 인라인 제안에는 반영되지 않습니다.

대화에서 저장소 전체를 물을 때도 먼저 대상 폴더와 완료 조건을 좁힙니다. GitHub.com의 저장소 컨텍스트와 로컬 IDE 워크스페이스, CLI는 보이는 정보와 실행 능력이 다를 수 있습니다.

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+Alt+I` / `Control+Command+I` | VS Code Chat 열기 | 코드 질문이나 Agent 작업을 시작할 때 |
| `Ctrl+I` / `Cmd+I` | 선택 영역 인라인 대화 | 한 함수나 블록만 고칠 때 |
| `#codebase` | 워크스페이스 의미 검색을 강제 | 구조·호출 관계를 찾을 때 |
| `/plan` | 구현 전 조사와 계획 제안 | 여러 파일을 바꾸기 전에 |
| `/init` | 워크스페이스 지침 생성·갱신 | 저장소 지침 초안이 필요할 때 |
| `/explain` | 선택 코드 설명 | 낯선 코드 파악에 쓸 때 |
| `/fix` | 선택 코드의 문제 수정 제안 | 오류가 난 작은 범위를 고칠 때 |
| `/tests` | 선택 코드에 맞는 테스트 제안 | 기존 동작을 고정할 테스트 초안이 필요할 때 |

## 잘하는 것·못하는 것

### 잘하는 것

- 편집 중인 코드 주변의 완성과 반복 코드 작성
- 선택 영역 설명, 수정, 테스트 초안을 짧은 루프로 처리
- GitHub 저장소의 지침과 기존 개발 흐름에 맞춘 보조

### 못하는 것

- 제안 코드의 정확성·보안·라이선스 적합성을 자동 보장
- IDE, GitHub.com, CLI 사이의 기능 차이를 없애는 일
- 조직에서 차단한 모델·외부 연결·데이터 접근을 우회하는 일

## 흔한 오류

| 증상 | 먼저 볼 것 | 해결 |
| --- | --- | --- |
| Copilot 아이콘이 비활성 | 로그인 계정과 좌석 배정 | VS Code **계정 → GitHub 세션**을 확인하고 조직 관리자에게 좌석 확인 |
| 제안은 되지만 Chat이 안 됨 | 확장 상태와 조직 정책 | VS Code·GitHub Copilot Chat 확장을 갱신하고 제한 정책 확인 |
| 저장소 규칙을 무시함 | 지침 파일 경로와 충돌 | `.github/copilot-instructions.md`를 짧게 만들고 `AGENTS.md`·경로별 지침과 충돌하는 문장 제거. CLI는 `copilot instruction list`로 읽은 파일을 확인한 뒤 새 세션 시작 |
| `@workspace`가 동작하지 않음 | Chat 참여자 지원 여부 | Copilot harness에서는 Chat 참여자(`@`)가 지원되지 않으므로 파일을 직접 첨부하거나 `#codebase` 사용 |
| 워크스페이스 답변이 부정확 | 열린 루트와 제외 파일 | 올바른 저장소 루트를 다시 열고 근거 파일 경로를 요구 |
| 프록시 환경에서 연결 실패 | VS Code 네트워크·인증 로그 | **보기 → 출력 → GitHub Copilot**에서 오류를 확인해 네트워크 담당자에게 전달 |

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** VS Code 1.144 · Copilot CLI 1.0.105 · GitHub Copilot 공식 문서 2026-11 기준
</div>
