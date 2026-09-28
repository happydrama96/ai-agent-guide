---
title: 업데이트 소식
description: 실제 사용과 이 가이드에 영향을 준 최신 변화
sidebar_position: 1
---

# 업데이트 소식

> 공식 문서: [Claude Code 변경 기록](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · [Cursor 변경 기록](https://www.cursor.com/changelog) · [ChatGPT 변경 기록](https://learn.chatgpt.com/docs/changelog) · [GitHub Copilot 변경 기록](https://github.blog/changelog/label/copilot/)

기능 출시 소식을 전부 옮기지 않습니다. 설치, 권한, 프로젝트 연결, 명령어처럼 **기존 사용법을 바꾸는 내용**만 반영합니다.

## 2026-09-28 · Codex 플러그인·Skills 구조 정리

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| OpenAI Plugins | 플러그인은 Skills, 앱 연결, MCP 서버, agents, commands, hooks를 선택적으로 묶는 현재 배포 단위 | 내장 Skill, 절차형 플러그인, 연결형 플러그인을 구분해 설명 |
| `openai/skills` | 저장소가 deprecated 상태이며 새 예제는 `openai/plugins`를 사용하라고 안내 | 이전 카탈로그 Skill을 현재 추천 목록과 분리하고 기존 환경 참고용으로 표시 |
| Superpowers | Codex 공식 디렉터리에서 설계·TDD·디버깅·검증·병렬 작업 Skills를 묶어 제공 | GitHub, Codex Security와 함께 개발 기본 조합으로 정리 |
| 연결형 플러그인 | GitHub, Figma, Vercel, Supabase 등은 계정 연결과 원격 데이터 접근이 필요 | `🔗` 표시와 권한·데이터 전송·외부 상태 변경 주의사항 추가 |
| `migrate-to-codex` | 공개 Plugins Directory에서 정확히 일치하는 항목을 확인하지 못함 | 추측해 설치법을 싣지 않고 공식 Claude Code 마이그레이션 가이드만 연결 |

자세한 선택 기준과 설치 후 확인 방법은 [Codex 개발 스킬·플러그인 지도](../plugins/codex-dev-skills.md)에서 확인할 수 있습니다.

## 2026-09-28 · Claude Code 플러그인·Skills 재검증

| 제품·주제 | 확인한 변화 | 이 가이드에 반영한 것 |
| --- | --- | --- |
| Claude Code 공식 플러그인 | 현재 배포 기준은 `anthropics/claude-plugins-official` 마켓플레이스이며 `플러그인@마켓플레이스` 형식으로 설치 | 예전 `anthropics/claude-code/plugins` 목록을 설치 기준으로 단정하지 않고 공식 마켓플레이스를 우선하도록 문서화 |
| Claude Code Skills | 개인, 프로젝트, 하위 디렉터리, 플러그인 Skill의 로딩 범위가 다르고 cloud session은 로컬 개인 경로를 읽지 않음 | 로컬·팀·cloud 범위별 경로와 공유 방식 추가 |
| `security-guidance` | 패턴 경고 외에 작업 종료 시 diff 리뷰와 커밋 시 agent 리뷰를 수행하며 관련 코드를 설정된 모델 endpoint로 전송 | 단순 로컬 hook으로 소개하지 않고 데이터 전송·비용·비활성화 항목 추가 |
| Superpowers | Claude Code 공식 마켓플레이스에서 설치할 수 있고, Skills가 설계·TDD·디버깅·검증·브랜치 마무리 순서를 자동으로 적용 | 이름만 나열하지 않고 언제 쓰며 기존 workflow와 어떻게 충돌하는지 정리 |
| Claude Code 최신 변경 기록 | `prompt-audit`은 오래된 모델용 프롬프트 패턴을 점검하고, 플러그인 검증·상세·제거 명령의 오류 처리가 개선됨 | 이번 검증에서 공식 마켓플레이스 이름과 플러그인 로딩 범위를 다시 확인 |

새 정리는 [Claude Code 개발 스킬 지도](../plugins/claude-code-dev-skills.md)에서 확인할 수 있습니다. 공식 플러그인을 전부 설치하라는 뜻이 아니라 기존 팀 절차에서 빈 단계만 고르기 위한 참조표입니다.

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
- Claude Code 공식 마켓플레이스의 플러그인 이름·기본 권한 변경
- Superpowers와 Claude Code 기본 workflow의 중복 범위

<div className="guide-meta">
**최종 확인일:** 2026-09-28<br />
**기준 버전:** MCP 2026-07-28 · Claude Code 공식 Plugins·Skills 문서 · 각 벤더 공식 변경 기록 최신판
</div>
