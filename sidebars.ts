import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'index',
    {
      type: 'category',
      label: '1. 시작하기',
      items: ['getting-started/comparison', 'getting-started/first-run'],
    },
    {
      type: 'category',
      label: '2. 에이전트별 셋업',
      items: ['setup/claude-code', 'setup/cursor', 'setup/chatgpt', 'setup/copilot'],
    },
    {
      type: 'category',
      label: '3. 연동하기',
      items: ['integrations/mcp', 'integrations/internal-docs', 'integrations/troubleshooting'],
    },
    {
      type: 'category',
      label: '4. 명령어 레퍼런스',
      items: ['reference/claude-code', 'reference/cursor', 'reference/chatgpt', 'reference/copilot'],
    },
    {
      type: 'category',
      label: '5. 플러그인',
      items: [
        'plugins/index',
        'plugins/claude-code',
        'plugins/claude-code-dev-skills',
        'plugins/cursor',
        'plugins/chatgpt',
        'plugins/codex-dev-skills',
        'plugins/copilot',
      ],
    },
    {
      type: 'category',
      label: '6. 활용 패턴',
      items: ['patterns/by-role'],
    },
    {
      type: 'category',
      label: '7. 업데이트 소식',
      items: ['updates/latest'],
    },
    {
      type: 'category',
      label: '사이트 안내',
      collapsed: true,
      items: ['about/site-policy', 'about/content-guide'],
    },
  ],
};

export default sidebars;
