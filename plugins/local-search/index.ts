import type {LoadContext, Plugin} from '@docusaurus/types';
import {promises as fs} from 'node:fs';
import path from 'node:path';

type SearchDocument = {
  title: string;
  description: string;
  content: string;
  url: string;
};

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function frontMatterValue(frontMatter: string, key: string): string | undefined {
  const match = frontMatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, '');
}

function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function markdownFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return entry.name === '_templates' ? [] : markdownFiles(fullPath);
      }
      return /\.mdx?$/.test(entry.name) ? [fullPath] : [];
    }),
  );
  return nested.flat();
}

async function createDocuments(siteDir: string): Promise<SearchDocument[]> {
  const docsDir = path.join(siteDir, 'docs');
  const files = await markdownFiles(docsDir);
  return Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, 'utf8');
      const frontMatter = raw.match(FRONT_MATTER)?.[1] ?? '';
      const body = raw.replace(FRONT_MATTER, '');
      const relative = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
      const slug = frontMatterValue(frontMatter, 'slug');
      const title = frontMatterValue(frontMatter, 'title') ?? body.match(/^#\s+(.+)$/m)?.[1] ?? relative;
      const description = frontMatterValue(frontMatter, 'description') ?? '';
      return {
        title,
        description,
        content: plainText(body),
        url: slug === '/' ? '/' : `/${slug ?? relative}`,
      };
    }),
  );
}

export default function localSearchPlugin(context: LoadContext): Plugin<SearchDocument[]> {
  return {
    name: 'local-search',
    async loadContent() {
      return createDocuments(context.siteDir);
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData({documents: content});
    },
  };
}
