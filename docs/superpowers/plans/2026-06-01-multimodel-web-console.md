# Multimodel Web Console Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Chrome-first local tool that shows ChatGPT, Claude, and AI Studio in visible windows, sends one prompt to selected services, captures their latest answers, and saves each run under `raw/multimodel/<run-id>/`.

**Architecture:** The first version is a Manifest V3 browser extension plus a dependency-free Node local helper. The extension owns visible browser windows, prompt injection, answer capture, and UI status. The local helper owns validated file writes into the workspace and never stores secrets or browser session data.

**Tech Stack:** Plain JavaScript, Chrome Extension Manifest V3, Node.js built-in `http`, `fs/promises`, `node:test`, and markdown/json files in the existing project workspace.

---

## File Structure

Create all implementation files under `tools/multimodel-console/` so the existing wiki and story files remain untouched.

- Create: `tools/multimodel-console/package.json`  
  Defines test and helper start scripts for the isolated tool.
- Create: `tools/multimodel-console/README.md`  
  Explains loading the extension, starting the helper, and running smoke tests.
- Create: `tools/multimodel-console/helper/run-store.js`  
  Validates run payloads, creates collision-safe run directories, and writes markdown/json files.
- Create: `tools/multimodel-console/helper/server.js`  
  Exposes local HTTP endpoints for health checks and saving captured runs.
- Create: `tools/multimodel-console/helper/run-store.test.js`  
  Unit tests for path safety, payload validation, and file output.
- Create: `tools/multimodel-console/helper/server.test.js`  
  Unit tests for helper HTTP behavior.
- Create: `tools/multimodel-console/extension/manifest.json`  
  Declares MV3 permissions and supported domains.
- Create: `tools/multimodel-console/extension/background.js`  
  Opens/arranges windows and routes messages between the panel and service tabs.
- Create: `tools/multimodel-console/extension/services.js`  
  Defines target services, URLs, match patterns, and layout order.
- Create: `tools/multimodel-console/extension/panel.html`  
  Dedicated control window UI.
- Create: `tools/multimodel-console/extension/panel.css`  
  Compact four-window console styling.
- Create: `tools/multimodel-console/extension/panel.js`  
  Handles prompt entry, target selection, send, capture, and save.
- Create: `tools/multimodel-console/extension/content-utils.js`  
  Shared DOM helper functions for content scripts.
- Create: `tools/multimodel-console/extension/content-chatgpt.js`  
  ChatGPT prompt insertion and latest-answer capture.
- Create: `tools/multimodel-console/extension/content-claude.js`  
  Claude prompt insertion and latest-answer capture.
- Create: `tools/multimodel-console/extension/content-aistudio.js`  
  AI Studio prompt insertion and latest-answer capture.
- Create: `tools/multimodel-console/extension/test/service-layout.test.js`  
  Unit tests for service registry and window layout math.
- Create: `tools/multimodel-console/extension/test/content-utils.test.js`  
  Unit tests for selector fallback and text normalization.

## Task 1: Local Run Store

**Files:**
- Create: `tools/multimodel-console/package.json`
- Create: `tools/multimodel-console/helper/run-store.js`
- Create: `tools/multimodel-console/helper/run-store.test.js`

- [ ] **Step 1: Create the tool package file**

Create `tools/multimodel-console/package.json` with:

```json
{
  "name": "multimodel-web-console",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test helper/*.test.js extension/test/*.test.js",
    "helper": "node helper/server.js"
  }
}
```

- [ ] **Step 2: Write failing run-store tests**

Create `tools/multimodel-console/helper/run-store.test.js` with:

```js
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
```

- [ ] **Step 3: Run tests and verify they fail**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/run-store.test.js
```

Expected: FAIL with `Cannot find module` for `run-store.js`.

- [ ] **Step 4: Implement `run-store.js`**

Create `tools/multimodel-console/helper/run-store.js` with:

```js
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SERVICE_NAMES = ["chatgpt", "claude", "aistudio"];

