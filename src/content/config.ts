import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    publishDate: z.string(),
    // Written but not yet due to ship, per the staggered publish schedule.
    // Filtered out of every collection read (index, [slug] routes, homepage)
    // so committing a draft has zero effect on the live site — publishing is
    // the draft:true -> false flip, not the first commit.
    draft: z.boolean().default(false),
    dateModified: z.string().optional(),
    // Real, already-hotlinked retailer product photography reused for this
    // article's social-share preview and Article schema image — never a new
    // or fabricated image. Omit rather than invent one if nothing fits.
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    // Optional FAQ block — single source of truth for both the visible FAQ
    // section on the page and its matching FAQPage JSON-LD, so the two can
    // never drift out of sync.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { guides };
