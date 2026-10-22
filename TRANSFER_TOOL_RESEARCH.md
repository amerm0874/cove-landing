# Cove free tool — research and implementation

Daily research log: [October 17, 2026](../../research/cove-tools-2026-10-17.md) — inventory demand strengthened; generic appointment builder rejected after finding equivalent interactive tools. No new tool published.

Daily research log: [October 16, 2026](../../research/cove-tools-2026-10-16.md) — three candidates assessed; none cleared the full publication gate. No new tool published.

Researched October 15, 2026. Primary keyword: **days past embryo transfer calculator**. Secondary intents: days past transfer calculator, DPT calculator, 7dp5dt meaning, is transfer day day 0, FET day counter.

## Decision

Choose a calendar counter for patients currently in treatment. It answers a repeated counting question, supports repeat visits, and leads directly to Cove's two-week-wait and medication tracking. The result does not require assuming a successful pregnancy. The narrow intent is a plausible entry point for a small site, not a verified low-difficulty keyword. Search-result research cannot establish monthly volume, keyword difficulty, or a ranking guarantee; no paid keyword data or Search Console data was available.

Compared candidates:

| Candidate | Evidence / tradeoff | Decision |
| --- | --- | --- |
| IVF due date calculator | Numerous dedicated calculators and established pregnancy brands; user is often moving beyond treatment tracking | Defer |
| IVF timeline calculator | Strong planning need, but personalized schedules depend on clinic protocol and response | Defer rather than invent appointment dates |
| Days past embryo transfer calculator | Repeated patient confusion; precise calendar calculation; direct fit with Cove's two-week-wait feature | Build first |
| IVF medication time-zone calculator | Relevant to reminders, but a narrower travel audience and clinically sensitive dosing implications | Defer |

## Evidence

- Patient question: [Day 1 Post Embryo Transfer](https://www.reddit.com/r/IVF/comments/12abefe/) — explicitly asks whether transfer counts as day 0 or day 1.
- Repeated question: [What is considered as day 1 after FET?](https://www.reddit.com/r/IVF/comments/mgs0bk/) and [FET](https://www.reddit.com/r/IVF/comments/13cz3mg/).
- Ongoing need: [Weekly two-week-wait thread](https://www.reddit.com/r/IVF/comments/1o2qxad/) — patients count days and discuss the wait. Patient anecdotes demonstrate pain, not medical authority.
- Existing competitor: [My IVF Calculator](https://myivfcalculator.com/) includes a days-past-transfer tool alongside due-date calculators. This is evidence of competition, not proof of demand volume.
- Alternative intent: [ProIVF timeline calculator](https://www.proivf.com/en/calculators/ivf-timeline).
- Clinical testing guidance: [Guy's and St Thomas' NHS](https://www.guysandstthomas.nhs.uk/health-information/ivf-treatment/results-your-pregnancy-test). Clinics assign a testing date; early tests can be misleading because of trigger hCG. Do not generalize this clinic's exact testing interval to every protocol.
- Product fit: [Cove App Store listing](https://apps.apple.com/app/id6788749556) and [Cove website](https://www.coveivf.life/).
- SEO limits: [Google FAQ rich-result eligibility](https://developers.google.com/search/blog/2023/08/howto-faq-changes) and [structured data is not a generic ranking factor](https://developers.google.com/search/blog/2020/08/rich-results-search-console).

## Implemented

- English-only `/days-past-embryo-transfer-calculator`; no fictitious translated hreflang alternatives.
- Title: Days Past Embryo Transfer Calculator (DPT) | Cove
- Meta: Calculate days past embryo transfer, decode 7dp5dt, and count down to your clinic's pregnancy test. Free, instant and private. No signup needed.
- H1: Days past embryo transfer calculator
- Canonical, Open Graph, Twitter metadata; WebApplication, FAQPage and BreadcrumbList JSON-LD.
- Server-rendered explanations and seven FAQs, generated from the same content as FAQ schema.
- Sitemap entry, inbound global footer link and relevant outbound internal links.
- Inputs: transfer date, reference date defaulted to local today, optional documented embryo day, optional clinic-scheduled test date.
- Results: elapsed calendar days (transfer = day 0), optional shorthand, optional test countdown. Future transfers and past test dates have explicit wording.
- One download CTA through Cove's established link; existing store click event uses placement `transfer_calculator`. No dates, embryo day, or results are sent to analytics, URL parameters, local storage or a backend.
- Distinguishes the free calculator from app subscriptions. No implantation, success, due-date or test-date predictions.

## Validation and launch

Production build, TypeScript check and 11 calendar/date assertions passed. The deterministic design detector returned no findings. Localhost preview timed out; after deployment the public page was checked in the browser at mobile width with no horizontal overflow, and keyboard date entry correctly produced 14 DPT / 14dp5dt for October 1 to October 15. Existing unrelated source edits were preserved.

Published October 15, 2026 at https://www.coveivf.life/days-past-embryo-transfer-calculator. Vercel deployment: dpl_A1suMPqm2Wx2W69aKnoZnyeiFTCT, project cove-landing / prj_fdYeEVw79Gtc8xb7kyKFsE0M5yh5. Production build and authenticated HTML checks passed before promotion. Vercel connector returned a scope 403; the authenticated local CLI worked with explicit team team_vukORpAyQNtM8blmUa7LuREM. This was a source upload from the working directory, not a Git push; keep these local source files in subsequent releases.

Daily heartbeat `cove` is active at 10:00 Africa/Cairo. Research first; publish at most one genuinely useful distinct tool per day and skip days without a sufficiently strong idea. Maintain this research/inventory and report only publication or actionable failures.

## Tool inventory — updated October 18, 2026

| Live route | Primary intent | Scope |
| --- | --- | --- |
| `/days-past-embryo-transfer-calculator` | Days past embryo transfer calculator | Calendar day count and clinic-provided test countdown |
| `/ivf-medication-cost-calculator` | IVF medication cost calculator | Compare personal quotes for the same medication, whole packs and shipping/fees |

Second tool published October 18 after two independent patient discussions documented pharmacy-comparison work and per-vial/per-box confusion. Full gate evidence, alternatives and validation: `../../research/cove-tools-2026-10-18.md`. Latest production deployment: `dpl_9ajwRHer4dpAxVT2MhRRoykiETP7`; includes both tools. No search volume or ranking promise. Price lookup, insurance estimates, dosing and substitution recommendations remain outside scope. All tool source remains local/uncommitted and must be preserved in subsequent releases.

After publishing, inspect the canonical URL in Search Console and submit the sitemap. Measure impressions and clicks for the primary/secondary queries and `store_link_clicked` events for this route/placement. Store clicks are not verified installations. FAQ markup does not guarantee rich results. Add editorial links from relevant two-week-wait articles when those article edits are authorized; do not mass-create near-identical keyword pages.
