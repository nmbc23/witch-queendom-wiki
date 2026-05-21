---
type: question
status: draft
updated: 2026-04-28
sources:
  - [[sources/llm-wiki-pattern]]
---

# How To Start Using LLM Wiki

## Short Answer

Start by saving one source into `raw/`, then ask Codex to ingest it into the wiki. Codex should create a source summary, update concept/entity/synthesis pages, refresh the index, and append a log entry.

## Example Prompts

```text
Use llm-wiki. Ingest raw/my-article.md into this wiki.
```

```text
Use llm-wiki. Answer this from the wiki: what are the main open questions?
If the answer is useful, file it under wiki/questions/.
```

```text
Use llm-wiki. Lint this wiki and fix small index/link issues.
```

## What The User Does

- Put sources in `raw/`.
- Tell Codex what matters or what question you care about.
- Review the pages Codex changes.
- Ask follow-up questions and decide what should become durable knowledge.

## What Codex Does

- Reads the source and existing wiki.
- Writes and updates pages.
- Maintains links, index, log, and open questions.
- Flags contradictions and stale claims.

## Related

- [[sources/llm-wiki-pattern]]
- [[concepts/입력 질의 점검 워크플로|입력 질의 점검 워크플로]]
- [[syntheses/llm-wiki-architecture]]
