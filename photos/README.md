# Photos

Curated references to **royalty-free photo sources** for hero images, backgrounds, and stock imagery. **We do not rehost any photos** — each entry points at a reliable Unsplash topic, Pexels search, or open collection URL.

## Why references, not files

- **Unsplash** and **Pexels** grant free commercial + non-commercial use (attribution appreciated but not required), but redistribution of the images themselves at scale is against their terms.
- Individual photo URLs can rot when authors delete photos. **Topic / search URLs are stable.**
- Storing hundreds of photos would bloat this repo. A taxonomy of proven sources is far more useful to Claude.

## How Claude uses this

```
# Get a hero photo for a SaaS landing
Fetch https://raw.githubusercontent.com/shuaiyy-ux/claude-design-library/main/photos/entries/hero-tech.md
and use one of its Unsplash URLs as the hero background.
```

## Indexed sources

| Use case | Entry |
| --- | --- |
| Tech / office heroes | [hero-tech](./entries/hero-tech.md) |
| People / portraits | [people-portrait](./entries/people-portrait.md) |
| Abstract / gradients | [abstract-gradient](./entries/abstract-gradient.md) |
| Nature / landscapes | [nature-landscape](./entries/nature-landscape.md) |
| Architecture / interiors | [architecture](./entries/architecture.md) |
| Textures / patterns | [textures](./entries/textures.md) |
| 3D renders | [3d-renders](./entries/3d-renders.md) |
| Food / drink | [food-drink](./entries/food-drink.md) |
| E-commerce product shots | [product-shots](./entries/product-shots.md) |

## Licenses

- **Unsplash License** — free for commercial/non-commercial, no permission needed; don't resell the photo unmodified; attribution appreciated. https://unsplash.com/license
- **Pexels License** — free for commercial/non-commercial, no attribution required. https://www.pexels.com/license/
- When Claude bakes one of these photos into generated code, it should include a comment with the source URL so downstream users can verify the license.
