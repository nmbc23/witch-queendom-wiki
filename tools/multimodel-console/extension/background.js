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
