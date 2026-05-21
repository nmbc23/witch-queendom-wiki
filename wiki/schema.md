---
type: schema
status: draft
updated: 2026-04-28
---

# Wiki Schema

This wiki is maintained by Codex from source-backed material in `raw/`.

## Directory Roles

- `raw/`: immutable source files. Do not edit these during normal wiki maintenance.
- `wiki/sources/`: one page per ingested source, with provenance and key claims.
- `wiki/entities/`: people, organizations, tools, projects, and named systems.
- `wiki/concepts/`: reusable ideas and patterns that can appear across sources.
- `wiki/syntheses/`: higher-level summaries, comparisons, arguments, and evolving theses.
- `wiki/questions/`: durable answers to user questions that should not disappear into chat history.
- `wiki/index.md`: content-oriented catalog of pages.
- `wiki/log.md`: chronological record of ingests, queries, and lint passes.

## Link Style

Use Obsidian-friendly wiki links:

- Page link: `[[concepts/지속 누적 위키|지속 누적 위키]]`
- Labeled link: `[[sources/llm-wiki-pattern|LLM Wiki Pattern]]`

## Source Citation Style

When a claim depends on a source, cite both the wiki source page and the raw path when useful:

```text
Source: [[sources/example-source]] (`raw/example-source.md`)
```

Use "Inference" when a statement is synthesized from source material rather than directly stated.

## Page Frontmatter

Use compact YAML frontmatter:

```yaml
---
type: source | entity | concept | synthesis | question
status: draft | reviewed | stale
updated: YYYY-MM-DD
sources:
  - [[sources/example-source]]
---
```

## Maintenance Rules

On ingest:

1. Read this schema, `wiki/index.md`, and recent `wiki/log.md`.
2. Create or update a source page.
3. Update affected entity, concept, synthesis, and question pages.
4. Add or revise index entries.
5. Append a log entry.

On query:

1. Start with `wiki/index.md`.
2. Search the wiki before returning to raw sources.
3. Answer with citations.
4. File durable answers under `wiki/questions/` or `wiki/syntheses/` when useful.

On lint:

1. Check stale claims, missing citations, orphan pages, duplicate concepts, index drift, and unresolved questions.
2. Report findings with file paths.
3. Edit the wiki when asked to clean up.
- `wiki/events/`: one page per narrative event, using stable event IDs such as `E06-08`; each event page records related characters, details, results, follow-up impact, and adjacent events.

- `wiki/events/major-*.md`: 세부 E/U 사건 여러 개를 묶어 발단, 전개, 충돌, 후폭풍, 정리까지 설명하는 대형 사건 해설서.
- 한국어 제목을 가진 주요 페이지는 YAML `aliases`에 한글 제목을 넣어 Obsidian에서 한글 검색과 한글 링크 선택이 가능하게 유지한다.
- `wiki/parts/`: 여러 에피소드가 섞이지 않도록 파트 허브와 파트 인덱스를 둔다. 파트 문서는 관련 인물, 사건, 개념, 후일담, 독립 가능성을 정리한다.
- 파트에 속한 소설 문서는 YAML에 `tags: 소설/보석검파트` 같은 파트 태그와 `part: 보석검 파트` 속성을 둔다.
