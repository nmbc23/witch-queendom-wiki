---
type: synthesis
status: draft
updated: 2026-04-28
sources:
  - [[sources/llm-wiki-pattern]]
---

# LLM Wiki Architecture

The architecture has three layers:

1. `raw/`: immutable source material.
2. `wiki/`: generated and maintained markdown knowledge pages.
3. `wiki/schema.md`: operating rules that tell Codex how to maintain the wiki.

## Working Thesis

An LLM Wiki is most useful when Codex treats wiki maintenance like software maintenance: new sources are integrated into existing structure, not merely appended as isolated notes.

## Minimal Viable Wiki

A practical starting structure is:

- `raw/` for sources
- `wiki/sources/` for source summaries
- `wiki/concepts/` for reusable ideas
- `wiki/entities/` for tools, people, organizations, and projects
- `wiki/syntheses/` for higher-level conclusions
- `wiki/questions/` for durable answers
- `wiki/index.md` and `wiki/log.md` for navigation and history

## Operating Loop

The core loop is:

1. Add a source to `raw/`.
2. Ask Codex to ingest it.
3. Review the changed pages.
4. Ask questions against the wiki.
5. Save valuable answers back into the wiki.
6. Periodically ask Codex to lint the wiki.

## Current State

This workspace contains the first source-backed seed of the wiki. No contradictions are known yet because only one source has been ingested.

## Related

- [[concepts/지속 누적 위키|지속 누적 위키]]
- [[concepts/출처 기반 종합|출처 기반 종합]]
- [[concepts/입력 질의 점검 워크플로|입력 질의 점검 워크플로]]
- [[entities/obsidian]]
