# Daily Jelly content queue

Internal planning file, not published to the site (lives at the repo root,
outside `src/`, so it never gets built into output). Status values:
`briefed / drafted / scheduled / published / needs-refresh`.

Cluster taxonomy (from the site-optimisation brief, 2026-09-09):
- **A** — Collagen pillar (one page, parent of everything below)
- **B** — Formats & dose (closest to current content — jelly sticks live here as the deepest branch)
- **C** — Practical questions (fast to rank, thin competition)
- **D** — Korean inner-beauty logistics (import/retailer specifics, feeds existing affiliate links)
- **E** — Outcomes & audience
- **F** — Commercial comparisons (money pages, vs named UK incumbents)
- **G** — UK collagen price index (standing page, own template — already live)
- **H** — Peptide skincare — DEFERRED, do not build until A–F established

No orphans: every new article must map to a cluster before it gets written.

## Published (9)

| Title | Slug | Cluster | Published |
|---|---|---|---|
| What Are Korean Collagen Jelly Sticks? | `what-are-korean-collagen-jelly-sticks` | B | 2026-09-01 |
| Jelly Sticks vs Gummies vs Powders | `jelly-sticks-vs-gummies-powders` | B | 2026-09-02 |
| Why Korea Is Snacking on Skincare (inner beauty) | `inner-beauty-trend-uk` | D | 2026-09-03 |
| Do Collagen Jelly Sticks Actually Work? | `do-collagen-jelly-sticks-actually-work` | B | 2026-09-06 |
| What's Actually Inside a Collagen Jelly Stick | `collagen-jelly-stick-benefits-and-ingredients` | B | 2026-09-06 |
| Vegan Collagen Jelly Sticks | `vegan-and-plant-based-collagen-jelly-sticks` | B | 2026-09-06 — already covers the planned Cluster B title "'Vegan collagen' isn't collagen," no duplicate needed |
| Why Boots/Superdrug/H&B Don't Stock Jelly Sticks | `why-boots-superdrug-holland-barrett-dont-stock-jelly-sticks` | D | 2026-09-07 |
| Jelly Sticks vs Liquid Collagen Sachets | `jelly-sticks-vs-liquid-collagen-sachets` | F | 2026-09-07 |
| Six-Way Jelly Stick Reviews | `collagen-jelly-stick-reviews-bb-lab-hamchorok-cloo9-yixo` | B | 2026-09-09 |
| Cutting Jelly vs Collagen Jelly Sticks | `cutting-jelly-vs-collagen-jelly` | D | 2026-09-09 — pulled forward from its 2026-09-16 slot to fix a live 404 from `/where-to-buy`; scheduled task `daily-jelly-publish-cutting-jelly` deleted |

## Scheduled (queued, drip-fed every other day)

| Title | Slug | Cluster | Scheduled |
|---|---|---|---|
| Are Collagen Jelly Sticks Halal? | `are-collagen-jelly-sticks-halal` | B — matches planned "Is collagen halal?" title | 2026-09-10 |
| Does the NHS Recommend Collagen Supplements? | `does-the-nhs-recommend-collagen-supplements` | E | 2026-09-12 |
| Costco Sells a 42-Pack (US comparison) | `costco-collagen-jelly-sticks-uk-alternative` | D | 2026-09-14 |
| Collagen on the Go (travel/commuting) | `collagen-jelly-sticks-vs-powders-on-the-go` | C | 2026-09-18 |
| PDRN in a Jelly Stick? | `pdrn-jelly-sticks-explained` | B | 2026-09-20 |
| Are Collagen Jelly Sticks Only for Women? | `are-collagen-jelly-sticks-only-for-women` | E | 2026-09-22 |
| Best Collagen Jelly Sticks UK (2026) | `best-collagen-jelly-sticks-uk` | F | 2026-09-24 |
| Is There Gelatine in Collagen Jelly Sticks? | `is-there-gelatine-in-collagen-jelly-sticks` | B | 2026-09-26 |

## Standing pages (not part of the drip-feed — updated in place)

| Page | Cluster | Status |
|---|---|---|
| UK Collagen Price Index | G | Live at `/collagen-price-index`, updated periodically (not monthly yet — needs a recurring refresh job per Phase 5) |
| Where to Buy | — | Live, the site's core comparison/buying guide |
| Collagen Pillar | A | Building now — see below |

## Pillar (building now)

| Title | Slug | Cluster | Status |
|---|---|---|---|
| Collagen Supplements Explained: Formats, Doses & What Actually Works | `collagen` | A | drafted |

## Briefed (2026-09-09) — not yet drafted

Per Phase 5: briefs are cheap and don't go stale, so the backlog is briefed
up front even though drafting stays just-in-time. Each brief is target
angle + data required + internal links, not a draft. Volume/difficulty
ranking still needs real data (Search Console / Bing Keyword Tool /
Keyword Planner) shared by the user before these are sequenced into
tranches — see chat 2026-09-09 for the free-tool options. Draft order to
be set after that data lands, prioritising titles flagged "ready" over
titles flagged "needs research."

