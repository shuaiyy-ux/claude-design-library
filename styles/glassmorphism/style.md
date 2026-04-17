---
name: Glassmorphism
slug: glassmorphism
type: style
tags: [translucent, frosted, depth, apple, colorful-bg]
source_url: https://hype4.academy/articles/design/glassmorphism-in-user-interfaces
license: CC-BY-4.0
claude_prompt: "Apply glassmorphism: translucent white/dark panels with backdrop-filter blur(20px), subtle 1px inner border, colorful blurred shapes behind panels, soft large radii (16-24px), subtle shadows."
added: 2026-04-17
---

# Glassmorphism

Frosted-glass surfaces floating over colorful, blurry backgrounds. Popularized by macOS Big Sur / iOS.

## Key rules
- **Panel**: `background: rgba(255,255,255,0.1); backdrop-filter: blur(20px);`
- **Border**: 1px inset `rgba(255,255,255,0.2)`.
- **Background**: must have color — solid white kills the effect. Use blurred gradients or photos.
- **Corners**: 16–24px.
- **Shadow**: large, soft, low opacity.
- **Depth**: layer multiple glass panels for richness.

## Anti-patterns
- Glass on a flat white background (no effect visible)
- Sharp corners
- Heavy opaque fills
