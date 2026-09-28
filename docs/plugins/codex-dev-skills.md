---
title: Codex 개발 스킬·플러그인 지도
description: Codex의 내장 스킬, 개발용 플러그인, 외부 서비스 연결을 목적별로 고르는 가이드
sidebar_position: 6
---

# Codex 개발 스킬·플러그인 지도

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 [OpenAI 플러그인 공식 문서](https://developers.openai.com/plugins), [공식 Plugins 저장소](https://github.com/openai/plugins), 각 플러그인의 권한 안내를 우선 확인하세요.
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| Superpowers | 설계부터 TDD·디버깅·검증까지 개발 절차를 일관되게 적용한다. | 보통 | 높음 | 활발 | 2026-09-28 |
| GitHub 🔗 | 저장소·PR·이슈·CI를 읽고 권한 범위 안에서 변경 사항을 반영한다. | 보통 | 높음 | 활발 | 2026-09-28 |
| Codex Security 🔗 | 저장소와 diff의 보안 스캔, 조사, 분류, 수정 검증 절차를 제공한다. | 보통 | 높음 | 활발 | 2026-09-28 |
| Build Web Apps | 프론트엔드 구현과 React·shadcn·결제·DB 관련 개발 지침을 묶어 제공한다. | 쉬움 | 조건부 | 활발 | 2026-09-28 |
| OpenAI Developers 🔗 | OpenAI API·Agents SDK·ChatGPT Apps 개발과 API 키 작업을 지원한다. | 보통 | 조건부 | 활발 | 2026-09-28 |

이 페이지는 전수 목록이 아니라 **개발 업무의 시작점을 고르는 지도**입니다. `🔗`는 계정 연결이나 원격 도구가 포함되어 로컬 코드 밖으로 데이터가 전달될 수 있음을 뜻합니다. 실제 전송 범위와 쓰기 권한은 설치 화면과 서비스별 권한 정책에서 다시 확인해야 합니다.

## 먼저 알아둘 구조

[OpenAI Plugins 저장소](https://github.com/openai/plugins)는 플러그인 하나에 Skills, 앱 연결, MCP 서버, agents, commands, hooks를 필요한 만큼 묶을 수 있는 현재 배포 구조를 설명합니다. 반면 기존 [`openai/skills`](https://github.com/openai/skills) 저장소는 deprecated 상태이며, 새 예제와 배포는 Plugins 저장소를 사용하라고 안내합니다.

| 구분 | 무엇이 들어 있나 | 고르는 기준 |
| --- | --- | --- |
| 내장 Skill | Codex에 기본 제공되는 반복 작업 지침 | 별도 서비스 연결 없이 제작·설치·문서 확인 같은 기반 작업이 필요할 때 |
| Skill-only 플러그인 | `SKILL.md`, 스크립트, 참고 자료 | 도구 연결보다 작업 순서와 품질 기준이 필요할 때 |
| 연결형 플러그인 🔗 | Skills와 앱 또는 MCP 연결 | GitHub, Figma, Vercel처럼 실제 외부 데이터 조회·변경이 필요할 때 |
| 복합 플러그인 | Skills, 연결, agents, commands 등을 함께 포함 | 하나의 업무 흐름을 여러 기능으로 묶어 적용할 때 |

`openai/skills`에 남은 예전 설치 예시는 기존 환경을 이해하는 참고 자료로만 보고, 새로 찾을 때는 Codex의 `/plugins`와 [Plugins Directory](https://developers.openai.com/plugins)를 먼저 사용합니다.

## 기본 내장 Skills

> 공식 문서: [Skills 만들기](https://developers.openai.com/plugins/build/skills) · [플러그인 만들기](https://developers.openai.com/plugins/build/plugins)

| Skill | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `skill-creator` | 새 Skill의 범위, 지침, 참고 자료 구조를 만든다. | 반복할 작업 절차를 팀 자산으로 만들 때 |
| `skill-installer` | 제공되는 Skill이나 지정한 저장소 경로의 Skill을 설치한다. | 플러그인 전체가 아니라 특정 Skill만 필요한 기존 환경 |
| `plugin-creator` | manifest와 선택 구성 요소를 포함한 플러그인 뼈대를 만든다. | Skills·연결·명령을 하나의 배포 단위로 묶을 때 |
| `imagegen` | 이미지 생성·편집 작업을 수행한다. | 사진, 목업, 스프라이트 같은 비트맵 결과가 필요할 때 |
| `openai-docs` | OpenAI 공식 문서를 우선 확인해 제품·API 질문을 다룬다. | Codex, ChatGPT, OpenAI API의 최신 동작을 확인할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `$skill-creator <만들 Skill 설명>` | Skill 제작 절차를 시작한다. | 반복 업무를 새 Skill로 만들 때 |
| `$skill-installer <Skill 이름 또는 저장소 경로>` | Skill 설치 절차를 시작한다. | 기존 Skill을 현재 Codex 환경에 추가할 때 |
| `@plugin-creator <만들 플러그인 설명>` | 플러그인 구조와 manifest 생성을 시작한다. | 배포 가능한 플러그인을 만들 때 |
| `/plugins` | 공식 플러그인 검색·설치 화면을 연다. | 새 플러그인을 찾거나 설치 상태를 확인할 때 |

내장 여부는 Codex 배포 형태와 관리 정책에 따라 달라질 수 있습니다. 명령이 인식되지 않으면 현재 설치된 Skills 목록과 조직 관리자의 허용 정책부터 확인합니다.

## Superpowers

> 공식 자료: [OpenAI Plugins 저장소](https://github.com/openai/plugins/tree/main/plugins/superpowers) · [Superpowers 안내](https://github.com/openai/plugins/blob/main/plugins/superpowers/README.md)

> - 최초 공개 : 확인 필요
> - 개발 주체 : 서드파티(기업)
> - 활성도 : 활발 — 2026-09 저장소 활동 확인
> - 최종 확인 : 2026-09-28

### 한 줄 설명

요구사항 정리, 계획, TDD, 디버깅, 검증, 코드 리뷰, 브랜치 마무리를 연결된 개발 절차로 적용합니다.

### 어떤 문제를 푸는가 / 이럴 때는 불필요

복잡한 구현을 시작하자마자 코드를 수정하거나, 완료 검증 없이 끝내는 흐름을 줄이는 데 목적이 있습니다. 공식 저장소에는 `brainstorming`, `writing-plans`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `dispatching-parallel-agents` 같은 Skills가 포함됩니다. 한 파일의 명백한 오탈자 수정처럼 절차 비용이 결과보다 큰 작업에는 불필요할 수 있습니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugins` | 플러그인 검색 화면을 연다. | Codex 앱이나 CLI에서 설치를 시작할 때 |
| `superpowers` | 검색어로 Superpowers를 찾는다. | `/plugins` 화면에서 공식 등록 항목을 고를 때 |

검색 결과에서 `Superpowers`를 선택하고 `Install Plugin`을 실행합니다. 설치 경로가 여러 개 보이면 OpenAI 공식 디렉터리 항목을 우선합니다.

### 설치 후 확인 방법

새 대화에서 구현할 기능의 요구사항을 제시하고, 코드 수정 전에 `brainstorming` 또는 계획 절차가 시작되는지 확인합니다. 설치 직후 기존 대화에서 보이지 않으면 새 대화를 시작합니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `$superpowers:brainstorming` | 요구사항과 설계를 질문으로 구체화한다. | 구현 범위가 모호할 때 |
| `$superpowers:systematic-debugging` | 증거를 모아 근본 원인을 좁힌다. | 재현되지만 원인을 모르는 오류 |
| `$superpowers:verification-before-completion` | 완료 전에 실제 실행 결과를 확인한다. | 수정 완료를 보고하기 직전 |

Skills는 상황을 감지해 자동 적용될 수 있으므로, 실제 설치본에서 노출되는 이름을 우선합니다.

### 주의사항

- 계획 문서, 테스트 실행, worktree, Git 조작, 하위 에이전트 실행이 작업 흐름에 포함될 수 있습니다.
- 팀의 기존 개발 절차와 충돌하지 않는지 작은 저장소에서 먼저 확인합니다.
- 병렬 에이전트와 반복 검증은 모델 사용량과 실행 시간을 늘릴 수 있습니다.

## GitHub 🔗

> 공식 자료: [OpenAI Plugins 저장소](https://github.com/openai/plugins/tree/main/plugins/github) · [Plugins Directory](https://developers.openai.com/plugins)

> - 최초 공개 : 확인 필요
> - 개발 주체 : 공식
> - 활성도 : 활발 — 2026-09 공식 디렉터리 등록 확인
> - 최종 확인 : 2026-09-28

### 한 줄 설명

Codex에서 GitHub 저장소, PR, 이슈, CI 상태를 조회하고 허용된 범위에서 변경 작업까지 이어갑니다.

### 어떤 문제를 푸는가 / 이럴 때는 불필요

브라우저와 터미널을 오가며 PR 맥락, 리뷰 의견, CI 로그를 따로 모으는 일을 줄입니다. 로컬 Git 작업만 하고 원격 PR·이슈·Actions 데이터가 필요하지 않다면 연결할 이유가 적습니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugins` | 플러그인 검색 화면을 연다. | GitHub 플러그인을 설치할 때 |
| `github` | 공식 GitHub 항목을 검색한다. | 같은 이름의 항목을 구분할 때 |

`GitHub`를 설치한 뒤 안내되는 계정 연결을 완료합니다. 조직 저장소는 조직의 OAuth 앱 정책이나 관리자 승인이 추가로 필요할 수 있습니다.

### 설치 후 확인 방법

쓰기 작업 전에 접근 가능한 저장소 목록이나 현재 저장소의 열린 PR을 조회합니다. 비공개 저장소가 예상보다 많이 보이거나 부족하면 GitHub의 승인 범위와 조직 정책을 다시 확인합니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugins` | 설치·연결 상태를 확인한다. | GitHub 기능이 호출되지 않을 때 |
| `@GitHub 현재 저장소의 열린 PR을 요약해줘` | 연결된 GitHub 데이터를 읽어 요약한다. | 읽기 권한을 먼저 시험할 때 |
| `@GitHub 이 PR의 실패한 CI를 조사해줘` | PR과 CI 맥락을 함께 조사한다. | Actions 실패 원인을 좁힐 때 |

### 주의사항

- 저장소 코드, 이슈, PR, CI 로그가 연결을 통해 처리됩니다. 사내 코드 반출 정책을 먼저 확인합니다.
- 쓰기 권한에는 이슈·PR 변경과 변경 사항 게시가 포함될 수 있습니다. 읽기 전용으로 충분하면 최소 권한을 선택합니다.
- GitHub CLI 인증과 플러그인 연결은 별도일 수 있으므로 어느 자격 증명을 사용하는지 확인합니다.

## Codex Security 🔗

> 공식 자료: [Codex Security 문서](https://developers.openai.com/codex/security) · [OpenAI Plugins 저장소](https://github.com/openai/plugins/tree/main/plugins/codex-security)

> - 최초 공개 : 확인 필요
> - 개발 주체 : 공식
> - 활성도 : 활발 — 2026-09 공식 저장소 활동 확인
> - 최종 확인 : 2026-09-28

### 한 줄 설명

저장소 전체 또는 변경 diff에서 보안 문제를 찾고, 기존 findings를 분류하고, 수정과 재검증까지 이어갑니다.

### 어떤 문제를 푸는가 / 이럴 때는 불필요

일반 코드 리뷰와 분리된 보안 관점의 조사·증거 수집·수정 검증 절차가 필요할 때 사용합니다. 정적 분석기나 조직 보안 심사를 대체하는 단일 승인 수단으로 쓰면 안 됩니다. 보안 판단이 필요 없는 문서 편집에는 불필요합니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugins` | 플러그인 검색 화면을 연다. | Codex Security를 설치할 때 |
| `codex security` | 공식 보안 플러그인을 검색한다. | 검색 결과에서 정확한 항목을 고를 때 |

`Codex Security`를 설치하고, 연결 또는 추가 권한 안내가 나오면 스캔 대상과 데이터 처리 정책을 확인한 뒤 진행합니다.

### 설치 후 확인 방법

민감하지 않은 테스트 저장소에서 작은 diff 스캔을 실행하고, 결과가 문제 위치·근거·검증 방법을 포함하는지 확인합니다. 운영 저장소 전체 스캔은 권한과 데이터 전송 범위를 승인받은 뒤 진행합니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@Codex Security 이 저장소를 보안 스캔해줘` | 저장소 범위의 보안 검사를 요청한다. | 릴리스 전 보안 점검 |
| `@Codex Security 현재 diff를 보안 관점에서 검사해줘` | 변경된 코드에 한정해 검사한다. | PR 작성 전 빠른 점검 |
| `@Codex Security 이 finding을 분류하고 수정안을 검증해줘` | 기존 보안 finding의 영향과 수정 결과를 확인한다. | 스캐너 결과를 코드 근거로 재검토할 때 |

### 주의사항

- 소스 코드와 보안 finding은 민감 정보입니다. 조직의 외부 처리 허용 범위를 먼저 확인합니다.
- 스캔 결과는 오탐과 누락 가능성이 있으므로 기존 SAST·DAST·사람의 보안 리뷰와 함께 사용합니다.
- 대규모·반복 스캔은 실행 시간과 사용량을 늘릴 수 있습니다.

## 스택에 따라 하나만 더 고르기

아래는 기본 3개에 모두 더하는 목록이 아닙니다. 현재 업무에서 빠진 한 단계를 채우는 항목만 고릅니다.

| 목적 | 후보 | 확인된 범위 | 불필요한 경우 |
| --- | --- | --- | --- |
| 웹 구현 | [Build Web Apps](https://github.com/openai/plugins/tree/main/plugins/build-web-apps) | 프론트엔드 구현, 테스트·디버깅, React, shadcn, Stripe, Supabase 지침 | 백엔드나 모바일 작업만 할 때 |
| OpenAI API | [OpenAI Developers](https://github.com/openai/plugins/tree/main/plugins/openai-developers) 🔗 | OpenAI API, Agents SDK, ChatGPT Apps, API 키 관련 작업 | OpenAI API를 사용하지 않을 때 |
| 디자인 구현 | [Figma](https://github.com/openai/plugins/tree/main/plugins/figma) 🔗 | 디자인 조회·구현, Code Connect, 디자인 시스템 작업 | Figma가 설계 원본이 아닐 때 |
| 배포 | [Vercel](https://github.com/openai/plugins/tree/main/plugins/vercel) 🔗 | 웹앱과 에이전트 빌드·배포 | 다른 배포 플랫폼을 사용할 때 |
| DB·백엔드 | [Supabase](https://github.com/openai/plugins/tree/main/plugins/supabase) 🔗 | SQL, 스키마, Edge Functions, 로그, 마이그레이션 | Supabase를 사용하지 않을 때 |
| 운영 오류 | [Sentry](https://github.com/openai/plugins/tree/main/plugins/sentry) 🔗 | 운영 이슈와 오류 맥락 조회 | Sentry 프로젝트가 없을 때 |
| 제품 분석 | [PostHog](https://github.com/openai/plugins/tree/main/plugins/posthog) 🔗 | 분석, 기능 플래그, 실험, 오류 데이터 | 제품 데이터 연결이 허용되지 않을 때 |

연결형 플러그인은 설치 후 서비스 로그인이나 OAuth 승인이 필요합니다. 조회뿐 아니라 배포, DB 변경, 기능 플래그 변경처럼 외부 상태를 바꾸는 기능이 포함될 수 있으므로 최소 권한부터 시작합니다.

## 예전 Skills 목록은 어떻게 볼까

`openai/skills`에는 Playwright, GitHub 리뷰 보조, 배포, PDF, 노트북 같은 기존 Skill이 남아 있습니다. 저장소 자체가 deprecated이므로 **현재 추천 플러그인과 같은 표에 섞지 않습니다.** 기존 환경을 유지하거나 새 플러그인에 대응 항목이 있는지 찾는 용도로만 사용합니다.

| 이전 Skill | 하던 일 | 현재 판단 |
| --- | --- | --- |
| [`playwright`](https://github.com/openai/skills/tree/main/skills/.curated/playwright) | 터미널에서 실제 브라우저 자동화 | 기존 설치 참고용. 새 설치 전 `/plugins`에서 대응 플러그인 확인 |
| [`gh-address-comments`](https://github.com/openai/skills/tree/main/skills/.curated/gh-address-comments) | 현재 PR의 리뷰 의견 처리 | GitHub 플러그인과 기능 중복 범위를 먼저 확인 |
| [`gh-fix-ci`](https://github.com/openai/skills/tree/main/skills/.curated/gh-fix-ci) | 실패한 GitHub Actions 조사 | GitHub 플러그인의 CI 조사 기능을 먼저 확인 |
| [`security-best-practices`](https://github.com/openai/skills/tree/main/skills/.curated/security-best-practices) | 언어·프레임워크 보안 리뷰 | Codex Security와 기존 Skill의 범위를 구분 |
| [`jupyter-notebook`](https://github.com/openai/skills/tree/main/skills/.curated/jupyter-notebook) | 노트북 생성·편집 | 기존 설치 참고용. 현재 디렉터리에서 대체 항목 확인 |

`migrate-to-codex`는 2026-09-28 확인 시 공개 Plugins Directory에서 정확히 일치하는 항목을 확인하지 못해 이번 문서에서는 제외했습니다. Claude Code 자산 이전 자체는 [공식 마이그레이션 가이드](https://developers.openai.com/codex/migrate/claude-code)로 확인하고, 같은 이름의 플러그인이 검색될 때만 설치 대상으로 봅니다.

## 처음 고르는 조합

| 상황 | 먼저 고를 것 | 이유 |
| --- | --- | --- |
| 개발 절차를 일관되게 만들고 싶다 | `Superpowers` | 설계·구현·검증 순서를 하나의 흐름으로 묶음 |
| GitHub PR·이슈·CI가 업무의 중심이다 | `Superpowers` + `GitHub` | 로컬 개발 절차와 원격 협업 맥락을 분리해 보완 |
| 보안 민감 코드나 출시 전 점검이 많다 | `Superpowers` + `GitHub` + `Codex Security` | 개발·협업·보안 검증을 각각 담당 |
| 웹 제품을 만든다 | 위 조합에서 필요한 것 + `Build Web Apps` 또는 `Vercel` | 구현 지침과 실제 배포 중 부족한 단계만 추가 |
| OpenAI API 제품을 만든다 | 위 조합에서 필요한 것 + `OpenAI Developers` | API·SDK·키 작업의 공식 맥락 추가 |

처음부터 여러 연결형 플러그인을 모두 켜기보다, `Superpowers`로 작업 절차를 잡고 GitHub나 현재 스택 플러그인을 하나씩 추가하는 편이 권한과 실패 원인을 파악하기 쉽습니다.

<div className="guide-meta">
**최종 확인일:** 2026-09-28<br />
**기준 버전:** OpenAI Plugins Directory·`openai/plugins` 기본 브랜치·`openai/skills` deprecated 안내 기준
</div>
