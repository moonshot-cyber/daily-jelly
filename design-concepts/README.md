# Daily Jelly — design concepts (exploration only)

Two standalone concept files, not wired into the live site or the Astro build. Open directly in a browser:

- [`concept-a-spacenk-strategist.html`](./concept-a-spacenk-strategist.html) — premium editorial shop (SpaceNK × The Strategist)
- [`concept-c-tiktok-trust.html`](./concept-c-tiktok-trust.html) — hooky mobile-first scroll into clean buy modules

**Why two, not three:** the brief's own "Wirecutter UK" concept (B) overlaps heavily with content the live site
already has — compare tables, "how we choose," pick logic. A third full visual system built around "more
comparison table" wouldn't be a distinct direction, just a re-skin of A or C with a denser table. Instead, B's
real assets — criteria chips, pick badges, "we checked N UK retailers" trust modules — are built into **both**
A and C as shared components.

All copy, prices, claims, and disclosures inside both mockups are pulled verbatim or near-verbatim from
`src/lib/config.ts` and the published guides — nothing invented, no fake stock/price data, no new claims beyond
the one authorised Vitamin C statement already live on the site.

## Comparison matrix

| | Trust | Shoppability | Gen-Z fit | Premium feel | Rebuild cost |
|---|---|---|---|---|---|
| **A — SpaceNK × Strategist** | High — restraint reads as expertise | Medium-high — plinth cards, clear pricing | Medium — legible to beauty-curious 25–35s, less native to 18–22s | Highest | **M** |
| **C — TikTok → Trust** | Medium — depends on disciplined copy; highest execution risk | High — sticky CTA, bold pick modules, mobile-first | Highest — built for the scroll this audience actually uses | Medium | **M/L** |

## Ranking for an early affiliate site

**Favourite: Concept A.** This site's whole asset is credibility — cautious claims, honest "not stated on the
listing" copy, a real Amazon Associate relationship to protect. A premium-editorial shell amplifies that asset
with the lowest execution risk and the smallest rebuild (mostly a token swap + one new image-staging pattern,
no new bespoke components). It also ages well — SpaceNK's aesthetic isn't tied to a platform trend cycle.

**Runner-up: Concept C.** Real upside on mobile conversion and matches where this audience actually discovers
jelly sticks (TikTok, not Google), but it's the pricier build and it's the one direction where a design choice
could quietly undercut the brand's "no glow claims" mandate if a future contributor pushes the hook copy too far.
Worth prototyping the homepage hook alone, live, before committing the full site to it.

**Kill criteria (if a third concept — "Wirecutter UK" — gets built anyway):** only worth it if a stakeholder
specifically wants a *denser, more clinical* comparison experience than either A or C offers (e.g. a
buying-guide-only landing page, not a full site redesign) — otherwise its content DNA is already present in
both shipped concepts and a standalone build would mostly duplicate them.
