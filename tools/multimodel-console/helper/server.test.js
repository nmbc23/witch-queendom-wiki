import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "./server.js";

async function withServer(workspaceRoot, fn) {
  const server = createServer({ workspaceRoot });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    await fn(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test("GET /health returns ok", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "multimodel-http-"));
  try {
    await withServer(workspace, async (baseUrl) => {
      const response = await fetch(`${baseUrl}/health`);
      assert.equal(response.status, 200);
      assert.deepEqual(await response.json(), { ok: true });
    });
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});

test("POST /runs saves a captured run", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "multimodel-http-"));
  try {
    await withServer(workspace, async (baseUrl) => {
      const response = await fetch(`${baseUrl}/runs`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          prompt: "test prompt",
          title: "server-save",
          outputs: {
            chatgpt: { text: "saved text", url: "https://chatgpt.com/", status: "captured" }
          }
        })
      });
      const body = await response.json();
      assert.equal(response.status, 201);
      assert.equal(body.ok, true);
      assert.match(body.run_id, /server-save/);
    });
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});