export function validateRunPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "payload must be an object" };
  }
  if (typeof payload.prompt !== "string" || payload.prompt.trim().length === 0) {
    return { ok: false, error: "prompt must be a non-empty string" };
  }
  if (!payload.outputs || typeof payload.outputs !== "object") {
    return { ok: false, error: "outputs must be an object" };
  }
  for (const [service, output] of Object.entries(payload.outputs)) {
    if (!SERVICE_NAMES.includes(service)) {
      return { ok: false, error: `unknown service: ${service}` };
    }
    if (!output || typeof output.text !== "string") {
      return { ok: false, error: `${service}.text must be a string` };
    }
    if (output.url !== undefined && typeof output.url !== "string") {
      return { ok: false, error: `${service}.url must be a string` };
    }
    if (output.status !== undefined && typeof output.status !== "string") {
      return { ok: false, error: `${service}.status must be a string` };
    }
  }
  return { ok: true };
}

export function makeRunId(date = new Date(), title = "") {
  const stamp = date.toISOString().replace(/[:.]/g, "-");
  const slug = String(title || "multimodel-run")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return `${stamp}-${slug || "multimodel-run"}`;
}

function serviceMarkdown(service, output) {
  return [
    `# ${service}`,
    "",
    `- Status: ${output.status || "captured"}`,
    `- Source URL: ${output.url || ""}`,
    `- Captured at: ${new Date().toISOString()}`,
    "",
    "## Answer",
    "",
    output.text || ""
  ].join("\n");
}

export async function saveRun(workspaceRoot, payload) {
  const validation = validateRunPayload(payload);
  if (!validation.ok) {
    throw new Error(validation.error);
  }

  const runId = makeRunId(new Date(), payload.title);
  const runDir = join(workspaceRoot, "raw", "multimodel", runId);
  await mkdir(runDir, { recursive: false });

  const files = [];
  const promptPath = join(runDir, "prompt.md");
  await writeFile(promptPath, `# Prompt\n\n${payload.prompt}\n`, "utf8");
  files.push(promptPath);

  for (const service of SERVICE_NAMES) {
    const output = payload.outputs[service];
    if (!output) continue;
    const servicePath = join(runDir, `${service}.md`);
    await writeFile(servicePath, serviceMarkdown(service, output), "utf8");
    files.push(servicePath);
  }

  const notesPath = join(runDir, "capture-notes.md");
  await writeFile(notesPath, `# Capture Notes\n\n${payload.notes || ""}\n`, "utf8");
  files.push(notesPath);

  const metadata = {
    run_id: runId,
    created_at: new Date().toISOString(),
    prompt_title: payload.title || "",
    targets: Object.keys(payload.outputs),
    service_urls: Object.fromEntries(Object.entries(payload.outputs).map(([name, output]) => [name, output.url || ""])),
    capture_status: Object.fromEntries(Object.entries(payload.outputs).map(([name, output]) => [name, output.status || "captured"])),
    user_notes: payload.notes || "",
    source_files: files.map((file) => file.replaceAll("\\\\", "/"))
  };
  const metadataPath = join(runDir, "metadata.json");
  await writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  files.push(metadataPath);

  return { runId, runDir, files };
}
```

- [ ] **Step 5: Run tests and verify they pass**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/run-store.test.js
```

Expected: PASS with 3 passing tests.

- [ ] **Step 6: Commit Task 1**

```powershell
git add -- tools/multimodel-console/package.json tools/multimodel-console/helper/run-store.js tools/multimodel-console/helper/run-store.test.js
git commit -m "feat: add multimodel run store"
```

## Task 2: Local Save Helper Server

**Files:**
- Create: `tools/multimodel-console/helper/server.js`
- Create: `tools/multimodel-console/helper/server.test.js`
- Modify: `tools/multimodel-console/README.md`

- [ ] **Step 1: Write failing server tests**

Create `tools/multimodel-console/helper/server.test.js` with:

```js
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
```

- [ ] **Step 2: Run tests and verify they fail**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/server.test.js
```

Expected: FAIL with `Cannot find module` for `server.js`.

- [ ] **Step 3: Implement `server.js`**

Create `tools/multimodel-console/helper/server.js` with:

```js
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
```

- [ ] **Step 4: Add README instructions**

Create `tools/multimodel-console/README.md` with:

```markdown
# Multimodel Web Console

