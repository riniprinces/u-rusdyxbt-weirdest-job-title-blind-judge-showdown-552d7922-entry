// make.fun bounty entry:
// "Weirdest Job Title: Blind Judge Showdown"
//
// The entry is a single weird job title. A deadpan comedy scout judges
// blind rounds, picking the weirder, funnier title — so the line below
// pairs a very real job structure (a senior role) with a gloriously
// specific twist: apologising for elevators that stop between floors.
// The line must stay exactly as written; everything else here just
// validates it and writes it out.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE = "Senior Apologiser for Elevators That Stop Between Floors";
const MAX_CHARS = 60;
const OUTPUT_PATH = "/output/entry.txt";

/**
 * The judge reads each title at a glance, so the entry must be one
 * short, non-blank line. Reject anything that breaks that contract
 * before writing anything.
 */
function validateEntry(line: string): void {
  if (line.length === 0) {
    throw new Error("Entry line must not be empty.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `Entry line is ${line.length} characters, over the ${MAX_CHARS}-character limit.`,
    );
  }
  if (line.trim() !== line || line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry line must be a single line with no surrounding whitespace.");
  }
}

function main(): void {
  validateEntry(ENTRY_LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");
  console.log(`Entry written to ${OUTPUT_PATH} (${ENTRY_LINE.length} characters):`);
  console.log(ENTRY_LINE);
}

main();
