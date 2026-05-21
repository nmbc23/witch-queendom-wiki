---
type: source
status: draft
updated: 2026-04-28
source_path: raw/llm-wiki-pattern.md
topics:
  - [[concepts/지속 누적 위키|지속 누적 위키]]
  - [[concepts/출처 기반 종합|출처 기반 종합]]
  - [[concepts/입력 질의 점검 워크플로|입력 질의 점검 워크플로]]
  - [[syntheses/llm-wiki-architecture]]
---

# LLM Wiki Pattern

Source path: `raw/llm-wiki-pattern.md`

## Summary

This source proposes an LLM-maintained markdown wiki as a middle layer between raw documents and question answering. Instead of retrieving raw chunks from scratch on every question, the LLM incrementally compiles knowledge into persistent pages, updates those pages as new sources arrive, and maintains cross-references, contradictions, summaries, and synthesis over time.

The core distinction from ordinary RAG is accumulation: the wiki stores work already done by the LLM, so later questions can start from an organized, source-backed knowledge base rather than repeatedly rediscovering the same fragments.

## Key Claims

- A durable wiki can compound knowledge across sources better than one-off retrieval against raw documents.
- The user curates sources and directs exploration; the LLM performs the bookkeeping, summarization, cross-linking, and maintenance.
- The system has three layers: raw sources, generated wiki pages, and a schema that tells the LLM how to maintain the wiki.
- Useful operations include ingesting sources, answering queries from the wiki, filing durable answers back into the wiki, and periodically linting for health.
- `index.md` should be content-oriented, while `log.md` should be chronological.
- Obsidian is a natural interface for reading and navigating the generated markdown wiki.

## Useful Details

- The wiki can support personal reflection, research, book notes, team knowledge, competitive analysis, trip planning, course notes, and hobby research.
- Source pages should not stay isolated; they should cause updates to relevant entity, concept, comparison, and synthesis pages.
- Linting should look for contradictions, stale claims, orphan pages, missing cross-references, and important concepts without pages.
- Optional tools include local markdown search, Obsidian Web Clipper, local image downloads, Marp, Dataview, and git.

## Open Questions

- What directory structure should this user prefer for their long-term wiki projects?
- Should future wikis live in the current workspace, on `P:`, or inside an Obsidian vault?
- What citation strictness is useful: lightweight page links, raw-source citations, or quote-level provenance?
- Should the user keep separate wikis by domain, or one broader personal knowledge base?

## Related Pages

- [[concepts/지속 누적 위키|지속 누적 위키]]
- [[concepts/출처 기반 종합|출처 기반 종합]]
- [[concepts/입력 질의 점검 워크플로|입력 질의 점검 워크플로]]
- [[entities/obsidian]]
- [[syntheses/llm-wiki-architecture]]
- [[questions/how-to-start-using-llm-wiki]]
