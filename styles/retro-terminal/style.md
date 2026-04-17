---
name: Retro Terminal
slug: retro-terminal
type: style
tags: [monospace, cli, phosphor, scanlines, hacker]
source_url: https://github.com/topics/terminal-style
license: CC-BY-4.0
claude_prompt: "Apply retro terminal: monospace only (IBM Plex Mono or VT323), phosphor green or amber on near-black, optional CRT scanlines via repeating linear-gradient, blinking block cursor, ASCII-art headings, no images."
added: 2026-04-17
---

# Retro Terminal

CRT phosphor aesthetics. Text-only, monospaced, nostalgic for pre-GUI computing.

## Key rules
- **Palette**: `#0C0C0C` or `#1A1A1A` background; `#33FF33` (green) or `#FFB000` (amber) foreground.
- **Type**: monospace only — VT323, IBM Plex Mono, Fira Code.
- **Cursor**: blinking solid block.
- **Scanlines**: optional overlay via `repeating-linear-gradient`.
- **Glow**: text-shadow matching foreground hue (`0 0 6px currentColor`).
- **Layout**: ASCII boxes (`┌─┐`), no shadows, no radii, no images.
