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
