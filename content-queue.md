# Daily Jelly content queue

Internal planning file, not published to the site (lives at the repo root,
outside `src/`, so it never gets built into output). Status values:
`briefed / drafted / scheduled / published / needs-refresh`.

**Awin**: account activated 2026-09-14, publisher ID 3091169. The temporary
`HELLO AWIN` ownership-verification text on `/about` (added 2026-09-11,
commit `8dd5a52`) was removed the same day, once confirmed. Next step is
applying to individual advertiser programmes in the Awin directory — not
started yet.

Cluster taxonomy (from the site-optimisation brief, 2026-09-09; restructured
into live `/guides/<slug>` hub pages on 2026-09-11 — see "Cluster hub
restructure" below):
- **A** — Collagen pillar (one page, parent of everything below)
- **B** → hub `types-and-ingredients` ("Types & Ingredients") — closest to
  current content, jelly sticks live here as the deepest branch
- **C** → hub `common-questions` ("Common Questions") — fast to rank, thin
  competition
- **D** → hub `korean-imports` ("Korean Imports & UK Availability") —
  import/retailer specifics, feeds existing affiliate links
- **E** → hub `right-for-me` ("Is It Right For Me?") — audience & outcomes
- **F** → hub `comparisons` ("Buying Comparisons") — money pages, vs named
  UK incumbents
- **G** — UK collagen price index (standing page, own template — already live)
- **H** — Peptide skincare — DEFERRED, do not build until A–F established

No orphans: every new article must map to a cluster before it gets written.
`cluster` is now a required field in the content schema (`src/content/config.ts`)
— a new article with no cluster fails the build.

## Cluster hub restructure (2026-09-11)

`/guides` changed from a flat, recency-paginated list to a cluster index —
one section per hub above, each linking to `/guides/<hub-slug>` (paginated
internally at 12/page, though no hub needs pagination yet). The old flat
"newest first" list still exists at `/guides/latest`. Homepage "Start here"
changed from latest-6 to one-article-per-cluster, for the same reason the
restructure happened at all: recency was starting to show an unrepresentative
slice (mostly B/D) with zero visibility into thinner clusters.

Two articles moved cluster as part of this restructure, both confirmed by
re-reading the actual content, not just the title:
- `do-collagen-jelly-sticks-actually-work`: **B → C** (`common-questions`).
  It's a general "does it work" evidence piece, not format-specific — every
  briefed C-cluster title already cited it as their evidence source, which
  settled it.
- `are-collagen-jelly-sticks-halal`: **B → E** (`right-for-me`). Re-read in
  full — it's a dietary-compliance audience question, the same shape as the
  men's/women's/NHS pieces, not a format or dose question. Only tagged B
  originally because it filled a planned B-title slot.

**PDRN flagged, not resolved**: `pdrn-jelly-sticks-explained` has now been
called an imperfect fit for `types-and-ingredients` twice (originally in the
cluster-mapping honesty note below, now again during this restructure). It's
ingredient-specific *caution* content, not a format/dose comparison — it may
be the first member of a safety-focused cluster that doesn't exist yet
(other candidates if one gets built: any future ingredient-safety piece,
possibly the deferred Cluster H peptide-skincare content). Left in
`types-and-ingredients` for now rather than forced into a better-sounding
but still-wrong home. Revisit once there's a second article that would
actually justify a new cluster — one article isn't enough to split the
taxonomy for.

## Published (9)

| Title | Slug | Cluster | Published |
|---|---|---|---|
| What Are Korean Collagen Jelly Sticks? | `what-are-korean-collagen-jelly-sticks` | B | 2026-09-01 |
| Jelly Sticks vs Gummies vs Powders | `jelly-sticks-vs-gummies-powders` | B | 2026-09-02 |
| Why Korea Is Snacking on Skincare (inner beauty) | `inner-beauty-trend-uk` | D | 2026-09-03 |
| Do Collagen Jelly Sticks Actually Work? | `do-collagen-jelly-sticks-actually-work` | C (moved from B 2026-09-11, see restructure note above) | 2026-09-06 |
| What's Actually Inside a Collagen Jelly Stick | `collagen-jelly-stick-benefits-and-ingredients` | B | 2026-09-06 |
| Vegan Collagen Jelly Sticks | `vegan-and-plant-based-collagen-jelly-sticks` | B | 2026-09-06 — already covers the planned Cluster B title "'Vegan collagen' isn't collagen," no duplicate needed |
| Why Boots/Superdrug/H&B Don't Stock Jelly Sticks | `why-boots-superdrug-holland-barrett-dont-stock-jelly-sticks` | D | 2026-09-07 |
| Jelly Sticks vs Liquid Collagen Sachets | `jelly-sticks-vs-liquid-collagen-sachets` | F | 2026-09-07 |
| Six-Way Jelly Stick Reviews | `collagen-jelly-stick-reviews-bb-lab-hamchorok-cloo9-yixo` | B | 2026-09-09 |
| Cutting Jelly vs Collagen Jelly Sticks | `cutting-jelly-vs-collagen-jelly` | D | 2026-09-09 — pulled forward from its 2026-09-16 slot to fix a live 404 from `/where-to-buy`; scheduled task `daily-jelly-publish-cutting-jelly` deleted |

## Scheduled (queued, drip-fed every other day)

| Title | Slug | Cluster | Scheduled |
|---|---|---|---|
| Are Collagen Jelly Sticks Halal? | `are-collagen-jelly-sticks-halal` | E (moved from B 2026-09-11, see restructure note above) | 2026-09-10 |
| Does the NHS Recommend Collagen Supplements? | `does-the-nhs-recommend-collagen-supplements` | E | 2026-09-12 |
| Costco Sells a 42-Pack (US comparison) | `costco-collagen-jelly-sticks-uk-alternative` | D | 2026-09-14 |
| Collagen on the Go (travel/commuting) | `collagen-jelly-sticks-vs-powders-on-the-go` | C | 2026-09-18 |
| PDRN in a Jelly Stick? | `pdrn-jelly-sticks-explained` | B | 2026-09-20 |
| Are Collagen Jelly Sticks Only for Women? | `are-collagen-jelly-sticks-only-for-women` | E | 2026-09-22 |
| Best Collagen Jelly Sticks UK (2026) | `best-collagen-jelly-sticks-uk` | F | 2026-09-24 |
| Is There Gelatine in Collagen Jelly Sticks? | `is-there-gelatine-in-collagen-jelly-sticks` | B | 2026-09-26 |
| Is Collagen Good for Men? What the Evidence Actually Says | `is-collagen-good-for-men` | E | 2026-09-28 |
| Collagen in your 60s and beyond: joints and muscle, not skin | `collagen-in-your-60s-and-beyond` | E | 2026-09-30 |
| Does Collagen Help Runners' Knee and Training-Related Joint Pain? | `does-collagen-help-runners-knee` | E | 2026-10-02 |

The first two rows above are fully ready — drafted, committed with `draft: true`, and a scheduled task created for each. `is-collagen-good-for-men` → `daily-jelly-publish-men-angle`, fires 2026-09-28 11:15 UTC. `collagen-in-your-60s-and-beyond` → `daily-jelly-publish-60s-plus`, fires 2026-09-30 10:40 UTC.

`does-collagen-help-runners-knee` is fully ready — drafted, committed with `draft: true` (publishDate was already set to 2026-10-02 when written, matching this slot), and its scheduled task (`daily-jelly-publish-runners-knee`, fires 2026-10-02 12:05 UTC) is created. Final task of the run — nothing scheduled after it.

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
data landed 2026-09-12 (see "Volume/difficulty findings" below) — draft
order is now set by that data, prioritising titles flagged "ready" over
titles flagged "needs research."

## Volume/difficulty findings (2026-09-12)

Tested via Bing Webmaster Tools Keyword Research (dailyjelly.co.uk site,
UK, 3-month window) and cross-checked against Google Trends (UK, past 12
months, since Bing's UK market share is too small to trust alone for a
niche term). Five seed terms, one per live cluster plus the site's own
core format term:

| Term | Bing UK impressions (3mo) | Google Trends (UK, 12mo) | Read |
|---|---|---|---|
| collagen for men | 92 (324 global) | Sustained, steady interest all year, UK-wide (Wales 100, England 85, NI 80, Scotland 76) | Confirmed strong |
| hydrolysed collagen | No trend data | Sustained, steady — comparable level to "collagen for men" | Confirmed strong — Bing undersold it |
| collagen for hair | 6 (23 global) | Sustained, actually a higher baseline than "collagen for men" | Real demand, but SERP dominated by Cleveland Clinic, Cosmopolitan, Healthline — long-game ranking target, not a quick win |
| collagen and perimenopause | No trend data | Flat all year bar one spike (~Apr 2026) — reads as Trends' relative-scaling noise off a near-zero baseline, not real demand | Confirmed thin |
| collagen jelly sticks (site's own core term) | No trend data | Flat/near-zero all year, same noise-spike pattern, only England registers at all | Confirmed near-zero standalone UK demand |

**Sequencing changes from this data:**
- **Promoted**: "What 'hydrolysed collagen' means on a UK label" (Cluster B, below) — real, steady UK demand, contrary to what Bing's empty read alone suggested.
- **Kept, expectations reset**: "Collagen for hair" pieces (Cluster E, below) — real demand confirmed, but the SERP is owned by major authority sites. Sequence it, don't expect fast traffic from it.
- **Deprioritised**: "Collagen and perimenopause" (Cluster E, below) — thin/noise-level demand on both tools. Combined with its existing extra-care medical-sensitivity flag, do this for audience completeness/trust, not as a traffic play.
- **Structural finding**: the site's own format term has near-zero standalone UK search demand. This confirms the site's traffic has to come from broad collagen-informational queries (men, hydrolysed, hair) that pivot into jelly-stick content via internal links — the same structure already used in the men's-angle piece — rather than from anyone searching "jelly sticks" directly. Lean into Cluster C/E informational pieces as the actual growth engine; format-specific content rides on their internal links, not its own search demand.
- **Watch, not yet investigated**: "nutrition geeks" surfaced as a rising related query/topic on two of the five searches (+170%/+140%, on hydrolysed collagen) — likely a creator or brand gaining traction in this exact space. Worth a look as a competitor or content-gap signal.

## Volume/difficulty findings (2026-09-13): skin elasticity

Tested `skin elasticity` and `collagen elasticity` the same way (Bing Webmaster Tools + Google Trends, UK). Bing showed almost nothing (11 UK impressions/3mo on "skin elasticity"; no trend data at all on "collagen elasticity") — but Trends told a different story, same undersampling pattern as hydrolysed collagen and collagen-for-hair:

- **Both terms show sustained, *rising* UK interest** all year (not just steady — trending upward toward Aug 2026), UK-wide (England strongest, then NI/Scotland/Wales).
- **Rising/top related queries tie the two terms directly together and to collagen specifically**: "collagen" (+150%), "best collagen for skin elasticity" (+130%), "collagen supplements" (+120%), "collagen for skin elasticity" (+70%) — and on "collagen elasticity," the top related query is literally "skin elasticity" itself. Real, tightly-clustered, growing demand.
- **The competitive caveat still applies to the bare term**: Bing's Top 10 for plain "skin elasticity" is owned by Vogue, Cleveland Clinic, WebMD, BBC, ScienceDaily — same problem as collagen-for-hair. Don't chase that generic phrase directly.
- **The fix: target the collagen-specific long tail instead** — "does collagen improve skin elasticity" / "collagen for skin elasticity, what the evidence shows" — that's the phrasing rising in Trends, it's Daily Jelly's actual competitive category (supplement/evidence content, not dermatology publishers), and it reuses evidence the site already has cited elsewhere (the same VERISOL-type elasticity/hydration RCTs referenced in `do-collagen-jelly-sticks-actually-work`).

**New title added to Cluster C** (below) on the strength of this: real evidence already on hand, real and rising demand, right competitive category — one of the better-supported additions from this whole exercise.

## Korean-source content ideas (2026-09-13)

Searched Korean consumer press and retail sites for angles not yet covered — the goal was genuine UK-context tweaks, not translation. Two made the cut; two explicitly didn't (kept here so they aren't silently dropped either):

- **Sugar content** — South Korea's Consumer Agency (한국소비자원) tested 20 Naver Shopping collagen products and found jelly sticks averaged 32% sugar by weight (6.4g in a 20g stick) vs 10% for powder sticks, with two jelly products reaching 50%. **Important framing note**: leading with that percentage reads as an attack on the exact format this site is built around. The honest, non-alarmist version reports grams-per-stick (6g is genuinely modest — about 1.5 teaspoons, less than a can of Coke, comparable to a small biscuit) and explains *why* jelly needs sugar for texture in a way powder doesn't — a tradeoff explanation, not a "watch out." New title added to Cluster B below on this basis. Korea's specific numbers are a Naver Shopping sample, not the six UK-tracked SKUs — the UK piece needs its own label check, not an imported statistic.
- **Fatigue/energy marketing** — Korean marketing and user reviews lean heavily on jelly sticks as an office-worker fatigue snack (21% of surveyed users cited fatigue improvement) — a framing barely present in UK coverage. Collagen has no established fatigue mechanism, so this is a debunking piece, not an endorsement — same structure as the testosterone claim already debunked in `is-collagen-good-for-men`. New title added to Cluster C below.
- **Sun/UV and collagen breakdown** — real mechanism (UV breaks down collagen), but Korean summer-beauty framing implies a supplement can "recover" existing damage, which isn't supported. Flagged as a future idea, not briefed yet — would need very careful prevention-vs-repair framing to avoid overclaiming.
- **Suneung (수능) exam-gifting** — a huge, specific Korean gifting occasion (health/energy snacks given to exam-takers) with no UK equivalent event carrying that gifting intensity. Deliberately not adapted — flagged as "genuinely Korean, doesn't translate" rather than forced into a weak UK piece.

## Seasonal keyword findings (2026-09-13): Christmas / New Year

User's own idea — a UK Christmas-hamper/gifting angle, prompted by the Korean gifting-culture research above. Checked three phrasings via Google Trends (UK, 12 months) before briefing anything:

- **"healthy christmas gifts"** — weak, dropped. Only England registers any subregional interest even at peak; the one spike lands in late Dec/early Jan rather than the Nov–early-Dec window real gift-shopping would need; worldwide view shows an unexplained second peak in May with no Christmas connection, suggesting noise rather than a clean seasonal signal.
- **"healthy christmas"** — real and strong, but points to a different intent than gifting. Clean seasonal ramp (Oct→peak right at New Year→decline), UK-wide (England 100, Wales 94, Scotland 88, NI 76). But related rising queries are all recipe-focused ("healthy smoothie recipes," "healthy dinner recipes for two," "healthy snacks for work") — this is a post-Christmas "New Year health reset" query, not a gift-shopping or supplement-shopping one. **Used the timing insight, not the term itself** — see the new Cluster C title below.
- **"christmas beauty"** — real, strong, and correctly timed pre-Christmas (ramps Oct, peaks mid-late Dec, UK-wide: NI 100, England 83, Scotland 80, Wales 73) — but overwhelmingly about beauty advent calendars specifically (Lookfantastic +1,050%, HUDA BEAUTY +900%, every top related query some variant of "advent calendar 2026"). Wrong competitive category (major retailers ranking for their own curated boxes) and a prestige-roundup shape ("best advent calendars") the site has deliberately avoided elsewhere. **Dropped for now** — the only narrow, honest angle (checking whether any real 2026 UK beauty advent calendar actually includes a collagen/inner-beauty snack) wasn't verified, so nothing briefed. Revisit only if that specific fact checks out.

### Cluster B — Formats & dose

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Collagen peptides vs collagen jelly sticks: what's actually different? | Clears up ingredient (hydrolysed peptides) vs format (jelly stick) confusion | None — reuses verified dose data | `/collagen`; benefits-and-ingredients, evidence roundup | ready |
| What "hydrolysed collagen" means on a UK label | Plain definition + why nearly every UK product states it | None — general food-science fact | `/collagen`; benefits-and-ingredients | ready — promoted, see Volume/difficulty findings (2026-09-12): confirmed real, steady UK demand |
| Are collagen gummies worth it? The dose per sweet, counted | Dose-per-gummy vs stated daily serving, price per 1,000mg vs jelly sticks | **Needs research** — no real UK gummy product data verified yet (H&B own-brand, Vitabiotics Perfectil, etc.) | `/collagen`, `/collagen-price-index`; jelly-sticks-vs-gummies-powders | needs research |
| Type I, II and III collagen: which UK products use which | Deep-dive table extending the pillar's type explainer per featured product | Mostly known; check whether any listing states type explicitly (may be "not stated" — an honest finding either way) | `/collagen`; benefits-and-ingredients | ready |
| How much sugar is actually in a collagen jelly stick? We checked six UK labels | Report real per-stick sugar in grams (not percentage) across BB LAB, Cloo9, FOODOLOGY, HAMCHOROK, NOW Foods, YIXO; contextualise against everyday snacks (biscuit, Coke, fruit); explain the jelly-vs-powder sugar tradeoff honestly. Deliberately NOT framed as an anti-jelly "watch out" piece — see Korean-source content ideas (2026-09-13) for the framing reasoning | **Needs research** — nutrition labels not yet pulled for any of the six tracked products | `/collagen`; collagen-jelly-stick-benefits-and-ingredients; jelly-sticks-vs-gummies-powders | needs research |
| How Much Collagen Per Day? What 1,000mg, 2,000mg and 3,000mg Labels Actually Mean | From the 3-blog pipeline brief (2026-09-19), checked against existing content first — genuinely distinct from the Type I/II/III piece (source type, not quantity) and the gummies-dose piece (format comparison, not label literacy). Decodes what a per-stick mg number actually means by comparing it against doses used in the trials already cited across the site (VERISOL 2.5g, joint-pain 3g-10g, muscle-strength 15g, runners'-knee 5g) — explicitly not implying a higher mg means a better result, since the evidence piece already establishes that's not shown | None — reuses dose figures already verified in every evidence piece on site | `/collagen`; benefits-and-ingredients; do-collagen-jelly-sticks-actually-work; is-collagen-good-for-men; collagen-in-your-60s-and-beyond; does-collagen-help-runners-knee | ready |
| What Biotin and Hyaluronic Acid Actually Do in a Collagen Jelly Stick | From the 3-blog pipeline brief (2026-09-19) — originally proposed as a 4-ingredient piece (Vitamin C, Biotin, HA, ginseng), narrowed after checking: Vitamin C already has its own dedicated briefed piece below, ginseng is already covered in benefits-and-ingredients. This covers only the two ingredients with no dedicated treatment yet. Same claims discipline as the existing ginseng coverage — name the ingredient honestly, state the claim boundary, don't repeat brand marketing; neither carries an authorised UK/EU collagen-related claim | **Needs research** — confirm which of the six tracked products actually list biotin and/or hyaluronic acid on their real ingredient panels, not assumed | `/collagen`; benefits-and-ingredients | needs research |
| What Do Collagen Jelly Sticks Actually Taste Like? Six Products Compared | From Amazon review mining (2026-09-19) — checked HAMCHOROK's 732 UK reviews; Amazon's own AI-generated review-summary tool categorises mentions as Taste (51), Effectiveness (40), Texture (12), Value (8) — taste is the single most-discussed dimension, ahead of effectiveness, and the site's content is currently effectiveness-led with no taste comparison across products. Genuine differentiator, not yet covered anywhere on site. Framing: honest, varied real reactions (reviews split — "great taste" vs "terrible taste" for the same product), not a marketing puff piece; note flavour bases already documented (pomegranate concentrate for BB LAB/HAMCHOROK, Centella for FOODOLOGY) rather than inventing new tasting-note detail we can't verify firsthand | **Needs research** — no firsthand tasting possible; base on verifiable flavour/ingredient facts already sourced per product plus a fair characterisation of the real spread of UK review sentiment per product (not cherry-picked positive-only quotes) | `/collagen`; collagen-jelly-stick-benefits-and-ingredients; where-to-buy | needs research |

### Cluster C — Practical questions

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Does collagen break a fast? | Caloric/metabolic fact-based answer, no fasting-protocol advice | **Needs research** — per-stick calorie counts not yet verified for our 6 products | `/collagen`; on-the-go piece | needs research |
| Best time of day to take collagen | Honest answer: no evidence timing matters at studied doses; consistency > timing | None — reuses evidence-roundup | `/collagen`; do-collagen-jelly-sticks-actually-work | ready |
| New Year, new routine: does when you start collagen actually matter? | Reuses the "no evidence timing matters, consistency over timing" finding above, applied to the yearly New-Year's-resolution question instead of the daily one — same honest "no ideal time" answer as the 30s/50s pieces. See Seasonal keyword findings (2026-09-13) below for why this is timed, not evergreen | None — reuses evidence already established in this piece and the 30s/50s pieces | `/collagen`; best-time-of-day-to-take-collagen; starting-collagen-in-your-30s; collagen-after-50 | ready — **time-sensitive: target publish window is late Dec 2026 / early Jan 2027**, not a random slot, to catch the real seasonal search ramp |
| Can you take collagen with coffee? | Addresses the "heat denatures it" myth; notes this is really a powder-user question — jelly sticks sidestep it entirely | None — general food-science fact | `/collagen`; jelly-sticks-vs-gummies-powders | ready |
| Do collagen jelly sticks give you an energy boost? | Honest debunk — collagen has no established fatigue/energy mechanism, unlike the fatigue-relief framing common in Korean marketing (21% of surveyed users cited it). Check whether any UK-sold product actually adds caffeine or B-vitamins, which would be the real explanation if an effect exists. See Korean-source content ideas (2026-09-13) | **Needs research** — check UK ingredient lists for caffeine/B-vitamins; no dedicated fatigue RCT exists for collagen itself | `/collagen`; do-collagen-jelly-sticks-actually-work | needs research |
| Does collagen improve skin elasticity? What the evidence actually shows | Direct evidence-review answer, reusing the site's existing elasticity/hydration RCT data rather than new research; targets the collagen-specific long tail, not the generic "skin elasticity" term (see Volume/difficulty findings 2026-09-13) | None — reuses evidence already cited in `do-collagen-jelly-sticks-actually-work` and `collagen-jelly-stick-benefits-and-ingredients` | `/collagen`; do-collagen-jelly-sticks-actually-work; collagen-jelly-stick-benefits-and-ingredients | ready — promoted, see Volume/difficulty findings (2026-09-13): confirmed real, sustained, rising UK demand (Bing undersold it); avoid the bare "skin elasticity" term (Vogue/Cleveland Clinic/WebMD/BBC own that SERP) |
| How long does collagen take to work? | Reuses the VERISOL 8-week trial finding directly | None — already verified | `/collagen`; do-collagen-jelly-sticks-actually-work (heavy overlap, but a distinct high-volume query worth its own page) | ready |
| Can you take too much collagen? | Documented safety profile only (no adverse events in the cited review); explicitly not dosing advice, defer to GP/pharmacist for medication interactions | None — reuses evidence piece + existing FAQ safety language | `/collagen`; evidence roundup, FAQ | ready |
| Does collagen make you gain weight? | Calorie-count based factual answer | **Needs research** — same calorie-data gap as "breaks a fast" | `/collagen`; on-the-go, benefits-and-ingredients | needs research |
| Why collagen and vitamin C are sold together | Explains the mechanism behind the one claim we're actually authorised to make | None — directly reinforces existing compliant claim | `/collagen`; what-are-korean-collagen-jelly-sticks | ready |
| Does collagen expire? Storing sticks, sachets and powder | General shelf-stable-formulation explanation; honest "check the pack" for brand-specific shelf life since we don't have that verified | Partial — general framing ready, brand-specific dates not verified | `/collagen`; what-are-korean-collagen-jelly-sticks | ready (with honesty caveat) |
| Collagen Jelly Stick Side Effects: Fish Allergies and Who Should Be Cautious | From the 3-blog pipeline brief (2026-09-19) — the one genuinely new title in that batch, checked against existing content first (no overlap found). Fish/marine collagen allergy risk specifically (four of six tracked products are fish-derived, not three — see compliance pass), plus the general safety profile. **Flagged by the source brief itself, and independently, for an extra editorial/compliance pass before publishing** — same guardrail as "Can you take too much collagen?": documented safety information only, explicitly not medical advice, defer to GP/pharmacist/allergist for anything specific to an individual | **Compliance pass complete (2026-09-21).** Regulatory basis: fish is one of the UK's 14 legally mandated allergens (FSA, retained EU law) — when present as an ingredient it must be named and emphasised (bold/CAPS/underline); the narrow "fish gelatine as vitamin-carrier or fining agent" exemption does not apply to fish collagen used as an active ingredient. Clinical evidence is genuinely mixed, not one-sided: fish collagen is a documented, peer-reviewed allergen with confirmed IgE sensitisation in fish-allergic patients (one study found ~21% sensitised) and cross-reactivity shown across fish species — but two separate European food-challenge studies found collagen has comparatively low clinical relevance next to parvalbumin, the dominant fish allergen. State both sides; don't imply either "definitely avoid" or "definitely fine." Checked all six real listings today: **BB LAB** (YesStyle) — "Fish Collagen" in the ingredient list, listing declares "Contains Milk" but does not visibly flag fish. **FOODOLOGY** (YesStyle) — two fish-derived ingredients ("Small Molecular Fish Collagen" + "Salmon Milt Extract Powder"), same pattern: "Contains Milk" declared, fish not flagged. **Cloo9** (direct) — the one product that clearly bolds "(FISH)" against its marine collagen peptides; good positive comparison point. **HAMCHOROK** (Amazon UK) — "Fish Collagen" in the listed ingredients, not visibly bolded in the online listing (Amazon's own boilerplate tells buyers to check the physical label for bold/CAPS allergens, which the web text doesn't preserve). **NOW Foods** (Welzo) — bovine (VERISOL), genuinely no fish collagen at all; the one pick actually free of this specific risk. **YIXO** (direct) — vegan, no collagen or fish claimed, but their own site's general "Ingredients" page only covers an unrelated alcoholic jelly-shot range and never lists this product's actual ingredients anywhere; can't independently verify beyond their marketing copy (Vitamin C + Hyaluronic Acid + unnamed "plant-based collagen-support peptides") — say so honestly in the piece rather than asserting it's confirmed. The real hook here is that most listings don't clearly flag a mandated allergen, which is itself documented, verifiable and worth reporting factually — not scaremongering. Mandatory framing for the draft: state what each label does/doesn't show, cite the regulation and the nuanced research as above, and route anything individual to GP/pharmacist/allergist — never tell a reader whether they personally can have it | `/collagen`; benefits-and-ingredients; evidence roundup; FAQ (existing "are collagen jelly sticks safe" answer); where-to-buy | **ready to draft** — compliance pass cleared |

### Cluster E — Audience & outcome

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Collagen for hair: what the evidence shows | Independent literature check — do NOT reuse the skin-specific VERISOL data as if it applies to hair | **Needs research** — dedicated evidence check required, same rigor as the skin evidence piece | `/collagen`; evidence roundup | needs research — see Volume/difficulty findings (2026-09-12): real UK demand confirmed, but SERP owned by Cleveland Clinic/Cosmopolitan/Healthline; sequence as a long-game ranking target, not a quick win |
| Collagen for nails | Same — independent evidence check required | **Needs research** | `/collagen`; evidence roundup | needs research |
| Collagen and perimenopause | **Needs the same guardrail as bone health in the original brief**: evidence-review framing only, no medical advice, do not imply collagen "helps with menopause symptoms" | **Needs research**, high care | `/collagen` | needs research + extra care — deprioritised, see Volume/difficulty findings (2026-09-12): thin/noise-level demand on both Bing and Google Trends, one visible spike reads as scaling artifact not real interest; do for audience completeness, not as a traffic play |
| Collagen for joints vs collagen for skin: are they different products? | Clarifies Type I (our sticks) vs Type II (UC-II joint supplements) — a real, common confusion | None — ties directly to the pillar's type section | `/collagen` | ready |
| Collagen in your 60s and beyond: joints and muscle, not skin | Deliberately a different claim from the 30s/50s pieces, not a third repeat of "no ideal starting age" | **Drafted 2026-09-11** — confirmed the 2025 knee-OA trial is genuinely Type I (Pangasius fish-skin peptides, explicitly stated in the source), so cited directly. Reused the Zdzieblik et al. sarcopenic-men trial from the men's-angle piece for muscle/strength. Added a bone-density finding not in the original brief — a well-designed RCT in 102 postmenopausal women (König et al.) showing real BMD improvement — but flagged explicitly as the thinnest, single-population, single-trial finding of the three, not equal weight to the joint/muscle evidence. Each finding states plainly who was actually studied (joint: mixed-sex; muscle: men only; bone: women only) rather than implying any of it generalises | `/collagen`; `collagen-jelly-stick-benefits-and-ingredients`; evidence roundup (`do-collagen-jelly-sticks-actually-work`) | drafted, committed with `draft: true`, scheduled task `daily-jelly-publish-60s-plus` created (fires 2026-09-30) |
| Starting collagen in your 30s: too early? | Honest "no evidence for an ideal starting age" answer | None | `/collagen`; evidence roundup | ready |
| Collagen after 50 | Same framing; explicitly avoid anti-ageing claim language | None | `/collagen`; evidence roundup | ready |
| Is Collagen Good for Men? What the Evidence Actually Says | Deliberately NOT a "best collagen for men" buying guide — that money term is already occupied by dedicated competitor guides (Revayo, Face Envy London) and Amazon category pages. This is the same honest-evidence-review format as the 30s/50s pieces, aimed at the informational query nobody's answering, with the close pivoting into jelly sticks as a format most men haven't tried. Companion to `are-collagen-jelly-sticks-only-for-women` (that piece argues the format/ingredients aren't gendered; this one is the audience-first entry point, not a mirror of it) | **Drafted 2026-09-11** — found real Type I men-specific evidence: two RCTs on muscle mass/strength (Zdzieblik et al., elderly sarcopenic men; a second trial in middle-aged untrained men vs placebo vs whey — honestly reports collagen ≠ better than whey, just better than nothing), one Type I+III RCT on knee OA pain. Testosterone and hair-loss/pattern-baldness marketing claims checked and debunked — no clinical support for either. Skin section flags honestly that the VERISOL evidence cited elsewhere on the site was studied in women, not men. All doses (10–15g in the trials) stated plainly against the ~1–5g a single stick delivers | `/collagen`; `are-collagen-jelly-sticks-only-for-women`; evidence roundup (`do-collagen-jelly-sticks-actually-work`) | drafted, committed with `draft: true`, scheduled task `daily-jelly-publish-men-angle` created (fires 2026-09-28) |
| Does Collagen Help Runners' Knee and Training-Related Joint Pain? | Checked 2026-09-11 against "collagen for joint pain" broadly, which is crowded — deliberately NOT that. Different population from `collagen-in-your-60s-and-beyond` (training-related stress in young, active people, not age-related OA), and different content from the already-briefed Type I/II structural comparison piece | **Drafted 2026-09-11** — full citations verified: Clark et al. 2008 (Penn State, 147 athletes, 10g/day liquid collagen hydrolysate, 24 weeks, significant pain/mobility/inflammation improvement) and a *Nutrients* RCT (180 active 18-30 year olds, 5g/day, 12 weeks, explicitly Type I, significant exercise-induced knee pain reduction vs placebo) — plus noted several corroborating trials at the same 5g/12-week protocol, flagged honestly as one research group's ingredient, not independent replication. Genuinely good dose news: Cloo9's stick delivers 5,000mg — a real match to the 5g studied dose, unlike every other evidence piece on the site where the dose gap is a caveat. "Doesn't apply to diagnosed injury" guardrail came straight from the trials' own exclusion criteria (all excluded diagnosed joint disease), not bolted on separately. **Correction to the original brief**: DID cross-link directly to `collagen-in-your-60s-and-beyond` by its real slug rather than avoiding it — the self-activating link mechanism (rehype-guide-links) handles this safely regardless of draft status, so avoiding the link entirely was unnecessarily cautious; caught and fixed one mislink during drafting where the anchor text named the 60s+ article but the href pointed at `/collagen` instead | `/collagen`; `/where-to-buy` (incl. a direct Cloo9 mention); `collagen-in-your-60s-and-beyond`; evidence roundup (`do-collagen-jelly-sticks-actually-work`) | drafted, committed with `draft: true`, no scheduled date or task yet |

### Cluster F — Commercial comparisons

| Title | Angle | Data needed | Links up/across | Status |
|---|---|---|---|---|
| Olive Young collagen: what's worth buying, landed cost included | Extends already-verified Olive Young Global logistics (4–5 day UK shipping, free over $60, tax at checkout) to specific products | **Needs research** — which Olive Young-exclusive products to feature | `/collagen`; vegan guide, inner-beauty-trend-uk | needs research |
| Absolute Collagen: cost per serving, checked | Deeper single-brand profile; core price fact already published in the price index | Partial — price/dose already verified, full review needs more | `/collagen-price-index` | ready (low priority, overlaps standing page) |
| Boots and Holland & Barrett collagen: worth the shelf price? | Natural extension of the existing "why don't they stock jelly sticks" piece — covers what they DO stock instead | **Needs research** — specific SKUs and prices not yet checked | `/collagen`; why-boots-superdrug-holland-barrett-dont-stock-jelly-sticks | needs research |
| BB LAB vs Vitahalo | Direct brand comparison | **Confirmed 2026-09-12** — Vitahalo is a real South Korean collagen jelly-stick brand (pomegranate flavour, fish collagen) — same format and category as BB LAB. No UK high-street stockist; sold via K-beauty import resellers (GoSupps, K-Kare), same buying pattern already used for BB LAB itself (YesStyle/Stylevana). Frame as a Cluster D-style Korean-import comparison, not a mainstream UK-retail one | — | ready |
| Revive Collagen vs Absolute Collagen | Direct brand comparison | **Confirmed 2026-09-12** — site loads correctly now (cert error from 2026-09-09 appears to have been transient). Revive Collagen Ltd is a real, currently-operating UK company (Companies House #12062591, inc. 2019), sold via H&B and its own site. Note: their own marketing leans on "clinically proven" language — treat per the site's usual evidence-first voice, don't repeat the brand's claim uncritically | — | ready |

### Not briefed — flagged, not silently dropped

- **Peptide skincare cluster (6 titles)** — this is Cluster H in the original brief, explicitly marked "DEFERRED, do not build until Clusters A–F established." Left unbriefed on purpose, not an oversight.
- **"Foodology Cutting Jelly vs Colla Q"** — questionable fit. Both are weight-management "cutting jelly" products, not collagen; a head-to-head comparison risks reading as an implicit recommendation for a weight-loss product, conflicting with the site's existing stance ("we explain cutting jelly, we don't sell or recommend it"). Recommend skipping this one rather than briefing it as-is.
- **Collagen vs hyaluronic acid** — noticed, not briefed. Surfaced 2026-09-13 while checking "skin hydration" keyword volume: "hyaluronic acid" was the top rising related query (+120%), with no collagen tie-in at all, suggesting a real, distinct audience searching skin hydration from a hyaluronic-acid angle rather than a collagen one. Not investigated further — no evidence check, no volume check on the comparison term itself. Flagged as a genuinely different angle worth a look later, not assumed to be a good fit yet.

## Content refresh flagged (not a new article)

- **HAMCHOROK's con in `GUIDE_PRODUCTS`** ("The Amazon listing itself leans on unproven claims (anti-ageing, immunity)") — checked the live Amazon listing 2026-09-19 while mining reviews for content angles: the product's own title is literally *"HAMCHOROK Rg+ **Anti-Aging** Korean-Beauty Pomegranate Collagen Jelly Stick"*, and the description claims the ginseng content *"helps improve immunity and prevents the accumulation of fat cells."* Both go well beyond the one authorised UK/EU claim. The existing con is directionally right but vague — worth updating with this specific, dated, verifiable example rather than the current generic wording. Not urgent, just noted so it doesn't get lost.

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
