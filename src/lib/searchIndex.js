import fs from 'fs';
import path from 'path';
import { getCollection } from 'astro:content';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { pageRoutes } from './navigation.js';
import { flattenGrimmiLabels } from './sidebarConfig.js';

/* -------------------------------
 * Markdown → 순수 텍스트
 * ------------------------------- */
export async function extractPlainText(markdown) {
  if (!markdown) return '';

  const cleaned = markdown
    .replace(/^import\s+.*from\s+['"].*['"];?$/gm, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(cleaned);

  return String(result)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-zA-Z#0-9]+;/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/* -------------------------------
 * Astro 파일 → 순수 텍스트
 * ------------------------------- */
export function extractAstroText(fileContent) {
  return fileContent
    .replace(/---[\s\S]*?---/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\{[\s\S]*?\}/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ') 
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/* -------------------------------
 * 폴더 재귀 탐색
 * ------------------------------- */
function getAstroFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(getAstroFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.astro')) results.push(fullPath);
  }
  return results;
}

/* -------------------------------
 * 전체 검색 데이터 생성
 * ------------------------------- */
export async function generateSearchData(locale = 'ko') {
  // ① MDX
  const allDocs = await getCollection('docs', e => e.id.startsWith(`${locale}/commands/`));
  const mdxSearchData = await Promise.all(
    allDocs.map(async (doc) => {
      const plain = await extractPlainText(doc.body);
      const text = plain.toLowerCase();
      const slug = doc.id.replace(/\.mdx?$/, '');
      return {
        id: slug,
        title: doc.data.title || slug,
        titleLower: (doc.data.title || slug).toLowerCase(),
        content: plain.slice(0, 500),
        fullContent: plain,
        fullLower: text,
        url: `/eg-bim_guide/help/${slug}`,
        category: 'mdx',
        type: 'mdx'
      };
    })
  );

  // ② 메뉴
  const menuSearchData = pageRoutes
    .filter(r => r.path?.startsWith('/'))
    .map(route => {
      const rawTitle = route.title || path.basename(route.path);
      const titleText = rawTitle.startsWith('가이드-') ? rawTitle.substring(4) : rawTitle;
      return {
        id: route.path,
        title: titleText,
        titleLower: titleText.toLowerCase(),
        content: '',
        fullContent: '',
        fullLower: '',
        url: `/eg-bim_guide/help${route.path}`,
        category: 'menu',
        type: 'menu'
      };
    });

  // ③ 실제 Astro 파일 (locale에 맞는 파일만: ko는 sub/ 루트, en은 sub/en/ 하위)
  const subRoot = path.resolve('./src/content/sub');
  const allSubFiles = getAstroFiles(subRoot);
  const subFiles = allSubFiles.filter(filePath => {
    const isEnFile = path.relative(subRoot, filePath).split(path.sep)[0] === 'en';
    return locale === 'en' ? isEnFile : !isEnFile;
  });
  const grimmiLabels = flattenGrimmiLabels(locale);
  const subSearchData = subFiles.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const text = extractAstroText(content);
    const fileName = path.basename(filePath, '.astro');
    const slug = locale === 'en' ? `en/${fileName}` : fileName;

    // ✅ 좌측 nav(sidebarConfig/sidebarLabels)와 동일한 라벨을 title로 사용
    let title = grimmiLabels[slug] ||
      content.match(/<title>(.*?)<\/title>/i)?.[1] ||
        content.match(/<h1[^>]*>(.*?)<\/h1>/i)?.[1] ||
        fileName;

    return {
      id: slug,
      title,
      titleLower: title.toLowerCase(),
      content: text.slice(0, 500),
      fullContent: text,
      fullLower: text.toLowerCase(),
      url: `/eg-bim_guide/help/${slug}`,
      category: 'astro-file',
      type: 'astro-file'
    };
  });

  return [...mdxSearchData, ...menuSearchData, ...subSearchData];
}
