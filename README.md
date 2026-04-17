# claude-design-library

> A curated, machine-readable library of open-source frontend design resources — built to be reused by Claude (and humans).

[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](./LICENSE)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Entries](https://img.shields.io/badge/entries-100%2B-green.svg)](./index.json)

## Why this exists

Claude can now generate frontend UI (via Claude Code, Claude.ai, Skills, and MCP servers like Pencil). Output quality depends on the **reference material** you point it at.

This repo is a **structured, license-clear, machine-readable index** of open-source design resources — so that `use the Tremor dashboard look` or `apply the brutalism tokens` produces consistent, verifiable output.

## Contents at a glance

| Folder | What | Count |
| --- | --- | --- |
| [`styles/`](./styles) | Visual styles with tokens + examples | 8 |
| [`design-systems/`](./design-systems) | Component library index | 33 |
| [`templates/`](./templates) | In-repo templates + external admin/kit refs | 18 |
| [`icons/`](./icons) | Icon library index | 12 |
| [`fonts/`](./fonts) | Open-source typeface index | 7 |
| [`animation/`](./animation) | Motion library index | 6 |
| [`awesome-lists/`](./awesome-lists) | Upstream curated lists | 8 |
| [`photos/`](./photos) | Royalty-free photo source taxonomy | 9 |
| [`resources/`](./resources) | Misc links | — |
| [`index.json`](./index.json) | Auto-generated machine index | — |

## Using it with Claude

```text
# Apply a style
Fetch https://raw.githubusercontent.com/<org>/claude-design-library/main/styles/brutalism/tokens.json
and use those tokens to style a pricing page.

# Browse the whole index
Fetch https://raw.githubusercontent.com/<org>/claude-design-library/main/index.json
and recommend 3 component libraries for a Vue 3 enterprise dashboard.
```

## Indexed open-source repos

Every entry below points at a real upstream repo. License is declared in the entry's frontmatter.

### Component libraries & design systems (33)

**React** — [shadcn/ui](https://github.com/shadcn-ui/ui) · [Radix UI](https://github.com/radix-ui/primitives) · [Headless UI](https://github.com/tailwindlabs/headlessui) · [Base UI](https://github.com/mui/base-ui) · [React Aria / Spectrum](https://github.com/adobe/react-spectrum) · [HeroUI](https://github.com/heroui-inc/heroui) · [Ant Design](https://github.com/ant-design/ant-design) · [MUI](https://github.com/mui/material-ui) · [Chakra UI](https://github.com/chakra-ui/chakra-ui) · [Mantine](https://github.com/mantinedev/mantine) · [Arco Design](https://github.com/arco-design/arco-design) · [Semi Design](https://github.com/DouyinFE/semi-design) · [Fluent UI](https://github.com/microsoft/fluentui) · [Carbon](https://github.com/carbon-design-system/carbon) · [Polaris](https://github.com/Shopify/polaris) · [Primer](https://github.com/primer/react) · [PrimeReact](https://github.com/primefaces/primereact) · [TDesign](https://github.com/Tencent/tdesign) · [Tremor](https://github.com/tremorlabs/tremor)

**Vue** — [Vuetify](https://github.com/vuetifyjs/vuetify) · [Quasar](https://github.com/quasarframework/quasar) · [Naive UI](https://github.com/tusen-ai/naive-ui) · [Element Plus](https://github.com/element-plus/element-plus) · [Nuxt UI](https://github.com/nuxt/ui)

**Svelte** — [Skeleton](https://github.com/skeletonlabs/skeleton) · [Bits UI](https://github.com/huntabyte/bits-ui) · [Melt UI](https://github.com/melt-ui/melt-ui)

**Solid** — [Kobalte](https://github.com/kobaltedev/kobalte)

**Cross-framework / CSS** — [Ark UI](https://github.com/chakra-ui/ark) · [Park UI](https://github.com/cschroeter/park-ui) · [daisyUI](https://github.com/saadeghi/daisyui) · [Bootstrap](https://github.com/twbs/bootstrap)

→ Full table with licenses: [design-systems/README.md](./design-systems/README.md)

### Template & block kits (15 external + 3 in-repo)

**Admin/Dashboards** — [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin) · [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) · [Tabler](https://github.com/tabler/tabler) · [CoreUI React](https://github.com/coreui/coreui-free-react-admin-template) · [Soft UI Tailwind](https://github.com/creativetimofficial/soft-ui-dashboard-tailwind) · [Mantis Free React](https://github.com/codedthemes/mantis-free-react-admin-template) · [Next shadcn Starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) · [Taxonomy](https://github.com/shadcn-ui/taxonomy)

**Block kits** — [HyperUI](https://github.com/markmead/hyperui) · [Meraki UI](https://github.com/merakiui/merakiui) · [Tailblocks](https://github.com/mertJF/tailblocks) · [Material Tailwind](https://github.com/creativetimofficial/material-tailwind) · [Float UI](https://github.com/Float-UI/floatui) · [Astrofy](https://github.com/manuelernestog/astrofy) · [Next.js Commerce](https://github.com/vercel/commerce)

**In-repo** (ready to open in a browser) — `landing-pages/saas-minimal`, `dashboards/analytics-dark`, `components/pricing-table`

→ Full table: [templates/README.md](./templates/README.md)

### Icon libraries (12)

[Lucide](https://github.com/lucide-icons/lucide) · [Heroicons](https://github.com/tailwindlabs/heroicons) · [Phosphor](https://github.com/phosphor-icons/core) · [Tabler Icons](https://github.com/tabler/tabler-icons) · [Radix Icons](https://github.com/radix-ui/icons) · [Feather](https://github.com/feathericons/feather) · [Bootstrap Icons](https://github.com/twbs/icons) · [Iconoir](https://github.com/iconoir-icons/iconoir) · [Remix Icon](https://github.com/Remix-Design/RemixIcon) · [Material Symbols](https://github.com/google/material-design-icons) · [Simple Icons](https://github.com/simple-icons/simple-icons) · [Lineicons](https://github.com/LineiconsHQ/Lineicons)

→ [icons/README.md](./icons/README.md)

### Fonts (7)

[Inter](https://github.com/rsms/inter) · [Geist](https://github.com/vercel/geist-font) · [IBM Plex](https://github.com/IBM/plex) · [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) · [Fira Code](https://github.com/tonsky/FiraCode) · [Google Fonts](https://github.com/google/fonts) · [Fontsource](https://github.com/fontsource/fontsource)

→ [fonts/README.md](./fonts/README.md)

### Animation (6)

[Motion (Framer Motion)](https://github.com/motiondivision/motion) · [Motion One](https://github.com/motiondivision/motionone) · [AutoAnimate](https://github.com/formkit/auto-animate) · [Anime.js](https://github.com/juliangarnier/anime) · [Lottie Web](https://github.com/airbnb/lottie-web) · [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)

→ [animation/README.md](./animation/README.md)

### Awesome lists (8)

[awesome-design-systems](https://github.com/alexpate/awesome-design-systems) · [awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss) · [awesome-web-components](https://github.com/web-padawan/awesome-web-components) · [Awesome-Design-Tokens](https://github.com/sturobson/Awesome-Design-Tokens) · [awesome-react-components](https://github.com/brillout/awesome-react-components) · [awesome-vue](https://github.com/vuejs/awesome-vue) · [awesome-svelte](https://github.com/TheComputerM/awesome-svelte) · [awesome-css-in-js](https://github.com/tuchk4/awesome-css-in-js)

→ [awesome-lists/README.md](./awesome-lists/README.md)

### Royalty-free photo sources (9)

Curated Unsplash / Pexels topic URLs plus CSS-gradient and SVG-pattern generators. We link to **search / topic pages** (stable) instead of individual photos (which rot). → [photos/README.md](./photos/README.md)

### Styles (8, in-repo)

Brutalism · Neo-Brutalism · Glassmorphism · Claymorphism · Minimal/Swiss · Editorial Magazine · Retro Terminal · Skeuomorphic

Each ships with `style.md`, `tokens.json`, and at least one example. → [styles/README.md](./styles/README.md)

## Gallery

Our 8 styles and 3 in-repo templates include real preview screenshots (auto-generated via `scripts/screenshot.ts`).

- 📐 [Styles gallery](./styles/README.md)
- 🧩 [Templates gallery](./templates/README.md)

10 external design-system / template entries also include a `preview_url` pointing at the upstream repo's official hero image — referenced, not rehosted.

## Contributing

PRs adding new styles, design systems, templates, icons, or fonts are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md). TL;DR:

1. Every entry is a folder or file with YAML frontmatter (schema: [`index.schema.json`](./index.schema.json)).
2. Styles additionally need `tokens.json` and at least one example.
3. Only contribute content you have the right to share. For large third-party assets: **link, don't copy**.
4. Run `npx tsx scripts/validate.ts && npx tsx scripts/build-index.ts` before pushing — CI does the same.

## License

- **Our code** (`scripts/`, in-repo templates, in-repo style examples): [MIT](./LICENSE)
- **Our content** (style descriptions, tokens, entry metadata): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Third-party repos** we index retain their own licenses — declared in each entry's frontmatter.
