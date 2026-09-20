# COVE — project instructions

Companion + tracker app for IVF patients. This repo is the landing/marketing site
(TanStack Start + React 19 + Tailwind v4 + shadcn/Radix, Supabase, deployed on Vercel).

See `AGENTS.md` for the Lovable git constraints (never rewrite pushed history).

---

# Design skill routing (MANDATORY — read before any design task)

A 10-skill design stack is installed in `.claude/skills/`. **Do not invoke skills
because they exist.** Pick the smallest correct combination.

Full rules, overlaps and conflicts: `.claude/DESIGN-ROUTING.md`.
Provenance and versions: `.claude/DESIGN-STACK.md`.

## Before touching code, classify the request

| Question | Answer determines |
|---|---|
| **A. What surface?** | web product UI · marketing site · mobile app · 3D/interactive |
| **B. What stage?** | direction · design system · creation · responsive · interaction · audit |
| **C. Visual reference given?** | if yes → `hue` first |
| **D. Special interaction genuinely required?** | scroll-driven → `scroll-craft` · cinematic → `epic-design` · 3D/advanced motion → the 3D/animation skills |

Then pick ONE primary skill, and add secondaries only where they solve a
*specific additional problem*.

## Primary skill by task

| Task | Primary | Think |
|---|---|---|
| New page/component from scratch | `frontend-design` | CREATE |
| Consistency across an existing product, components, tokens, spacing | `interface-design` | SYSTEM |
| Palette, type, visual style, UX pattern decisions | `ui-ux-pro-max` | DECISIONS |
| A reference (URL/screenshot) → our design system | `hue` | REFERENCE → SYSTEM |
| Existing UI feels generic / weak hierarchy / unfinished | `impeccable` | AUDIT + POLISH |
| Desktop/tablet/mobile behaviour, breakpoints | `responsive-craft` | RESPONSIVE |
| Premium hero / cinematic marketing moment | `epic-design` | WOW |
| Scroll IS the experience (sticky, reveals, transitions) | `scroll-craft` | SCROLL |
| Native/mobile-first app screens | `mobile-app-ui-design` | MOBILE |
| 3D, advanced animation, experimental interaction | 3D/animation skills (see below) | 3D + INTERACTION |

## Standard combinations

- New product page → `frontend-design` + `interface-design`
- New page from a reference → `hue` → `interface-design` → `frontend-design`
- Existing page looks generic → `impeccable`
- Bad mobile behaviour → `responsive-craft` → `impeccable`
- Premium marketing landing → `frontend-design` + `epic-design` (+ `scroll-craft` only if
  scroll interaction is required) + `responsive-craft` → `impeccable`
- 3D interactive experience → `frontend-design` + `interface-design` +
  3D/animation skills + `responsive-craft` → `impeccable`
- Mobile app screen → `mobile-app-ui-design` + `interface-design` → `impeccable`

`impeccable` runs **last**, on work that already exists. It is not the generator.

## The "Claude Design Skills" group — GATED

"Claude Design Skills" is a 22-skill collection, not one skill. Members:
`threejs-webgl` `react-three-fiber` `babylonjs-engine` `playcanvas-engine`
`aframe-webxr` `pixijs-2d` `lightweight-3d-effects` `spline-interactive`
`blender-web-pipeline` `substance-3d-texturing` `gsap-scrolltrigger`
`motion-framer` `animejs` `react-spring-physics` `rive-interactive`
`lottie-animations` `locomotive-scroll` `barba-js` `scroll-reveal-libraries`
`animated-component-libraries` `web3d-integration-patterns` `modern-web-design`

Rules:
1. Open **at most one or two** of these, and only when the task names that
   technology or genuinely needs 3D/advanced motion.
2. **Never open `modern-web-design`.** It is a general design skill that
   duplicates and conflicts with `frontend-design` / `impeccable`. It is
   installed only for completeness of the collection.
3. Never add 3D or animation because the skill exists.

## Cove-specific overrides

- This repo is a **landing/marketing site**. `interface-design` states it is
  explicitly *not* for landing/marketing pages. Use `frontend-design` as the
  primary here, and pull `interface-design` only for shared-component,
  token and design-system consistency work — not as the page generator.
- COVE serves IVF patients. Calm, trustworthy, low-anxiety. No hype motion,
  no aggressive cinematics on clinical content.

## Banned regardless of skill

Generic AI gradients · excessive glassmorphism · random rounded cards ·
unnecessary animation · excessive glow · arbitrary typography · inconsistent
spacing · effects with no product purpose · cloning a reference outright ·
changing an established design system without reason.

Preserve existing functionality unless the task explicitly requires changing it.
