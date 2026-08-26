---
title: 에이전트 비교표
description: 작업 방식과 리스크로 고르는 네 가지 AI 에이전트
sidebar_position: 1
---

# 에이전트 비교표

> 공식 문서: [Claude Code 개요](https://docs.anthropic.com/en/docs/claude-code/overview) · [Cursor 개요](https://docs.cursor.com/workflow) · [ChatGPT 시작하기](https://learn.chatgpt.com/docs/quickstart) · [GitHub Copilot 개요](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)

기능 수보다 **어디서 일하는지**와 **어떤 변경을 맡길지**로 고르면 덜 후회합니다.

| 에이전트 | 작업 표면 | 가장 잘 맞는 일 | 프로젝트 컨텍스트 | 먼저 볼 위험 |
| --- | --- | --- | --- | --- |
| Claude Code | 터미널 | 큰 코드베이스 탐색, 여러 파일 수정, 테스트 반복 | 현재 폴더와 `CLAUDE.md` | 셸 명령과 넓은 파일 권한 |
| Cursor | 코드 편집기 + 선택형 CLI | 코드 작성 중 빠른 수정, 자동완성, 대화형 구현 | 열린 폴더, 인덱스, `.cursor/rules` | 인덱싱 범위와 자동 실행 |
| ChatGPT | 웹·데스크톱 | 조사, 문서·표 작성, 파일 묶음 분석, 일반 업무 | 프로젝트의 파일과 지침 | 업로드 파일의 민감정보, 사실 검증 |
| GitHub Copilot | IDE·GitHub·CLI | 편집 흐름 안의 제안, 저장소 질문, PR 보조 | 워크스페이스와 `.github/copilot-instructions.md` | 제안 코드의 라이선스·보안·정확성 |

## 빠른 선택

| 내 상황 | 먼저 써 볼 것 | 이유 |
| --- | --- | --- |
| 터미널과 Git이 익숙하고 구현을 끝까지 맡기고 싶다 | Claude Code | 탐색·수정·검증 흐름이 한 세션에 자연스럽다 |
| VS Code 계열 편집기에서 떠나고 싶지 않다 | Cursor | 선택 영역, 자동완성, Agent가 같은 작업 표면에 있다 |
| 코딩보다 조사·기획·문서 산출물이 많다 | ChatGPT | 파일과 대화를 프로젝트 단위로 묶기 쉽다 |
| 회사가 GitHub와 VS Code를 표준으로 쓴다 | GitHub Copilot | 기존 권한과 저장소 흐름에 붙이기 쉽다 |

## 비용표를 넣지 않은 이유

가격, 사용량 제한, 포함 모델은 자주 바뀌고 계정·지역·조직 정책에 따라 다릅니다. 결제 전에는 각 공식 가격 페이지에서 확인하세요: [Claude](https://www.anthropic.com/pricing) · [Cursor](https://www.cursor.com/pricing) · [ChatGPT](https://learn.chatgpt.com/docs/pricing) · [GitHub Copilot](https://github.com/features/copilot/plans)

## 우리 팀에 들이기 전 질문

1. 소스와 문서를 외부 모델에 보낼 수 있는가?
2. 읽기 전용으로 시작할 수 있는가?
3. 변경 diff, 테스트 결과, 출처를 누가 승인하는가?
4. 비밀값과 고객 데이터가 제외되는 경로가 있는가?
5. 연결을 끊고 토큰을 폐기하는 절차가 있는가?

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** 각 벤더 공식 문서 최신판(자동 업데이트형 제품)
</div>
