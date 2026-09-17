// Flips draft:true -> draft:false on any guide whose publishDate has
// arrived. Run by .github/workflows/publish-scheduled-guides.yml on a daily
// cron, so publishing no longer depends on a local machine being awake at
// a specific fire time — the local scheduled-tasks mechanism this replaces
// stalled silently four times (day2, reviews, halal, costco all fired but
// never actually committed).
//
// Deliberately date-driven rather than one task per article: any guide
// with draft:true and a publishDate <= today gets published automatically,
// so a new article only needs draft:true + a publishDate in its
// frontmatter — no separate scheduled task to create per article.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GUIDES_DIR = join(__dirname, '..', 'src', 'content', 'guides');

const todayUTC = new Date().toISOString().slice(0, 10); // YYYY-MM-DD, UTC

const published = [];

for (const filename of readdirSync(GUIDES_DIR)) {
  if (!filename.endsWith('.md')) continue;
  const filePath = join(GUIDES_DIR, filename);
  const raw = readFileSync(filePath, 'utf-8');

  if (!/^draft:\s*true\s*$/m.test(raw)) continue;

  const dateMatch = raw.match(/^publishDate:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/m);
  if (!dateMatch) continue; // no parseable date -- leave it alone, don't guess
  const publishDate = dateMatch[1];

  if (publishDate > todayUTC) continue; // not due yet

  const updated = raw.replace(/^draft:\s*true\s*$/m, 'draft: false');
  writeFileSync(filePath, updated, 'utf-8');
  published.push(filename.replace(/\.md$/, ''));
}

// Single machine-parseable line the workflow greps for, plus a human-
// readable summary for the Actions log.
console.log(`PUBLISHED:${published.join(',')}`);
if (published.length > 0) {
  console.log(`Published ${published.length} guide(s): ${published.join(', ')}`);
} else {
  console.log('Nothing due today -- no changes.');
}
