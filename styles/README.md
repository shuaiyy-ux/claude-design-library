# Styles

Named visual styles, each with a `style.md` description, a `tokens.json` design-token file, and at least one example.

Ask Claude: *"Fetch `styles/<slug>/tokens.json` and use it to style my page."*

| Preview | Style | Mood |
| :---: | --- | --- |
| <img src="./brutalism/examples/preview.png" width="240"> | **[Brutalism](./brutalism)** | Raw, bold, confrontational |
| <img src="./neobrutalism/examples/preview.png" width="240"> | **[Neo-Brutalism](./neobrutalism)** | Playful brutalism with color |
| <img src="./glassmorphism/examples/preview.png" width="240"> | **[Glassmorphism](./glassmorphism)** | Frosted, translucent, layered |
| <img src="./claymorphism/examples/preview.png" width="240"> | **[Claymorphism](./claymorphism)** | Soft, puffy, tactile |
| <img src="./minimal-swiss/examples/preview.png" width="240"> | **[Minimal / Swiss](./minimal-swiss)** | Grid-led, restrained, typographic |
| <img src="./editorial-magazine/examples/preview.png" width="240"> | **[Editorial Magazine](./editorial-magazine)** | Serif-heavy, print-inspired |
| <img src="./retro-terminal/examples/preview.png" width="240"> | **[Retro Terminal](./retro-terminal)** | Monospace, scanlines, phosphor |
| <img src="./skeuomorphic/examples/preview.png" width="240"> | **[Skeuomorphic](./skeuomorphic)** | Realistic textures, depth |

---

All previews are auto-generated via `npx tsx scripts/screenshot.ts` (Playwright + Chromium). They are screenshots of our own MIT-licensed example files in each `examples/` folder.
