import { content, facts, profile } from "../src/lib/content.ts";
import { writeFileSync } from "node:fs";
writeFileSync(
  new URL("./resume-content.json", import.meta.url),
  JSON.stringify({ content, facts, profile }, null, 2),
);
