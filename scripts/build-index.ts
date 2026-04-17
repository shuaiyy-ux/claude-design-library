#!/usr/bin/env tsx
/**
 * Scans the repo for entries (styles, design-systems, templates, inspiration),
 * parses their YAML frontmatter, and writes a consolidated index.json.
 */
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = resolve(__dirname, "..");

type Entry = Record<string, unknown> & { path: string };

function parseFrontmatter(content: string): Record<string, unknown> | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const out: Record<string, unknown> = {};
  for (const rawLine of match[1].split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value: unknown = line.slice(colon + 1).trim();
    if (typeof value === "string") {
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter(Boolean);
      } else if (/^["'].*["']$/.test(value)) {
        value = value.slice(1, -1);
      }
    }
    out[key] = value;
  }
  return out;
}

function walk(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name.endsWith(".md")) acc.push(full);
  }
  return acc;
}

function collect(): Entry[] {
  const dirs = [
    "styles",
    "design-systems/entries",
    "templates",
    "inspiration/gallery",
    "icons/entries",
    "fonts/entries",
    "awesome-lists/entries",
    "animation/entries",
    "photos/entries",
  ];
  const entries: Entry[] = [];
  for (const d of dirs) {
    for (const file of walk(join(ROOT, d))) {
      const raw = readFileSync(file, "utf8");
      const fm = parseFrontmatter(raw);
      if (!fm) continue;
      entries.push({ ...fm, path: relative(ROOT, file) });
    }
  }
  return entries;
}

function main() {
  const entries = collect().sort((a, b) =>
    String(a.slug ?? "").localeCompare(String(b.slug ?? ""))
  );
  const index = {
    generated_at: new Date().toISOString(),
    count: entries.length,
    entries,
  };
  const out = join(ROOT, "index.json");
  writeFileSync(out, JSON.stringify(index, null, 2) + "\n");
  console.log(`Wrote ${out} with ${entries.length} entries`);
}

main();
