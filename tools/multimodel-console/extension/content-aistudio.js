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
