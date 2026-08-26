---
title: 업데이트 소식
description: 실제 사용과 이 가이드에 영향을 준 최신 변화
sidebar_position: 1
---

# 업데이트 소식

> 공식 문서: [Claude Code 변경 기록](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · [Cursor 변경 기록](https://www.cursor.com/changelog) · [ChatGPT 변경 기록](https://learn.chatgpt.com/docs/changelog) · [GitHub Copilot 변경 기록](https://github.blog/changelog/label/copilot/)

기능 출시 소식을 전부 옮기지 않습니다. 설치, 권한, 프로젝트 연결, 명령어처럼 **기존 사용법을 바꾸는 내용**만 반영합니다.

## 2026-08-26 · 사이트 첫 공개 기준선

| 제품·표준 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| MCP | 2026-07-28 사양에서 stateless core와 요청별 메타데이터 모델 도입 | MCP 개념과 기준 버전을 새 사양으로 작성하고 구버전 세션 설명을 기준으로 삼지 않음 |
| ChatGPT | OpenAI Docs의 현재 제품 구분이 웹·데스크톱, 프로젝트, Work·Codex 흐름을 함께 안내 | ChatGPT 셋업을 웹·데스크톱 Projects 중심으로 쓰고 API·CLI 인증과 분리 |
| Cursor | 편집기 빠른 시작과 별도로 Cursor CLI Beta 문서 제공 | 편집기와 선택형 CLI 명령을 나눠 표기 |
| GitHub Copilot | CLI에서 지침 초기화와 MCP 관리 명령 제공 | `.github/copilot-instructions.md`, `/init`, `/mcp` 항목 추가 |
| Claude Code | 네이티브 설치와 기존 npm 설치 경로가 함께 문서화 | 설치 방식을 한 가지로 단정하지 않고 진단 명령 포함 |

MCP 변경의 원문 요약은 [2026-07-28 사양 발표](https://blog.modelcontextprotocol.io/posts/2026-07-28/)에서 확인할 수 있습니다. 실제 클라이언트가 새 사양의 모든 기능을 같은 시점에 지원한다고 가정하지 않습니다.

## 업데이트 원칙

1. 공식 문서 또는 공식 변경 기록을 먼저 확인합니다.
2. 계정·요금제·점진 배포 차이는 단정하지 않고 표시합니다.
3. 메뉴는 이미지 대신 **설정 → 항목 → 동작** 형태로 기록합니다.
4. 명령어 변경은 셋업과 치트시트를 함께 고칩니다.
5. 페이지 하단의 최종 확인일과 기준 버전을 갱신합니다.

## 다음 확인 목록

- 각 제품의 MCP 클라이언트가 2026-07-28 사양을 지원하는 범위
- 회사 워크스페이스에서 ChatGPT 연결 기능의 관리자 제어 경로
- Cursor CLI의 Beta 상태와 Windows 네이티브 지원 범위
- Copilot CLI와 IDE 사이의 지침·권한 동작 차이

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** MCP 2026-07-28 · 각 벤더 공식 변경 기록 최신판
</div>
