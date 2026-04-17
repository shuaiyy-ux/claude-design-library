#!/usr/bin/env tsx
/**
 * Validates every entry's frontmatter against index.schema.json,
 * and checks that referenced files (preview, tokens.json) exist.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ROOT = resolve(__dirname, "..");
const schema = JSON.parse(readFileSync(join(ROOT, "index.schema.json"), "utf8"));

let errors = 0;
const fail = (file: string, msg: string) => {
  console.error(`✗ ${file}: ${msg}`);
  errors++;
};

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

function validateEntry(file: string, fm: Record<string, unknown>) {
  for (const key of schema.required as string[]) {
    if (!(key in fm)) {
      fail(file, `missing required field '${key}'`);
    }
  }
  if (fm.slug && typeof fm.slug === "string" && !/^[a-z0-9-]+$/.test(fm.slug)) {
    fail(file, `slug '${fm.slug}' must be kebab-case`);
  }
  const licenses = schema.properties.license.enum as string[];
  if (fm.license && !licenses.includes(String(fm.license))) {
    fail(file, `license '${fm.license}' not in allowed list`);
  }
  const types = schema.properties.type.enum as string[];
  if (fm.type && !types.includes(String(fm.type))) {
    fail(file, `type '${fm.type}' not in allowed list`);
  }
  if (fm.added && !/^\d{4}-\d{2}-\d{2}$/.test(String(fm.added))) {
    fail(file, `added '${fm.added}' must be YYYY-MM-DD`);
  }
  if (fm.preview && typeof fm.preview === "string") {
    const previewPath = join(dirname(file), fm.preview);
    if (!existsSync(previewPath)) {
      fail(file, `preview '${fm.preview}' not found`);
    }
  }
  if (fm.type === "style") {
    const tokens = join(dirname(file), "tokens.json");
    if (!existsSync(tokens)) {
      fail(file, `style entry missing tokens.json`);
    } else {
      try {
        JSON.parse(readFileSync(tokens, "utf8"));
      } catch (e) {
        fail(file, `tokens.json invalid JSON: ${(e as Error).message}`);
      }
    }
  }
}

function main() {
  const dirs = [
    "styles",
    "design-systems/entries",
    "templates",
    "inspiration/gallery",
    "icons/entries",
    "fonts/entries",
    "awesome-lists/entries",
    "animation/entries",
  ];
  let n = 0;
  for (const d of dirs) {
    for (const file of walk(join(ROOT, d))) {
      const raw = readFileSync(file, "utf8");
      const fm = parseFrontmatter(raw);
      if (!fm) {
        if (file.endsWith("README.md")) continue;
        fail(file, "no YAML frontmatter found");
        continue;
      }
      validateEntry(file, fm);
      n++;
    }
  }
  if (errors > 0) {
    console.error(`\n${errors} error(s) across ${n} entries`);
    process.exit(1);
  }
  console.log(`✓ ${n} entries validated`);
}

main();
