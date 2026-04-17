# Contributing

Thanks for helping grow `claude-design-library`. The goal is simple: every entry must be **license-clear** and **machine-readable** so Claude can reuse it reliably.

## Quick start

1. Fork and clone.
2. Copy an existing entry in the relevant folder as a template.
3. Fill in all frontmatter fields (see schema below).
4. Run validation locally: `npx tsx scripts/validate.ts`
5. Open a PR using the matching issue template.

## Entry types and required files

| Type | Folder | Required files |
| --- | --- | --- |
| `style` | `styles/<slug>/` | `style.md`, `tokens.json`, `preview.png`, at least one file in `examples/` |
| `design-system` | `design-systems/entries/` | `<slug>.md` |
| `template` | `templates/<category>/<slug>/` | `template.md` (with frontmatter), one of `index.html` / `index.tsx`, optional `preview.png` |
| `inspiration` | `inspiration/gallery/` | `<date>-<slug>.md` (image optional — prefer linking if not CC-licensed) |

## Frontmatter schema

Every `.md` entry must start with YAML frontmatter matching `index.schema.json`:

```yaml
---
name: Brutalism
slug: brutalism
type: style                       # style | design-system | template | inspiration
tags: [bold, raw, high-contrast]
tech: [html, tailwind, react]     # optional; required for template / design-system
source_url: https://...           # where the style/system/template originated
license: MIT                      # MIT | Apache-2.0 | CC-BY-4.0 | CC0 | reference-only
preview: ./preview.png            # relative path, omit for link-only inspiration
claude_prompt: "One-line instruction Claude can paste to apply this style."
added: 2026-04-17                 # ISO date
---
```

## Style entries: `tokens.json`

The single most important file. It is what Claude consumes to produce consistent output.

```json
{
  "colors": { "bg": "#FFFF00", "fg": "#000000", "accent": "#FF00FF" },
  "radius": { "sm": "0px", "md": "0px", "lg": "0px" },
  "shadow": { "default": "8px 8px 0 0 #000" },
  "font": { "sans": "Space Grotesk", "mono": "IBM Plex Mono" },
  "spacing_scale": "4px"
}
```

Keep it minimal but opinionated. If a field doesn't meaningfully differ from default, omit it.

## License & attribution rules

- Do **not** upload copyrighted screenshots from Dribbble, Behance, or paid templates.
- For inspiration: link to the source; include author credit in the entry.
- For design-system entries: confirm the library's license (MIT/Apache/etc.) and record it in frontmatter.
- Templates you contribute yourself are assumed MIT unless you state otherwise.

## CI checks

Every PR runs `scripts/validate.ts`, which:
- Parses frontmatter and checks against `index.schema.json`
- Verifies referenced files (`preview`, `tokens.json`, `examples/`) exist
- Rebuilds `index.json` and checks it matches committed version

If CI fails, read the error — it's usually a missing field or a broken relative path.

## Claude reuse checklist (PR template)

Before requesting review, confirm:

- [ ] `claude_prompt` is a single, concrete sentence
- [ ] `tokens.json` (for styles) uses real values, not placeholders
- [ ] At least one working example exists
- [ ] All third-party assets have an attribution + license
- [ ] I ran `npx tsx scripts/validate.ts` locally with no errors
