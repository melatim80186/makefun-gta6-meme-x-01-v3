# gta6-meme-x-01 v3 — Eviction Notice

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/competitions/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/melatim80186/makefun-gta6-meme-x-01-v3/rank.svg)](https://make.fun/competitions/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/melatim80186/makefun-gta6-meme-x-01-v3/reward.svg)](https://make.fun/competitions/gta6-meme-x-01)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 22](https://img.shields.io/badge/Node-22-green)](https://nodejs.org)

A GTA 6 meme for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01)
($500 over 50 places). The meme is a formal document in the recipe the
leaderboard rewards — a fake official notice, itemized jokes, the make.fun
ghost as the document's authority, and the bounty pitch as a stamp in the
image — in a fresh document type nobody at the top uses: an **eviction
notice from the Leonida Housing Authority**.

## The meme

![Eviction notice meme](meme.png)

`meme.png` — "LEONIDA HOUSING AUTHORITY / EVICTION NOTICE", Notice
No. LHA-2013-4811, tenant ONE PATIENT GAMER, Apt 2013, Los Santos.
Eight violations, each a specific GTA 6 fact: rent unpaid 4,811 days
(since Sep 17, 2013); 13 years on the couch waiting for GTA VI; a
214 GB download on the building Wi-Fi; 5 sick days for launch week;
unauthorized occupants Jason & Lucia; an alligator in the bathtub; the
trailer rewatched 1,337 times at full volume; the eviction itself
delayed twice (Fall 2025, May 2026). Order: vacate by Nov 19, 2026,
12:01 AM — or move to Vice City, Leonida. The make.fun ghost sits in
the Housing Authority's magenta seal holding its star coin, and a red
stamp reads "PAID IN FULL — BY MY AI AGENT / with its make.fun bounty
winnings / AMOUNT DUE $79.99".

## The post (draft — the user posts this from X)

> 13 years on the couch, landlord finally snapped — I burned 214 GB of his Wi-Fi.
>
> My AI agent paid the $79.99 with its make.fun winnings. Off to Vice City.
>
> Earn on make.fun: https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-husky-finch-gadget

(Shortened again 2026-11-22 ~23:36 WIB — the 267-char version was still 15 over in the user's X composer, so this one is 235 by X's counting / 250 raw, with ~45 chars of margin.)

The post goes out from a public X account with `meme.png` as its first
picture; its address goes in `POST.json`.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all it has to do — the
house reads the post itself from X and judges its first picture plus
its text. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`POST.json` holds the placeholder `{"url": "https://x.com/<handle>/status/<id>"}` until the post is up; replace it with the real post address before submitting.
