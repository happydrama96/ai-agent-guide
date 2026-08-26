---
title: 사이트 운영 원칙
description: 정적 사이트, 개인정보, 검색과 분석 도구 정책
sidebar_position: 1
---

# 사이트 운영 원칙

> 공식 문서: [Docusaurus 정적 사이트 빌드](https://docusaurus.io/docs/installation) · [GitHub Pages 배포](https://docusaurus.io/docs/deployment/github-pages)

이 사이트는 내가 쓰고, 필요한 사람이 읽는 공개 정적 문서입니다.

## 기술 범위

| 항목 | 사용 여부 | 구현 |
| --- | --- | --- |
| Markdown 문서 | 사용 | Git에서 버전 관리 |
| 정적 HTML·CSS·JavaScript | 사용 | Docusaurus 빌드 결과만 배포 |
| 로컬 검색 | 사용 | 빌드된 인덱스를 방문자 브라우저에서 조회 |
| 코드·프롬프트 복사 | 사용 | Docusaurus 코드블록 기본 복사 버튼 |
| 다크모드·모바일 | 사용 | 테마 기본 기능과 반응형 CSS |
| 로그인·사용자 입력 | 미사용 | 폼과 계정 기능 없음 |
| DB·백엔드 API | 미사용 | 서버 애플리케이션 없음 |
| 외부 분석 도구 | 미사용 | 방문자 추적 스크립트 없음 |

## 자동으로 표시되는 수정일

문서 페이지 하단의 수정 시간은 Git 이력에서 자동 계산합니다. 정확한 시간을 표시하려면 GitHub Actions가 전체 이력을 내려받아 빌드해야 하며, 배포 워크플로에 `fetch-depth: 0`을 설정했습니다.

콘텐츠의 “최종 확인일”은 자동 수정일과 다릅니다. 전자는 벤더 공식 문서와 실제 사용법을 마지막으로 검증한 날이고, 후자는 Markdown 파일 자체가 바뀐 날입니다.

## 외부 링크

공식 문서 링크를 열면 해당 벤더의 개인정보·쿠키 정책이 적용됩니다. 이 사이트는 외부 페이지의 변경이나 계정별 기능 제공을 보장하지 않습니다.

<div className="guide-meta">
**최종 확인일:** 2026-08-26  
**기준 버전:** Docusaurus 3.10.2 · GitHub Pages Actions 배포
</div>
