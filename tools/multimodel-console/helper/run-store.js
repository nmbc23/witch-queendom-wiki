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

function serviceMarkdown(service, output, capturedAt) {
  return [
    `# ${service}`,
    "",
    `- Status: ${output.status || "captured"}`,
    `- Source URL: ${output.url || ""}`,
    `- Captured at: ${capturedAt}`,
    "",
    "## Answer",
    "",
    output.text || ""
  ].join("\n");
}

async function createRunDirectory(parentDir, baseRunId) {
  await mkdir(parentDir, { recursive: true });
  for (let attempt = 1; attempt < 1000; attempt += 1) {
    const runId = attempt === 1 ? baseRunId : `${baseRunId}-${attempt}`;
    const runDir = join(parentDir, runId);
    try {
      await mkdir(runDir);
      return { runId, runDir };
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
    }
  }
  throw new Error("could not create a unique run directory");
}

export async function saveRun(workspaceRoot, payload, options = {}) {
  const validation = validateRunPayload(payload);
  if (!validation.ok) {
    throw new Error(validation.error);
  }

  const now = options.now || new Date();
  const createdAt = now.toISOString();
  const parentDir = join(workspaceRoot, "raw", "multimodel");
  const baseRunId = makeRunId(now, payload.title);
  const { runId, runDir } = await createRunDirectory(parentDir, baseRunId);

  const files = [];
  const promptPath = join(runDir, "prompt.md");
  await writeFile(promptPath, `# Prompt\n\n${payload.prompt}\n`, "utf8");
  files.push(promptPath);

  for (const service of SERVICE_NAMES) {
    const output = payload.outputs[service];
    if (!output) continue;
    const servicePath = join(runDir, `${service}.md`);
    await writeFile(servicePath, serviceMarkdown(service, output, createdAt), "utf8");
    files.push(servicePath);
  }

  const notesPath = join(runDir, "capture-notes.md");
  await writeFile(notesPath, `# Capture Notes\n\n${payload.notes || ""}\n`, "utf8");
  files.push(notesPath);

  const metadataPath = join(runDir, "metadata.json");
  const metadata = {
    run_id: runId,
    created_at: createdAt,
    prompt_title: payload.title || "",
    targets: Object.keys(payload.outputs),
    service_urls: Object.fromEntries(Object.entries(payload.outputs).map(([name, output]) => [name, output.url || ""])),
    capture_status: Object.fromEntries(Object.entries(payload.outputs).map(([name, output]) => [name, output.status || "captured"])),
    user_notes: payload.notes || "",
    source_files: [...files, metadataPath].map((file) => file.replaceAll("\\", "/"))
  };
  await writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  files.push(metadataPath);

  return { runId, runDir, files };
}
