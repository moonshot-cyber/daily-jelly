// Draft previews for QA.
//
// Vercel sets VERCEL_ENV=preview on every PR/branch deployment and
// VERCEL_ENV=production on the live site. On preview builds only, draft
// guides are built as real pages (with a "draft preview" banner and
// noindex) and listed at /drafts/, so an article can be read in the site's
// real layout before its PR is merged. Production and the GitHub Actions
// publish workflow never set VERCEL_ENV=preview, so drafts stay out of the
// live site exactly as before.
//
// Locally: PREVIEW_DRAFTS=1 npm run build (or npm run dev).
export const SHOW_DRAFTS =
  process.env.VERCEL_ENV === 'preview' || process.env.PREVIEW_DRAFTS === '1';
