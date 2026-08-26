---
title: GitHub Copilot 치트시트
description: VS Code와 Copilot CLI 명령어 빠른 참조
sidebar_position: 4
---

# GitHub Copilot 치트시트

> 공식 문서: [VS Code Copilot 치트시트](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features) · [Copilot CLI 명령 레퍼런스](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## VS Code 대화

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `Ctrl+Alt+I` / `Control+Command+I` | Chat 보기 열기 | 질문·편집·Agent 작업을 시작할 때 |
| `Ctrl+I` / `Cmd+I` | 인라인 대화 열기 | 현재 선택 범위를 수정할 때 |
| `@workspace` | 워크스페이스 컨텍스트로 질문 | 저장소 구조나 구현 위치를 찾을 때 |
| `/explain` | 코드 설명 요청 | 낯선 코드의 역할을 파악할 때 |
| `/fix` | 문제 수정 제안 | 선택한 오류를 고칠 때 |
| `/tests` | 테스트 초안 요청 | 선택 코드의 테스트를 만들 때 |
| `#file` | 특정 파일을 컨텍스트로 지정 | 근거 범위를 분명히 할 때 |

## Copilot CLI 세션

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `copilot` | 대화형 CLI 시작 | 터미널에서 에이전트 작업할 때 |
| `copilot init` | 저장소 지침 분석·초안 생성 | `.github/copilot-instructions.md`를 만들 때 |
| `/init` | 현재 세션에서 프로젝트 초기화 | 대화 중 저장소 지침을 만들 때 |
| `/instructions` | 적용 중인 지침 확인·전환 | 규칙 충돌을 확인할 때 |
| `/model` | 사용 모델 확인·선택 | 작업 성격에 맞춰 모델을 바꿀 때 |
| `/clear` | 대화 컨텍스트 초기화 | 다른 작업으로 전환할 때 |
| `/exit` | CLI 종료 | 세션을 마칠 때 |

## Copilot CLI 연결과 진단

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `/mcp list` | MCP 서버 상태 목록 | 연결 문제를 확인할 때 |
| `/mcp add` | MCP 서버 추가 | 검토한 서버를 연결할 때 |
| `/mcp auth 서버명` | 원격 MCP 인증 | OAuth가 필요한 서버를 연결할 때 |
| `/mcp disable 서버명` | MCP 서버 비활성화 | 문제 서버를 지우지 않고 격리할 때 |
| `/list-dirs` | 허용된 디렉터리 목록 | 파일 접근 범위를 확인할 때 |
| `/settings` | CLI 설정 보기·변경 | 권한과 동작을 조정할 때 |
| `/diagnostics` | 진단 정보 표시 | 재현 정보를 수집할 때 |

## 안전 메모

`copilot init`이 만든 지침은 초안입니다. 저장소에 커밋하기 전에 빌드·테스트 명령과 수정 금지 경로가 실제와 맞는지 검토하세요. MCP 쓰기 도구와 자동 실행은 읽기 흐름이 검증된 후에만 허용합니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** GitHub Copilot 최신 서비스 · Copilot CLI 공식 레퍼런스 최신판
</div>
