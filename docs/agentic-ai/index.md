---
title: 에이전트 AI 한눈에 보기
description: 에이전트 AI의 개념, 설계, 구축, 운영, 최신 동향을 한 흐름으로 정리한 학습 지도
sidebar_position: 0
---

# 에이전트 AI 한눈에 보기

> 공식 문서: [Anthropic · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · [OpenAI · A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) · [Claude API 도구 사용](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) · [MCP 사양](https://modelcontextprotocol.io/specification)

앞 섹션들이 **이미 만들어진 에이전트(Claude Code, Cursor 등)를 잘 쓰는 법**이었다면, 이 섹션은 **에이전트가 어떻게 동작하는지 이해하고 직접 만들어 보는 법**을 다룹니다.

<div className="hero-panel">
  <h2>에이전트 = 모델 + 도구 + 반복 루프</h2>
  <p>모델이 다음 행동을 스스로 고르고, 도구를 호출해 결과를 보고, 목표를 이룰 때까지 다시 판단하는 시스템입니다. 마법이 아니라 while 루프입니다.</p>
</div>

## 한 줄 정의

에이전트 AI(Agentic AI)는 **목표만 주면 LLM이 스스로 계획을 세우고, 도구를 골라 실행하고, 결과를 확인하며 여러 단계를 진행하는 시스템**입니다. 사람이 단계를 코드로 정해 둔 자동화(워크플로)와 달리, 다음에 무엇을 할지 모델이 결정합니다.

| 구분 | 누가 다음 단계를 정하나 | 예시 |
| --- | --- | --- |
| 단일 LLM 호출 | 없음 (한 번 묻고 끝) | 요약, 분류, 번역 |
| 워크플로 | 개발자가 코드로 | 문서 → 요약 → 번역 → 저장 파이프라인 |
| 에이전트 | 모델이 실행 중에 | "이 버그 고쳐 줘" → 파일 탐색·수정·테스트를 스스로 반복 |

## 학습 로드맵

순서대로 읽으면 개념에서 직접 구축, 운영까지 이어집니다.

| 단계 | 문서 | 읽고 나면 할 수 있는 것 |
| --- | --- | --- |
| 1 | [핵심 개념](/agentic-ai/concepts) | 에이전트 루프, 도구, 메모리, 컨텍스트 엔지니어링을 설명할 수 있다 |
| 2 | [설계 패턴](/agentic-ai/design-patterns) | 문제에 맞는 패턴(체이닝, 라우팅, 오케스트레이터 등)을 고를 수 있다 |
| 3 | [프레임워크·프로토콜 지도](/agentic-ai/frameworks) | SDK와 MCP·A2A 같은 표준 중 무엇을 쓸지 판단할 수 있다 |
| 4 | [직접 만들기 실습](/agentic-ai/build-your-first-agent) | 도구를 쓰는 에이전트를 코드로 만들어 실행해 본다 |
| 5 | [평가·관측·보안](/agentic-ai/evaluation-safety) | 에이전트가 잘 동작하는지 측정하고 위험을 줄인다 |
| 6 | [레퍼런스 모음](/agentic-ai/references) | 공식 가이드, 핵심 논문, 강의를 찾아 더 깊게 공부한다 |
| 7 | [최신 동향](/agentic-ai/trends) | 표준·프레임워크·제품의 최근 변화를 추적한다 |

## 시작하기 전 판단 기준

에이전트는 비용과 지연이 크고 실패 방식이 다양합니다. 아래 네 질문 중 하나라도 "아니오"라면 단일 호출이나 워크플로로 충분할 가능성이 큽니다.

| 질문 | 에이전트가 맞는 경우 |
| --- | --- |
| 복잡도 | 단계를 미리 다 정하기 어렵다 |
| 가치 | 결과가 늘어나는 비용과 시간을 정당화한다 |
| 실현성 | 모델이 그 종류의 작업을 실제로 해낸다 |
| 오류 비용 | 실수를 테스트·리뷰·되돌리기로 잡을 수 있다 |

## 이 섹션의 원칙

- 개념은 짧게, **실행해 볼 수 있는 코드와 체크리스트**를 우선합니다.
- 특정 프레임워크를 정답으로 권하지 않습니다. 선택 기준을 제시합니다.
- 최신 동향은 [최신 동향](/agentic-ai/trends) 페이지에 날짜와 근거 링크를 붙여 쌓고, [업데이트 소식](/updates/latest)의 정기 확인 때 함께 갱신합니다.

<div className="guide-meta">
**최종 확인일:** 2026-11-11<br />
**기준 버전:** Anthropic·OpenAI 에이전트 가이드 · MCP 2026-07-28
</div>
