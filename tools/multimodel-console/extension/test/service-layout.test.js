import test from "node:test";
import assert from "node:assert/strict";
import { SERVICES, computeWindowLayout, pickExistingServiceTab, serviceIdFromUrl } from "../services.js";

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

test("serviceIdFromUrl maps supported service URLs", () => {
  assert.equal(serviceIdFromUrl("https://chatgpt.com/c/abc"), "chatgpt");
  assert.equal(serviceIdFromUrl("https://claude.ai/chat/abc"), "claude");
  assert.equal(serviceIdFromUrl("https://aistudio.google.com/app/prompts/abc"), "aistudio");
  assert.equal(serviceIdFromUrl("https://example.com/"), null);
});

test("pickExistingServiceTab reuses the first matching tab", () => {
  const tabs = [
    { id: 11, windowId: 101, url: "https://example.com/" },
    { id: 12, windowId: 102, url: "https://claude.ai/chat/abc" },
    { id: 13, windowId: 103, url: "https://claude.ai/new" }
  ];

  assert.deepEqual(pickExistingServiceTab(tabs, "claude"), tabs[1]);
  assert.equal(pickExistingServiceTab(tabs, "chatgpt"), null);
});
