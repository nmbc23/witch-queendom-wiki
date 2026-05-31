import http from "node:http";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { saveRun } from "./run-store.js";

const DEFAULT_PORT = 43891;

function sendJson(response, status, body) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type"
  });
  response.end(`${JSON.stringify(body)}\n`);
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

export function createServer({ workspaceRoot }) {
  const root = resolve(workspaceRoot);
  return http.createServer(async (request, response) => {
    try {
      if (request.method === "OPTIONS") {
        return sendJson(response, 204, {});
      }
      if (request.method === "GET" && request.url === "/health") {
        return sendJson(response, 200, { ok: true });
      }
      if (request.method === "POST" && request.url === "/runs") {
        const payload = await readJson(request);
        const saved = await saveRun(root, payload);
        return sendJson(response, 201, {
          ok: true,
          run_id: saved.runId,
          run_dir: saved.runDir,
          files: saved.files
        });
      }
      return sendJson(response, 404, { ok: false, error: "not found" });
    } catch (error) {
      return sendJson(response, 400, { ok: false, error: error.message });
    }
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const workspaceRoot = process.env.MULTIMODEL_WORKSPACE || process.cwd();
  const port = Number(process.env.MULTIMODEL_HELPER_PORT || DEFAULT_PORT);
  createServer({ workspaceRoot }).listen(port, "127.0.0.1", () => {
    console.log(JSON.stringify({ ok: true, url: `http://127.0.0.1:${port}`, workspaceRoot }));
  });
}
