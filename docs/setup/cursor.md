---
title: Cursor
description: Cursor 편집기와 선택형 CLI 설치, 인증, 프로젝트 연결
sidebar_position: 2
---

# Cursor 셋업

> 공식 문서: [설치](https://docs.cursor.com/get-started/installation) · [빠른 시작](https://docs.cursor.com/en/get-started/quickstart) · [개인정보와 보안](https://docs.cursor.com/account/privacy)

## 한 줄 요약

코드를 보며 작은 수정부터 에이전트 작업까지 이어가기 좋고, 첫 프로젝트에서는 인덱싱과 Privacy Mode를 먼저 확인해야 합니다.

## 이런 사람에게

- VS Code 계열 사용감 안에서 AI 자동완성·인라인 수정·Agent를 함께 쓰려는 사람
- 변경 파일을 편집기 diff로 바로 검토하고 싶은 사람
- 터미널만으로 모든 흐름을 운영하려면 Claude Code나 Cursor CLI 쪽이 더 맞을 수 있습니다.

## 설치

[공식 다운로드](https://cursor.com/downloads)에서 운영체제 설치 파일을 받아 실행합니다. 첫 실행의 설정 마법사는 나중에도 명령 팔레트에서 **Cursor: Start Onboarding**으로 다시 열 수 있습니다. CLI는 선택 사항입니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `cursor .` | 현재 폴더를 Cursor로 열기 | 셸에서 프로젝트를 바로 열 때 |
| `curl https://cursor.com/install -fsS \| bash` | Cursor CLI 설치 | macOS·Linux·Windows WSL에서 터미널 에이전트도 쓸 때 |
| `cursor-agent --version` | Cursor CLI 설치 확인 | CLI 설치 직후 |

## 인증

편집기에서 **Cursor Settings → General → Account → Sign in** 경로로 로그인합니다. 설정 단축키는 `Ctrl+Shift+J`이고 macOS에서는 `Cmd+Shift+J`입니다. CLI는 브라우저 로그인을 권장하며 자동화에서만 별도 API 키를 고려합니다.

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `cursor-agent login` | 브라우저 계정 인증 | CLI를 처음 쓸 때 |
| `cursor-agent status` | 로그인과 엔드포인트 확인 | 인증 오류를 점검할 때 |
| `cursor-agent logout` | 로컬 인증 정보 제거 | 공용 장비 반납이나 계정 전환 전 |

## 프로젝트 연결

**파일 → 폴더 열기**로 프로젝트 루트를 엽니다. 처음에는 **Cursor Settings → Indexing & Docs**에서 인덱싱 범위와 진행 상태를 확인하고, 비밀값·생성물·대용량 데이터는 `.cursorignore`에 둡니다. 팀 규칙은 `.cursor/rules/*.mdc`, 단순 프로젝트 지침은 `AGENTS.md` 등 현재 지원 범위를 공식 문서에서 확인해 사용합니다.

Privacy Mode는 **Cursor Settings → General → Privacy Mode**에서 확인합니다. 회사 정책상 코드 전송이 제한되면 프로젝트를 열기 전에 담당자 승인을 받으세요.

## 자주 쓰는 명령어

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+I` / `Cmd+I` | Agent 패널 열기 | 여러 파일 작업을 요청할 때 |
| `Ctrl+K` / `Cmd+K` | 선택 영역 인라인 수정 | 범위가 작은 변경을 맡길 때 |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | 명령 팔레트 열기 | 설정·진단 명령을 이름으로 찾을 때 |
| `cursor-agent` | 터미널 대화형 세션 시작 | 편집기 밖에서 프로젝트 작업할 때 |
| `cursor-agent resume` | 최근 CLI 세션 재개 | 이전 작업을 이어갈 때 |
| `cursor-agent ls` | 저장된 CLI 세션 목록 | 재개할 대화를 찾을 때 |

## 잘하는 것·못하는 것

### 잘하는 것

- 작성 중인 코드에 맞춘 자동완성과 선택 영역 수정
- 열린 프로젝트를 인덱싱해 여러 파일에 걸친 구현과 질문 처리
- 변경 diff를 편집기 안에서 보고 부분 수락·거절하는 흐름

### 못하는 것

- 인덱싱에서 제외되거나 열지 않은 저장소의 맥락 파악
- 생성 코드의 요구사항·보안·성능 정답 보장
- 조직 정책을 대신 판단하거나 민감정보 반출을 자동으로 막는 일

## 흔한 오류

| 증상 | 먼저 볼 것 | 해결 |
| --- | --- | --- |
| AI 기능이 응답하지 않음 | **Cursor Settings → Network → Run Diagnostics** | 프록시·방화벽 결과를 확인하고 조직 네트워크 담당자에게 전달 |
| 저장소 질문 답이 얕음 | **Cursor Settings → Indexing & Docs** 진행 상태 | 인덱싱 완료 후 다시 묻고 `.cursorignore`가 필요한 파일을 막지 않는지 확인 |
| 확장 충돌이 의심됨 | 확장을 모두 끈 상태에서 재현되는지 | `cursor --disable-extensions`로 열고 하나씩 다시 활성화 |
| CLI가 인증되지 않음 | `cursor-agent status` 결과 | `cursor-agent login`으로 다시 인증하고 자동화 키는 환경 변수로 주입 |
| 규칙이 적용되지 않음 | 규칙 파일 위치와 대상 glob | `.cursor/rules` 아래 파일의 적용 범위를 단순화하고 새 대화에서 재검증 |

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** Cursor 최신 채널 · Cursor CLI Beta 공식 문서 최신판
</div>
