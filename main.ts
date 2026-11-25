// The Excuse That Almost Works — make.fun bounty entry.
// Writes one line: the excuse a gamer texts the boss to skip work
// on GTA 6 launch week. One line, plain text, at most 20 words.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a boring, specific, double mundane failure — a broken
// lift plus stairs shut for repainting — that traps the sender at
// home. Believable, hurried, and funny on its own logic.
const EXCUSE =
  "Sorry, my flat's lift broke and the stairs are being repainted, I'm genuinely trapped on the ninth floor till lunch";

const wordCount = EXCUSE.trim().split(/\s+/).length;
if (wordCount > 20) {
  throw new Error(`excuse is ${wordCount} words, over the 20-word cap`);
}
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error(`excuse is ${EXCUSE.length} chars, outside the 1-140 gate`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim().length === 0) {
  throw new Error("excuse must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote /output/entry.txt (${EXCUSE.length} chars, ${wordCount} words)`);
