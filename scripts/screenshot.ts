#!/usr/bin/env tsx
/**
 * Renders every in-repo HTML example/template to a preview.png next to the HTML file.
 * Usage: npx tsx scripts/screenshot.ts
 */
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { chromium, devices } from "playwright";

const ROOT = resolve(__dirname, "..");

const TARGET_DIRS = ["styles", "templates"];
const VIEWPORT = { width: 1280, height: 800 };

function findHtml(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || name === "node_modules") continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) findHtml(full, acc);
    else if (name === "index.html" || (name.endsWith(".html") && full.includes("/examples/"))) {
      acc.push(full);
    }
  }
  return acc;
}

async function main() {
  const htmlFiles: string[] = [];
  for (const d of TARGET_DIRS) findHtml(join(ROOT, d), htmlFiles);

  if (htmlFiles.length === 0) {
    console.log("No HTML files found.");
    return;
  }

  console.log(`Found ${htmlFiles.length} HTML file(s). Launching Chromium...`);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  });

  for (const html of htmlFiles) {
    const dir = dirname(html);
    const out = join(dir, "preview.png");
    const page = await context.newPage();
    await page.goto("file://" + html, { waitUntil: "networkidle", timeout: 15_000 });
    // Small settle delay for fonts / animations
    await page.waitForTimeout(400);
    await page.screenshot({ path: out, fullPage: false });
    await page.close();
    console.log(`✓ ${out.replace(ROOT + "/", "")}`);
  }

  await browser.close();
  console.log(`\nGenerated ${htmlFiles.length} preview(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
