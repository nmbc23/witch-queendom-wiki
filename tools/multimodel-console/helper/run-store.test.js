import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { saveRun, validateRunPayload } from "./run-store.js";

test("validateRunPayload accepts a complete multimodel run", () => {
  const payload = {
    prompt: "Compare these three character arcs.",
    title: "character-arc-comparison",
    notes: "first smoke run",
    outputs: {
      chatgpt: { text: "ChatGPT answer", url: "https://chatgpt.com/c/abc", status: "captured" },
      claude: { text: "Claude answer", url: "https://claude.ai/chat/abc", status: "captured" },
      aistudio: { text: "AI Studio answer", url: "https://aistudio.google.com/app/prompts/abc", status: "captured" }
    }
  };

  assert.equal(validateRunPayload(payload).ok, true);
});

test("validateRunPayload rejects missing prompt text", () => {
  const result = validateRunPayload({ prompt: "", outputs: {} });
  assert.equal(result.ok, false);
  assert.match(result.error, /prompt/);
});

test("saveRun writes prompt, service markdown, metadata, and notes", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "multimodel-store-"));
  try {
    const result = await saveRun(workspace, {
      prompt: "Summarize the setting.",
      title: "setting-summary",
      notes: "manual capture looked complete",
      outputs: {
        chatgpt: { text: "One", url: "https://chatgpt.com/", status: "captured" },
        claude: { text: "Two", url: "https://claude.ai/", status: "captured" }
      }
    });

    assert.match(result.runId, /^\d{4}-\d{2}-\d{2}T/);
    assert.equal(result.files.length, 5);
    assert.match(await readFile(join(result.runDir, "prompt.md"), "utf8"), /Summarize the setting/);
    assert.match(await readFile(join(result.runDir, "chatgpt.md"), "utf8"), /One/);
    assert.match(await readFile(join(result.runDir, "claude.md"), "utf8"), /Two/);
    assert.match(await readFile(join(result.runDir, "metadata.json"), "utf8"), /setting-summary/);
    assert.match(await readFile(join(result.runDir, "capture-notes.md"), "utf8"), /manual capture/);
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});

test("saveRun avoids overwriting an existing run directory", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "multimodel-store-"));
  const payload = {
    prompt: "Same timestamp.",
    title: "collision-check",
    outputs: {
      chatgpt: { text: "answer", url: "https://chatgpt.com/", status: "captured" }
    }
  };

  try {
    const now = new Date("2026-06-01T00:00:00.000Z");
    const first = await saveRun(workspace, payload, { now });
    const second = await saveRun(workspace, payload, { now });

    assert.notEqual(first.runId, second.runId);
    assert.match(second.runId, /-2$/);
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});
