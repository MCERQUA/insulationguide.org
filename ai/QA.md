# QA — insulationguide.org

## Angle validation
Real-business-name check cleared cleanly (no collision — "insulation guide" is a generic
descriptive phrase). Scope-overlap check against insulationcertificate.com confirmed distinct
purpose (B2B documentation tool vs. this build's consumer education hub). 118 keywords
researched, massive real volume confirmed (spray foam insulation 90,500/mo, fiberglass
60,500/mo) — validates this as a genuinely high-value entry-level content hub, not a redundant
or speculative build.

## Build & gate results
- `pnpm install` — clean, `next@15.3.9` / `react@19.2.0` / `react-dom@19.2.0` pinned exactly.
- `pnpm run build` — GREEN on first attempt AND on final re-verification after cleanup.
- Placeholder sweep — clean (only Tailwind `placeholder:` classes and legitimate form
  `placeholder=` attributes matched).
- Collision-safety grep — clean: no live hyperlink to azinsulationremoval.com (HELD, not live);
  no fabricated CCA-specific stats (founding year, project counts, star ratings) anywhere.
- `pre-deploy-content-check.sh` — PASS (exit 0) on first run. Proactively raised one weak scrim
  stop found in a Stitch reference file (a decorative image at 20% overlay with no text on it)
  to 55%, per the manager's standing "raise proactively" instruction, even though the gate
  itself passed both before and after the fix. Re-verified again at final commit.

## Images
9 real Gemini-generated images, RGB-scanned (avgR > avgB on all 9 — the first build tonight
with zero blue-cast regenerations needed). Image fork manually reviewed each for gibberish
text/logos and caught one real defect: fabricated red printed text on an insulation bag in the
original og-default.jpg, regenerated without any props/packaging.

## Stitch
3 real screens generated and downloaded (home, types-of-insulation, insulation-cost-and-roi),
verified via `ls .stitch-pages/*.html`.

## Fork discipline
3 hard-scoped forks (research; image generation + pillar pages ran concurrently on non-
overlapping scopes). Pillar-pages fork programmatically verified CTA placement rules (no CTA
above the fold, correct CTA counts per page, DIY page's CTA after the checklist not mid-
instructions) before reporting done. Zero concurrency incidents.

## Visual QA (playwright-cli)
Desktop (1440x900) and mobile (390x844). Home and Types of Insulation (flagship pillar) pages
checked. Zero console errors on either page — one benign Next.js dev-mode LCP-priority advisory
on a multi-image card grid (not a functional issue, not gate-relevant, consistent with how
similar non-blocking warnings were handled on prior builds tonight, left as-is). Confirmed
sticky mobile Call/Get Matched bar, no-CTA-above-the-fold on pillar-page heroes, honest
pros/cons card formatting (green check / red X icons) rendering correctly, Fraunces serif
heading font rendering distinctly from every prior build's font pairing.

## Lockfile hygiene
`pnpm-lock.yaml` only, `pnpm-workspace.yaml` has `packages: ["."]` (not `[]`) from initial
scaffold, `.gitignore` excludes `package-lock.json`.
