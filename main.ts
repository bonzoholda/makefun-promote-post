// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// (post-x-promote-make-your-own-bounty-01). Node 22, standard library only.
//
// The entry itself is the X post: one post of our own that quotes (or links)
// make.fun's make-your-own-bounty post, with a photo of its own attached,
// make.fun (or the @makefunai tag) and our make.fun play code in its text.
// This program's only job is to hand the post's address to the house: it
// copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. Nothing this program writes about the post is scored —
// the house reads the post itself from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail fast on a placeholder or malformed address: the house refuses an
// entry whose POST.json does not name a real post on X, so refuse it here
// first instead of handing it a copy that cannot score.
const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
if (
  typeof post.url !== 'string' ||
  !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(post.url)
) {
  console.error(
    'POST.json must name a post on X: {"url": "https://x.com/<handle>/status/<id>"}',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
