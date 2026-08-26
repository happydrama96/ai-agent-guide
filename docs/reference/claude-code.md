---
title: Claude Code 치트시트
description: Claude Code CLI와 대화형 명령어 빠른 참조
sidebar_position: 1
---

# Claude Code 치트시트

> 공식 문서: [CLI 레퍼런스](https://docs.anthropic.com/en/docs/claude-code/cli-usage) · [대화형 모드](https://docs.anthropic.com/en/docs/claude-code/interactive-mode)

## 시작과 세션

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude` | 대화형 세션 시작 | 현재 프로젝트에서 작업할 때 |
| `claude "질문"` | 첫 요청과 함께 세션 시작 | 탐색 질문을 바로 보낼 때 |
| `claude -c` | 최근 대화 이어가기 | 직전 작업을 계속할 때 |
| `claude -r` | 세션을 골라 재개 | 예전 작업으로 돌아갈 때 |
| `/clear` | 현재 대화 초기화 | 다른 주제로 완전히 바꿀 때 |
| `/compact` | 대화 내용을 요약해 컨텍스트 절약 | 긴 세션의 초점을 유지할 때 |
| `/exit` | 세션 종료 | 작업을 마칠 때 |

## 프로젝트와 상태

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/init` | 프로젝트 지침 초안 생성 | `CLAUDE.md`를 처음 만들 때 |
| `/memory` | 적용 중인 지침 확인·편집 | 규칙 적용 상태를 볼 때 |
| `/status` | 계정·모델·상태 확인 | 인증과 실행 환경을 점검할 때 |
| `/permissions` | 도구 권한 확인·조정 | 반복 승인이나 차단 원인을 볼 때 |
| `/mcp` | MCP 서버 상태와 인증 관리 | 외부 도구 연결을 점검할 때 |
| `/doctor` | 설치 상태 진단 | 세션 안에서 환경 문제를 확인할 때 |

## 비대화형 실행

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude -p "질문"` | 답을 출력하고 종료 | 파이프라인·간단 조회에 쓸 때 |
| `claude -p --output-format json "질문"` | JSON 결과 출력 | 후속 스크립트가 파싱할 때 |
| `claude -p --max-turns 3 "질문"` | 에이전트 턴 수 제한 | 자동화 비용과 범위를 제한할 때 |
| `claude --model sonnet` | 세션 모델 지정 | 속도·성능 선택을 명시할 때 |
| `claude --add-dir ../shared` | 추가 폴더 접근 허용 | 모노레포 밖 공용 코드를 읽힐 때 |

## 유지관리

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `claude --version` | 설치 버전 출력 | 문제 재현과 업데이트 확인 |
| `claude doctor` | 설치·업데이트 방식 진단 | 실행 파일이 꼬였을 때 |
| `claude update` | 수동 업데이트 | 자동 업데이트를 기다리지 않을 때 |
| `/cost` | 현재 세션 사용량 표시 | 긴 작업의 사용량을 점검할 때 |

## 안전 메모

`--dangerously-skip-permissions`는 승인 경계를 없애므로 이 가이드에서는 사용 예를 제공하지 않습니다. 자동화는 허용 도구, 최대 턴, 작업 디렉터리를 각각 좁히고 사람이 diff를 승인하는 단계와 분리하세요.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** Claude Code 최신 채널 · CLI 공식 레퍼런스 최신판
</div>
