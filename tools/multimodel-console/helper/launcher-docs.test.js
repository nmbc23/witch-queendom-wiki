import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("README uses the helper launcher instead of hardcoded local paths", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  assert.match(readme, /start-helper\.ps1/);
  assert.doesNotMatch(readme, /臾|몄|꽌/);
});

test("PowerShell launcher configures workspace and starts server", async () => {
  const launcher = await readFile(new URL("../start-helper.ps1", import.meta.url), "utf8");
  assert.match(launcher, /MULTIMODEL_WORKSPACE/);
  assert.match(launcher, /MULTIMODEL_HELPER_PORT/);
  assert.match(launcher, /helper[\\/]server\.js/);
});
