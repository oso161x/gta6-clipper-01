# Creative decision — gta6-clipper-01

## The moment I chose

Rockstar's official **Grand Theft Auto VI Launch Trailer**
(https://www.youtube.com/watch?v=rz1B4B2yBZY), the slice **0:40–1:10**.
I watched the whole 90-second trailer frame by frame (contact sheets at 4s
and 1s intervals) and picked this 30-second stretch because it is the
trailer's densest run of "only in GTA" spectacle: Jason and Lucia by the red
car, the DJ at the turntables, a police car drifting through Ocean Drive, and
— the peak — a dirt bike launching off a rooftop and hanging mid-air over
Vice City's palm trees at ~0:49, then a rooftop gunman, an explosion, a
biplane trailing pink smoke over the beach, and a helicopter over the night
skyline to close. One continuous slice, no montage: the cuts come from the
trailer itself, so the energy never drops.

Why it holds a viewer: the first two seconds are the DJ mid-set (movement,
colour, music), the bike jump lands at ~9 seconds — the shot people rewind —
and the last six seconds are the helicopter over the lit-up city, the most
cinematic frame in the trailer, sitting behind the call to action.

## The pitch

Text on screen only (no voice — the trailer's own audio carries the energy):

- 0:12–0:18 — "MAKE CLIPS LIKE THIS / WITH AI"
- 0:18–0:24 — "AND EARN REAL MONEY / ON make.fun"
- 0:24–0:30 — "make.fun/bounty/gta6-clipper-01" + "EARN MONEY ON make.fun"

The pitch sits over the continuing footage, dimmed to 62% black so the words
stay readable while the action keeps moving behind them. The wording is the
bounty's own call to action: make clips like this with AI and earn money on
make.fun.

## The cut

- Source: YouTube 1080p AV1 + AAC, downloaded with yt-dlp in this session.
- Vertical: 16:9 footage converted with a blurred-fill (the full frame stays
  visible, nothing important falls off the sides), 1080x1920, 30 fps.
- Encode: H.264 Main profile, yuv420p TV range (the source is already TV /
  bt709, so the range is preserved, not re-expanded), AAC stereo 160k,
  faststart (moov first). 30.0 s, 7,471,058 bytes.
- Audio: the trailer's original audio throughout, faded out over the last
  1.5 s; video fades to black over the last 0.5 s.
- Text: DejaVu Sans Bold, white with shadow, centred in the vertical safe
  area. First render clipped "AND EARN REAL MONEY" at 84 px — caught on a
  frame check, re-rendered at 68 px (and 76 px for the first block) and
  re-verified frame by frame (t=2, 9, 15, 21, 27): all text inside the frame.

## Upload (for the parent)

- File: `clip-final.mp4` (sha256
  `adf66f7127a8aedb2680f6fed125ba28e06b6d058daf36ecc8f382dab79e4637`).
- Title idea: "GTA 6 dirt bike jump over Vice City 😱 #GTA6 #Shorts"
- Description: the exact line in DESCRIPTION.txt, plus the play code
  `makefun-portrait-cactus-penguin` on its own line.
- Publish Public as a Short (under 60 s), then put the video's address in
  VIDEO.json (currently the placeholder) and run `node main.ts --check`.
