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

## 정기 자동 업데이트

`.github/workflows/update-docs.yml`이 매주 월요일 09:00(KST)에 Claude로 벤더 공식 변경 기록을 확인하고, 사용법이 바뀐 내용이 있으면 문서를 고쳐 `docs/auto-update` 브랜치로 PR을 엽니다. PR을 확인하고 머지하면 배포 워크플로가 사이트를 갱신합니다. 반영할 변화가 없으면 PR을 만들지 않습니다.

1. **Settings → Secrets and variables → Actions → New repository secret**에 `ANTHROPIC_API_KEY`를 추가합니다. Claude 구독을 쓰려면 로컬에서 `claude setup-token`으로 만든 토큰을 `CLAUDE_CODE_OAUTH_TOKEN`으로 넣고, 워크플로의 인증 줄을 바꿉니다.
2. **Settings → Actions → General → Workflow permissions**에서 **Allow GitHub Actions to create and approve pull requests**를 켭니다.
3. **Actions → Weekly docs update → Run workflow**로 한 번 수동 실행해 동작을 확인합니다.

## 콘텐츠 작성

- `docs/_templates/`에서 섹션별 템플릿을 복사합니다. 이 폴더는 빌드 대상에서 제외됩니다.
- 모든 공개 문서 상단에는 벤더 공식 문서 링크, 하단에는 `최종 확인일 / 기준 버전`을 둡니다.
- 코드와 프롬프트는 fenced code block으로 작성하면 테마의 복사 버튼이 자동으로 붙습니다.
- 문서 최종 수정일은 Git 이력을 바탕으로 각 페이지 하단에 자동 표시됩니다.

## 데이터 처리

검색 인덱스는 빌드 시 생성되어 브라우저에서만 조회됩니다. 분석 스크립트, 쿠키 배너, 원격 검색 서비스를 포함하지 않습니다.
