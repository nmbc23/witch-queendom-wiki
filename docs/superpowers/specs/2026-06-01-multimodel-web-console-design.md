---
title: Multimodel Web Console Design
status: draft
date: 2026-06-01
---

# Multimodel Web Console Design

## Goal

Build a local browser-based workflow that lets the user view ChatGPT, Claude, and Google AI Studio on one screen, send the same prompt to selected services with minimal delay, collect the resulting answers, and save them into the project's raw/wiki workflow for later synthesis.

The priority order is:

1. Show all target services on one screen at the same time.
2. Minimize delay between prompt submission to each service.
3. Capture, archive, compare, and optionally ingest results into the wiki.

## Recommended Approach

Use a Chrome or Edge extension plus a small local helper.

The extension manages normal browser tabs or windows that use the user's existing logged-in web sessions. It provides a control panel for prompt entry, selected targets, sending, capture, and saving. The local helper writes captured runs to the project workspace and keeps file naming stable.

This approach is preferred over API orchestration because it uses the user's existing web subscriptions instead of API billing. It is preferred over a separate automation browser because the user's existing login sessions are more likely to work without repeated authentication.

## Non-Goals

- Do not bypass login, 2FA, CAPTCHA, rate limits, or paywalls.
- Do not store passwords, session cookies, or other secrets.
- Do not run unattended bulk automation.
- Do not rely on private service APIs.
- Do not modify wiki pages automatically unless the user requests ingestion for a captured run.

## User Flow

1. The user opens the multimodel console.
2. The console opens or focuses ChatGPT, Claude, and AI Studio tabs/windows.
3. The console arranges the visible browser windows into a three-column layout when the operating system allows it.
4. The user writes a prompt in the control panel.
5. The user selects one or more services.
6. The user clicks `Send to all`.
7. The extension inserts the prompt into each selected service and submits it.
8. The user waits while the services generate answers.
9. The user clicks `Capture results`.
10. The extension reads the visible latest answer from each selected service.
11. The local helper writes the run to `raw/multimodel/<run-id>/`.
12. Codex can then compare the saved outputs and update `wiki/` on request.

## Layout

The first version should favor visibility over polish.

Recommended desktop arrangement:

- Left column: ChatGPT.
- Center column: Claude.
- Right column: AI Studio.
- Small floating or extension popup control panel for prompt input and actions.

If three browser windows cannot be positioned reliably, the fallback is one browser window with three pinned tabs and a compact control panel. In that fallback mode, simultaneous visibility is weaker, but prompt sending and capture can still work.

## Components

### Browser Extension

The extension owns web-page interaction.

Responsibilities:

- Open or focus target service pages.
- Inject content scripts into supported domains.
- Detect whether the user is logged in enough to see the chat UI.
- Fill each service's prompt box.
- Submit the prompt.
- Detect likely generation completion.
- Extract the latest assistant response.
- Report per-service status to the control panel.

Supported initial domains:

- `chatgpt.com`
- `claude.ai`
- `aistudio.google.com`

### Control Panel

The control panel is the user's main surface.

For the first version, the control panel should be an extension page opened in a small dedicated browser window. This keeps it visible while the user watches all three services. Extension popups are not suitable for the first version because they close too easily when focus changes.

Controls:

- Multiline prompt input.
- Target checkboxes for ChatGPT, Claude, and AI Studio.
- `Open/Arrange` button.
- `Send to all` button.
- `Capture results` button.
- `Save run` button.
- Status indicators per service: `not open`, `ready`, `sent`, `generating`, `captured`, `needs user`.

### Local Helper

The local helper writes files into this project. It should be a small local HTTP server or native messaging host, chosen during implementation planning based on browser extension constraints.

Responsibilities:

- Accept captured run payloads from the extension.
- Create `raw/multimodel/<run-id>/`.
- Write prompt, model outputs, metadata, and capture notes.
- Avoid overwriting existing runs.

Suggested run structure:

```text
raw/multimodel/<run-id>/
  prompt.md
  chatgpt.md
  claude.md
  aistudio.md
  metadata.json
  capture-notes.md
```

## Data Model

`metadata.json` should include:

- `run_id`
- `created_at`
- `prompt_title`
- `targets`
- `service_urls`
- `capture_status`
- `user_notes`
- `source_files`

Each service output markdown file should include:

- Service name.
- Capture timestamp.
- Source URL.
- The raw captured answer text.
- A short note when capture was partial or required manual intervention.

## Wiki Integration

The captured raw files are source material. They should not be edited after capture unless the user explicitly asks.

When the user asks for wiki ingestion, Codex should:

1. Read `wiki/schema.md`, `wiki/index.md`, and recent `wiki/log.md`.
2. Read the captured run under `raw/multimodel/<run-id>/`.
3. Create or update a source page under `wiki/sources/`.
4. Create or update a synthesis page under `wiki/syntheses/`.
5. Update relevant entity, concept, event, or question pages only when the captured answers create durable value.
6. Update `wiki/index.md` and append to `wiki/log.md`.

## Error Handling

The system should treat web services as unstable UI surfaces.

Expected recoverable states:

- The user is logged out.
- A service requires 2FA, CAPTCHA, or plan confirmation.
- A prompt box selector changed.
- A service is still generating.
- The latest answer cannot be confidently identified.
- A capture is partial.

In these cases the extension should mark the service as `needs user` or `capture partial`, then let the user fix the visible page. It should not attempt to bypass authentication, verification, or access controls.

## Security And Privacy

- Store no passwords.
- Store no cookies.
- Do not transmit captured content outside the local machine except through the user's normal web-service interactions.
- Make saved raw outputs easy to inspect and delete.
- Require an explicit user action for sending prompts and capturing results.
- Keep domain permissions narrow to the supported services.

## Testing Strategy

Manual smoke tests are required because the target services are third-party web apps.

Initial test cases:

1. Open or focus all three target services.
2. Arrange visible windows into three columns.
3. Send a short prompt to ChatGPT only.
4. Send a short prompt to all three services.
5. Capture one completed answer.
6. Capture all three completed answers.
7. Save a run and verify files under `raw/multimodel/<run-id>/`.
8. Handle a logged-out service without losing the other two captures.

Automated tests should cover local helper file-writing behavior, run-id collision handling, and payload validation.

## Implementation Notes

The first implementation should be deliberately small:

- Build the control panel and local save path first.
- Support manual `Open/Arrange` before perfecting automatic window placement.
- Start with robust capture of visible latest answers, even if generation-completion detection is basic.
- Prefer clear status and manual recovery over brittle hidden automation.

## Initial Decisions

- Target Chrome first and keep the extension manifest compatible with Edge when practical.
- Use four visible windows for the preferred layout: a thin control panel plus three service windows.
- Use automatic submit for `Send to all`, because minimizing submission delay is the second priority after simultaneous visibility.
- Keep prompt templates as ordinary markdown files in `raw/multimodel/templates/` after the MVP works.

## Deferred Questions

- Whether to add a stricter manual-review mode that fills prompts but does not submit them.
- Whether to add support for more services after ChatGPT, Claude, and AI Studio are stable.
- Whether to add hotkeys for send, capture, and save.
