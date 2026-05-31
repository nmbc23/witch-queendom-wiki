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
