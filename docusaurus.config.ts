import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';
import {existsSync} from 'node:fs';
import localSearchPlugin from './plugins/local-search';

const repositorySlug = process.env.GITHUB_REPOSITORY;
const [organizationName = 'local', projectName = 'ai-agent-guide'] =
  repositorySlug?.split('/') ?? [];
const isOrganizationPage = projectName === `${organizationName}.github.io`;
const productionUrl = `https://${organizationName}.github.io`;
const productionBaseUrl = isOrganizationPage ? '/' : `/${projectName}/`;
const hasGitHistory = existsSync('.git');

const config: Config = {
  title: 'AI Agent 활용 가이드',
  tagline: '설치보다 중요한, 실제로 잘 쓰는 방법',
  favicon: 'img/favicon.svg',
  url: process.env.SITE_URL ?? productionUrl,
  baseUrl: process.env.BASE_URL ?? (repositorySlug ? productionBaseUrl : '/'),
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {label: '한국어', htmlLang: 'ko-KR'},
    },
  },
  plugins: [localSearchPlugin],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: hasGitHistory,
          showLastUpdateAuthor: false,
          exclude: ['_templates/**'],
          editUrl: repositorySlug
            ? `https://github.com/${repositorySlug}/edit/main/`
            : undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {name: 'description', content: 'AI 에이전트를 설치하고 연결하고 실무에 적용하는 한국어 가이드'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Agent 가이드',
      items: [
        {type: 'docSidebar', sidebarId: 'guideSidebar', position: 'left', label: '문서'},
        {to: '/updates/latest', position: 'left', label: '업데이트'},
        ...(repositorySlug
          ? [{href: `https://github.com/${repositorySlug}`, label: 'GitHub', position: 'right' as const}]
          : []),
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '바로가기',
          items: [
            {label: '5분 첫 실행', to: '/getting-started/first-run'},
            {label: '오류 해결', to: '/integrations/troubleshooting'},
          ],
        },
        {
          title: '원칙',
          items: [
            {label: '외부 분석 도구 없음', to: '/about/site-policy'},
            {label: '콘텐츠 관리 규칙', to: '/about/content-guide'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} AI Agent 활용 가이드`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'powershell', 'json', 'yaml', 'markdown'],
    },
    docs: {
      sidebar: {hideable: true, autoCollapseCategories: false},
    },
  } satisfies ThemeConfig,
};

export default config;
