#!/usr/bin/env tsx
/**
 * Converts each styles/<slug>/tokens.json to a W3C Design Tokens
 * Community Group (DTCG) formatted tokens.w3c.json alongside it.
 *
 * Spec: https://tr.designtokens.org/format/
 *
 * The simplified tokens.json is kept as-is for quick human / Claude
 * consumption; the tokens.w3c.json version is for tools that expect
 * the standard schema (Style Dictionary, Tokens Studio, etc.).
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(__dirname, "..");
const STYLES = join(ROOT, "styles");

const TYPE_MAP: Record<string, string> = {
  colors: "color",
  radius: "dimension",
  spacing_scale: "dimension",
  border: "border",
  shadow: "shadow",
  font: "fontFamily",
  motion: "duration",
  gradients: "gradient",
  type_scale: "dimension",
  line_height: "number",
  grid: "other",
  effects: "other",
  backdrop_filter: "other",
};

type Leaf = string | number;
type Nested = { [k: string]: Leaf | Nested };

function wrap(value: Leaf, type: string) {
  return { $value: value, $type: type };
}

function convertCategory(key: string, value: Leaf | Nested): unknown {
  const type = TYPE_MAP[key] ?? "other";
  if (value === null || typeof value !== "object") {
    return wrap(value as Leaf, type);
  }
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value)) {
    if (v !== null && typeof v === "object") {
      out[k] = convertCategory(key, v as Nested); // keep same type for sub-nested
    } else {
      out[k] = wrap(v as Leaf, type);
    }
  }
  return out;
}

function convert(tokens: Record<string, Leaf | Nested>): Record<string, unknown> {
  const out: Record<string, unknown> = {
    $description: "Auto-converted from tokens.json. See scripts/build-w3c-tokens.ts.",
  };
  for (const [cat, val] of Object.entries(tokens)) {
    out[cat] = convertCategory(cat, val);
  }
  return out;
}

function main() {
  const styleDirs = readdirSync(STYLES).filter((n) => {
    const p = join(STYLES, n);
    return statSync(p).isDirectory();
  });

  let n = 0;
  for (const slug of styleDirs) {
    const src = join(STYLES, slug, "tokens.json");
    try {
      const tokens = JSON.parse(readFileSync(src, "utf8"));
      const w3c = convert(tokens);
      const dst = join(STYLES, slug, "tokens.w3c.json");
      writeFileSync(dst, JSON.stringify(w3c, null, 2) + "\n");
      console.log(`✓ ${slug}/tokens.w3c.json`);
      n++;
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") continue;
      console.error(`✗ ${slug}: ${(e as Error).message}`);
    }
  }
  console.log(`\nGenerated ${n} W3C token file(s).`);
}

main();
