---
title: 레퍼런스 모음
description: 에이전트 AI를 깊게 공부하기 위한 공식 가이드, 핵심 논문, 강의, 소식 채널
sidebar_position: 6
---

# 레퍼런스 모음

> 공식 문서: [Anthropic Engineering](https://www.anthropic.com/engineering) · [OpenAI Developers](https://developers.openai.com/) · [Google ADK](https://google.github.io/adk-docs/) · [MCP](https://modelcontextprotocol.io/)

많이 모으는 것보다 **무엇부터 읽을지**가 중요합니다. 각 표의 위쪽부터 읽으세요.

## 먼저 읽을 가이드 (입문 → 실전)

| 자료 | 출처 | 왜 읽나 |
| --- | --- | --- |
| [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Anthropic | 워크플로와 에이전트 패턴의 기준이 된 글 |
| [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) | OpenAI | 에이전트 설계·가드레일을 실무 관점으로 정리 |
| [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) | Lilian Weng | 계획·메모리·도구 구성 요소의 고전적 정리 |
| [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) | Anthropic | 도구 설계와 평가로 도구를 개선하는 방법 |
| [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Anthropic | 긴 작업에서 컨텍스트를 관리하는 기법 |
| [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) | Anthropic | 멀티 에이전트의 실제 운영 경험과 비용 |
| [The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) | Simon Willison | 에이전트 보안 위험을 가장 쉽게 설명한 글 |

## 공식 문서

| 분야 | 문서 |
| --- | --- |
| 도구 사용 | [Claude 도구 사용](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) · [OpenAI Function calling](https://platform.openai.com/docs/guides/function-calling) |
| 에이전트 SDK | [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) · [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [Google ADK](https://google.github.io/adk-docs/) · [Microsoft Agent Framework](https://learn.microsoft.com/agent-framework/) |
| 오케스트레이션 | [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview) · [CrewAI](https://docs.crewai.com/) · [Pydantic AI](https://ai.pydantic.dev/) · [Mastra](https://mastra.ai/docs) |
| 표준 | [MCP 사양](https://modelcontextprotocol.io/specification) · [A2A](https://a2a-protocol.org/) · [AGENTS.md](https://agents.md/) |
| 관리형 실행 | [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) |

## 핵심 논문

연도순입니다. 초록과 그림만 봐도 개념을 잡는 데 충분합니다.

| 논문 | 연도 | 핵심 아이디어 |
| --- | --- | --- |
| [Chain-of-Thought Prompting](https://arxiv.org/abs/2201.11903) | 2022 | 단계별 추론을 쓰게 하면 복잡한 문제 성능이 오른다 |
| [ReAct](https://arxiv.org/abs/2210.03629) | 2022 | 추론과 행동(도구 호출)을 번갈아 하는 에이전트의 원형 |
| [Toolformer](https://arxiv.org/abs/2302.04761) | 2023 | 모델이 언제 어떤 API를 부를지 스스로 학습 |
| [Reflexion](https://arxiv.org/abs/2303.11366) | 2023 | 실패를 말로 돌아보고 다음 시도에 반영 |
| [Generative Agents](https://arxiv.org/abs/2304.03442) | 2023 | 기억·회고·계획을 가진 에이전트들의 사회 시뮬레이션 |
| [Tree of Thoughts](https://arxiv.org/abs/2305.10601) | 2023 | 여러 추론 경로를 탐색하고 평가 |
| [Voyager](https://arxiv.org/abs/2305.16291) | 2023 | 스스로 기술(코드)을 쌓아 가는 평생 학습 에이전트 |
| [AgentBench](https://arxiv.org/abs/2308.03688) | 2023 | 다양한 환경에서 에이전트 능력을 비교 평가 |
| [SWE-bench](https://arxiv.org/abs/2310.06770) | 2023 | 실제 저장소 이슈 해결로 코딩 에이전트 평가 |
| [GAIA](https://arxiv.org/abs/2311.12983) | 2023 | 사람에겐 쉽고 AI에겐 어려운 일반 비서 과제 |
| [SWE-agent](https://arxiv.org/abs/2405.15793) | 2024 | 에이전트용 인터페이스(ACI) 설계가 성능을 좌우 |
| [τ-bench](https://arxiv.org/abs/2406.12045) | 2024 | 규칙·도구·사용자가 있는 현실적 대화 평가 |

## 강의·튜토리얼

| 자료 | 형태 | 대상 |
| --- | --- | --- |
| [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) | 무료 온라인 과정 | 입문~중급, 실습 중심 |
| [DeepLearning.AI 단기 강의](https://www.deeplearning.ai/short-courses/) | 1~2시간 무료 강의 다수 | 프레임워크별 빠른 입문 |
| [Anthropic Academy](https://anthropic.skilljar.com/) | 무료 온라인 과정 | Claude API, MCP, Claude Code |
| [Anthropic Cookbook](https://github.com/anthropics/claude-cookbooks) | 노트북 예제 | 패턴별 코드 예제 |
| [OpenAI Cookbook](https://cookbook.openai.com/) | 노트북 예제 | 패턴별 코드 예제 |

## 최신 소식을 따라가는 채널

| 채널 | 무엇을 얻나 |
| --- | --- |
| [Anthropic Engineering](https://www.anthropic.com/engineering) · [Anthropic News](https://www.anthropic.com/news) | 에이전트 설계 경험담, 모델·제품 발표 |
| [OpenAI News](https://openai.com/news/) · [OpenAI Developers](https://developers.openai.com/) | 모델·API·에이전트 도구 발표 |
| [Google Developers Blog](https://developers.googleblog.com/) | ADK, A2A, Gemini 관련 소식 |
| [MCP 블로그](https://blog.modelcontextprotocol.io/) | MCP 사양 변경 |
| [LangChain Blog](https://blog.langchain.com/) | 오케스트레이션·평가 실무 |
| [Simon Willison's Weblog](https://simonwillison.net/) | 도구·보안 이슈를 빠르고 비판적으로 정리 |
| [Latent Space](https://www.latent.space/) | AI 엔지니어링 팟캐스트·뉴스레터 |
| [arXiv cs.AI 최신 논문](https://arxiv.org/list/cs.AI/recent) | 연구 동향 원문 |

이 사이트의 [최신 동향](/agentic-ai/trends) 페이지는 위 채널에서 **실무에 영향을 주는 변화만** 골라 날짜별로 기록합니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-11<br />
**기준 버전:** 각 출처 최신판
</div>
