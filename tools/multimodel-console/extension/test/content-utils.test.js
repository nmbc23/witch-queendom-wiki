import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

async function loadUtils() {
  const code = await readFile(new URL("../content-utils.js", import.meta.url), "utf8");
  const context = { console };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.multimodelContentUtils;
}

test("normalizeCapturedText trims repeated blank lines", async () => {
  const { normalizeCapturedText } = await loadUtils();
  assert.equal(normalizeCapturedText("  a\n\n\nb  "), "a\n\nb");
});

test("firstMatchingElement tries selectors in order", async () => {
  const { firstMatchingElement } = await loadUtils();
  const calls = [];
  const root = {
    querySelector(selector) {
      calls.push(selector);
      return selector === ".hit" ? { selector } : null;
    }
  };
  assert.deepEqual(firstMatchingElement(root, [".miss", ".hit"]), { selector: ".hit" });
  assert.deepEqual(calls, [".miss", ".hit"]);
});
