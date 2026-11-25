// Charm the Commuter: Forecast a City That Isn't.
//
// One line, at most 140 characters: a weather forecast for a city
// that does not exist, naming the place, giving it weather, and
// making a bored commuter smile. This program writes that line
// to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const forecast =
  "Good morning, Nod. Sunny spells, a 40% chance of Tuesday, and clear roads — the traffic lights called in sick today.";

// The gate: one line, 1 to 140 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...forecast].length;
if (size < 1 || size > 140) {
  throw new Error(`forecast must be 1 to 140 characters, got ${size}`);
}
if (forecast.trim() !== forecast || forecast.includes("\n")) {
  throw new Error("forecast must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), forecast, "utf8");
