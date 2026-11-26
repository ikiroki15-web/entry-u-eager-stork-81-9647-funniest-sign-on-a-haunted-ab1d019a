// Entry for "Funniest Sign on a Haunted Server Room Door".
// Writes one sign line to /output/entry.txt: a deadpan office notice
// for a server room whose resident ghost has seniority over the staff.
// The notice is assembled from its labelled parts so the wording stays
// easy to tweak without touching the writer below.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 120;

// Each part is one clause of the sign, in door-reading order.
const SIGN_PARTS = [
  "NOTICE: The ghost in Rack 4 has tenure.",
  "Do not exorcise, reboot,",
  "or make eye contact with the blinking lights.",
];

function buildSign(parts: string[]): string {
  const line = parts.join(" ");
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`sign must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  return line;
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, buildSign(SIGN_PARTS), "utf8");
}

main();
