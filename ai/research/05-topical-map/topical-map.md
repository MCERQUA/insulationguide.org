# Topical Map & Internal Linking Plan — insulationguide.org

## Architecture: 4-pillar hub-and-spoke, with a conversion page as shared destination

```
                              ┌─────────────┐
                              │    HOME     │
                              │  (hub page) │
                              └──────┬──────┘
        ┌───────────────┬───────────┼───────────┬───────────────┐
        │                │           │            │               │
        ▼                ▼           ▼            ▼               ▼
┌───────────────┐ ┌─────────────┐ ┌─────────┐ ┌───────────┐ ┌───────────┐
│ PILLAR 1:      │ │ PILLAR 2:   │ │PILLAR 3:│ │ PILLAR 4:  │ │   BLOG    │
│ Types of       │ │ Understand- │ │ Cost &  │ │ DIY vs.    │ │   (hub)   │
│ Insulation     │◄┤ ing R-Value │►│  ROI    │◄┤ Professional│ │           │
│ Explained      │ │             │ │         │ │ Install     │ │           │
└───────┬────────┘ └──────┬──────┘ └────┬────┘ └──────┬─────┘ └─────┬─────┘
        │                 │             │              │             │
        │        (all four pillars cross-link at natural decision points)
        │                 │             │              │             │
        └─────────────────┴──────┬──────┴──────────────┴─────────────┘
                                  ▼
                          ┌───────────────┐
                          │  GET MATCHED  │
                          │ (conversion)  │
                          └───────────────┘

        (About / Contact are utility pages, linked from footer sitewide,
         not part of the topical cluster architecture)
```

## Pillar-to-pillar cross-linking (the core internal-link plan)

| From | To | Link context |
|---|---|---|
| Types → R-Value | Each material subsection's R-value-per-inch mention links to the full R-Value pillar for the deep-dive/climate-zone table |
| Types → Cost & ROI | Each material's "relative cost tier" mention links to the exact material's cost section on the Cost pillar |
| Types → DIY vs. Pro | Each material's "skill level" tag (DIY-friendly / pro-recommended) links to the relevant section of the DIY-vs-Pro pillar |
| R-Value → Cost & ROI | "R-value and cost trade-offs" section links to full cost breakdown |
| R-Value → Types | R-value-per-inch table links back to each material's full profile |
| Cost & ROI → DIY vs. Pro | "DIY vs. professional cost delta" section links to the full risk/decision framework |
| Cost & ROI → R-Value | Whole-house cost estimates reference the R-value target driving the estimate |
| DIY vs. Pro → Types | Material-specific DIY guidance links back to that material's full profile |
| DIY vs. Pro → Cost & ROI | Cost-of-mistakes section links to real project cost data |
| All 4 pillars → Get Matched | At least one CTA per pillar, placed after the reader has enough context to want a real quote (never in the first 200 words) |
| All 4 pillars → Blog | Contextual links at the exact moment a blog post's narrower topic comes up (e.g., Types pillar's reputation section → "Is Spray Foam Insulation Safe?" post) |
| Blog posts → 2+ pillars each | Every post links back into at least two pillars (see individual briefs) |
| Home → all 4 pillars + Get Matched | Hub-page cards, described in content brief 01 |

## Cluster topic map (keyword-to-page assignment)

| Cluster | Head terms | Assigned page |
|---|---|---|
| Insulation types & materials | spray foam insulation, fiberglass insulation, cellulose insulation, mineral wool, rigid foam, batt, blown-in | Pillar 1: Types |
| Eco/specialty materials | eco friendly insulation, sheep wool insulation, recycled denim insulation | Pillar 1 (section) + Blog Post 1 |
| Acoustic/soundproofing | soundproof insulation, best insulation for soundproofing walls | Pillar 1 (section) + Blog Post 2 |
| R-value & climate | insulation r value, r value chart, what is r value, r value per inch (by material), climate-zone R-value | Pillar 2: R-Value |
| Diagnostic ("do I need more") | how much insulation do i need, signs you need more insulation | Blog Post 3 (feeds Pillar 2 + 3) |
| Cost & ROI | attic insulation cost, spray foam insulation cost, insulation cost per sq ft, whole-house cost, tax credit | Pillar 3: Cost & ROI |
| Removal | attic insulation removal, old insulation removal | Pillar 3 (section) — future-link to azinsulationremoval.com |
| DIY installation | diy insulation, spray foam insulation diy kit, how to insulate an attic/garage/basement | Pillar 4: DIY vs. Pro |
| Material-selection by location | best insulation for attic/walls/crawl space/basement | Distributed: Pillar 1 (location subsections) + Pillar 3 (cost by location) + Pillar 4 (DIY-appropriateness by location) |
| Spray foam trust/reputation | spray foam insulation pros and cons, is spray foam insulation worth it, "why insurance companies don't like spray foam" (PAA) | Pillar 1 (section) + Blog Post 4 (full treatment) + Pillar 4 (professional-only framing) |
| Contractor/matching (commercial) | insulation contractors near me | Get Matched (destination only — not chased as an on-page target elsewhere) |

## Future cross-linking to CCA's other niche insulation properties

This hub sits earlier in the funnel than CCA's other insulation-focused properties. Once a
reader has narrowed their interest via this site's pillar content, the natural next step is a
deeper, more specialized CCA resource. This pattern should be described in the site's
information architecture now, even though not all links are buildable yet (some target sites
may need their own readiness/approval before being linked):

| Reader has narrowed to... | Send them to | Why |
|---|---|---|
| Spray foam specifically, wants deep building-science detail | **sprayfoamscience.com** | Spray-foam-specific building science — beyond this hub's entry-level scope |
| They already have insulation and are troubleshooting a problem (odor, moisture, performance issue) post-install | **foammedic.com** | Post-install problem diagnosis — different funnel stage (post-purchase, not pre-purchase) |
| They're in Arizona and specifically need insulation *removal* | **azinsulationremoval.com** | AZ-specific removal lead-gen — geographically and functionally narrower than this hub |
| (B2B / contractor-side reader, unlikely on this site but possible via shared search) | **insulationcertificate.com** | Contractor documentation tool — wrong audience for this consumer hub, low priority to link |

**Where this appears in content:**
- Types pillar's spray foam subsection → "learn more" pointer to sprayfoamscience.com for
  readers who want deep building-science detail beyond this guide's entry-level scope.
- Cost pillar's removal section → azinsulationremoval.com callout, framed for AZ readers
  specifically (this hub is national; the callout should be geographically qualified so it
  doesn't read as a non-sequitur to readers outside Arizona).
- Home page's "Learn more from CCA's insulation specialists" block (see content brief 01) —
  a single light-touch teaser section naming all three, so the pattern exists sitewide even
  before every individual pillar-level link is built.
- foammedic.com is best introduced later (e.g., in an FAQ answer about post-install odor/issues,
  or a future blog post) rather than forced into the pre-purchase pillar content, since its
  audience (already-insulated, troubleshooting) doesn't naturally arise until deeper in a blog
  post about problems, not in the buyer's-guide pillars themselves.

**Implementation note:** treat these as a defined pattern to build toward, not a requirement
that every link exists at launch — flag in the build handoff which cross-links are live vs.
planned-but-not-yet-built.
