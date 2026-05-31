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
