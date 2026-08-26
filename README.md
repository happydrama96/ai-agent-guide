# AI Agent 활용 가이드

Docusaurus와 Markdown으로 만든 정적 문서 사이트입니다. 로그인, DB, 백엔드 API, 외부 분석 도구를 사용하지 않습니다.

## 로컬 실행

| 명령어 | 하는 일 | 언제 쓰나 |
| --- | --- | --- |
| `npm install` | 의존성 설치 | 처음 내려받았을 때 |
| `npm run start` | 개발 서버 실행 | 문서를 쓰며 미리 볼 때 |
| `npm run build` | 정적 파일 생성 및 링크 검사 | 배포 전 확인할 때 |
| `npm run serve` | 빌드 결과 로컬 제공 | 실제 배포 형태를 확인할 때 |

## GitHub Pages 배포

1. 저장소 기본 브랜치를 `main`으로 둡니다.
2. 저장소에서 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
3. `main`에 push하면 `.github/workflows/deploy.yml`이 빌드하고 배포합니다.

`docusaurus.config.ts`가 `GITHUB_REPOSITORY`를 읽어 사용자/조직 페이지와 프로젝트 페이지의 URL을 자동 계산합니다. 커스텀 도메인은 `SITE_URL`, `BASE_URL` 환경 변수로 덮어쓸 수 있습니다.

## 콘텐츠 작성

- `docs/_templates/`에서 섹션별 템플릿을 복사합니다. 이 폴더는 빌드 대상에서 제외됩니다.
- 모든 공개 문서 상단에는 벤더 공식 문서 링크, 하단에는 `최종 확인일 / 기준 버전`을 둡니다.
- 코드와 프롬프트는 fenced code block으로 작성하면 테마의 복사 버튼이 자동으로 붙습니다.
- 문서 최종 수정일은 Git 이력을 바탕으로 각 페이지 하단에 자동 표시됩니다.

## 데이터 처리

검색 인덱스는 빌드 시 생성되어 브라우저에서만 조회됩니다. 분석 스크립트, 쿠키 배너, 원격 검색 서비스를 포함하지 않습니다.