This tool opens ChatGPT, Claude, and Google AI Studio in visible browser windows, sends one prompt to selected services, captures the latest answers, and saves each run to `raw/multimodel/<run-id>/`.

## Start The Local Helper

From the repository root:

```powershell
$env:MULTIMODEL_WORKSPACE='C:\Users\CadriacLord\OneDrive\문서\New project'
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' tools\multimodel-console\helper\server.js
```

The helper listens on `http://127.0.0.1:43891`.

## Load The Extension

1. Open Chrome.
2. Go to `chrome://extensions`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select `tools/multimodel-console/extension`.

## Run Tests

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/*.test.js tools/multimodel-console/extension/test/*.test.js
```
```

- [ ] **Step 5: Run tests and verify they pass**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/*.test.js
```

Expected: PASS with helper tests passing.

- [ ] **Step 6: Commit Task 2**

```powershell
git add -- tools/multimodel-console/helper/server.js tools/multimodel-console/helper/server.test.js tools/multimodel-console/README.md
git commit -m "feat: add multimodel save helper"
```

## Task 3: Extension Shell And Window Arrangement

**Files:**
- Create: `tools/multimodel-console/extension/manifest.json`
- Create: `tools/multimodel-console/extension/services.js`
- Create: `tools/multimodel-console/extension/background.js`
- Create: `tools/multimodel-console/extension/test/service-layout.test.js`

- [ ] **Step 1: Write failing service-layout tests**

Create `tools/multimodel-console/extension/test/service-layout.test.js` with:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { SERVICES, computeWindowLayout } from "../services.js";

test("SERVICES defines the three initial targets in display order", () => {
  assert.deepEqual(Object.keys(SERVICES), ["chatgpt", "claude", "aistudio"]);
  assert.equal(SERVICES.chatgpt.url, "https://chatgpt.com/");
  assert.equal(SERVICES.claude.url, "https://claude.ai/new");
  assert.equal(SERVICES.aistudio.url, "https://aistudio.google.com/");
});

test("computeWindowLayout reserves a control strip and three service columns", () => {
  const layout = computeWindowLayout({ left: 0, top: 0, width: 1920, height: 1080 });
  assert.equal(layout.panel.width, 360);
  assert.equal(layout.chatgpt.left, 360);
  assert.equal(layout.chatgpt.width, 520);
  assert.equal(layout.claude.left, 880);
  assert.equal(layout.aistudio.left, 1400);
});
```

- [ ] **Step 2: Run tests and verify they fail**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/extension/test/service-layout.test.js
```

Expected: FAIL with `Cannot find module` for `services.js`.

- [ ] **Step 3: Implement service registry and layout math**

Create `tools/multimodel-console/extension/services.js` with:

```js
export const SERVICES = {
  chatgpt: {
    label: "ChatGPT",
    url: "https://chatgpt.com/",
    hostPattern: "*://chatgpt.com/*"
  },
  claude: {
    label: "Claude",
    url: "https://claude.ai/new",
    hostPattern: "*://claude.ai/*"
  },
  aistudio: {
    label: "AI Studio",
    url: "https://aistudio.google.com/",
    hostPattern: "*://aistudio.google.com/*"
  }
};

export function computeWindowLayout(bounds) {
  const panelWidth = Math.min(420, Math.max(320, Math.floor(bounds.width * 0.1875)));
  const serviceWidth = Math.floor((bounds.width - panelWidth) / 3);
  const common = { top: bounds.top, height: bounds.height, focused: false };
  return {
    panel: { left: bounds.left, top: bounds.top, width: panelWidth, height: bounds.height, focused: true },
    chatgpt: { ...common, left: bounds.left + panelWidth, width: serviceWidth },
    claude: { ...common, left: bounds.left + panelWidth + serviceWidth, width: serviceWidth },
    aistudio: {
      ...common,
      left: bounds.left + panelWidth + serviceWidth * 2,
      width: bounds.width - panelWidth - serviceWidth * 2
    }
  };
}
```

- [ ] **Step 4: Create extension manifest**

Create `tools/multimodel-console/extension/manifest.json` with:

```json
{
  "manifest_version": 3,
  "name": "Multimodel Web Console",
  "version": "0.1.0",
  "description": "Send one prompt to ChatGPT, Claude, and AI Studio, then capture results locally.",
  "permissions": ["tabs", "windows", "scripting", "storage", "system.display"],
  "host_permissions": [
    "https://chatgpt.com/*",
    "https://claude.ai/*",
    "https://aistudio.google.com/*",
    "http://127.0.0.1:43891/*"
  ],
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "action": {
    "default_title": "Open Multimodel Console"
  },
  "content_scripts": [
    {
      "matches": ["https://chatgpt.com/*"],
      "js": ["content-utils.js", "content-chatgpt.js"]
    },
    {
      "matches": ["https://claude.ai/*"],
      "js": ["content-utils.js", "content-claude.js"]
    },
    {
      "matches": ["https://aistudio.google.com/*"],
      "js": ["content-utils.js", "content-aistudio.js"]
    }
  ]
}
```

- [ ] **Step 5: Implement background window management**

Create `tools/multimodel-console/extension/background.js` with:

```js
import { SERVICES, computeWindowLayout } from "./services.js";

const tabByService = new Map();
let panelWindowId = null;

async function displayBounds() {
  const displays = await chrome.system.display.getInfo();
  const primary = displays.find((display) => display.isPrimary) || displays[0];
  return primary.workArea;
}

async function openPanel(layout) {
  const url = chrome.runtime.getURL("panel.html");
  const existing = panelWindowId ? await chrome.windows.get(panelWindowId).catch(() => null) : null;
  if (existing) {
    await chrome.windows.update(panelWindowId, layout.panel);
    return;
  }
  const win = await chrome.windows.create({ url, type: "popup", ...layout.panel });
  panelWindowId = win.id;
}

async function openService(serviceId, layout) {
  const existingTabId = tabByService.get(serviceId);
  const service = SERVICES[serviceId];
  const existingTab = existingTabId ? await chrome.tabs.get(existingTabId).catch(() => null) : null;
  if (existingTab?.windowId) {
    await chrome.windows.update(existingTab.windowId, layout[serviceId]);
    await chrome.tabs.update(existingTab.id, { active: true });
    return existingTab.id;
  }
  const win = await chrome.windows.create({ url: service.url, type: "normal", ...layout[serviceId] });
  const tabId = win.tabs?.[0]?.id;
  if (tabId) tabByService.set(serviceId, tabId);
  return tabId;
}

async function openArrange() {
  const layout = computeWindowLayout(await displayBounds());
  await openPanel(layout);
  for (const serviceId of Object.keys(SERVICES)) {
    await openService(serviceId, layout);
  }
  return { ok: true };
}

async function sendToService(serviceId, type, payload = {}) {
  const tabId = tabByService.get(serviceId);
  if (!tabId) return { ok: false, serviceId, status: "not open" };
  return chrome.tabs.sendMessage(tabId, { type, ...payload }).catch((error) => ({
    ok: false,
    serviceId,
    status: "needs user",
    error: error.message
  }));
}

chrome.action.onClicked.addListener(() => openArrange());

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  (async () => {
    if (message.type === "open-arrange") return openArrange();
    if (message.type === "send-prompt") {
      const results = {};
      await Promise.all(message.targets.map(async (serviceId) => {
        results[serviceId] = await sendToService(serviceId, "multimodel-send-prompt", { prompt: message.prompt });
      }));
      return { ok: true, results };
    }
    if (message.type === "capture-results") {
      const results = {};
      await Promise.all(message.targets.map(async (serviceId) => {
        results[serviceId] = await sendToService(serviceId, "multimodel-capture-result");
      }));
      return { ok: true, results };
    }
    return { ok: false, error: `unknown message: ${message.type}` };
  })().then(sendResponse);
  return true;
});
```

- [ ] **Step 6: Run layout tests and verify they pass**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/extension/test/service-layout.test.js
```

Expected: PASS with 2 passing tests.

- [ ] **Step 7: Commit Task 3**

```powershell
git add -- tools/multimodel-console/extension/manifest.json tools/multimodel-console/extension/services.js tools/multimodel-console/extension/background.js tools/multimodel-console/extension/test/service-layout.test.js
git commit -m "feat: add multimodel extension shell"
```

## Task 4: Prompt Injection And Answer Capture

**Files:**
- Create: `tools/multimodel-console/extension/content-utils.js`
- Create: `tools/multimodel-console/extension/content-chatgpt.js`
- Create: `tools/multimodel-console/extension/content-claude.js`
- Create: `tools/multimodel-console/extension/content-aistudio.js`
- Create: `tools/multimodel-console/extension/test/content-utils.test.js`

- [ ] **Step 1: Write failing content utility tests**

Create `tools/multimodel-console/extension/test/content-utils.test.js` with:

```js
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
```

- [ ] **Step 2: Run tests and verify they fail**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/extension/test/content-utils.test.js
```

Expected: FAIL with `ENOENT` for `content-utils.js`.

- [ ] **Step 3: Implement shared content utilities**

Create `tools/multimodel-console/extension/content-utils.js` with:

```js
(function () {
  function firstMatchingElement(root, selectors) {
    for (const selector of selectors) {
      const element = root.querySelector(selector);
      if (element) return element;
    }
    return null;
  }

  function normalizeCapturedText(text) {
    return String(text || "")
      .replace(/\r\n/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  function setPromptValue(element, prompt) {
    element.focus();
    if ("value" in element) {
      element.value = prompt;
      element.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: prompt }));
      element.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    element.textContent = prompt;
    element.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: prompt }));
  }

  function clickFirst(root, selectors) {
    const button = firstMatchingElement(root, selectors);
    if (!button) return false;
    button.click();
    return true;
  }

  function latestTextFrom(root, selectors) {
    for (const selector of selectors) {
      const elements = [...root.querySelectorAll(selector)];
      const latest = elements.reverse().find((element) => normalizeCapturedText(element.innerText || element.textContent).length > 0);
      if (latest) return normalizeCapturedText(latest.innerText || latest.textContent);
    }
    return "";
  }

  globalThis.multimodelContentUtils = {
    firstMatchingElement,
    normalizeCapturedText,
    setPromptValue,
    clickFirst,
    latestTextFrom
  };
})();
```

- [ ] **Step 4: Implement ChatGPT content script**

Create `tools/multimodel-console/extension/content-chatgpt.js` with:

```js
const utils = globalThis.multimodelContentUtils;

const promptSelectors = [
  "#prompt-textarea",
  "textarea",
  "[contenteditable='true']"
];

const sendSelectors = [
  "button[data-testid='send-button']",
  "button[data-testid='composer-submit-button']",
  "button[aria-label='Send prompt']",
  "button[aria-label='Send message']"
];

const answerSelectors = [
  "[data-message-author-role='assistant']",
  "article",
  "main .markdown"
];

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "multimodel-send-prompt") {
    const box = utils.firstMatchingElement(document, promptSelectors);
    if (!box) return sendResponse({ ok: false, serviceId: "chatgpt", status: "needs user", error: "prompt box not found" });
    utils.setPromptValue(box, message.prompt);
    const submitted = utils.clickFirst(document, sendSelectors);
    return sendResponse({ ok: submitted, serviceId: "chatgpt", status: submitted ? "sent" : "needs user" });
  }
  if (message.type === "multimodel-capture-result") {
    const text = utils.latestTextFrom(document, answerSelectors);
    return sendResponse({ ok: text.length > 0, serviceId: "chatgpt", status: text ? "captured" : "capture partial", text, url: location.href });
  }
});
```

- [ ] **Step 5: Implement Claude content script**

Create `tools/multimodel-console/extension/content-claude.js` with:

```js
const utils = globalThis.multimodelContentUtils;

const promptSelectors = [
  "div[contenteditable='true']",
  "textarea",
  "[role='textbox']"
];

const sendSelectors = [
  "button[aria-label='Send message']",
  "button[aria-label='Send']",
  "button[type='submit']"
];

const answerSelectors = [
  "[data-testid='message']",
  ".font-claude-message",
  "main div[class*='prose']"
];

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "multimodel-send-prompt") {
    const box = utils.firstMatchingElement(document, promptSelectors);
    if (!box) return sendResponse({ ok: false, serviceId: "claude", status: "needs user", error: "prompt box not found" });
    utils.setPromptValue(box, message.prompt);
    const submitted = utils.clickFirst(document, sendSelectors);
    return sendResponse({ ok: submitted, serviceId: "claude", status: submitted ? "sent" : "needs user" });
  }
  if (message.type === "multimodel-capture-result") {
    const text = utils.latestTextFrom(document, answerSelectors);
    return sendResponse({ ok: text.length > 0, serviceId: "claude", status: text ? "captured" : "capture partial", text, url: location.href });
  }
});
```

- [ ] **Step 6: Implement AI Studio content script**

Create `tools/multimodel-console/extension/content-aistudio.js` with:

```js
const utils = globalThis.multimodelContentUtils;

const promptSelectors = [
  "textarea",
  "[contenteditable='true']",
  "[role='textbox']"
];

const sendSelectors = [
  "button[aria-label='Run']",
  "button[aria-label='Send']",
  "button[type='submit']"
];

const answerSelectors = [
  "ms-chat-turn",
  "mat-card",
  "main .markdown",
  "main"
];

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "multimodel-send-prompt") {
    const box = utils.firstMatchingElement(document, promptSelectors);
    if (!box) return sendResponse({ ok: false, serviceId: "aistudio", status: "needs user", error: "prompt box not found" });
    utils.setPromptValue(box, message.prompt);
    const submitted = utils.clickFirst(document, sendSelectors);
    return sendResponse({ ok: submitted, serviceId: "aistudio", status: submitted ? "sent" : "needs user" });
  }
  if (message.type === "multimodel-capture-result") {
    const text = utils.latestTextFrom(document, answerSelectors);
    return sendResponse({ ok: text.length > 0, serviceId: "aistudio", status: text ? "captured" : "capture partial", text, url: location.href });
  }
});
```

- [ ] **Step 7: Run content utility tests and verify they pass**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/extension/test/content-utils.test.js
```

Expected: PASS with 2 passing tests.

- [ ] **Step 8: Commit Task 4**

```powershell
git add -- tools/multimodel-console/extension/content-utils.js tools/multimodel-console/extension/content-chatgpt.js tools/multimodel-console/extension/content-claude.js tools/multimodel-console/extension/content-aistudio.js tools/multimodel-console/extension/test/content-utils.test.js
git commit -m "feat: add multimodel content capture scripts"
```

## Task 5: Control Panel And Save Flow

**Files:**
- Create: `tools/multimodel-console/extension/panel.html`
- Create: `tools/multimodel-console/extension/panel.css`
- Create: `tools/multimodel-console/extension/panel.js`
- Modify: `tools/multimodel-console/README.md`

- [ ] **Step 1: Create the panel markup**

Create `tools/multimodel-console/extension/panel.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Multimodel Console</title>
    <link rel="stylesheet" href="panel.css">
  </head>
  <body>
    <main>
      <h1>Multimodel Console</h1>
      <label class="field">
        <span>Run title</span>
        <input id="title" type="text" value="multimodel-run">
      </label>
      <label class="field">
        <span>Prompt</span>
        <textarea id="prompt" rows="12" spellcheck="true"></textarea>
      </label>
      <section class="targets" aria-label="Targets">
        <label><input type="checkbox" value="chatgpt" checked> ChatGPT</label>
        <label><input type="checkbox" value="claude" checked> Claude</label>
        <label><input type="checkbox" value="aistudio" checked> AI Studio</label>
      </section>
      <div class="actions">
        <button id="openArrange">Open/Arrange</button>
        <button id="sendAll">Send to all</button>
        <button id="capture">Capture results</button>
        <button id="save">Save run</button>
      </div>
      <label class="field">
        <span>Capture notes</span>
        <textarea id="notes" rows="4"></textarea>
      </label>
      <section id="status" class="status" aria-live="polite"></section>
    </main>
    <script src="panel.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create compact panel styling**

Create `tools/multimodel-console/extension/panel.css` with:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #111318;
  color: #f4f7fb;
}

main {
  min-height: 100vh;
  padding: 14px;
}

h1 {
  margin: 0 0 12px;
  font-size: 18px;
}

.field {
  display: grid;
  gap: 6px;
  margin-bottom: 12px;
}

.field span,
.targets {
  color: #aeb7c5;
  font-size: 12px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #334155;
  border-radius: 6px;
  background: #0b0d12;
  color: #f4f7fb;
  padding: 8px;
  font: inherit;
}

textarea {
  resize: vertical;
}

.targets {
  display: grid;
  gap: 8px;
  margin: 12px 0;
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 12px 0;
}

button {
  min-height: 36px;
  border: 0;
  border-radius: 6px;
  background: #d7e3ff;
  color: #111827;
  font-weight: 650;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.status {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.status-row {
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 8px;
  background: #171b23;
  font-size: 12px;
}
```

- [ ] **Step 3: Implement panel behavior**

Create `tools/multimodel-console/extension/panel.js` with:

```js
const helperUrl = "http://127.0.0.1:43891";
const latestResults = {};

function selectedTargets() {
  return [...document.querySelectorAll(".targets input:checked")].map((input) => input.value);
}

function setStatus(serviceId, status, detail = "") {
  const statusBox = document.querySelector("#status");
  let row = statusBox.querySelector(`[data-service='${serviceId}']`);
  if (!row) {
    row = document.createElement("div");
    row.className = "status-row";
    row.dataset.service = serviceId;
    statusBox.append(row);
  }
  row.textContent = `${serviceId}: ${status}${detail ? ` - ${detail}` : ""}`;
}

async function sendRuntimeMessage(message) {
  return chrome.runtime.sendMessage(message);
}

document.querySelector("#openArrange").addEventListener("click", async () => {
  const response = await sendRuntimeMessage({ type: "open-arrange" });
  setStatus("console", response.ok ? "arranged" : "needs user", response.error || "");
});

document.querySelector("#sendAll").addEventListener("click", async () => {
  const prompt = document.querySelector("#prompt").value;
  const targets = selectedTargets();
  const response = await sendRuntimeMessage({ type: "send-prompt", prompt, targets });
  for (const [serviceId, result] of Object.entries(response.results || {})) {
    setStatus(serviceId, result.status || "sent", result.error || "");
  }
});

document.querySelector("#capture").addEventListener("click", async () => {
  const targets = selectedTargets();
  const response = await sendRuntimeMessage({ type: "capture-results", targets });
  for (const [serviceId, result] of Object.entries(response.results || {})) {
    latestResults[serviceId] = result;
    setStatus(serviceId, result.status || "captured", result.error || `${(result.text || "").length} chars`);
  }
});

document.querySelector("#save").addEventListener("click", async () => {
  const payload = {
    title: document.querySelector("#title").value,
    prompt: document.querySelector("#prompt").value,
    notes: document.querySelector("#notes").value,
    outputs: Object.fromEntries(Object.entries(latestResults).map(([serviceId, result]) => [
      serviceId,
      { text: result.text || "", url: result.url || "", status: result.status || "capture partial" }
    ]))
  };

  const response = await fetch(`${helperUrl}/runs`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json();
  setStatus("save", body.ok ? "saved" : "needs user", body.run_dir || body.error || "");
});
```

- [ ] **Step 4: Extend README smoke-test instructions**

Append this section to `tools/multimodel-console/README.md`:

```markdown
## Smoke Test

1. Start the helper.
2. Load the unpacked extension in Chrome.
3. Click the extension action.
4. Confirm that the control panel, ChatGPT, Claude, and AI Studio are visible.
5. Log in manually anywhere a service asks for authentication.
6. Enter `Reply with the exact phrase: multimodel smoke test`.
7. Click `Send to all`.
8. Wait for visible answers.
9. Click `Capture results`.
10. Click `Save run`.
11. Confirm a new folder exists under `raw/multimodel/`.
```

- [ ] **Step 5: Run all automated tests**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/*.test.js tools/multimodel-console/extension/test/*.test.js
```

Expected: PASS with helper and extension unit tests passing.

- [ ] **Step 6: Manual extension load check**

Open Chrome and load `tools/multimodel-console/extension` from `chrome://extensions`. Expected: Chrome accepts the unpacked extension without manifest errors.

- [ ] **Step 7: Commit Task 5**

```powershell
git add -- tools/multimodel-console/extension/panel.html tools/multimodel-console/extension/panel.css tools/multimodel-console/extension/panel.js tools/multimodel-console/README.md
git commit -m "feat: add multimodel control panel"
```

## Task 6: End-To-End Workspace Verification

**Files:**
- Modify: `tools/multimodel-console/README.md`
- Runtime output: `raw/multimodel/<run-id>/`

- [ ] **Step 1: Start the helper from the workspace root**

Run:

```powershell
$env:MULTIMODEL_WORKSPACE='C:\Users\CadriacLord\OneDrive\문서\New project'
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' tools\multimodel-console\helper\server.js
```

Expected: console prints JSON with `ok: true` and `url: http://127.0.0.1:43891`.

- [ ] **Step 2: Use the browser extension for a single-service smoke run**

In Chrome:

1. Click the extension.
2. Leave only ChatGPT checked.
3. Enter `Reply with exactly: single service capture ok`.
4. Click `Open/Arrange`.
5. Log in manually if needed.
6. Click `Send to all`.
7. Wait for the visible answer.
8. Click `Capture results`.
9. Click `Save run`.

Expected: `raw/multimodel/<run-id>/chatgpt.md` contains `single service capture ok` or a visible ChatGPT response to that prompt.

- [ ] **Step 3: Use the browser extension for a three-service smoke run**

In Chrome:

1. Check ChatGPT, Claude, and AI Studio.
2. Enter `Reply with exactly: three service capture ok`.
3. Click `Send to all`.
4. Wait for all visible answers.
5. Click `Capture results`.
6. Click `Save run`.

Expected: the new run folder contains `chatgpt.md`, `claude.md`, `aistudio.md`, `prompt.md`, `metadata.json`, and `capture-notes.md`.

- [ ] **Step 4: Record any selector failures**

If a service cannot receive or capture text, add a short note to `tools/multimodel-console/README.md` under a `Known UI Selectors` heading with the service name, date, and observed visible label. Example:

```markdown
## Known UI Selectors

- 2026-06-01 ChatGPT: prompt insertion worked; capture selector needed `[data-message-author-role='assistant']`.
```

- [ ] **Step 5: Run final automated tests**

Run:

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/*.test.js tools/multimodel-console/extension/test/*.test.js
```

Expected: PASS.

- [ ] **Step 6: Commit verification notes**

```powershell
git add -- tools/multimodel-console/README.md raw/multimodel
git commit -m "test: verify multimodel console smoke flow"
```

## Spec Coverage Review

- One-screen visibility is covered by Task 3 window layout and Task 6 smoke checks.
- Minimal submission delay is covered by Task 3 parallel message routing and Task 5 `Send to all`.
- Result capture and archival are covered by Task 1 run store, Task 2 helper server, Task 4 content scripts, and Task 5 save flow.
- Wiki integration is intentionally left to Codex after raw capture because the spec says wiki modification happens only when the user requests ingestion.
- Security boundaries are covered by narrow host permissions, no secret storage, localhost-only helper, and visible manual recovery states.

## Execution Notes

Use separate commits per task. Do not modify existing wiki/story files while building the console. If Chrome blocks `system.display` or window movement on this machine, keep the extension usable with `Open/Arrange` opening the four windows and document the exact limitation in `tools/multimodel-console/README.md`.
