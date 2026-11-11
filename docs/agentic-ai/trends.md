---
title: 최신 동향
description: 에이전트 AI의 표준, 프레임워크, 제품, 운영 방식에서 실무에 영향을 주는 변화를 날짜별로 기록
sidebar_position: 7
---

# 최신 동향

> 공식 문서: [MCP 블로그](https://blog.modelcontextprotocol.io/) · [A2A 프로젝트](https://github.com/a2aproject) · [Anthropic News](https://www.anthropic.com/news) · [OpenAI News](https://openai.com/news/) · [Google Developers Blog](https://developers.googleblog.com/) · [Microsoft Agent Framework](https://learn.microsoft.com/agent-framework/)

홍보성 발표를 모두 옮기지 않습니다. **에이전트를 설계·구축·운영하는 방식을 바꾸는 변화**만 근거 링크와 함께 기록합니다. [업데이트 소식](/updates/latest)의 정기 확인 때 함께 점검해 갱신합니다.

## 2026-11-11 · 섹션 신설 기준선

### 큰 흐름

| 흐름 | 내용 | 실무에서 의미 |
| --- | --- | --- |
| 표준의 중립화 | MCP, goose, AGENTS.md를 첫 프로젝트로 Linux Foundation 산하 Agentic AI Foundation(AAIF)이 2025년 12월 출범 | 특정 벤더에 묶이지 않는 도구 연결·지침 형식을 기준으로 삼아도 됨 |
| 에이전트 간 통신 | A2A가 1주년 시점에 150개 이상 조직의 지원을 받음 ([Linux Foundation 발표](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year)) | 시스템 경계를 넘는 에이전트 협업을 설계할 때 후보 표준 |
| MCP 사양 개정 | 2026-07-28 사양에서 stateless core와 요청별 메타데이터 모델 도입 ([발표](https://blog.modelcontextprotocol.io/posts/2026-07-28/)) | 원격 MCP 서버를 확장하기 쉬워짐. 클라이언트별 지원 범위는 확인 필요 |
| 프레임워크 통합 | Microsoft가 Semantic Kernel과 AutoGen을 Microsoft Agent Framework로 통합 ([문서](https://learn.microsoft.com/agent-framework/)) | AutoGen 기반 프로젝트는 마이그레이션 계획 필요 |
| 관리형 실행 | 모델 공급자가 루프와 샌드박스까지 호스팅하는 서비스 제공 (예: [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview)) | 인프라 운영 부담과 공급자 종속 사이의 선택이 생김 |
| 통제 우선 | 업계 논의의 초점이 "더 똑똑한 에이전트"에서 권한·승인·감사·비용 통제로 이동 | [평가·관측·보안](/agentic-ai/evaluation-safety)을 설계 초기에 포함 |
| 성과 검증 | 시범 도입을 넘어 업무 단위 비용 대비 효과를 요구 | 과제 성공률과 과제당 비용을 함께 측정 |

### 이 가이드에 반영한 것

| 영역 | 반영 |
| --- | --- |
| 개념·패턴 | 단순한 구조부터 시작해 측정 후 복잡도를 올리는 원칙으로 작성 |
| 프레임워크 | 버전 숫자 대신 선택 기준 중심으로 작성하고 변경은 이 페이지에 기록 |
| 실습 | 최신 Claude API(`claude-opus-5-5`, Tool Runner)로 검증한 TypeScript 예제 |

## 다음 확인 목록

- A2A의 AAIF 이관 여부: 2026년 8월 이관 보도가 있으나 1차 공식 발표를 아직 확인하지 못함
- Google ADK 주요 버전과 지원 언어 범위: 2차 자료 사이에 내용이 엇갈림
- OpenAI Agents SDK의 샌드박스 실행 기능 범위
- LangGraph 1.x 이후 주요 변경점
- 주요 에이전트 클라이언트의 MCP 2026-07-28 사양 지원 범위

## 기록 원칙

1. 공식 발표·공식 문서·표준 단체 발표를 근거로 삼습니다. 2차 기사만 있으면 "다음 확인 목록"에 둡니다.
2. 성능 수치와 가격은 옮기지 않고 공식 페이지로 연결합니다.
3. 새 섹션은 날짜 내림차순으로 맨 위에 추가합니다.
4. 영향받는 페이지(개념, 패턴, 프레임워크, 실습)도 함께 고칩니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-11<br />
**기준 버전:** MCP 2026-07-28 · 각 공식 발표 최신판
</div>
