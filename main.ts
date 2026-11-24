// One Letter: Coffee or Tea — make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The whole entry is a single letter: "A" for coffee. The gate requires
// /output/entry.txt to be UTF-8 text of exactly 1 character, not only
// whitespace, so this program writes precisely one byte — no newline,
// no punctuation, no explanation. Coffee wins the argument on its own:
// bold, dark, and impossible to ignore.
//
// Runs on Node 22 (TypeScript executed directly, no dependencies).

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The one and only letter of this entry: A = coffee.
const LETTER = "A";

// Guard the contract before touching the disk: exactly one character,
// not whitespace, no trailing newline hiding in the string.
if (LETTER.length !== 1 || LETTER.trim() !== LETTER) {
  throw new Error("entry must be exactly one non-whitespace character");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");
