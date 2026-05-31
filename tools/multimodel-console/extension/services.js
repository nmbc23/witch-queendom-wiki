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