### Cluster B — Formats & dose

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Collagen peptides vs collagen jelly sticks: what's actually different? | Clears up ingredient (hydrolysed peptides) vs format (jelly stick) confusion | None — reuses verified dose data | `/collagen`; benefits-and-ingredients, evidence roundup | ready |
| What "hydrolysed collagen" means on a UK label | Plain definition + why nearly every UK product states it | None — general food-science fact | `/collagen`; benefits-and-ingredients | ready |
| Are collagen gummies worth it? The dose per sweet, counted | Dose-per-gummy vs stated daily serving, price per 1,000mg vs jelly sticks | **Needs research** — no real UK gummy product data verified yet (H&B own-brand, Vitabiotics Perfectil, etc.) | `/collagen`, `/collagen-price-index`; jelly-sticks-vs-gummies-powders | needs research |
| Type I, II and III collagen: which UK products use which | Deep-dive table extending the pillar's type explainer per featured product | Mostly known; check whether any listing states type explicitly (may be "not stated" — an honest finding either way) | `/collagen`; benefits-and-ingredients | ready |

### Cluster C — Practical questions

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Does collagen break a fast? | Caloric/metabolic fact-based answer, no fasting-protocol advice | **Needs research** — per-stick calorie counts not yet verified for our 6 products | `/collagen`; on-the-go piece | needs research |
| Best time of day to take collagen | Honest answer: no evidence timing matters at studied doses; consistency > timing | None — reuses evidence-roundup | `/collagen`; do-collagen-jelly-sticks-actually-work | ready |
| Can you take collagen with coffee? | Addresses the "heat denatures it" myth; notes this is really a powder-user question — jelly sticks sidestep it entirely | None — general food-science fact | `/collagen`; jelly-sticks-vs-gummies-powders | ready |
| How long does collagen take to work? | Reuses the VERISOL 8-week trial finding directly | None — already verified | `/collagen`; do-collagen-jelly-sticks-actually-work (heavy overlap, but a distinct high-volume query worth its own page) | ready |
| Can you take too much collagen? | Documented safety profile only (no adverse events in the cited review); explicitly not dosing advice, defer to GP/pharmacist for medication interactions | None — reuses evidence piece + existing FAQ safety language | `/collagen`; evidence roundup, FAQ | ready |
| Does collagen make you gain weight? | Calorie-count based factual answer | **Needs research** — same calorie-data gap as "breaks a fast" | `/collagen`; on-the-go, benefits-and-ingredients | needs research |
| Why collagen and vitamin C are sold together | Explains the mechanism behind the one claim we're actually authorised to make | None — directly reinforces existing compliant claim | `/collagen`; what-are-korean-collagen-jelly-sticks | ready |
| Does collagen expire? Storing sticks, sachets and powder | General shelf-stable-formulation explanation; honest "check the pack" for brand-specific shelf life since we don't have that verified | Partial — general framing ready, brand-specific dates not verified | `/collagen`; what-are-korean-collagen-jelly-sticks | ready (with honesty caveat) |

