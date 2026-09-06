// Site-wide configuration
// Update these values as the project moves from research → live affiliate site

export const SITE = {
  name: 'Daily Jelly',
  tagline: 'Collagen Jelly Sticks – coming to the UK',
  description:
    "An independent UK guide to Korean collagen jelly sticks and inner-beauty snacks — what they are, how they compare to gummies and powders, and where to buy them.",
  url: 'https://dailyjelly.co.uk',
  affiliateDisclosure:
    'This site contains affiliate links. If you buy through one, we may earn a small commission at no extra cost to you. See our disclosure for details.',
  year: new Date().getFullYear(),
};

// Homepage teaser strip — real jelly-stick product photography, hotlinked
// directly from each retailer's own product page (not downloaded/rehosted).
// Verified live on YesStyle (2026-09-04). Re-check occasionally — retailers
// reshuffle product photography and retire SKUs. For the researched "best
// of" buying guide (different, wider product set), see GUIDE_PRODUCTS below.
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

// The researched "where to buy" buying guide — five products, checked live
// against each brand/retailer's own product page (2026-09-05). Facts here
// are sourced from the seller's own listing (pack size, price, labelled
// dose) — treat prices as a snapshot, not a live feed, and re-check before
// publishing an update. Do NOT add invented mg/claims figures — if a fact
// can't be confirmed from the source, say so in the copy instead of guessing.
export const GUIDE_PRODUCTS = [
  {
    slug: 'bb-lab-pomegranate-collagen-s',
    name: 'BB LAB Pomegranate Collagen S',
    bestFor: 'Best overall — the most "original" Korean stick',
    quickPick: 'overall',
    type: 'Marine (fish) collagen',
    packSize: '14 sticks, 20g each',
    dose: '~1,000mg fish collagen + 18,600mg pomegranate concentrate per stick (as labelled)',
    dailyUse: '1 stick a day',
    priceGBP: '£18–24 per pack of 14',
    pricePerServing: '~£1.30–1.70 per stick',
    ukPath: [
      { name: 'YesStyle', href: 'https://www.yesstyle.com/en/nutrione-bb-lab-pomegranate-collagen-s-20g-x-14-sticks/info.html/pid.1120234762' },
      { name: 'Stylevana', href: 'https://www.stylevana.com/en_EU/bb-lab-pomegranate-collagen-s-20g-14-packets-3ea-set.html' },
    ],
    pros: [
      'The Olive Young–famous format — closest thing to "the original" Korean jelly stick',
      'Fish collagen and pomegranate concentrate amounts are clearly labelled',
    ],
    cons: [
      'No UK high-street stockist — international checkout either way',
      'Contains fish collagen — worth checking against any allergy',
    ],
    image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/19/869/XXL_p0189986919.jpg',
    imageRetailer: 'YesStyle',
  },
  {
    slug: 'foodology-collagen-centella',
    name: 'FOODOLOGY Collagen Centella Jelly',
    bestFor: 'Best for wider retailer stock',
    quickPick: 'uk-path',
    type: 'As labelled by FOODOLOGY',
    packSize: '10 sticks, 25g each',
    dose: "Collagen peptides + Centella Asiatica extract — we couldn't confirm an exact mg figure from the listing, check the pack",
    dailyUse: '1 stick a day',
    priceGBP: '£14–22 per pack of 10',
    pricePerServing: '~£1.40–2.20 per stick',
    ukPath: [
      { name: 'YesStyle', href: 'https://www.yesstyle.com/en/foodology-collagen-centella-jelly-25g-x-10-sticks/info.html/pid.1134977380' },
    ],
    pros: [
      'Stocked across several Korean-beauty resellers, so easier to find in stock than most',
      'Centella Asiatica is a well-known, well-studied K-beauty skin-soothing ingredient',
    ],
    cons: [
      'Smaller 10-stick pack — check the price per stick, not just the pack price',
      "Don't confuse with FOODOLOGY's separate 'Cutting' jelly — that's a fibre product, not collagen",
    ],
    image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/foodology-collagen-centella-jelly-25g-x-10-sticks/25/294/XXL_p0219429425.jpg',
    imageRetailer: 'YesStyle',
  },
  {
    slug: 'cloo9-collagen-jelly',
    name: 'Cloo9 Collagen Jelly',
    bestFor: 'Best high-dose, UK-facing DTC brand',
    quickPick: false,
    type: 'Marine collagen (hydrolysed, Type I)',
    packSize: '28 sticks per pack (Peach or Cherry)',
    dose: '5,000mg marine collagen per stick, as stated by Cloo9',
    dailyUse: '1 stick a day, no water needed',
    priceGBP: '£64 per pack of 28',
    pricePerServing: '~£2.29 per stick',
    ukPath: [
      { name: 'Cloo9 (direct)', href: 'https://www.cloo9.com/products/collagen-jelly-peach' },
    ],
    pros: [
      'The highest labelled dose of the five (5,000mg vs. ~1,000–2,500mg elsewhere)',
      'Sold direct in GBP with UK delivery — no international checkout',
    ],
    cons: [
      'By far the most expensive per stick here',
      "Newer, smaller brand — much less of a track record than the Korean imports",
    ],
    image: 'https://www.cloo9.com/cdn/shop/files/Peach_Collagen_Jelly.1_1919611a-4725-44a0-b1d0-2110b5d05e77.jpg?v=1761239312&width=800',
    imageRetailer: 'Cloo9',
  },
  {
    slug: 'yixo-vegan-collagen-jelly',
    name: 'YIXO Vegan Collagen Jelly',
    bestFor: 'Best vegan option',
    quickPick: 'vegan',
    type: 'Vegan / plant-based',
    packSize: '21 jellies — a "7-day ritual" at 3 per day, not a 1-a-day stick like the others',
    dose: 'Plant-based collagen-support peptides + Vitamin C + Hyaluronic Acid, as labelled',
    dailyUse: '3 jellies a day for 7 days',
    priceGBP: '£26 per pack of 21',
    pricePerServing: '~£1.24 per jelly — but you eat 3 a day, so ~£3.71/day',
    ukPath: [
      { name: 'YIXO (direct)', href: 'https://yixo.co.uk/pages/collagen-jelly' },
    ],
    pros: [
      'UK-based brand — the fastest, simplest delivery of the five',
      'The only genuinely vegan option on this list',
    ],
    cons: [
      '"Vegan collagen" is marketing shorthand — there\'s no plant equivalent of animal collagen, so this is a collagen-support blend, not collagen itself',
      'You eat 3 jellies a day, not 1 — the real daily cost is higher than the pack price suggests',
    ],
    image: 'https://yixo.co.uk/cdn/shop/files/YIXO_vegan_collagen_non-alcoholic_jellies.png?v=1777243406&width=1536',
    imageRetailer: 'YIXO',
  },
  {
    slug: 'now-foods-collagen-jelly-beauty-complex',
    name: 'NOW Foods Collagen Jelly Beauty Complex',
    bestFor: 'Best from a retailer you already trust',
    quickPick: false,
    type: 'Bovine collagen (VERISOL)',
    packSize: '10 sticks (Sweet Orange or Sweet Plum)',
    dose: '2.5g hydrolysed bovine collagen (Types I & III, VERISOL) per stick, as labelled',
    dailyUse: '1 stick a day',
    priceGBP: '£16.03 per pack of 10',
    pricePerServing: '~£1.60 per stick',
    ukPath: [
      { name: 'Welzo', href: 'https://welzo.com/products/now-foods-collagen-jelly-beauty-complex-10-jelly-sticks' },
    ],
    pros: [
      'NOW Foods is an established supplement brand most UK shoppers already recognise',
      'Bought from a UK pharmacy-style retailer, not an international K-beauty importer',
    ],
    cons: [
      'Bovine, not marine, collagen — a different source if that matters to you',
      "Less of the Korean 'inner beauty snack' framing — closer to a conventional supplement in jelly form",
    ],
    image: 'https://welzo.com/cdn/shop/files/image_2024-07-05_6687c4b04b07d.jpg?v=1752225608&width=1500',
    imageRetailer: 'Welzo',
  },
];
