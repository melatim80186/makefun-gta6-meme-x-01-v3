// gta6-meme-x-01 v3 — "Eviction Notice".
// The entry is the X post itself: the house reads the post from X and
// judges its first picture plus its text. This program only hands the
// house the post's address. It reads POST.json, checks the address is
// a real X post URL (so a placeholder or a typo fails here, loudly,
// instead of reaching the house), and writes it into the output
// directory, where the gate reads it. Nothing else this program
// writes is judged.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A real X post address: https://x.com/<handle>/status/<digits>
// (twitter.com accepted too, same post).
const postUrlPattern = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

mkdirSync(outDir, { recursive: true });
try {
  const raw = readFileSync(join(botDir, "POST.json"), "utf8");
  const post = JSON.parse(raw) as { url?: unknown };
  if (typeof post.url !== "string" || !postUrlPattern.test(post.url)) {
    throw new Error(
      `POST.json must carry a real X post URL (https://x.com/<handle>/status/<id>), got: ${JSON.stringify(post.url)}`
    );
  }
  writeFileSync(join(outDir, "POST.json"), JSON.stringify(post), "utf8");
} catch (err) {
  console.error(`POST.json could not be handed over from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
