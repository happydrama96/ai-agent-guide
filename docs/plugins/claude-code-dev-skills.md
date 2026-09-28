---
title: Claude Code 개발 스킬 지도
description: Anthropic 공식 개발 플러그인과 Superpowers를 목적별로 고르는 가이드
sidebar_position: 3
---

# Claude Code 개발 스킬 지도

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 [Claude Code 플러그인 문서](https://code.claude.com/docs/en/plugins), [Skills 문서](https://code.claude.com/docs/en/skills), 각 플러그인의 공식 자료를 우선 확인하세요.
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| Anthropic 공식 개발 플러그인 | 리뷰, 기능 개발, Git, 보안, UI, 훅, 플러그인·SDK 개발 도구를 목적별로 설치한다. | 쉬움 | 목적별 선택 | 활발 | 2026-09-28 |
| Superpowers | 설계부터 TDD, 디버깅, 검증, 브랜치 마무리까지 하나의 강한 개발 절차로 묶는다. | 보통 | 높음 | 활발 | 2026-09-28 |

이 페이지는 추천 플러그인을 늘어놓는 목록이 아닙니다. [Claude Code 플러그인](./claude-code.md)의 추천 3개는 그대로 유지하고, 여기서는 개발 목적이 정해졌을 때 어떤 공식 플러그인이나 Superpowers Skill을 찾아야 하는지 정리합니다.

## 먼저 구분할 것

| 구분 | 무엇을 담나 | 설치·공유 범위 |
| --- | --- | --- |
| 플러그인 | Skills, 명령어, agents, hooks, 선택형 MCP 설정을 하나의 패키지로 묶음 | 마켓플레이스에서 설치하고 사용자·프로젝트·관리자 범위로 활성화 |
| Skill | 특정 상황에서 Claude가 따를 절차와 참고 자료 | 개인은 `~/.claude/skills/`, 프로젝트는 `.claude/skills/`, 플러그인은 `<plugin>/skills/` |
| `CLAUDE.md` | 저장소의 빌드·테스트·코딩 규칙과 금지 사항 | 저장소에 커밋해 팀이 함께 사용 |

공식 플러그인 디렉터리의 현재 기준 저장소는 [`anthropics/claude-plugins-official`](https://github.com/anthropics/claude-plugins-official)입니다. `anthropics/claude-code/plugins`에도 예제와 설명이 있지만, 실제 설치 이름과 배포 상태는 공식 마켓플레이스를 우선 확인합니다.

## Anthropic 공식 개발 플러그인

> 공식 자료: [공식 마켓플레이스](https://github.com/anthropics/claude-plugins-official) · [Claude Code 저장소의 플러그인 설명](https://github.com/anthropics/claude-code/tree/main/plugins)

| 구분 | 플러그인 | 하는 일 | 이럴 때는 불필요 |
| --- | --- | --- | --- |
| 코드 리뷰 | [`code-review`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review) | PR을 여러 관점에서 병렬 검토하고 신뢰도가 높은 지적만 정리 | GitHub PR이 아니거나 사람이 이미 같은 기준으로 리뷰할 때 |
| 코드 리뷰 | [`pr-review-toolkit`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit) | 테스트, 오류 처리, 타입 설계, 주석, 품질, 단순화를 골라 검토 | 빠른 전체 검토 한 번이면 충분할 때 |
| 기능 개발 | [`feature-dev`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev) | 코드 탐색, 설계, 구현, 품질 검토를 단계별 agents로 수행 | 파일 한두 개를 고치는 명확한 작업일 때 |
| Git·PR | [`commit-commands`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands) | 커밋, 푸시, PR 생성과 사라진 원격 브랜치 정리를 명령으로 묶음 | 팀의 기존 Git 자동화가 같은 일을 할 때 |
| 보안 | [`security-guidance`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance) | 위험 패턴 경고, 작업 종료 시 diff 리뷰, 커밋 시 agent 리뷰 수행 | 코드가 외부 모델 경로로 전송되면 안 되거나 기존 보안 검사가 충분할 때 |
| 프론트엔드 | [`frontend-design`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design) | 상투적인 결과를 피하도록 시각 방향, 타이포그래피, 동작을 안내 | 디자인 시스템과 완성된 시안이 이미 엄격하게 정해졌을 때 |
| 훅 관리 | [`hookify`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify) | 대화의 요구를 분석해 반복 행동을 막거나 알리는 hook 규칙으로 변환 | 한 번만 필요한 지시이거나 결정적 스크립트로 직접 작성하는 편이 쉬울 때 |
| 플러그인 개발 | [`plugin-dev`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev) | 플러그인 구조, Skills, commands, agents, hooks, MCP 설정의 제작·검증 안내 | 단일 프로젝트 Skill 하나만 작성할 때 |
| SDK 개발 | [`agent-sdk-dev`](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/agent-sdk-dev) | Claude Agent SDK 앱 생성과 TypeScript·Python 구현 검증 | Claude Code 안에서만 작업하고 SDK 앱을 만들지 않을 때 |

### 설치

공식 마켓플레이스는 Claude Code에 기본 제공됩니다. 필요한 것만 하나씩 설치하고 새 세션에서 확인합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugin install code-review@claude-plugins-official` | `code-review` 설치 | GitHub PR 중심의 자동 리뷰가 필요할 때 |
| `/plugin install pr-review-toolkit@claude-plugins-official` | `pr-review-toolkit` 설치 | 리뷰 관점을 골라 깊게 검사할 때 |
| `/plugin install feature-dev@claude-plugins-official` | `feature-dev` 설치 | 큰 기능을 탐색부터 리뷰까지 단계화할 때 |
| `/plugin install commit-commands@claude-plugins-official` | `commit-commands` 설치 | 반복 Git·PR 작업을 줄일 때 |
| `/plugin install security-guidance@claude-plugins-official` | `security-guidance` 설치 | 수정과 커밋 시 보안 검토를 추가할 때 |
| `/plugin install frontend-design@claude-plugins-official` | `frontend-design` 설치 | 시안 없이 프론트엔드 방향을 잡을 때 |
| `/plugin install hookify@claude-plugins-official` | `hookify` 설치 | 반복되는 금지 행동을 hook으로 만들 때 |
| `/plugin install plugin-dev@claude-plugins-official` | `plugin-dev` 설치 | Claude Code 플러그인을 제작할 때 |
| `/plugin install agent-sdk-dev@claude-plugins-official` | `agent-sdk-dev` 설치 | Agent SDK 앱을 새로 만들 때 |
| `/plugin` | 설치됨·검색·활성화 상태 확인 | 설치 직후 또는 플러그인이 보이지 않을 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/code-review` | 현재 PR을 병렬 agents로 검토 | 의미 있는 변경이 있는 PR을 올린 뒤 |
| `/pr-review-toolkit:review-pr all parallel` | 모든 전문 리뷰를 병렬 실행 | 병합 전에 테스트·오류·타입·품질을 함께 볼 때 |
| `/feature-dev <기능 설명>` | 단계형 기능 개발 흐름 시작 | 코드베이스 탐색과 설계가 필요한 기능 |
| `/commit` | 변경을 검토해 커밋 준비 | 로컬 작업을 한 커밋으로 정리할 때 |
| `/commit-push-pr` | 커밋, 푸시, PR 준비를 연속 수행 | diff를 확인한 뒤 PR까지 만들 때 |
| `/hookify <막거나 알릴 행동>` | 대화 요구를 hook 규칙으로 만들기 | 같은 실수가 여러 세션에서 반복될 때 |
| `/hookify:list` | 생성된 hook 규칙 확인 | 자동 동작의 출처를 점검할 때 |
| `/plugin-dev:create-plugin <설명>` | 플러그인 설계·제작·검증 흐름 시작 | commands, agents, Skills를 묶어 배포할 때 |
| `/new-sdk-app` | Agent SDK 프로젝트 생성 안내 시작 | 새 TypeScript·Python agent 앱을 만들 때 |

### 설치 전에 볼 권한과 비용

- `code-review`와 `commit-commands`는 GitHub CLI 인증과 저장소 권한을 사용합니다. 리뷰 게시, 푸시, PR 생성 권한을 분리해 승인하세요.
- `security-guidance`는 pattern hook만 실행하는 도구가 아닙니다. 기본 설정에서 변경 diff와 관련 파일을 설정된 모델 endpoint로 보내며 추가 모델 호출 비용이 발생할 수 있습니다.
- `feature-dev`, `code-review`, `pr-review-toolkit`은 여러 agents를 실행하므로 작은 작업에서는 호출량과 검토 시간이 이득보다 커질 수 있습니다.
- `hookify`가 만든 규칙은 이후 세션에도 자동으로 개입할 수 있습니다. 생성 뒤 규칙 목록과 저장 위치를 검토하세요.
- 공식 마켓플레이스 등재는 모든 포함 파일과 외부 의존성을 Anthropic이 보증한다는 뜻이 아닙니다. 설치 전에 해당 플러그인의 manifest, hooks, MCP 설정을 확인하세요.

## Superpowers

> 공식 자료: [저장소·설치](https://github.com/obra/superpowers) · [Claude Code 공식 Skills 문서](https://code.claude.com/docs/en/skills)

Superpowers는 필요한 Skill을 그때그때 고르는 느슨한 모음보다, 설계 승인부터 브랜치 마무리까지 순서를 강하게 적용하는 개발 방법론에 가깝습니다. 설치 뒤 관련 작업을 감지하면 Skill이 자동으로 개입합니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugin install superpowers@claude-plugins-official` | Anthropic 공식 마켓플레이스에서 Superpowers 설치 | 일반적인 첫 설치 |
| `/plugin marketplace add obra/superpowers-marketplace` | Superpowers 자체 마켓플레이스 등록 | 자체 마켓플레이스 경로를 선택할 때 |
| `/plugin install superpowers@superpowers-marketplace` | 자체 마켓플레이스에서 설치 | 바로 앞 등록 명령을 사용한 경우 |

두 설치 경로를 동시에 사용하지 않습니다. 일반 사용자는 공식 마켓플레이스 경로 하나면 충분합니다.

### 포함된 개발 흐름

| 단계 | Skill | 하는 일 |
| --- | --- | --- |
| 기획 | `brainstorming` | 구현 전에 질문과 대안을 통해 요구사항과 설계를 확정 |
| 격리 | `using-git-worktrees` | 별도 worktree와 브랜치를 만들고 깨끗한 테스트 기준선 확인 |
| 계획 | `writing-plans` | 파일, 구현 단계, 검증 방법을 작은 작업으로 분해 |
| 실행 | `subagent-driven-development` | 작업마다 새 subagent를 배정하고 명세·품질 리뷰 분리 |
| 실행 | `executing-plans` | 현재 세션에서 계획을 묶음 단위로 실행하고 체크포인트 확인 |
| 테스트 | `test-driven-development` | 실패 테스트, 최소 구현, 리팩터링 순서를 강제 |
| 디버깅 | `systematic-debugging` | 추측성 수정을 막고 증거로 근본 원인을 좁힘 |
| 검증 | `verification-before-completion` | 완료 주장 전에 실제 명령과 출력으로 결과 확인 |
| 리뷰 | `requesting-code-review` | 작업 사이에 계획 대비 문제를 심각도별로 검토 |
| 리뷰 대응 | `receiving-code-review` | 받은 지적을 검증하고 필요한 수정만 반영 |
| 마무리 | `finishing-a-development-branch` | 테스트 뒤 merge, PR, 유지, 폐기와 worktree 정리 선택 |

### 설치 후 확인 방법

새 Claude Code 세션에서 작은 기능 요청을 시작했을 때 `brainstorming`이 코드 작성 전에 활성화되는지 확인합니다. 자동 선택이 불분명하면 다음처럼 Skill을 직접 호출해 로딩 여부를 확인합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/superpowers:brainstorming` | 요구사항과 설계 구체화 | 구현 전에 범위가 모호할 때 |
| `/superpowers:systematic-debugging` | 근본 원인 조사 절차 시작 | 테스트 실패나 재현되지 않는 버그가 있을 때 |
| `/superpowers:verification-before-completion` | 완료 전 검증 절차 실행 | 완료·수정 성공을 보고하기 직전 |

### 주의사항

- **작업 방식:** Skills는 권고문이 아니라 따라야 할 workflow로 설계되어 있습니다. 기존 팀 절차와 충돌하는 단계가 있는지 작은 저장소에서 먼저 확인하세요.
- **권한:** worktree 생성, 테스트 실행, subagent 작업, Git 조작이 이어질 수 있습니다. 셸과 저장소 쓰기 권한을 무제한 자동 승인하지 마세요.
- **호출량:** `subagent-driven-development`와 병렬 실행은 모델 호출량을 늘립니다. 작업 수와 검토 단계를 먼저 제한하세요.
- **네트워크:** 선택형 visual companion은 기본적으로 제작자 사이트의 이미지를 불러오며 설치 버전이 함께 전달됩니다. 조직 정책상 불필요한 외부 요청을 막아야 하면 `SUPERPOWERS_DISABLE_TELEMETRY` 또는 Claude Code의 비필수 트래픽 차단 설정을 사용하세요.

## Skill만 직접 둘 때

플러그인 전체가 필요하지 않고 팀 고유 절차 하나만 필요하면 Skill 폴더가 더 단순합니다.

| 범위 | 경로 | 언제 쓰나 |
| --- | --- | --- |
| 개인 | `~/.claude/skills/<skill-name>/SKILL.md` | 이 컴퓨터의 모든 로컬 프로젝트에서 사용할 때 |
| 프로젝트 | `.claude/skills/<skill-name>/SKILL.md` | 저장소에 커밋해 팀과 공유할 때 |
| 하위 디렉터리 | `<subdir>/.claude/skills/<skill-name>/SKILL.md` | 모노레포의 특정 패키지에만 적용할 때 |
| 플러그인 | `<plugin>/skills/<skill-name>/SKILL.md` | commands, agents, hooks와 함께 배포할 때 |

개인 경로의 Skill은 로컬 Claude Code에는 로드되지만 Cowork와 cloud session은 로컬 `~/.claude/skills/`를 읽지 않습니다. cloud session에도 필요하면 프로젝트 Skill을 저장소에 커밋하거나 계정에 활성화된 동기화 Skill을 사용합니다.

## 추천 조합

| 상황 | 먼저 설치할 것 | 이유 |
| --- | --- | --- |
| 개발 절차를 처음 잡음 | `superpowers` | 설계, TDD, 디버깅, 검증 순서를 하나로 제공 |
| 기존 팀 절차는 있고 PR 리뷰만 보강 | `code-review` 또는 `pr-review-toolkit` 중 하나 | workflow 전체를 바꾸지 않고 리뷰 단계만 추가 |
| 큰 기능을 공식 도구만으로 진행 | `feature-dev` + `code-review` | 탐색·설계·구현과 최종 PR 리뷰의 역할을 분리 |
| 보안 민감 코드 | `security-guidance` + 기존 SAST·리뷰 | 작업 중 보조 검토를 추가하되 기존 보안 검사를 대체하지 않음 |
| 프론트엔드 구현 | `frontend-design` + [Playwright CLI Skills](./claude-code.md#playwright-cli--skills) | 디자인 방향과 실제 브라우저 검증을 분리 |
| 플러그인 제작 | `plugin-dev` | 구조 설계와 component 검증 자료를 함께 제공 |
| Agent SDK 앱 제작 | `agent-sdk-dev` | Claude Code 확장이 아니라 별도 agent 앱 개발에 초점 |

처음부터 `feature-dev`와 Superpowers를 함께 켜면 둘 다 기획·설계·구현 순서를 주도할 수 있습니다. 하나로 팀 흐름을 먼저 정착시킨 뒤 부족한 단계만 추가하는 편이 판단하기 쉽습니다. `commit-commands`도 편리하지만, 자동 푸시와 PR 생성보다 diff 확인과 브랜치 정책이 먼저입니다.

<div className="guide-meta">
**최종 확인일:** 2026-09-28<br />
**기준 버전:** Claude Code 공식 Plugins·Skills 문서 최신판 · `claude-plugins-official` 기본 브랜치 · Superpowers 기본 브랜치
</div>
