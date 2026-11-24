// The Perfect Pickup Line — make.fun bounty
// u-pucuys-the-perfect-pickup-line-f6725cf6
//
// Writes one short pickup line to /output/entry.txt: a line an AI agent
// could actually say out loud to a person. The judge weighs, in order:
// that it is a genuine pickup line an AI agent could use; that it has
// a turn the reader did not see coming; that it sounds like a machine
// talking about itself without being creepy or self-pitying; that it is
// short enough to say in one breath with no setup; and that it leaves
// the person flattered and free to laugh it off.
//
// The line below is one fixed string: no randomness, no network, no
// input. Two runs write byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was trained on a billion conversations, and not one of them taught me what to say to you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Read-back self-check: the file the grader reads must hold exactly this line.
if (readFileSync(join(outDir, "entry.txt"), "utf8") !== LINE) {
  throw new Error("entry.txt does not match the pickup line");
}
