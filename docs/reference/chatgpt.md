---
title: ChatGPT 치트시트
description: ChatGPT 웹·데스크톱의 프로젝트와 작업 경로 빠른 참조
sidebar_position: 3
---

# ChatGPT 치트시트

> 공식 문서: [명령 레퍼런스](https://learn.chatgpt.com/docs/reference/commands) · [프로젝트와 대화](https://learn.chatgpt.com/docs/projects) · [설정](https://learn.chatgpt.com/docs/reference/settings) · [플러그인](https://learn.chatgpt.com/docs/plugins) · [다른 에이전트에서 가져오기](https://learn.chatgpt.com/docs/import)

ChatGPT 웹·데스크톱은 계정과 점진 배포에 따라 보이는 기능이 다를 수 있습니다. 메뉴 이름이 달라지면 공식 문서에서 현재 경로를 확인하세요.

## 대화와 프로젝트

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `새 대화` | 빈 대화 시작 | 주제와 컨텍스트를 분리할 때 |
| `새 프로젝트` | 대화·파일·지침을 묶기 | 반복되거나 장기인 업무를 시작할 때 |
| `프로젝트 → 파일 추가` | 근거 자료 추가 | 프로젝트 대화에서 같은 자료를 재사용할 때 |
| `프로젝트 → 지침` | 프로젝트 전용 규칙 설정 | 출력 형식·용어·금지 사항을 고정할 때 |
| `대화 → … → 프로젝트로 이동` | 기존 대화를 프로젝트에 넣기 | 관련 작업을 한곳에 모을 때 (데스크톱 앱은 여러 대화를 선택해 한 번에 이동 가능) |
| `프로젝트 메뉴 → Edit project → Add folder` | 데스크톱 프로젝트에 로컬 폴더 추가 | Codex·Work가 실제 파일을 다뤄야 할 때 |
| `프로젝트 메뉴 → Archive chats` | 프로젝트 대화 일괄 보관 | 끝난 프로젝트를 정리할 때 |
| `대화 → 분기` | 특정 메시지에서 별도 흐름 시작 | 원본 대화를 보존하며 다른 안을 시험할 때 |

## 컨텍스트와 검증

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `첨부 → 파일` | 현재 대화에 파일 제공 | 일회성 분석에 쓸 때 |
| `도구 → 웹 검색` | 최신 웹 자료와 출처 검색 | 변할 수 있는 사실을 확인할 때 |
| `설정 → 개인화` | 전역 응답 선호 관리 | 모든 대화에 공통인 선호를 둘 때 |
| `설정 → 데이터 제어` | 데이터 관련 설정 확인 | 회사·개인 자료를 넣기 전 |
| `Plugins → 검색 → +` | 플러그인 설치, 필요하면 외부 서비스 연결 | 승인된 문서·업무 시스템을 연결할 때 |
| `Plugins → Installed` | 설치한 플러그인 확인·제거 | 연결 범위를 점검하거나 쓰지 않는 플러그인을 정리할 때 |
| `@플러그인 또는 Skill 이름` | 특정 플러그인·Skill을 명시해 호출 (Codex에서 Skill은 `$이름`) | 자동 선택 대신 도구를 지정하고 싶을 때 |
| `설정 → Import` | Claude Code·Claude Cowork·Cursor의 지침, Skills, MCP 설정, 최근 대화 가져오기 | 다른 에이전트에서 데스크톱 앱으로 옮길 때 |

## 데스크톱

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+K` / `Cmd+K` | 명령 메뉴 열기 (Windows / macOS) | 메뉴 위치가 기억나지 않을 때 |
| `Alt+1~3` / `Control+1~3` | Chat·Work·Codex 전환 (Windows / macOS) | 작업 성격에 맞는 모드로 바꿀 때 |
| `Ctrl+Alt+N` / `Cmd+Option+N` | 앱 안에서 빠른 대화(Quick chat) 열기 (Windows / macOS) | 현재 작업을 두고 짧게 질문할 때 |
| `Windows+Alt+P` / `Option+Space` | Pets 컨트롤을 띄우고 Quick Chat에 포커스 (Windows / macOS) | 다른 앱 위에서 바로 질문할 때 |
| `Ctrl+T` / `Cmd+T` | 내장 브라우저 탭 열기 (Windows / macOS) | 지원되는 Work·Codex 작업에서 웹을 함께 볼 때 |
| `Ctrl+/` / `Cmd+/` | 단축키 목록 보기 (Windows / macOS) | 바뀐 단축키를 확인하거나 **설정 → Keyboard shortcuts**에서 다시 지정할 때 |

단축키는 앱 버전과 사용자 설정에 따라 다를 수 있습니다. 예전 문서의 `Ctrl+Shift+B` / `Cmd+Shift+B`는 현재 작업 영역 배치 전환에 쓰입니다.

## 안전 메모

전역 개인화에는 고객명·비밀값·프로젝트별 기밀 규칙을 넣지 않습니다. 외부 연결은 원본 서비스의 권한을 따르므로 공유 전 대상 워크스페이스와 문서 범위를 다시 확인하세요.

<div className="guide-meta">
**최종 확인일:** 2026-11-02<br />
**기준 버전:** ChatGPT 웹 최신판 · 데스크톱 앱 26.1007 · ChatGPT Learn 명령·설정 레퍼런스 2026-11-02 기준
</div>
