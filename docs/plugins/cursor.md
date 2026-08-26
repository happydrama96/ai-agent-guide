---
title: Cursor 플러그인
description: Cursor에서 쓸 만한 공식 플러그인 3개
sidebar_position: 3
---

# Cursor 플러그인

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 공식 문서를 우선 확인하세요.  
[Cursor Team Kit](https://cursor.com/marketplace/cursor/cursor-team-kit) · [Orchestrate](https://cursor.com/marketplace/cursor/orchestrate) · [Continual Learning](https://cursor.com/marketplace/cursor/continual-learning)
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| Cursor Team Kit | CI, 리뷰, 검증, 배포 준비에 필요한 반복 작업을 Skills로 묶는다. | 쉬움 | 높음 | 활발 | 2026-08-26 |
| Orchestrate | 큰 작업을 Cursor Cloud Agent 여러 개로 나누고 결과를 합친다. | 보통 | 조건부 | 활발 | 2026-08-26 |
| Continual Learning | 대화에서 반복되는 선호와 프로젝트 사실을 골라 `AGENTS.md`에 반영한다. | 쉬움 | 조건부 | 유지보수만 | 2026-08-26 |

세 후보는 Cursor가 직접 만들고 검증한 마켓플레이스 플러그인입니다. 별도 MCP 서버를 설치하지 않아도 되지만, Orchestrate는 Cursor 클라우드와 API 키를 사용하고 Continual Learning은 hook으로 파일을 자동 갱신합니다.

## Cursor Team Kit

> **메타**  
> 최초 공개 : 2026-02  
> 개발 주체 : 공식  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-11  
> 최종 확인 : 2026-08-26

Cursor 내부 개발 흐름에서 쓰는 CI 확인, 코드 리뷰, 테스트, PR 정리, 로컬 UI·CLI 검증 절차를 재사용 가능한 Skills와 subagents로 묶은 플러그인입니다.

> 공식 자료: [마켓플레이스](https://cursor.com/marketplace/cursor/cursor-team-kit) · [저장소](https://github.com/cursor/plugins/tree/main/cursor-team-kit) · [Cursor 플러그인 관리](https://cursor.com/docs/plugins)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

작업할 때마다 검증 명령을 다시 설명하거나 PR 리뷰 절차를 새로 지시하는 문제를 줄입니다. 공식 설명상 서드파티 서비스 연동 없이 사용할 수 있으며, 컴파일 오류 확인부터 CI 수정, 리뷰 가능한 PR 정리까지 여러 개발 흐름을 포함합니다.

팀의 빌드·리뷰 절차가 이미 저장소 스크립트와 `AGENTS.md`에 잘 정리되어 있고 Cursor가 이를 안정적으로 따르는 프로젝트에는 불필요합니다. 모든 Skill을 한꺼번에 쓰기보다 현재 팀 절차와 겹치지 않는 항목만 활성화하는 편이 안전합니다.

### 설치

Cursor Agent 대화창에서 공식 마켓플레이스 명령을 실행합니다. 또는 **Customize → Plugins → Cursor Team Kit → Install → 사용자 또는 프로젝트 범위** 경로를 사용합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/add-plugin cursor-team-kit` | Cursor Team Kit 설치 화면 열기 | 처음 설치할 때 |

### 설치 후 확인 방법

**Customize → Plugins → Installed → Cursor Team Kit**에서 설치 범위와 활성화된 Skills를 확인합니다. Agent 대화창에서 `/verify-this`가 제안되면 Skill 로딩까지 끝난 것입니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/verify-this` | 주장과 변경 결과를 증거로 검증 | 설치 확인용으로 작은 변경을 점검할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/verify-this` | 기준 상태와 변경 후 결과를 비교해 판정 | 수정이 실제 문제를 해결했는지 확인할 때 |
| `/fix-ci` | 실패한 CI 작업과 로그를 찾아 수정 | 현재 브랜치의 검사 실패를 해결할 때 |
| `/review-and-ship` | 구조화된 리뷰 뒤 커밋과 PR 준비 | 구현을 리뷰 가능한 상태로 정리할 때 |
| `/control-ui` | 로컬 브라우저·CDP 검증 도구 구성 | 웹 또는 Electron UI를 재현·검증할 때 |
| `/make-pr-easy-to-review` | PR 기록과 설명을 리뷰하기 쉽게 정리 | 커밋과 변경 설명이 지나치게 복잡할 때 |

### 주의사항

- **권한:** 일부 Skills는 빌드·테스트·Git·GitHub CLI를 실행하고 커밋이나 PR을 준비합니다. 푸시와 PR 생성은 결과 diff를 확인한 뒤 승인하세요.
- **사내망:** 플러그인 자체는 서드파티 서비스가 필요 없지만 CI와 PR 기능은 저장소 호스트 접근 및 기존 CLI 인증에 영향을 받습니다.
- **데이터 전송:** 코드와 실행 결과는 활성 Cursor 모델 환경의 처리 범위를 따릅니다. GitHub 관련 Skill을 쓰면 선택한 저장소의 로그와 변경 정보가 GitHub API로 오갈 수 있습니다.
- **대체 가능성:** 팀 고유 명령이 이미 문서화되어 있으면 범용 Skill이 잘못된 스크립트를 고를 수 있습니다. 저장소 지침이 플러그인보다 우선하도록 유지하세요.

## Orchestrate

> **메타**  
> 최초 공개 : 2026-05  
> 개발 주체 : 공식  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-11  
> 최종 확인 : 2026-08-26

큰 목표를 planner, worker, verifier가 맡을 하위 작업으로 나누고 Cursor Cloud Agent 실행 결과를 Git과 로컬 인계 파일로 합치는 오케스트레이션 Skill입니다.

> 공식 자료: [마켓플레이스](https://cursor.com/marketplace/cursor/orchestrate) · [저장소·사전 요구사항](https://github.com/cursor/plugins/tree/main/orchestrate) · [Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

독립적인 하위 작업이 여럿인 대규모 변경에서 계획과 실행을 병렬화하고, 각 작업자의 결과를 구조화된 인계 형태로 모읍니다. 공식 마켓플레이스는 사용자가 `/orchestrate`를 명시적으로 입력한 경우에만 실행하도록 설계했다고 밝힙니다.

한 에이전트가 짧게 끝낼 수 있는 수정, 강하게 결합된 파일을 동시에 건드리는 작업, 코드가 조직 밖 클라우드 환경으로 나갈 수 없는 저장소에는 불필요합니다.

### 설치

Cursor Agent 대화창에서 설치한 뒤 공식 저장소의 런타임 요구사항을 준비합니다. `bun`과 Cursor API 키가 필요하며 Slack 연결은 선택 사항입니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/add-plugin orchestrate` | Orchestrate 설치 화면 열기 | 처음 설치할 때 |
| `cd skills/orchestrate/scripts` | 설치된 플러그인의 실행 스크립트 경로로 이동 | 런타임 의존성을 준비할 때 |
| `bun install` | Orchestrate 스크립트 의존성 설치 | 플러그인 설치 후 한 번 |

API 키는 **Cursor Dashboard → Integrations → User API Keys**에서 발급하고 `CURSOR_API_KEY` 환경 변수로 주입합니다. 키 값을 명령 기록이나 저장소 설정 파일에 직접 적지 마세요.

### 설치 후 확인 방법

**Customize → Plugins → Installed → Orchestrate**에서 설치 상태를 확인하고, 터미널에서 `bun` 실행 여부와 `CURSOR_API_KEY` 주입 여부를 각각 확인합니다. 실제 `/orchestrate` 호출은 Cloud Agent 실행을 만들 수 있으므로 작은 테스트 저장소에서 수행합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `bun --version` | 필수 런타임 실행 확인 | 설치 직후 |
| `/orchestrate "테스트 저장소의 문서 구조를 분석하고 개선 계획만 작성해줘"` | 명시적으로 오케스트레이션 시작 | 권한과 비용을 확인할 작은 시험 실행 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/orchestrate <목표>` | 목표를 하위 작업으로 분해하고 Cloud Agent 실행 | 병렬화 가능한 큰 작업을 시작할 때 |

### 주의사항

- **권한:** Cloud Agent가 저장소를 읽고 작업 브랜치와 Git 상태를 다룹니다. API 키는 사용자 또는 서비스 계정의 허용 범위만 부여하세요.
- **사내망·데이터 전송:** 작업 목표와 저장소 컨텍스트가 Cursor 클라우드 실행으로 전달됩니다. 외부 클라우드 처리가 금지된 코드에는 사용하지 마세요.
- **비용:** 하나의 요청이 planner와 여러 worker·verifier 실행으로 늘어날 수 있습니다. 하위 작업 수와 완료 조건을 좁게 적으세요.
- **설치 난이도:** `bun`과 API 키가 모두 필요합니다. 선택형 Slack 연결은 추가 권한을 요구하므로 기본 설치에서는 생략하세요.
- **충돌:** 같은 파일을 여러 worker가 수정하면 병합 비용이 커집니다. 서로 독립적인 디렉터리나 검증 역할 중심으로 나누세요.

## Continual Learning

> **메타**  
> 최초 공개 : 2026-02  
> 개발 주체 : 공식  
> 활성도 : 유지보수만 — 마지막 플러그인 활동 2026-03-13  
> 최종 확인 : 2026-08-26

대화 기록의 새 변화에서 지속할 만한 사용자 선호와 작업 공간 사실을 추출해 `AGENTS.md`의 짧은 항목으로 갱신하는 플러그인입니다.

> 공식 자료: [마켓플레이스](https://cursor.com/marketplace/cursor/continual-learning) · [저장소·동작 방식](https://github.com/cursor/plugins/tree/main/continual-learning) · [Cursor hooks](https://cursor.com/docs/agent/hooks)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

같은 수정 지침이나 프로젝트 사실을 여러 대화에서 반복하는 문제를 줄입니다. stop hook이 실행 시점을 판단하고, Skill과 전용 subagent가 기존 `AGENTS.md`를 읽은 뒤 변경된 대화 기록만 처리합니다.

팀 지침을 코드 리뷰로만 변경해야 하는 저장소, 대화에서 개인 선호를 추출하면 안 되는 환경, `AGENTS.md`를 이미 중앙에서 생성하는 프로젝트에는 불필요합니다.

### 설치

Cursor Agent 대화창에서 설치합니다. 자동 hook을 포함하므로 사용자 전체보다 시험 프로젝트 범위로 먼저 설치하세요.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/add-plugin continual-learning` | Continual Learning 설치 화면 열기 | 처음 설치할 때 |

### 설치 후 확인 방법

**Customize → Plugins → Installed → Continual Learning**에서 Skill, subagent, stop hook이 표시되는지 확인합니다. 설치 직후에는 기존 `AGENTS.md`를 별도 브랜치에 보관하고 다음 갱신에서 생기는 diff를 검토합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/continual-learning` | 대화 변화에서 학습할 항목을 추출해 갱신 흐름 실행 | 자동 hook을 기다리지 않고 시험할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/continual-learning` | 새 대화 기록을 바탕으로 `AGENTS.md` 갱신 | 반복 지침을 프로젝트 메모리로 남길 때 |

### 주의사항

- **권한:** stop hook과 subagent가 `AGENTS.md` 및 `.cursor/hooks/state/` 아래 상태 파일을 씁니다. 자동 변경을 바로 커밋하지 말고 diff를 검토하세요.
- **데이터 범위:** 대화에서 추출한 선호와 프로젝트 사실이 저장소 파일에 남을 수 있습니다. 개인 정보, 고객명, 내부 URL이 생성되지 않았는지 확인하세요.
- **공유:** `AGENTS.md`를 커밋하면 추출된 내용이 저장소 접근자에게 공유됩니다. 개인 선호와 팀 규칙을 구분하세요.
- **활성도:** 마지막 개별 활동이 3개월을 넘었으므로 `유지보수만`으로 분류했습니다. Cursor 또는 hook 규격 변경 뒤에는 작은 저장소에서 먼저 재검증하세요.
- **대체 가능성:** 명시적인 `AGENTS.md` 리뷰 절차가 있다면 자동 학습보다 사람이 작성한 규칙이 더 예측 가능합니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** Cursor 공식 Marketplace · cursor/plugins 기본 브랜치
</div>
