---
title: ChatGPT 플러그인
description: ChatGPT와 데스크톱 Codex에서 쓸 만한 플러그인 3개
sidebar_position: 4
---

# ChatGPT 플러그인

:::warning 설치 전 확인
여기는 참고용입니다. 설치 전 [OpenAI 공식 플러그인 문서](https://learn.chatgpt.com/docs/plugins)를 우선 확인하세요.  
[Build Web Apps](https://github.com/openai/plugins/tree/main/plugins/build-web-apps) · [Figma](https://github.com/openai/plugins/tree/main/plugins/figma) · [Vercel](https://github.com/openai/plugins/tree/main/plugins/vercel)
:::

| 이름 | 한 줄 설명 | 난이도 | 추천도 | 활성도 | 최종 확인 |
| --- | --- | --- | --- | --- | --- |
| Build Web Apps | 웹 앱 구현·검토·배포 준비 절차를 하나의 개발 Skill 묶음으로 제공한다. | 쉬움 | 높음 | 활발 | 2026-08-26 |
| Figma | 선택한 디자인의 구조, 에셋, variant를 코드 구현 컨텍스트로 가져온다. | 보통 | 높음 | 활발 | 2026-08-26 |
| Vercel | 웹 앱의 preview 배포, 상태 확인, 빌드 로그 점검을 연결한다. | 보통 | 높음 | 활발 | 2026-08-26 |

이 페이지는 ChatGPT의 공용 Plugins Directory에서 설치하고 Chat 또는 Work에서 쓰는 흐름과, ChatGPT 데스크톱 앱의 Codex에서 쓰는 개발 흐름을 함께 다룹니다. IDE 확장에서는 ChatGPT 플러그인을 지원하지 않습니다. 별도 MCP 서버 설정은 다루지 않으며 연결이 필요한 플러그인은 설치 과정의 공식 connector 인증만 사용합니다.

## Build Web Apps

> **메타**  
> 최초 공개 : 2026-03  
> 개발 주체 : 공식  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-06-08  
> 최종 확인 : 2026-08-26

React 기반 웹 앱 구현, UI 검토, 브라우저 확인, 배포 준비에 필요한 지침과 관련 Skills를 묶은 OpenAI 공식 플러그인입니다.

> 공식 자료: [OpenAI 활용 가이드](https://learn.chatgpt.com/use-cases/deploy-app-or-website) · [공식 패키지 저장소](https://github.com/openai/plugins/tree/main/plugins/build-web-apps) · [플러그인 설치](https://learn.chatgpt.com/docs/plugins#install-and-use-a-plugin)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

아이디어, 기존 저장소, 디자인 자료에서 웹 앱을 만들 때 구현과 검증 순서를 반복해서 설명하는 문제를 줄입니다. OpenAI 공식 활용 가이드는 Build Web Apps로 앱을 구현·검토하고 Vercel 플러그인으로 preview를 배포하는 흐름을 안내합니다.

웹 앱이 아닌 문서·분석 작업, 저장소에 이미 구체적인 프론트엔드 규칙과 검증 스크립트가 있는 프로젝트에는 불필요합니다. 특정 프레임워크의 공식 생성기나 팀 템플릿이 필요한 경우에도 해당 도구가 우선입니다.

### 설치

**ChatGPT → Plugins → 검색 → Build Web Apps → 상세 → `+` 설치** 경로를 사용합니다. 설치 뒤에는 새 Chat 또는 Work 대화를 시작합니다.

### 설치 후 확인 방법

**ChatGPT → Plugins → Installed → Build Web Apps**에서 설치 상태를 확인합니다. 새 대화의 입력창에서 `@build-web-apps`가 선택되면 사용할 수 있습니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@build-web-apps 현재 저장소의 빌드 명령과 화면 구조만 분석해줘. 파일은 수정하지 마.` | Skill 호출과 저장소 읽기 확인 | 설치 직후 안전하게 확인할 때 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@build-web-apps 이 요구사항으로 웹 앱을 구현하고 로컬 빌드를 검증해줘.` | 구현부터 로컬 검사까지 진행 | 요구사항과 저장소가 준비됐을 때 |
| `@build-web-apps 기존 디자인 시스템을 재사용해 이 화면을 반응형으로 구현해줘.` | 기존 컴포넌트·토큰을 따르는 UI 구현 | 새 화면을 추가할 때 |
| `@build-web-apps 현재 변경분의 접근성, 반응형 동작, 빌드 오류를 검토해줘.` | 구현 결과 검토 | 배포 전 점검할 때 |

### 주의사항

- **권한:** 플러그인이 파일 수정, 셸 명령, 브라우저 검증을 제안할 수 있습니다. 설치만으로 모든 쓰기·실행 권한을 허용하지 말고 작업별 승인을 유지하세요.
- **데이터 전송:** 저장소 파일과 프롬프트는 현재 ChatGPT·Codex 작업 환경의 데이터 처리 범위를 따릅니다. 고객 데이터와 운영 비밀은 예제 값으로 대체하세요.
- **외부 서비스:** 데이터베이스, 결제, 배포 지침이 포함될 수 있지만 관련 서비스를 실제로 연결하거나 변경하는 것은 별도 권한과 인증이 필요한 작업입니다.
- **비용:** 플러그인 자체뿐 아니라 선택한 ChatGPT 플랜, 모델 사용, 연결한 호스팅·데이터 서비스의 비용을 따로 확인하세요.

## Figma

> **메타**  
> 최초 공개 : 2026-03  
> 개발 주체 : 서드파티(기업)  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-26  
> 최종 확인 : 2026-08-26

Figma의 선택한 node와 frame에서 구조화된 디자인 정보, 에셋, variant를 읽어 현재 저장소의 컴포넌트와 코드로 옮기게 하는 플러그인입니다.

> 공식 자료: [OpenAI Figma-to-code 가이드](https://learn.chatgpt.com/use-cases/figma-designs-to-code) · [공식 패키지 저장소](https://github.com/openai/plugins/tree/main/plugins/figma) · [ChatGPT 플러그인 권한](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

디자인을 이미지로만 보고 간격과 컴포넌트를 추측하는 문제를 줄입니다. OpenAI 공식 가이드는 정확한 node의 design context와 screenshot을 가져오고 기존 디자인 시스템에 맞춰 구현한 뒤 브라우저에서 비교하는 흐름을 안내합니다.

구현할 Figma 원본이 없거나, 정적 이미지 한 장만 참고하면 충분하거나, 코드와 디자인 시스템의 연결 규칙이 없는 초기 실험에는 불필요합니다.

### 설치

**ChatGPT → Plugins → 검색 → Figma → 상세 → `+` 설치 → Connect** 경로를 사용합니다. 연결 화면에서 요청하는 Figma 권한과 대상 계정을 확인한 뒤 인증합니다.

### 설치 후 확인 방법

**ChatGPT → Plugins → Installed → Figma**에서 설치 상태를 확인하고, 새 대화에서 `@figma`를 선택합니다. 읽을 권한이 있는 테스트 파일의 정확한 node 또는 frame URL로 design context만 요청해 연결 범위를 확인합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@figma 이 node의 design context와 variant 목록만 가져와 요약해줘. 코드는 수정하지 마.` | Figma 읽기 권한과 대상 확인 | 설치 직후 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@figma 이 frame을 현재 프로젝트의 기존 컴포넌트와 토큰으로 구현해줘.` | 디자인을 기존 코드 체계로 변환 | 확정된 화면을 구현할 때 |
| `@figma 정확한 variant의 screenshot과 design context를 비교해 누락된 상태를 알려줘.` | 구현 전 필요한 상태 확인 | variant가 많은 컴포넌트를 다룰 때 |
| `@figma 게시된 컴포넌트와 소스 파일의 Code Connect 후보를 정리해줘.` | 디자인과 코드 컴포넌트 연결 준비 | 반복적인 디자인 구현을 표준화할 때 |

### 주의사항

- **권한:** 연결한 Figma 계정이 읽을 수 있는 파일 범위 안에서 동작합니다. 개인 계정보다 조직이 승인한 계정과 최소 권한을 사용하세요.
- **데이터 전송:** 선택한 디자인 구조, 텍스트, 에셋, 질의가 Figma와 ChatGPT의 연결 경계를 통과합니다. 미공개 제품 디자인과 고객 정보의 외부 처리 정책을 확인하세요.
- **정확성:** 가져온 design context가 기존 코드의 라우팅, 상태 관리, 접근성 규칙을 대신하지 않습니다. 저장소 규칙과 테스트를 함께 적용하세요.
- **비용·가용성:** 계정 플랜과 조직 관리자의 플러그인·connector 허용 정책에 따라 설치 또는 연결 가능 여부가 달라질 수 있습니다.

## Vercel

> **메타**  
> 최초 공개 : 2026-03  
> 개발 주체 : 서드파티(기업)  
> 활성도 : 활발 — 마지막 플러그인 활동 2026-08-26  
> 최종 확인 : 2026-08-26

Vercel 프로젝트에 preview를 배포하고 배포 상태, 빌드 로그, 프로젝트 설정을 확인하도록 연결하는 플러그인입니다.

> 공식 자료: [OpenAI 배포 가이드](https://learn.chatgpt.com/use-cases/deploy-app-or-website) · [공식 패키지 저장소](https://github.com/openai/plugins/tree/main/plugins/vercel) · [Vercel 보안](https://vercel.com/docs/security)

### 어떤 문제를 푸는가 / 이럴 때는 불필요

로컬에서 구현을 마친 뒤 별도 터미널과 대시보드를 오가며 preview를 만들고 실패 로그를 전달하는 단계를 줄입니다. OpenAI 공식 활용 가이드는 Build Web Apps와 함께 preview를 배포하고 준비 상태를 확인하는 흐름을 안내합니다.

Vercel을 사용하지 않는 프로젝트, CI가 이미 preview 배포와 URL 공유를 자동화한 저장소, 에이전트에게 외부 배포 권한을 주면 안 되는 환경에는 불필요합니다.

### 설치

**ChatGPT → Plugins → 검색 → Vercel → 상세 → `+` 설치 → Connect** 경로를 사용합니다. 연결할 Vercel 계정과 팀, 요청 권한을 확인합니다.

### 설치 후 확인 방법

**ChatGPT → Plugins → Installed → Vercel**에서 연결 상태를 확인하고 새 대화에서 `@vercel`을 선택합니다. 먼저 읽기 요청으로 접근 가능한 프로젝트 이름만 확인하고, 실제 배포는 테스트 프로젝트에서 승인합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@vercel 내가 접근할 수 있는 프로젝트와 최근 preview 상태만 보여줘. 새 배포는 만들지 마.` | 계정 연결과 읽기 범위 확인 | 설치 직후 |

### 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `@vercel 현재 브랜치를 preview로 배포하고 결과 URL을 알려줘.` | 공유 가능한 preview 생성 | 로컬 빌드가 통과한 뒤 |
| `@vercel 최근 실패한 preview의 빌드 로그에서 첫 원인을 찾아줘.` | 배포 실패 원인 확인 | Vercel 빌드가 실패했을 때 |
| `@vercel 이 preview의 배포 상태와 연결된 프로젝트 설정을 요약해줘.` | 배포 준비 상태 점검 | 리뷰어에게 URL을 전달하기 전 |

### 주의사항

- **권한:** 배포 생성과 프로젝트 설정 변경은 외부 시스템의 상태를 바꿉니다. 읽기 확인 뒤 preview 범위만 승인하고 production 변경은 별도 절차로 분리하세요.
- **데이터 전송:** 소스와 빌드 산출물, 환경 설정 메타데이터가 Vercel로 전달될 수 있습니다. 운영 비밀은 프롬프트에 쓰지 말고 Vercel의 승인된 환경 변수 저장소를 사용하세요.
- **공개 범위:** preview URL도 조직 정책에 따라 외부에서 접근 가능할 수 있습니다. 인증과 배포 보호 설정을 확인한 뒤 공유하세요.
- **비용:** 빌드, 함수 실행, 대역폭 등은 연결한 Vercel 계정의 플랜과 사용량 정책을 따릅니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** OpenAI 공식 Plugins Directory · ChatGPT 공식 활용 가이드 최신판
</div>
