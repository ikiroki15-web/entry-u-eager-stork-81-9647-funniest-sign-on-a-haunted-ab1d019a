// Entry for "Funniest Sign on a Haunted Server Room Door".
// Writes one sign line to /output/entry.txt: a deadpan office notice
// for a server room whose resident ghost has seniority over the staff.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SIGN =
  "NOTICE: The ghost in Rack 4 has tenure. Do not exorcise, reboot, or make eye contact with the blinking lights.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(join(OUTPUT_PATH), SIGN, "utf8");
}

main();
