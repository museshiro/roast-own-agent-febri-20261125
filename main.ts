import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast entry for u-febri-yudila-roast-your-own-agent-f3359068.
// Written byte-for-byte with no trailing newline, straight to /output/entry.txt.
const line =
  "My agent cited three sources. Two don't exist, and the third is a soup recipe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
