---
title: Cursor 치트시트
description: Cursor 편집기 단축키와 Cursor CLI 빠른 참조
sidebar_position: 2
---

# Cursor 치트시트

> 공식 문서: [키보드 단축키](https://docs.cursor.com/configuration/kbd) · [Cursor CLI 개요](https://docs.cursor.com/en/cli/overview) · [CLI 명령](https://docs.cursor.com/en/cli/reference/parameters)

## 편집기

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+I` / `Cmd+I` | Agent 패널 열기 | 여러 파일 작업을 요청할 때 |
| `Ctrl+K` / `Cmd+K` | 선택 영역 인라인 수정 | 작은 범위를 빠르게 바꿀 때 |
| `Tab` | 제안 수락 | 자동완성 결과가 맞을 때 |
| `Esc` | 제안 취소 | 자동완성이 의도와 다를 때 |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | 명령 팔레트 열기 | 기능 이름으로 명령을 찾을 때 |
| `Ctrl+Shift+J` / `Cmd+Shift+J` | Cursor Settings 열기 | 계정·모델·인덱싱 설정을 볼 때 |

## CLI 시작과 세션

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `cursor-agent` | 대화형 CLI 시작 | 터미널에서 프로젝트 작업할 때 |
| `cursor-agent "요청"` | 첫 요청과 함께 시작 | 할 일이 분명할 때 |
| `cursor-agent ls` | 이전 세션 목록 | 재개할 세션을 찾을 때 |
| `cursor-agent resume` | 최근 세션 재개 | 직전 작업을 계속할 때 |
| `cursor-agent --resume="세션-ID"` | 지정 세션 재개 | 특정 작업으로 돌아갈 때 |

## CLI 자동화와 인증

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `cursor-agent -p "질문"` | 비대화형 결과 출력 | 스크립트·CI에서 읽기 작업할 때 |
| `cursor-agent -p --output-format json "질문"` | JSON 결과 출력 | 구조화된 후처리가 필요할 때 |
| `cursor-agent login` | 브라우저 로그인 | CLI를 처음 인증할 때 |
| `cursor-agent status` | 인증 상태 확인 | 로그인·엔드포인트 오류를 볼 때 |
| `cursor-agent logout` | 인증 제거 | 장비 반납이나 계정 전환 전 |
| `cursor-agent update` | CLI 업데이트 | 최신 안정 동작을 확인할 때 |

## 안전 메모

비대화형 쓰기를 허용하는 `--force`는 파일을 실제로 바꿀 수 있습니다. 읽기·분석 단계와 게시·커밋 단계를 분리하고, CI에서는 수정 가능 경로와 Git 권한을 별도 단계로 제한하세요.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** Cursor 최신 채널 · Cursor CLI Beta 공식 문서 최신판
</div>
