---
title: 프레임워크·프로토콜 지도
description: 에이전트 SDK, 오케스트레이션 프레임워크, MCP·A2A 같은 표준을 고르는 기준
sidebar_position: 3
---

# 프레임워크·프로토콜 지도

> 공식 문서: [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) · [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) · [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) · [Google ADK](https://google.github.io/adk-docs/) · [Microsoft Agent Framework](https://learn.microsoft.com/agent-framework/) · [MCP](https://modelcontextprotocol.io/) · [A2A](https://a2a-protocol.org/)

프레임워크는 빠르게 바뀝니다. 이 페이지는 버전 숫자보다 **무엇을 기준으로 고르는지**를 정리하고, 버전과 출시 소식은 [최신 동향](/agentic-ai/trends)에 쌓습니다.

## 먼저 정할 두 가지

에이전트를 만드는 방식은 **루프(하네스)를 누가 제공하나**와 **실행 환경(배포)을 누가 제공하나**로 나뉩니다.

| 방식 | 루프 | 실행 환경 | 이런 때 |
| --- | --- | --- | --- |
| 모델 API 직접 호출 + 직접 루프 | 내가 작성 | 내가 운영 | 원리를 배우거나 흐름을 완전히 통제할 때 |
| 모델 SDK의 도구 실행 헬퍼 | SDK | 내가 운영 | 내 도구만 쓰는 에이전트를 빠르게 |
| 에이전트 SDK (내장 도구 포함) | SDK | 내가 운영 | 파일·셸·검색 도구가 기본으로 필요한 코딩·자동화 에이전트 |
| 오케스트레이션 프레임워크 | 프레임워크 | 내가 운영 | 상태 그래프, 여러 모델 공급자, 복잡한 흐름 제어 |
| 관리형 에이전트 플랫폼 | 공급자 | 공급자 | 샌드박스·세션·스케줄 실행까지 맡기고 싶을 때 |

처음 배운다면 **직접 루프 → SDK 헬퍼** 순서로 [실습](/agentic-ai/build-your-first-agent)을 해 본 뒤 프레임워크를 고르면 추상화 뒤에서 무슨 일이 일어나는지 알 수 있습니다.

## 주요 SDK·프레임워크

| 이름 | 만든 곳 | 성격 | 강점 | 고려할 점 |
| --- | --- | --- | --- | --- |
| [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) | Anthropic | Claude Code 하네스를 라이브러리로 제공 (Python·TypeScript) | 파일·셸·검색 내장 도구, 서브 에이전트, 훅, 권한 | Claude 모델 중심 |
| [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) | Anthropic | 루프와 세션별 샌드박스를 호스팅 (베타) | 장기 실행 세션, 스케줄 실행, 버전 관리되는 에이전트 설정 | 베타, 지원 플랫폼 확인 필요 |
| [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) | OpenAI | 경량 에이전트 SDK | 핸드오프, 가드레일, 트레이싱 기본 제공 | OpenAI 생태계 중심 |
| [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) | LangChain | 상태 그래프 기반 오케스트레이션 | 체크포인트, 사람 개입, 세밀한 흐름 제어, 다양한 모델 | 학습 곡선, 추상화 계층 |
| [Google ADK](https://google.github.io/adk-docs/) | Google | 에이전트 개발 키트 (여러 언어) | 멀티 에이전트 구성, Google Cloud 배포 연계 | Gemini·Google Cloud 중심 기능 |
| [Microsoft Agent Framework](https://learn.microsoft.com/agent-framework/) | Microsoft | Semantic Kernel과 AutoGen의 후속 통합 SDK (Python·.NET) | 엔터프라이즈 연동, 워크플로, Azure 연계 | AutoGen 기존 코드는 마이그레이션 필요 |
| [CrewAI](https://docs.crewai.com/) | CrewAI | 역할 기반 멀티 에이전트 | 역할·작업 정의가 직관적 | 세밀한 제어는 제한적 |
| [Pydantic AI](https://ai.pydantic.dev/) | Pydantic | 타입 안전 Python 에이전트 | 구조화 출력, 검증, 의존성 주입 | Python 전용 |
| [Mastra](https://mastra.ai/) | Mastra | TypeScript 에이전트 프레임워크 | 웹 개발자 친화, 워크플로·메모리 | TypeScript 전용 |
| [smolagents](https://huggingface.co/docs/smolagents/) | Hugging Face | 최소 구성 에이전트 | 코드로 행동하는 에이전트, 오픈 모델 | 대규모 운영 기능은 직접 구성 |

## 고르는 기준

| 질문 | 답에 따른 방향 |
| --- | --- |
| 모델을 하나만 쓰나, 여러 공급자를 섞나? | 하나면 공급자 SDK, 여럿이면 LangGraph·Pydantic AI 같은 중립 프레임워크 |
| 파일·셸 같은 기본 도구가 필요한가? | 필요하면 Claude Agent SDK 같은 내장 도구형 |
| 흐름을 그래프로 엄격히 통제해야 하나? | LangGraph, Microsoft Agent Framework 워크플로 |
| 인프라 운영을 줄이고 싶은가? | 관리형 에이전트 플랫폼 |
| 팀 주력 언어는? | Python이면 선택지 대부분, TypeScript면 Claude Agent SDK·Mastra·OpenAI Agents SDK(JS) 등 |
| 관측·평가 도구와 연결되나? | OpenTelemetry 지원 여부 확인 |

## 표준 프로토콜

에이전트 생태계는 서로 다른 제품이 연결되도록 표준을 만들어 가고 있습니다.

| 표준 | 연결 대상 | 한 줄 설명 | 더 보기 |
| --- | --- | --- | --- |
| MCP (Model Context Protocol) | 에이전트 ↔ 도구·데이터 | 도구와 데이터 소스를 같은 방식으로 발견·호출 | [MCP 서버 연결](/integrations/mcp), [사양](https://modelcontextprotocol.io/specification) |
| A2A (Agent2Agent) | 에이전트 ↔ 에이전트 | 서로 다른 시스템의 에이전트가 작업을 주고받음 | [a2a-protocol.org](https://a2a-protocol.org/), [GitHub](https://github.com/a2aproject) |
| AGENTS.md | 에이전트 ↔ 저장소 | 코딩 에이전트가 읽는 프로젝트 지침 파일 형식 | [agents.md](https://agents.md/) |
| Agent Skills | 에이전트 ↔ 재사용 절차 | 지침·스크립트·자료를 폴더로 묶어 필요할 때 불러옴 | [Claude Skills](https://code.claude.com/docs/en/skills) |
| OpenTelemetry GenAI 규약 | 에이전트 ↔ 관측 도구 | 모델 호출·도구 호출을 표준 트레이스로 기록 | [OTel GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/) |

MCP와 A2A는 경쟁 관계가 아니라 층이 다릅니다. **MCP는 에이전트가 손에 쥐는 도구**, **A2A는 에이전트끼리 나누는 대화**에 가깝습니다. MCP, goose, AGENTS.md는 2025년 12월 Linux Foundation 산하 Agentic AI Foundation(AAIF)의 첫 기여 프로젝트로 출범했습니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-11<br />
**기준 버전:** 각 프레임워크 공식 문서 최신판 · MCP 2026-07-28
</div>
