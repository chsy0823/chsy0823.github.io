import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypeMermaid from 'rehype-mermaid';
import rehypeShiki from '@shikijs/rehype';

// Dark editorial 팔레트에 맞춘 mermaid 테마.
// CLAUDE.md 색상표와 일치시킬 것 (변경 시 동기화).
const mermaidConfig = {
  theme: 'base',
  fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
  themeVariables: {
    background: '#0a0a0a',
    primaryColor: '#141414', // 노드 배경
    primaryTextColor: '#e4e4e7',
    primaryBorderColor: '#2dd4bf', // teal-400
    secondaryColor: '#1c1c1c',
    tertiaryColor: '#0f0f0f',
    lineColor: '#71717a',
    textColor: '#e4e4e7',
    nodeTextColor: '#e4e4e7',
    clusterBkg: '#0f0f0f',
    clusterBorder: '#1c1c1c',
    titleColor: '#e4e4e7',
    edgeLabelBackground: '#0a0a0a',
  },
};

export default defineConfig({
  site: 'https://chsy0823.github.io',
  markdown: {
    // 내장 Shiki 를 끄고 rehype 체인에서 직접 순서 제어: mermaid → SVG 변환 후 나머지 코드블록 highlight.
    syntaxHighlight: false,
    // 순서 중요: mermaid 를 먼저 SVG 로 변환(코드노드 제거)한 뒤, 나머지 코드블록만 Shiki 로 highlight.
    // inline-svg: 빌드 타임에 chromium 으로 SVG 렌더링 → 클라이언트 JS 0.
    // MDX 는 기본적으로 이 markdown 설정을 상속한다.
    rehypePlugins: [
      [rehypeMermaid, { strategy: 'inline-svg', mermaidConfig }],
      [rehypeShiki, { theme: 'github-dark' }],
    ],
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
});
