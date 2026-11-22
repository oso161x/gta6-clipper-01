// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a 30-second vertical GTA 6 clip, cut by my
// agent in its recorded session from Rockstar's official GTA VI Launch
// Trailer, uploaded to YouTube as a public Short with the bounty's line and
// the entrant's play code in its description. This program only hands the
// house the video's address: it reads VIDEO.json from the repository root,
// checks that it names a real YouTube video (and refuses the placeholder),
// and copies it byte-for-byte to the output directory, where the gate reads
// it. Nothing this program writes about the video is scored: the house reads
// the video itself through the YouTube Data API.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Validate without writing anything:
//   node main.ts --check
// Usage:
//   node main.ts --help

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LINK_FILE = 'VIDEO.json';
const MAX_LINK_BYTES = 16384;

// A YouTube video address, as the Share button gives it. The id is 11
// characters of letters, digits, _ and -. A query or fragment after the id
// (such as ?si=...) is read past, never part of the id.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[?#].*)?$/;

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

function readLink(): { raw: Buffer; url: string } {
  const path = join(BOT_DIR, LINK_FILE);
  let raw: Buffer;
  try {
    raw = readFileSync(path);
  } catch (err) {
    fail(`could not read ${LINK_FILE} from ${BOT_DIR}: ${(err as Error).message}`);
  }
  if (raw!.length > MAX_LINK_BYTES) {
    fail(`${LINK_FILE} is ${raw!.length} bytes, over the ${MAX_LINK_BYTES}-byte cap`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw!.toString('utf8'));
  } catch (err) {
    fail(`${LINK_FILE} is not valid JSON: ${(err as Error).message}`);
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail(`${LINK_FILE} must be a JSON object with a "url" string`);
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    fail(`${LINK_FILE} must carry a "url" string naming the YouTube video`);
  }
  return { raw: raw!, url };
}

function validateUrl(url: string): string {
  if (url.includes('<id>')) {
    fail(
      `VIDEO.json still holds the placeholder address ${url}: ` +
        `upload the clip to YouTube first, then put its real address here`,
    );
  }
  const match = YOUTUBE_URL.exec(url);
  if (match === null) {
    fail(
      `not a YouTube video address: ${url} ` +
        `(expected https://www.youtube.com/shorts/<11-char id>, ` +
        `https://www.youtube.com/watch?v=<id> or https://youtu.be/<id>)`,
    );
  }
  return match[1];
}

function main(): void {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log(
      'Usage: node main.ts [--check] [--help]\n' +
        '\n' +
        'Copies VIDEO.json from the repository root to the output directory\n' +
        '($MAKEFUN_OUTPUT_DIR, or /output), after checking it names a real\n' +
        'YouTube video. --check only validates and writes nothing.\n' +
        'Environment: MAKEFUN_BOT_DIR (default /bot), MAKEFUN_OUTPUT_DIR\n' +
        '(default /output).',
    );
    return;
  }

  const { raw, url } = readLink();
  const id = validateUrl(url);

  if (args.includes('--check')) {
    console.log(`VIDEO.json names YouTube video ${id} (${raw.length} bytes): OK`);
    return;
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  try {
    copyFileSync(join(BOT_DIR, LINK_FILE), join(OUTPUT_DIR, LINK_FILE));
  } catch (err) {
    fail(`could not copy ${LINK_FILE} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  }
  // The copy must be byte-for-byte: verify the written file matches.
  const written = readFileSync(join(OUTPUT_DIR, LINK_FILE));
  if (!written.equals(raw)) {
    fail(`the copy of ${LINK_FILE} in ${OUTPUT_DIR} differs from the repository's`);
  }
}

main();
