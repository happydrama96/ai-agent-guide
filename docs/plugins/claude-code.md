---
title: Claude Code 플러그인
description: Claude Code에서 쓸 만한 플러그인과 Skills 3개
sidebar_position: 2
---

# Claude Code 플러그인

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 공식 문서를 우선 확인하세요.  
[oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) · [Playwright CLI Skills](https://playwright.dev/agent-cli/skills) · [Context7 CLI + Skills](https://github.com/upstash/context7#installation)
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| oh-my-claudecode | 계획·구현·검증을 역할별 에이전트와 반복 실행 흐름으로 묶는다. | 보통 | 높음 | 활발 | 2026-08-26 |
| Playwright CLI + Skills | Claude Code가 실제 브라우저를 조작해 웹 동작을 확인하게 한다. | 보통 | 높음 | 활발 | 2026-08-26 |
| Context7 CLI + Skills | 라이브러리의 최신 문서와 예제를 CLI로 찾아 컨텍스트에 넣는다. | 쉬움 | 높음 | 활발 | 2026-08-26 |

세 도구는 서로 대체 관계가 아닙니다. 큰 작업을 나누는 도구, 결과를 브라우저에서 검증하는 도구, 구현 전에 최신 API 문서를 찾는 도구로 역할이 다릅니다.

## oh-my-claudecode

> **메타**  
> 최초 공개 : 2026-01  
> 개발 주체 : 서드파티(개인)  
> 활성도 : 활발 — 마지막 저장소 활동 2026-08-24  
> 최종 확인 : 2026-08-26

계획, 병렬 실행, 검증·수정 반복을 Claude Code 안의 명령과 역할별 에이전트로 묶는 오케스트레이션 플러그인입니다.

> 공식 자료: [저장소·설치](https://github.com/Yeachan-Heo/oh-my-claudecode) · [보안 설정](https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/SECURITY.md) · [변경 기록](https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/CHANGELOG.md)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

여러 단계가 얽힌 작업에서 계획, 구현, 테스트, 재수정을 별도 흐름으로 운영할 수 있습니다. 공식 저장소는 Team을 역할별 병렬 실행 흐름으로, Autopilot과 Execute를 완료 조건까지 반복하는 흐름으로 설명합니다.

파일 한두 개를 고치거나 Claude Code 기본 에이전트만으로 충분한 작업에는 불필요합니다. 명령과 상태, 훅, 서브에이전트가 추가되므로 단순 작업에서는 운영 복잡도와 모델 사용량만 늘 수 있습니다.

### 설치

Claude Code 세션에서 다음 두 명령을 **한 줄씩 따로** 실행합니다. 공식 저장소가 일반 사용자에게 권장하는 마켓플레이스 설치 경로입니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode` | OMC 플러그인 마켓플레이스 등록 | 처음 설치할 때 |
| `/plugin install oh-my-claudecode` | OMC 플러그인 설치 | 마켓플레이스 등록 직후 |
| `/omc-setup` | Claude Code용 OMC 설정 생성 | 설치를 마무리할 때 |

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/omc-doctor` | 설치 상태와 알려진 구성 문제 진단 | 설치 직후 또는 업데이트 후 |
| `/omc-help` | 사용할 수 있는 OMC 기능 확인 | 명령이 로드됐는지 확인할 때 |

`/omc-doctor`와 `/omc-help`가 인식되고 진단 오류가 없으면 기본 설치가 끝난 것입니다. 외부 모델이나 원격 도구 연결은 별도 선택 사항입니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/team 3:executor "TypeScript 오류를 모두 수정하고 검증해줘"` | 역할이 같은 실행 에이전트로 작업 분배 | 독립적으로 나눌 수 있는 수정이 여러 개일 때 |
| `/autopilot "사용자 설정 API를 구현하고 테스트해줘"` | 계획부터 구현·검증까지 자동 진행 | 요구사항과 완료 조건이 명확한 기능 작업 |
| `/execute "승인된 계획대로 구현하고 테스트를 통과시켜줘"` | 계획을 실행하고 검증·수정 반복 | 이미 합의한 계획을 끝까지 수행할 때 |
| `/deep-interview "결제 취소 기능 요구사항을 정리해줘"` | 질문을 통해 모호한 요구사항 구체화 | 구현 전에 범위와 예외를 정해야 할 때 |
| `/oh-my-claudecode:cancel` | 실행 중인 OMC 흐름 중단과 상태 정리 | 범위가 잘못됐거나 비용이 커질 때 |

### 주의사항

- **권한:** 여러 에이전트가 같은 파일 시스템과 Claude Code 권한을 사용합니다. 저장소 전체 쓰기나 셸 명령 자동 승인을 기본값으로 두지 마세요.
- **사내망·데이터 전송:** 외부 LLM 작업자와 원격 MCP를 선택하면 코드나 질의가 해당 서비스로 전달될 수 있습니다. 사내 환경에서는 공식 보안 문서의 `OMC_SECURITY=strict`로 원격 MCP, 외부 LLM, 자동 업데이트를 끄는 구성을 먼저 검토하세요.
- **비용:** 병렬 에이전트와 반복 실행은 단일 Claude Code 세션보다 모델 호출을 늘릴 수 있습니다. 작은 작업은 기본 에이전트를 사용하고 완료 조건과 최대 범위를 먼저 적으세요.
- **실행 환경:** 터미널의 `omc team`은 별도 CLI와 tmux 작업자를 쓰는 다른 실행 경로입니다. Claude Code 세션 안의 `/team`과 혼동하지 마세요.

## Playwright CLI + Skills

> **메타**  
> 최초 공개 : 2020-06  
> 개발 주체 : 서드파티(기업)  
> 활성도 : 활발 — 마지막 저장소 활동 2026-08-24  
> 최종 확인 : 2026-08-26

Claude Code가 브라우저를 열고 입력·클릭·스크린샷·테스트 생성을 수행하도록 CLI 사용법을 Skills로 제공하는 브라우저 자동화 도구입니다.

> 공식 자료: [Skills](https://playwright.dev/agent-cli/skills) · [저장소·설치](https://github.com/microsoft/playwright-cli) · [명령어 레퍼런스](https://playwright.dev/agent-cli/quick-start)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

코드 수정 뒤 실제 페이지의 탐색, 폼 입력, 콘솔 상태, 네트워크 동작을 브라우저에서 확인할 수 있습니다. Microsoft는 일반적인 코딩 에이전트 작업에서 CLI + Skills가 큰 MCP 도구 스키마를 컨텍스트에 넣지 않아 더 간결한 경로라고 설명합니다.

웹 화면이 없는 백엔드·배치 작업이나 단위 테스트만으로 충분히 검증되는 변경에는 불필요합니다. 이미 팀에서 Playwright 테스트와 실행 절차를 안정적으로 운영한다면 기존 테스트 명령을 Claude Code에 알려주는 것으로 충분할 수 있습니다.

### 설치

Node.js 18 이상이 필요합니다. 공식 저장소의 CLI 설치 뒤 Skills 설치 명령을 실행합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `npm install -g @playwright/cli@latest` | Playwright CLI 전역 설치 | 새 개발 환경에 처음 설치할 때 |
| `playwright-cli install --skills` | 코딩 에이전트가 참고할 로컬 Skills 설치 | CLI 설치 직후 Claude Code와 연결할 때 |

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `playwright-cli --help` | CLI 실행과 사용 가능한 명령 확인 | 설치 직후 |
| `playwright-cli open https://example.com --headed` | 눈에 보이는 브라우저로 테스트 페이지 열기 | 브라우저 실행까지 확인할 때 |
| `playwright-cli close-all` | 열린 브라우저 세션 종료 | 확인을 마칠 때 |

테스트 URL이 열리고 종료 명령이 정상 동작하면 CLI 설치가 끝난 것입니다. Claude Code에는 `playwright-cli --help`를 확인해 테스트하라고 요청해 Skill 탐색까지 확인합니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `playwright-cli open <URL> --headed` | 브라우저를 보이는 상태로 열기 | 에이전트의 조작 과정을 직접 확인할 때 |
| `playwright-cli snapshot` | 현재 페이지의 접근성 기반 상태 확인 | 클릭할 요소와 화면 상태를 파악할 때 |
| `playwright-cli screenshot` | 현재 페이지 캡처 저장 | 성공·실패 상태를 증거로 남길 때 |
| `playwright-cli list` | 실행 중인 브라우저 세션 목록 확인 | 여러 작업이 동시에 브라우저를 쓸 때 |
| `playwright-cli show` | 실행 중인 세션 대시보드 열기 | 백그라운드 자동화를 관찰할 때 |

### 주의사항

- **권한:** 브라우저 자동화는 클릭, 입력, 제출을 실제로 수행합니다. 운영 환경에서는 삭제·결제·발송 권한이 없는 테스트 계정을 사용하세요.
- **사내망:** 브라우저가 접근할 수 없는 내부 주소는 에이전트도 확인할 수 없습니다. 프록시, 사설 인증서, 테스트 환경 접근 정책을 먼저 맞춰야 합니다.
- **데이터 전송:** 입력한 값은 대상 웹사이트로 전송됩니다. 비밀번호, 고객 데이터, 운영 토큰을 프롬프트나 테스트 값에 넣지 마세요.
- **로컬 데이터:** 세션 동안 쿠키와 저장소 상태가 브라우저 프로필에 유지됩니다. `--persistent`를 쓰면 재시작 뒤에도 프로필이 디스크에 남으므로 공유 PC에서는 사용 범위를 제한하세요.

## Context7 CLI + Skills

> **메타**  
> 최초 공개 : 2025-03  
> 개발 주체 : 서드파티(기업)  
> 활성도 : 활발 — 마지막 저장소 활동 2026-08-24  
> 최종 확인 : 2026-08-26

라이브러리 이름과 질문으로 최신 공식 문서·예제를 조회하고 Claude Code가 구현 컨텍스트로 사용하게 하는 문서 검색 도구입니다.

> 공식 자료: [저장소·설치](https://github.com/upstash/context7#installation) · [CLI + Skills 설정](https://github.com/upstash/context7/blob/master/skills/context7-cli/references/setup.md) · [개인정보 처리방침](https://upstash.com/trust/privacy.pdf)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

모델 지식보다 최근에 바뀐 라이브러리 API, 설정법, 코드 예제가 필요한 작업에 사용합니다. CLI + Skills 모드는 `find-docs` Skill이 `ctx7 library`와 `ctx7 docs`를 호출하도록 안내하며 별도 MCP 서버가 필요하지 않습니다.

저장소 안에 필요한 문서가 이미 있고 외부 조회가 금지된 환경에는 불필요합니다. 표준 라이브러리나 변경 가능성이 낮은 API를 단순 조회하는 작업에서도 추가 인증과 외부 요청의 이점이 작습니다.

### 설치

Node.js 18 이상이 필요합니다. 대화형 선택에서 MCP를 고르지 않도록 CLI + Skills와 Claude Code 대상을 명시합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `npx ctx7 setup --cli --claude` | Claude Code 사용자 경로에 CLI용 `find-docs` Skill 설치 | 처음 연결할 때 |
| `npx ctx7 setup --cli --claude --project` | 현재 프로젝트 범위에 Skill 설치 | 팀 저장소에서 설정을 함께 관리할 때 |

설정 중 브라우저 인증이 열릴 수 있습니다. 기존 API 키를 쓰는 조직은 공식 설정 문서의 `--api-key` 옵션과 비밀 관리 정책을 함께 확인하세요.

### 설치 후 확인 방법

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `ctx7 library mongodb "aggregation"` | 라이브러리 검색과 인증 상태 확인 | 설치 직후 |
| `ctx7 docs /mongodb/docs "aggregation"` | 선택한 라이브러리 문서 조회 확인 | 라이브러리 ID를 찾은 뒤 |

사용자 범위 설치라면 `~/.claude/skills` 아래에 `find-docs` Skill이 생성됐는지도 확인합니다. 첫 명령에서 정확한 라이브러리 ID를 고른 뒤 두 번째 명령으로 문서가 반환되면 연결이 끝난 것입니다.

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `ctx7 library <이름> <질문>` | 이름으로 라이브러리와 ID 검색 | 정확한 Context7 라이브러리 ID를 모를 때 |
| `ctx7 docs <라이브러리-ID> <질문>` | 지정한 라이브러리의 관련 문서 조회 | 구현 전에 최신 API와 예제를 확인할 때 |
| `npx ctx7 setup --cli --claude --project` | 프로젝트 범위 Skill 다시 구성 | 저장소별 설정을 추가하거나 갱신할 때 |
| `npx ctx7 remove` | 생성한 Context7 설정 제거 | 더 이상 사용하지 않거나 설치를 되돌릴 때 |

### 주의사항

- **데이터 전송:** 라이브러리 이름과 질문이 Context7 서비스로 전송됩니다. 사내 코드, 고객 정보, 비밀 값은 질문에 포함하지 마세요.
- **사내망:** 외부 도메인 접근과 브라우저 인증이 차단된 환경에서는 동작하지 않을 수 있습니다. 조직의 프록시와 외부 SaaS 허용 정책을 먼저 확인하세요.
- **비용·제한:** API 키 없이도 설치 흐름을 시작할 수 있지만, 공식 문서는 더 높은 요청 한도를 위해 API 키를 권장합니다. 구체적인 한도와 요금은 설치 전에 공식 페이지에서 확인하세요.
- **범위:** 이 문서는 MCP 설치 경로를 다루지 않습니다. 설정 명령에는 `--cli`를 유지하고, 생성될 파일 경로를 확인한 뒤 승인하세요.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** 각 공식 저장소 기본 브랜치 · Claude Code 플러그인/Skills 최신 설치 문서
</div>
