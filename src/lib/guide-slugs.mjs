import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GUIDES_DIR = join(__dirname, '..', 'content', 'guides');

// Reads frontmatter directly off disk (not via Astro's content collection
// API, which isn't reliably available yet at astro.config.mjs eval time) so
// the rehype-guide-links plugin knows, at build start, which /guides/<slug>
// targets are actually going to exist as live pages.
export function getPublishedGuideSlugs() {
  const slugs = new Set();
  for (const filename of readdirSync(GUIDES_DIR)) {
    if (!filename.endsWith('.md')) continue;
    const raw = readFileSync(join(GUIDES_DIR, filename), 'utf-8');
    const frontmatter = raw.split('---')[1] ?? '';
    const isDraft = /^draft:\s*true\s*$/m.test(frontmatter);
    if (!isDraft) slugs.add(filename.replace(/\.md$/, ''));
  }
  return slugs;
}
