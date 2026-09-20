---
name: design-router
description: "Decide which design skills to use for a design task in this repo, and in what order. Use at the START of any UI/UX/visual task — building or changing a page, component, layout, palette, typography, spacing, hero, animation, scroll behaviour, responsive behaviour, mobile screen, 3D effect — or when a design task could plausibly match more than one installed design skill. Routes across impeccable, frontend-design, ui-ux-pro-max, epic-design, interface-design, responsive-craft, hue, scroll-craft, mobile-app-ui-design, and the 22-skill 3D/animation group. Prevents invoking every design skill on every task."
user-invocable: true
argument-hint: "[describe the design task]"
---

# Design router

Pick the **smallest correct combination** of design skills. More skills ≠ better design.

## Step 1 — classify (do not skip)

1. **Surface:** web product UI · marketing site · mobile app · 3D/interactive
2. **Stage:** direction · design system · creation · responsive · interaction · audit
3. **Reference given?** URL / screenshot / "like X" → `hue` is a candidate
4. **Special interaction genuinely required?** scroll-driven → `scroll-craft`;
   cinematic moment → `epic-design`; real 3D or advanced motion → the 3D group.
   Default answer is **no**.

State the classification in one line before proceeding.

## Step 2 — pick ONE primary

| Task | Primary |
|---|---|
| New page / component from scratch | `frontend-design` |
| Consistency, components, tokens, spacing, nav across an existing product | `interface-design` |
| Choose palette / typography / visual style / UX pattern | `ui-ux-pro-max` |
| Turn a visual reference into our design system | `hue` |
| Existing UI is generic, weak hierarchy, unfinished | `impeccable` |
| Breakpoints, adaptive layout, mobile behaviour | `responsive-craft` |
| Premium hero / cinematic marketing moment | `epic-design` |
| Scroll itself carries the story | `scroll-craft` |
| Native / mobile-first app screen | `mobile-app-ui-design` |
| 3D, advanced animation, experimental interaction | one or two of the 3D group |

## Step 3 — add secondaries only for a specific additional problem

Standard combinations:

- New product page → `frontend-design` + `interface-design`
- From a reference → `hue` → `interface-design` → `frontend-design`
- Looks generic → `impeccable` alone
- Poor mobile behaviour → `responsive-craft` → `impeccable`
- Premium marketing landing → `frontend-design` + `epic-design`
  (+ `scroll-craft` **only if** scroll interaction is required)
  + `responsive-craft` → `impeccable`
- 3D interactive → `frontend-design` + `interface-design` + 3D group
  + `responsive-craft` → `impeccable`
- Mobile app screen → `mobile-app-ui-design` + `interface-design` → `impeccable`

`impeccable` is always **last**, never the generator.
`responsive-craft` runs after implementation, before `impeccable`.

## Step 4 — apply the repo overrides

- This repo is a **landing/marketing site**. `interface-design` declares itself
  out of scope for marketing pages → `frontend-design` leads; use
  `interface-design` only for the shared token/component layer.
- **Never open `modern-web-design`** — conflicts with `frontend-design` and `impeccable`.
- **Ask before running `hue`** — it generates a committed design system, it is
  not a lightweight "analyse this screenshot" tool.
- **Ask before `scroll-craft`'s asset generation** — it calls an external paid
  service (kie.ai).
- COVE serves IVF patients: calm, trustworthy, low-anxiety. No hype motion or
  cinematics on clinical content.

## Step 5 — state the plan

Before editing, output:

```
Surface: … | Stage: … | Reference: … | Special interaction: …
Primary: <skill>
Secondary: <skill(s)> — because <specific problem each solves>
Not using: <skills a reader might expect> — because <reason>
```

Then invoke only those skills.

## Banned outputs regardless of skill

Generic AI gradients · excessive glassmorphism · random rounded cards ·
unnecessary animation · excessive glow · arbitrary typography · inconsistent
spacing · effects with no product purpose · cloning a reference outright ·
changing an established design system without reason.

Preserve existing functionality unless the task explicitly requires changing it.

Details: `.claude/DESIGN-ROUTING.md`. Provenance: `.claude/DESIGN-STACK.md`.
