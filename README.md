# Daily Jelly

A content-first affiliate site for Korean collagen jelly sticks / inner-beauty snack
formats in the UK. Built with Astro (static output), same stack and editorial pattern
as `uk-coffee-deals`, minus the Airtable/n8n automation layer — this is deliberately a
simple content + affiliate MVP, not an automated deal-alert engine.

## Structure

- `src/pages/` — Home, Guides index, Where to Buy, FAQ, About, Privacy
- `src/content/guides/` — the 3 educational articles (Markdown, Astro content collections)
- `src/lib/config.ts` — site config + the `RETAILERS` list (affiliate partners)
- `src/components/` — GuideCard, RetailerCard, EmailCapture, Disclosure

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Before this goes live, you still need to:

1. **Apply to affiliate programmes.** Links to YesStyle, Little Wonderland, and Soko
   Glam in `src/lib/config.ts` are currently plain outbound links (no tracking ID).
   Once each programme approves the site, swap the `href` for the tagged affiliate
   link they give you. Don't add tracking params before approval — most programmes'
   terms prohibit it.
2. **Wire up the email capture.** `src/components/EmailCapture.astro` has a form with
   `action="#"` — it doesn't submit anywhere yet. Point it at a form backend
   (Formspree, ConvertKit, Mailchimp embed, Buttondown, etc.) and update the `action`
   and field names to match.
3. **Register a real domain** (or pick a Vercel subdomain) and update `SITE.url` in
   `src/lib/config.ts` and `site` in `astro.config.mjs` to match — the sitemap and
   canonical URLs are generated from that value.
4. **Add a real "About" contact address** — `hello@dailyjelly.co.uk` in
   `about.astro` / `privacy.astro` is a placeholder.

## Adding a new guide

Drop a new `.md` file in `src/content/guides/` with this frontmatter:

```yaml
---
title: "Guide Title"
excerpt: "One-sentence summary shown on cards."
readTime: "5 min"
publishDate: "2026-09-10"
---
```

It'll automatically appear on the homepage and `/guides` index, sorted by `publishDate`.

## Deploying

No `vercel.json` — deploy via `vercel` CLI or by importing the repo in the Vercel
dashboard, same as other projects. Framework preset: Astro.
