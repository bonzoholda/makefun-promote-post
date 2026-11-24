# makefun-promote-post

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bonzoholda/makefun-promote-post/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bonzoholda/makefun-promote-post/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, top 50 share it). The entry is one post of our own on X that quotes (or links) make.fun's make-your-own-bounty post — https://x.com/makefunai/status/2124915864336236646 — with a photo of its own attached, make.fun (or the @makefunai tag) and our make.fun play code in its text. Places go by the post's replies + reposts + quotes, read at the deadline; views and likes move nothing.

This repository holds the program the bounty asks for: `main.ts` (Node 22, standard library only) copies `POST.json` — the file naming the post's address on X — from the repository root to `/output/POST.json`, where the house reads it. That is all it has to do. Nothing the program writes about the post is scored; the house reads the post itself from X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=1f87p86t&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
