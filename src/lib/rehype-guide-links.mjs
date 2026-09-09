import { visit } from 'unist-util-visit';

// Unwraps any <a href="/guides/<slug>"> whose slug isn't in the published
// set — the link text survives as plain inline content, so a forward
// reference to a not-yet-published (or mistyped) guide degrades to prose
// instead of shipping as a live 404. Applies to every guide body
// automatically, including future ones — nobody has to remember to wrap a
// cross-reference in anything special.
//
// Catches both markdown-syntax links and raw inline <a> HTML written
// directly in .md source, since by the time rehype runs both have already
// been unified into the same hast tree (unlike a remark plugin, which would
// only see markdown-syntax links and treat raw HTML as an opaque string).
export default function rehypeGuideLinks(options = {}) {
  const publishedSlugs = options.publishedSlugs ?? new Set();

  return (tree, file) => {
    const matches = [];
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'a' || !parent || index === null) return;
      const href = node.properties?.href;
      if (typeof href !== 'string' || !href.startsWith('/guides/')) return;
      const slug = href.replace(/^\/guides\//, '').replace(/\/$/, '');
      if (publishedSlugs.has(slug)) return;
      matches.push({ node, index, parent, slug });
    });

    // Reverse order so splicing an earlier match doesn't shift the index of
    // a later match within the same parent.
    for (const { node, index, parent, slug } of matches.reverse()) {
      parent.children.splice(index, 1, ...node.children);
      const source = file.path ?? file.history?.[0] ?? 'unknown file';
      // Deliberately visible at every build: a typo'd or stale slug degrades
      // silently to plain text with no other signal, so this warning is the
      // only thing that turns it into something a person notices. Anything
      // in this list that isn't a known queued article (check
      // content-queue.md) is a typo, not a pending publish.
      console.warn(`[rehype-guide-links] unwrapped /guides/${slug} in ${source} — not a live slug (draft, unpublished, or a typo)`);
    }
  };
}
