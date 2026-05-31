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
