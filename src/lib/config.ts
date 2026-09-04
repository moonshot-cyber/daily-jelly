// Site-wide configuration
// Update these values as the project moves from research → live affiliate site

export const SITE = {
  name: 'Daily Jelly',
  tagline: 'Collagen Jelly Sticks – coming to the UK',
  description:
    "An independent UK guide to Korean collagen jelly sticks and inner-beauty snacks — what they are, how they compare to gummies and powders, and where to buy them.",
  url: 'https://www.dailyjelly.co.uk',
  affiliateDisclosure:
    'This site contains affiliate links. If you buy through one, we may earn a small commission at no extra cost to you. See our disclosure for details.',
  year: new Date().getFullYear(),
};

// Retailer partners. These are plain outbound links for now — swap the `href`
// for a tagged affiliate link once each programme approves the site
// (Little Wonderland: flat-rate affiliate programme; YesStyle: in-house affiliate
// programme; Soko Glam: apply via their affiliate page). Do not add tracking
// params here until an application has actually been approved.
export const RETAILERS = [
  {
    slug: 'yesstyle',
    name: 'YesStyle',
    blurb:
      'The deepest stock of actual jelly-stick SKUs (EVERYDAZE, grn+, FOODOLOGY and more), plus the rest of the inner-beauty aisle. Ships worldwide, including the UK — free shipping over $35, typically 10–14 business days.',
    href: 'https://www.yesstyle.com/en/health-health-beauty-supplements/list.html/bcc.15164_bpt.46',
    tag: 'Best selection',
  },
  {
    slug: 'little-wonderland',
    name: 'Little Wonderland',
    blurb:
      "EU-based K-beauty retailer with faster UK shipping and simpler customs than ordering direct from Korea. Skincare-focused — we couldn't find jelly-stick SKUs in their catalogue as of publishing, but worth a look for other inner-beauty crossover products.",
    href: 'https://www.littlewonderland.eu/en/',
    tag: 'Fastest EU shipping',
  },
  {
    slug: 'soko-glam',
    name: 'Soko Glam',
    blurb:
      "A trusted, editorially curated K-beauty retailer. Skincare-focused — we couldn't find jelly-stick SKUs in their catalogue as of publishing, but worth checking for crossover brands and bundles.",
    href: 'https://sokoglam.com/',
    tag: 'Most trusted brand',
  },
];

// Real jelly-stick product photography, hotlinked directly from each
// retailer's own product page (not downloaded/rehosted) — the image always
// loads from the retailer's CDN and links through to their real product page.
// Verified live on YesStyle (2026-09-04); Little Wonderland and Soko Glam
// don't currently stock jelly-stick SKUs, so there's nothing genuine to show
// for them yet. Re-check these URLs occasionally — retailers do reshuffle
// product photography and can retire SKUs.
export const PRODUCTS = [
  {
    slug: 'everydaze-essential-collagen-jelly-stick',
    name: 'EVERYDAZE Essential Collagen Solution Jelly Stick',
    retailer: 'YesStyle',
    image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/92/884/XXL_p0211888492.jpg',
    href: 'https://www.yesstyle.com/en/everydaze-essential-collagen-solution-jelly-stick-4-types-peach/info.html/pid.1130721642',
  },
  {
    slug: 'grn-volume-up-collagen-jelly',
    name: 'grn+ Volume Up Collagen Jelly',
    retailer: 'YesStyle',
    image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/grn-volume-up-collagen-jelly-15g-x-14-sticks/12/264/XXL_p0219426412.jpg',
    href: 'https://www.yesstyle.com/en/grn-volume-up-collagen-jelly-15g-x-14-sticks/info.html/pid.1134976961',
  },
  {
    slug: 'foodology-collagen-centella-jelly',
    name: 'FOODOLOGY Collagen Centella Jelly',
    retailer: 'YesStyle',
    image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/foodology-collagen-centella-jelly-25g-x-10-sticks/25/294/XXL_p0219429425.jpg',
    href: 'https://www.yesstyle.com/en/foodology-collagen-centella-jelly-25g-x-10-sticks/info.html/pid.1134977380',
  },
];