### Cluster E — Audience & outcome

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Collagen for hair: what the evidence shows | Independent literature check — do NOT reuse the skin-specific VERISOL data as if it applies to hair | **Needs research** — dedicated evidence check required, same rigor as the skin evidence piece | `/collagen`; evidence roundup | needs research |
| Collagen for nails | Same — independent evidence check required | **Needs research** | `/collagen`; evidence roundup | needs research |
| Collagen and perimenopause | **Needs the same guardrail as bone health in the original brief**: evidence-review framing only, no medical advice, do not imply collagen "helps with menopause symptoms" | **Needs research**, high care | `/collagen` | needs research + extra care |
| Collagen for joints vs collagen for skin: are they different products? | Clarifies Type I (our sticks) vs Type II (UC-II joint supplements) — a real, common confusion | None — ties directly to the pillar's type section | `/collagen` | ready |
| Collagen in your 60s and beyond: joints and muscle, not skin | Deliberately a different claim from the 30s/50s pieces, not a third repeat of "no ideal starting age" — checked 2026-09-11, there's a genuinely distinct Type I evidence base here: a 2025 RCT (80 adults, 3,000mg/day, 180 days) showing a significant WOMAC/VAS pain reduction in knee OA, and a well-designed RCT (Zdzieblik et al., 53 sarcopenic men, mean age 72.2, 15g/day + resistance training) showing real fat-free-mass and strength gains vs placebo. Bone-density evidence is weaker/mixed — mention as inconclusive, don't lean on it. **Three guardrails, same discipline as elsewhere on site**: (1) studied doses are 3–15g/day, well above the 1–5g a single stick delivers — state this plainly, same pattern as the VERISOL dose-gap note; (2) Type I studies only — explicitly exclude or flag Type II (UC-II) findings as a different product category, per the existing joints-vs-skin piece; (3) evidence-review framing only, same guardrail as perimenopause — never state or imply collagen "helps your joints," since the only UK/EU-authorised claim remains the Vitamin C/skin one regardless of what these trials show | **Needs research** — sources identified (Zdzieblik et al. sarcopenia RCT; 2025 knee OA RCT), full citations and any UK-specific context still need verifying against the primary sources before drafting | `/collagen`; joints-vs-skin piece; starting-in-30s and after-50 pieces; evidence roundup | needs research |
| Starting collagen in your 30s: too early? | Honest "no evidence for an ideal starting age" answer | None | `/collagen`; evidence roundup | ready |
| Collagen after 50 | Same framing; explicitly avoid anti-ageing claim language | None | `/collagen`; evidence roundup | ready |
| Is Collagen Good for Men? What the Evidence Actually Says | Deliberately NOT a "best collagen for men" buying guide — that money term is already occupied by dedicated competitor guides (Revayo, Face Envy London) and Amazon category pages. This is the same honest-evidence-review format as the 30s/50s pieces, aimed at the informational query nobody's answering, with the close pivoting into jelly sticks as a format most men haven't tried. Companion to `are-collagen-jelly-sticks-only-for-women` (that piece argues the format/ingredients aren't gendered; this one is the audience-first entry point, not a mirror of it) | **Needs research** — verify what's actually studied for men specifically before claiming anything: joint/cartilage evidence is mostly Type II (UC-II), a different product category from the Type I sticks we track (see the existing joints-vs-skin piece); don't overstate muscle-mass claims at studied doses | `/collagen`; `are-collagen-jelly-sticks-only-for-women`; joints-vs-skin piece; evidence roundup | needs research |

### Cluster F — Commercial comparisons

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Olive Young collagen: what's worth buying, landed cost included | Extends already-verified Olive Young Global logistics (4–5 day UK shipping, free over $60, tax at checkout) to specific products | **Needs research** — which Olive Young-exclusive products to feature | `/collagen`; vegan guide, inner-beauty-trend-uk | needs research |
| Absolute Collagen: cost per serving, checked | Deeper single-brand profile; core price fact already published in the price index | Partial — price/dose already verified, full review needs more | `/collagen-price-index` | ready (low priority, overlaps standing page) |
| Boots and Holland & Barrett collagen: worth the shelf price? | Natural extension of the existing "why don't they stock jelly sticks" piece — covers what they DO stock instead | **Needs research** — specific SKUs and prices not yet checked | `/collagen`; why-boots-superdrug-holland-barrett-dont-stock-jelly-sticks | needs research |
| BB LAB vs Vitahalo | Direct brand comparison | **Needs research** — Vitahalo hasn't been verified as a real, currently-relevant brand yet; do not brief further until confirmed | — | blocked — verify brand first |
| Revive Collagen vs Absolute Collagen | Direct brand comparison | **Needs research** — Revive Collagen's site returned an expired-certificate error on our last fetch attempt; no verified data | — | blocked — needs a working source |

### Not briefed — flagged, not silently dropped

- **Peptide skincare cluster (6 titles)** — this is Cluster H in the original brief, explicitly marked "DEFERRED, do not build until Clusters A–F established." Left unbriefed on purpose, not an oversight.
- **"Foodology Cutting Jelly vs Colla Q"** — questionable fit. Both are weight-management "cutting jelly" products, not collagen; a head-to-head comparison risks reading as an implicit recommendation for a weight-loss product, conflicting with the site's existing stance ("we explain cutting jelly, we don't sell or recommend it"). Recommend skipping this one rather than briefing it as-is.

## Data ↔ prose coupling — watch on price/dose changes

Several site facts are stated as numbers in `src/lib/config.ts` AND restated
as prose claims in other files. The prose doesn't update automatically when
the config number does, so a price or dose change needs a manual sweep or it
goes stale. Known instance, found 2026-09-09 when the where-to-buy comparison
table gained a "cost per 1,000mg" column and Cloo9 briefly read as
self-contradictory (cheapest per 1,000mg in the table, "by far the most
expensive per stick" in its own con):

- **Cloo9's per-stick price/dose relationship** is asserted in prose in four
  files, independent of the `priceGBP`/`doseMgPerStick` fields in
  `GUIDE_PRODUCTS`: `src/lib/config.ts` (the con itself), `src/pages/where-to-buy.astro`
  (FAQ block), `src/content/guides/collagen-jelly-stick-reviews-bb-lab-hamchorok-cloo9-yixo.md`,
  and `src/content/guides/best-collagen-jelly-sticks-uk.md` (FAQ + body, two
  instances). All four were updated together on 2026-09-09 to state both the
  per-stick and per-1,000mg position rather than just one. If Cloo9's price
  or pack size changes again, re-check these four files, not just the config
  numbers — grep `Cloo9` and `expensive` across `src/` as a starting point.
- This is a pattern, not a one-off: any product whose per-stick and
  per-1,000mg rankings could plausibly invert (a high-dose, high-price
  product) is a candidate for the same staleness next time a price changes.

## Notes on cluster-mapping honesty

Several published/queued articles predate this taxonomy and were mapped to
the closest-fit cluster after the fact — the fit is reasonable but not exact
for a few (e.g. `pdrn-jelly-sticks-explained` is really jelly-stick-specific
caution content, tagged B for lack of a better home). Don't treat these
mappings as more precise than they are.
