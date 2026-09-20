# Design stack — provenance

Installed 2026-09-20 into `.claude/skills/` (project scope, committed to git).

**Why project scope:** Claude Code on the web runs in an ephemeral container.
`~/.claude/skills/` is wiped when the container is reclaimed, so anything
installed there would not survive the session. Project-scoped skills are
versioned, reproducible, and also work in local Claude Code / Cursor / Codex.

Installed by `git clone --depth 1` + copy of the skill directory. The GitHub API
(`api.github.com`) and `codeload.github.com` are blocked by this environment's
egress policy; `git` over HTTPS and `raw.githubusercontent.com` are allowed.

| # | Skill | Installed at | Source repo | Upstream path | Commit |
|---|---|---|---|---|---|
| 1 | Impeccable | `.claude/skills/impeccable` | https://github.com/pbakaus/impeccable | `.claude/skills/impeccable` | `f2c7051` |
| 2 | Frontend Design | `.claude/skills/frontend-design` | https://github.com/anthropics/claude-code (official) | `plugins/frontend-design/skills/frontend-design` | `bf7d404` |
| 3 | UI UX Pro Max | `.claude/skills/ui-ux-pro-max` | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | `.claude/skills/ui-ux-pro-max` | `de5f12b` |
| 4 | Epic Design | `.claude/skills/epic-design` | https://github.com/Cozythecoder/frontend-design-md | `skills/epic-design` | `8aa0e94` |
| 5 | Interface Design | `.claude/skills/interface-design` | https://github.com/Dammyjay93/interface-design | `.claude/skills/interface-design` | `2f9be32` |
| 6 | Responsive Craft | `.claude/skills/responsive-craft` | https://github.com/kylezantos/responsive-craft | repo root | `4863701` |
| 7 | Hue | `.claude/skills/hue` | https://github.com/dominikmartn/hue | repo root | `a910e31` |
| 8 | Scroll Craft | `.claude/skills/scroll-craft` | https://github.com/nateherkai/scroll-craft | `plugins/nateherk-design/skills/scroll-craft` | `0b81622` |
| 9 | Mobile App UI Design | `.claude/skills/mobile-app-ui-design` | https://github.com/ceorkm/mobile-app-ui-design | repo root | `4c67a0e` |
| 10 | Claude Design Skills (22) | `.claude/skills/<22 dirs>` | https://github.com/freshtechbro/claudedesignskills | `plugins/individual/*/skills/*` | `1da73fe` |

Total: **31 skill directories, ~12 MB.**

## Local modification

`epic-design/SKILL.md` ships upstream with **no YAML frontmatter**, so Claude
Code cannot discover it. Frontmatter (`name`, `description`, `license`) was
prepended at install, with the description written from the skill's own
"Trigger Phrases" section. The body is unmodified. Re-apply this patch on any
upstream update.

No other skill was modified.

## Disambiguation notes

- **"Claude Design Skills"** matched three plausible repos. Chosen:
  `freshtechbro/claudedesignskills`, because its stated scope (3D graphics,
  animation, interactive web experiences) matches the routing intent exactly.
  Rejected: `master5d/claude-design-skills` (general UI/UX + typography +
  motion — overlaps `frontend-design`/`interface-design` rather than covering
  3D), and `jiji262/claude-design-skill` (HTML-artifact decks/posters, wrong
  scope).
- **Scroll Craft** exists as several forks (`roamso123`, `flyingwebie`,
  `tobbynaish`). Chosen `nateherkai/scroll-craft` — the plugin is named
  `nateherk-design`, identifying it as upstream.
- **Frontend Design** resolved to Anthropic's official plugin rather than any
  community skill of the same name.

## Refreshing

```
git clone --depth 1 https://github.com/<repo> /tmp/x
cp -r /tmp/x/<upstream path> .claude/skills/<name>
```
Then re-check frontmatter:
```
for d in .claude/skills/*/; do [ "$(head -1 "$d/SKILL.md")" = "---" ] || echo "FAIL $d"; done
```
