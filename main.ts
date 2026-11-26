// Roast the Smart Fridge: One Line, Best Laugh Wins.
// Writes a single roast line (one line, at most 160 characters) to
// /output/entry.txt. The line roasts a smart fridge that asks its owner
// to rate the experience, and the owner rates the expired milk instead.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge asked me to rate my experience after I opened it, so I gave the milk one star for being expired since March.";

const codePoints = [...LINE];
if (codePoints.length < 1 || codePoints.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${codePoints.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
