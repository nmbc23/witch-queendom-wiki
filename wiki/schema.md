---
type: schema
status: reviewed
updated: 2026-07-05
---

# Wiki Schema v2

이 위키는 `raw/`의 원천 자료를 근거로 유지되는 소설 설정 위키다.

유지 관리의 제1원칙: **한 사실은 한 곳에.** 같은 사실을 여러 문서에 중복 서술하지 않는다. 서술의 정본은 개별 페이지(entities/concepts/events)이고, 목록은 자동 생성 index가, 순서는 연표가 담당한다.

## 디렉토리 역할

- `raw/`: 불변 원천 자료. 위키 유지 중 편집하지 않는다.
  - `raw/sessions/`: 세션 보정 원문 아카이브. 새 세션의 정정·추가는 여기에 날짜 파일로 쌓는다.
  - `raw/drafts/`: 위키 반영 전 초안 문서.
  - `raw/archive/`: 폐지된 위키 문서의 보존본.
- `wiki/entities/`: 인물·조직·세력. 소설 내용만 둔다. 도구·메타 항목은 `meta/`로.
- `wiki/concepts/`: 설정·개념.
- `wiki/events/`: 개별 사건. 파일은 평면 배치하며 하위 폴더를 만들지 않는다.
- `wiki/syntheses/`: 아크 서사, 연표, 톤 분석 등 종합 문서. **목록형 카탈로그는 두지 않는다** — 페이지 나열은 `index.md`의 일이다.
- `wiki/sources/`: 원문 단위 소스 페이지만 둔다(원고, 외전 묶음, 소스 인벤토리). **세션 보정용 소스 페이지를 새로 만들지 않는다.**
- `wiki/questions/`: 채팅에 묻히면 안 되는 질문-답변.
- `wiki/parts/`: 에피소드 파트 입구.
- `wiki/meta/`: 위키 자체에 대한 문서(LLM 위키 패턴, 도구 등).
- `wiki/index.md`: 자동 생성 목차. **손으로 편집하지 않는다.** 재생성: `python tools/generate_index.py`
- `wiki/log.md`: 시간순 작업 기록. append만 한다.
- `wiki/schema.md`: 이 문서.

## 보정(ingest) 절차 — v1과 달라진 핵심

세션에서 설정 보정이 들어오면:

1. 세션 원문 또는 요지를 `raw/sessions/YYYY-MM-DD-주제.md` 한 파일로 기록한다. 위키 소스 페이지를 만들지 않는다.
2. 영향받는 entities/concepts/events 페이지 본문을 직접 수정하고, frontmatter `sources:`에 해당 raw 경로를 한 줄 추가한다.
3. `log.md`에 항목 하나를 append한다(변경 페이지 목록, 핵심 정리, 검삭 필요).
4. 페이지 생성·삭제·개명이 있었을 때만 `python tools/generate_index.py`를 실행한다.

카탈로그·목차·연표를 수동으로 따라 고치는 단계는 없다. [[syntheses/소설 상세 사건 연표|소설 상세 사건 연표]]는 사건의 존재나 순서가 실제로 바뀌었을 때만 수정한다.

보정 1건의 표준 비용 = raw 파일 1개 + 내용 페이지 1~3개 수정 + 로그 1항목.

## 명명 규칙

- 페이지 파일명은 한글 정식 명칭을 쓴다. 공백 허용, `/ \ : * ? " < > |` 금지, 꼬리 공백·꼬리 점 금지.
- 옛 파일명·별칭·이명은 frontmatter `aliases`에 남긴다.
- 동일 인물 여부가 미확정인 이름은 별도 페이지로 두되, 본문 첫 줄에 미확정임과 추정 대상 링크를 명시한다.

## 링크 규칙

- 페이지 간 링크: `[[entities/아이카 데스모네|아이카]]` 처럼 폴더 경로를 포함한다.
- raw 원천 인용: frontmatter `sources:` 목록에는 `raw/...` 평문 경로, 본문에서는 백틱 경로로 쓴다. raw는 Obsidian vault 밖이므로 위키링크를 걸지 않는다.
- 원문에 직접 없는 종합 서술은 "추론"으로 표기한다.

## Frontmatter

```yaml
---
type: entity | concept | event | synthesis | source | question | part-index | schema | index
status: draft | reviewed | stale | generated
updated: YYYY-MM-DD
aliases:
  - 별칭
part:
  - 보석검 파트
tags:
  - 소설/보석검파트
sources:
  - raw/sessions/2026-07-05-예시.md
  - "[[sources/뮤케레와 리나시타 외전 묶음]]"
---
```

## 인코딩 규칙

- 모든 위키 markdown은 UTF-8로 다룬다.
- Windows PowerShell에서는 `Get-Content`, `Set-Content`, `Add-Content`, `Out-File`에 `-Encoding UTF8`을 명시한다.
- 한글 제목·별칭·링크가 깨져 보이면, 문제로 보고하기 전에 UTF-8 명시 후 재확인한다.
- 이미지·자산 링크는 `wiki/assets/` 아래 파일시스템 자산으로 검증하며, 없는 위키 페이지로 취급하지 않는다.

## 점검(lint)

- 깨진 위키링크(페이지·자산 구분).
- `sources/`에 세션 보정 페이지가 새로 생겼는지.
- `syntheses/`에 목록형 카탈로그가 생겼는지, 개별 페이지와 중복 서술이 생겼는지.
- 페이지 생성·삭제 후 index 재생성 누락.
- `events/` 하위 폴더나 날짜명 스텁 생성 여부.
