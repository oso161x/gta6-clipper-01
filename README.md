# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/oso161x/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/oso161x/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 30-second vertical GTA 6 clip cut from Rockstar's official GTA VI Launch Trailer: a dirt-bike jump over Vice City hooks the viewer, then the clip pitches make.fun — make clips like this with AI and earn real money. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

- **Hook (0:00–0:12):** trailer slice 0:40–0:52 — Jason and Lucia, the DJ,
  a police drift, and the dirt-bike jump off a rooftop at ~0:49.
- **Pitch (0:12–0:30):** text on screen over the continuing footage —
  "MAKE CLIPS LIKE THIS WITH AI", "AND EARN REAL MONEY ON make.fun", then
  the bounty page `make.fun/bounty/gta6-clipper-01`.
- **Footage:** Rockstar's GTA VI Launch Trailer
  (https://www.youtube.com/watch?v=rz1B4B2yBZY), vertical blur-fill,
  1080x1920, 30 fps, H.264 Main, yuv420p TV range, AAC stereo. Full
  creative notes in [CREATIVE.md](CREATIVE.md); the rendered file is
  `clip-final.mp4`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
node main.ts --check   # validate VIDEO.json without writing anything
node main.ts --help    # usage
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4s86eynw&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
