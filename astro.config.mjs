import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeRaw from 'rehype-raw';
import rehypeGuideLinks from './src/lib/rehype-guide-links.mjs';
import { getPublishedGuideSlugs } from './src/lib/guide-slugs.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://dailyjelly.co.uk',
  integrations: [sitemap()],
  build: {
    assets: '_assets'
  },
  markdown: {
    rehypePlugins: [
      // Astro's default pipeline passes raw HTML embedded in markdown
      // through as an opaque 'raw' node, not a structured element — so a
      // hand-written <a href="/guides/..."> in an article body is invisible
      // to a plugin that only visits 'element' nodes. rehype-raw parses
      // those raw strings into real elements first, so rehype-guide-links
      // (which must run after it) can see and unwrap them the same way it
      // handles ordinary markdown-syntax links.
      rehypeRaw,
      [rehypeGuideLinks, { publishedSlugs: getPublishedGuideSlugs() }],
    ],
  }
});
