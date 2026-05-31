import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("panel html exposes the required controls", async () => {
  const html = await readFile(new URL("../panel.html", import.meta.url), "utf8");
  for (const id of ["title", "prompt", "openArrange", "sendAll", "capture", "save", "notes", "status"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test("panel script saves runs through the local helper", async () => {
  const js = await readFile(new URL("../panel.js", import.meta.url), "utf8");
  assert.match(js, /http:\/\/127\.0\.0\.1:43891/);
  assert.match(js, /fetch\(`\$\{helperUrl\}\/runs`/);
});

test("panel script guards empty prompts and empty captures", async () => {
  const js = await readFile(new URL("../panel.js", import.meta.url), "utf8");
  assert.match(js, /prompt\.trim\(\)/);
  assert.match(js, /Object\.keys\(latestResults\)\.length/);
});

test("panel script checks helper health before saving", async () => {
  const js = await readFile(new URL("../panel.js", import.meta.url), "utf8");
  assert.match(js, /\/health/);
  assert.match(js, /checkHelperHealth/);
});
