---
title: GitHub Copilot
description: VS Code 중심 GitHub Copilot 설치, 인증, 저장소 연결
sidebar_position: 4
---

# GitHub Copilot 셋업

> 공식 문서: [빠른 시작](https://docs.github.com/en/copilot/get-started/quickstart) · [VS Code 설정](https://code.visualstudio.com/docs/copilot/setup) · [사용자 지정 지침](https://docs.github.com/en/copilot/concepts/prompting/response-customization)

## 한 줄 요약

GitHub와 VS Code가 이미 표준인 팀에서 도입 마찰이 낮고, 저장소 지침과 기존 리뷰 절차를 함께 쓰면 효과가 큽니다.

## 이런 사람에게

- VS Code·Visual Studio·JetBrains 또는 GitHub 안에서 작업 흐름을 유지하려는 사람
- 조직의 GitHub 계정·정책·저장소 권한과 함께 관리하려는 팀
- 독립 터미널 에이전트가 중심이면 Claude Code나 Copilot CLI도 비교해 보세요.

## 설치

VS Code에서 **확장 → GitHub Copilot 검색 → 게시자 GitHub 확인 → 설치** 순서로 진행합니다. VS Code와 확장을 최신 안정 버전으로 맞춥니다. 조직 장비라면 확장 허용 목록과 Copilot 좌석 배정 여부를 먼저 확인하세요.

선택형 Copilot CLI는 제품 범위와 지원 환경이 빠르게 바뀌므로 [공식 CLI 설치 문서](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)를 기준으로 설치합니다.

## 인증

VS Code에서 **계정 → GitHub로 로그인 → 브라우저 승인 → Copilot 사용 계정 선택** 순서로 인증합니다. 개인 계정과 회사 계정이 함께 있으면 Copilot 좌석이 부여된 계정인지 확인하세요. 조직 정책 때문에 모델이나 기능이 보이지 않을 수 있습니다.

## 프로젝트 연결

저장소 루트를 VS Code 워크스페이스로 엽니다. 팀 공통 규칙은 `.github/copilot-instructions.md`, 경로별 규칙은 `.github/instructions/이름.instructions.md`에 두고 Git으로 검토합니다. 빌드·테스트 명령, 코드 스타일, 수정 금지 경로를 짧고 검증 가능하게 적으세요.

대화에서 저장소 전체를 물을 때도 먼저 대상 폴더와 완료 조건을 좁힙니다. GitHub.com의 저장소 컨텍스트와 로컬 IDE 워크스페이스는 보이는 정보와 실행 능력이 다를 수 있습니다.

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+Alt+I` / `Control+Command+I` | VS Code Chat 열기 | 코드 질문이나 Agent 작업을 시작할 때 |
| `Ctrl+I` / `Cmd+I` | 선택 영역 인라인 대화 | 한 함수나 블록만 고칠 때 |
| `@workspace` | 열린 워크스페이스를 근거로 질문 | 구조·호출 관계를 찾을 때 |
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
| 제안은 되지만 Chat이 안 됨 | 확장 상태와 조직 정책 | VS Code·GitHub Copilot 확장을 갱신하고 제한 정책 확인 |
| 저장소 규칙을 무시함 | 지침 파일 경로와 충돌 | `.github/copilot-instructions.md`를 짧게 만들고 경로별 지침 우선순위 확인 |
| 워크스페이스 답변이 부정확 | 열린 루트와 제외 파일 | 올바른 저장소 루트를 다시 열고 근거 파일 경로를 요구 |
| 프록시 환경에서 연결 실패 | VS Code 네트워크·인증 로그 | **보기 → 출력 → GitHub Copilot**에서 오류를 확인해 네트워크 담당자에게 전달 |

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** GitHub Copilot 최신 서비스 · VS Code 최신 안정판
</div>
