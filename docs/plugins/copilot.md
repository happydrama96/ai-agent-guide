---
title: GitHub Copilot 플러그인
description: GitHub Copilot에서 쓸 만한 플러그인 3개
sidebar_position: 5
---

# GitHub Copilot 플러그인

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 공식 문서를 우선 확인하세요.  
[AI Team Orchestration](https://github.com/github/awesome-copilot/tree/main/plugins/ai-team-orchestration) · [Context Engineering](https://github.com/github/awesome-copilot/tree/main/plugins/context-engineering) · [Doublecheck](https://github.com/github/awesome-copilot/tree/main/plugins/doublecheck)
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| AI Team Orchestration | 계획·개발·QA 역할을 분리해 큰 작업을 단계별로 운영한다. | 쉬움 | 높음 | 활발 | 2026-08-26 |
| Context Engineering | 작업에 필요한 파일과 의존성을 먼저 찾아 컨텍스트와 변경 순서를 정리한다. | 쉬움 | 높음 | 활발 | 2026-08-26 |
| Doublecheck | AI 답변의 검증 가능한 주장을 추출하고 출처와 환각 위험을 점검한다. | 쉬움 | 높음 | 활발 | 2026-08-26 |

세 후보는 GitHub가 기본 등록하는 `awesome-copilot` 커뮤니티 마켓플레이스에 있습니다. agents와 Skills로 구성되며 독립 MCP 서버 설치가 필요하지 않습니다.

## AI Team Orchestration

> **메타**  
> 최초 공개 : 2026-04  
> 개발 주체 : 서드파티(개인)  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-06  
> 최종 확인 : 2026-08-26

Producer, Dev Team, QA 역할을 분리하고 가벼운 계획부터 독립 검증까지 작업 크기에 맞춰 적용하는 멀티 에이전트 플러그인입니다.

> 공식 자료: [플러그인 저장소](https://github.com/github/awesome-copilot/tree/main/plugins/ai-team-orchestration) · [manifest](https://github.com/github/awesome-copilot/blob/main/plugins/ai-team-orchestration/plugin.json) · [Copilot 플러그인 설치](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

한 에이전트가 계획, 구현, 승인 역할을 모두 맡아 자기 결과를 그대로 통과시키는 문제를 줄입니다. 공식 README는 Producer가 범위와 조정을, Dev Team이 구현과 자체 검증을, 선택형 QA가 독립 행동 검증을 맡도록 역할 경계를 둡니다.

작은 수정, 담당자가 한 명뿐인 단순 탐색, 별도의 PR 리뷰와 QA 절차가 이미 강제되는 저장소에는 불필요합니다. 플러그인도 저장소 보호 규칙이나 사람의 병합 승인을 대신하지 않습니다.

### 설치

`awesome-copilot`은 Copilot CLI의 기본 마켓플레이스이므로 별도 등록 없이 설치합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin install ai-team-orchestration@awesome-copilot` | AI Team Orchestration 설치 | 처음 설치할 때 |

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin list` | 설치된 플러그인 목록 확인 | 설치 직후 |
| `@ai-team-producer 작은 문서 변경의 범위와 완료 조건만 정리해줘.` | Producer agent 로딩 확인 | 역할별 agent가 보이는지 시험할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/ai-team-orchestration` | 프로젝트 brief와 작업 계획 형식 적용 | 새 작업의 진행 방식을 잡을 때 |
| `@ai-team-producer <목표>` | 범위, 계획, 조정, 병합 판단 준비 | 구현 전에 완료 조건을 합의할 때 |
| `@ai-team-dev <구현 요청>` | 구현, 테스트, 자체 리뷰, PR 준비 | 계획이 승인된 작업을 수행할 때 |
| `@ai-team-qa <검증 요청>` | 수락 조건에 대한 독립 행동 검증 | 위험한 변경이나 회귀 가능성을 확인할 때 |

### 주의사항

- **권한:** agents는 별도 도구 제한을 고정하지 않고 사용자가 활성화한 built-in·확장 도구와 선택 모델을 상속합니다. 설치 전 현재 Copilot 권한을 먼저 좁히세요.
- **Git 작업:** Dev agent는 PR을 준비할 수 있지만 병합 권한은 맡기지 않도록 공식 역할 경계를 유지하세요.
- **비용:** 역할별 agent를 모두 호출하면 단일 대화보다 모델 실행이 늘어납니다. QA는 위험하거나 큰 변경에만 선택적으로 사용하세요.
- **데이터 전송:** 외부 전송 범위는 상속한 도구에 따라 달라집니다. 플러그인 자체에 MCP가 없어도 사용자가 켜 둔 connector나 CLI가 있으면 해당 서비스 정책이 적용됩니다.

## Context Engineering

> **메타**  
> 최초 공개 : 2026-02  
> 개발 주체 : 서드파티(개인)  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-06  
> 최종 확인 : 2026-08-26

작업에 관련된 파일, 의존성, 변경 순서, 되돌리기 지점을 구현 전에 정리하도록 돕는 context planning 플러그인입니다.

> 공식 자료: [플러그인 저장소](https://github.com/github/awesome-copilot/tree/main/plugins/context-engineering) · [manifest](https://github.com/github/awesome-copilot/blob/main/plugins/context-engineering/plugin.json) · [GitHub Copilot Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

Copilot이 일부 파일만 보고 다중 파일 변경을 시작해 호출 관계나 테스트를 빠뜨리는 문제를 줄입니다. context map, 필요한 컨텍스트 질문, refactor plan Skills와 `context-architect` agent가 포함됩니다.

수정 위치가 명확한 한 줄 변경, 관련 파일이 거의 없는 작은 프로젝트, 이미 정확한 변경 계획과 의존성 지도가 있는 작업에는 불필요합니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin install context-engineering@awesome-copilot` | Context Engineering 설치 | 처음 설치할 때 |

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin list` | 설치 상태 확인 | 설치 직후 |
| `/context-engineering:what-context-needed` | 현재 질문에 필요한 파일 목록 요청 | Skill 로딩을 확인할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/context-engineering:context-map` | 작업과 관련된 파일·의존성 지도 생성 | 구현 전에 영향 범위를 찾을 때 |
| `/context-engineering:what-context-needed` | 정확한 답에 필요한 추가 파일 질문 | 답변이 일반적이거나 근거가 부족할 때 |
| `/context-engineering:refactor-plan` | 다중 파일 리팩터링 순서와 rollback 계획 작성 | 구조 변경을 시작하기 전 |
| `@context-architect <변경 목표>` | 컨텍스트와 의존성을 중심으로 변경 계획 수립 | 여러 모듈이 연결된 작업을 분석할 때 |

### 주의사항

- **권한:** 기본 구성은 agents와 Skills이며 별도 MCP 서버를 포함하지 않습니다. 다만 `context-architect`가 사용하는 실제 파일·셸 권한은 현재 Copilot 세션 설정을 따릅니다.
- **데이터 범위:** context map에는 내부 파일명과 구조가 포함될 수 있습니다. 결과를 이슈나 외부 문서에 복사하기 전에 민감한 경로를 확인하세요.
- **정확성:** 파일 지도가 완전하다는 보장은 없습니다. 언어별 빌드 도구, 동적 로딩, 생성 코드는 테스트와 검색 명령으로 별도 검증하세요.
- **대체 가능성:** 작은 저장소에서는 Copilot에게 관련 파일을 먼저 나열하라고 직접 요청하는 것으로 충분할 수 있습니다.

## Doublecheck

> **메타**  
> 최초 공개 : 2026-03  
> 개발 주체 : 서드파티(개인)  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-06  
> 최종 확인 : 2026-08-26

AI가 생성한 글에서 검증 가능한 주장을 추출하고 웹 출처 확인과 적대적 재검토를 거쳐 사람이 확인할 보고서를 만드는 플러그인입니다.

> 공식 자료: [플러그인 저장소](https://github.com/github/awesome-copilot/tree/main/plugins/doublecheck) · [manifest](https://github.com/github/awesome-copilot/blob/main/plugins/doublecheck/plugin.json) · [Copilot 플러그인 관리](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

존재하지 않는 인용, 근거 없는 통계, 날짜 혼동을 그대로 공유하는 위험을 줄입니다. 공식 README는 self-audit, source verification, adversarial review의 세 단계와 주장별 판정 결과를 제공합니다. 이 도구는 진실을 보장하지 않고 사람이 확인해야 할 항목을 구조화합니다.

창작물, 주관적 문장, 코드 리뷰처럼 사실 주장 검증이 핵심이 아닌 작업에는 불필요합니다. 법률·의료·재무 판단에서는 전문가 검토를 대신할 수 없습니다.

### 설치

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin install doublecheck@awesome-copilot` | Doublecheck 설치 | 처음 설치할 때 |

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot plugin list` | 설치 상태 확인 | 설치 직후 |
| `use doublecheck to verify: 서울은 대한민국의 수도다.` | 한 문장 검증 보고서 생성 | Skill과 웹 검색 동작을 시험할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `use doublecheck` | 현재 대화에서 지속 검증 모드 활성화 | 사실 확인이 계속 필요한 작업 세션 |
| `turn off doublecheck` | 지속 검증 모드 종료 | 검증이 필요 없는 작업으로 전환할 때 |
| `use doublecheck to verify: <검증할 내용>` | 지정한 내용만 전체 검증 | 공유 전 특정 문서나 답변을 확인할 때 |
| `@doublecheck <검증할 내용>` | 전용 agent와 대화형 검증 시작 | 판정 근거를 추가로 파고들 때 |

### 주의사항

- **데이터 전송:** source verification 단계는 웹 검색을 사용합니다. 검증할 원문에 사내 비밀, 고객 정보, 비공개 계약 내용을 그대로 넣지 마세요.
- **정확성:** `VERIFIED`는 지지하는 출처를 찾았다는 뜻이지 사실이 확정됐다는 뜻이 아닙니다. 출처의 날짜, 권위, 문맥을 사람이 다시 확인하세요.
- **비용·시간:** 긴 문서의 모든 주장을 추출하고 여러 검색을 수행하면 모델 호출과 처리 시간이 늘어납니다. 공유 위험이 큰 문서나 핵심 주장에 우선 사용하세요.
- **권한:** 플러그인 자체는 agents와 Skills로 구성되지만 웹 검색 도구의 가용성과 정책은 현재 Copilot 환경을 따릅니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** GitHub Copilot 공식 플러그인 문서 · awesome-copilot 기본 브랜치
</div>
