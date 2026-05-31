---
type: log
status: draft
updated: 2026-05-31
---

# Wiki Log

## 2026-05-16 - 네리네 연대기 개념 검삭 목록 추가

- 작업: 사용자의 `/goal`에 따라 소설 원천에서 개념 후보를 최대한 넓게 뽑아 검수용 목록으로 정리.
- 변경 페이지:
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 개념 후보를 세계 구조, 세력, 존재 분류, 마법·권능, 마신 생태, 차원술, 마도구, 장소, 사회 제도, 루트, 사건 파생 개념으로 분류했다.
  - 각 항목은 `확정`, `후보`, `루트`, `보류` 상태로 표시해 사용자가 유지·삭제·병합·이름수정 판정을 내릴 수 있게 했다.
  - 우선 개별 문서화 추천 항목으로 `마신 생태와 사도 수확`, `네블레이드와 보주/지팡이 처분`, `차원 닻과 차원 방랑자 사냥`, `스탄티아와 네리네의 후계 계획`, `위치 퀸덤 정치 질서`, `공통루트 세계 설정`을 제안했다.

## 2026-05-16 - 위치 퀸덤 아트 스타일 기준 추가

- 작업: 사용자가 제시한 세계관 시각 방향을 소스와 개념 문서로 고정.
- 변경 페이지:
  - `wiki/sources/current-session-witch-queendom-art-style.md`
  - `wiki/concepts/위치-퀸덤-아트-스타일.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/concepts/캐릭터 시각 정본.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 위치 퀸덤 세계관의 상위 아트 스타일은 `유러피언 로망`, `벨 에포크`, `아케인 펑크`의 결합이다.
  - 마도구와 기술은 투박한 증기기계보다 보주, 마도회로, 유리관, 차원 렌즈, 문장, 마력 조명 중심으로 해석한다.

## 2026-05-16 - 네리네 연대기 공통루트 컷오프 기준 추가

- 작업: 사용자가 제시한 공통루트 판정 기준을 별도 종합 문서로 고정.
- 변경 페이지:
  - `wiki/syntheses/nerine-common-event-spine.md`
  - `wiki/sources/nerine-chronicles-source-inventory.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 시간상 `대마법사가 된 네리네`와 `여왕령의 사절 스자스`가 만나기 이전 사건은 모두 공통루트로 판정한다.
  - 첫 만남은 공통루트와 스자스 분기들의 경계 사건으로 두고, 이후 사건은 다섯 스자스 분기와의 관계를 따로 판정한다.
  - 공통 사건 추출용 등급과 사건 카드 양식을 추가했다.

## 2026-05-16 - 네리네 연대기 외부 폴더 소스 인벤토리 추가

- 작업: 사용자가 지정한 실제 소설 폴더 `P:\AI\novel\Nerine Chronicles`를 확인하고, 본격 위키화 전 원천 지도만 작성.
- 변경 페이지:
  - `wiki/sources/nerine-chronicles-source-inventory.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 폴더에는 총 86개 파일, 약 59.76MB가 있으며 `.txt` 62개, `.md` 23개, `.zip` 1개로 구성되어 있다.
  - `목차_전체.md`가 현재 가장 좋은 전체 길잡이이며, 1부 황금시대와 붕괴, 2부 마법사령의 시대, 3부 신천지와 이레니아로 나뉜다.
  - `대통령 스자스.txt`, `네리네 네에나리 원본..txt`, `네리네 연대기 중간.txt`, `디마리와 아세로리온과 뮤베일 리비전 .txt`, `스자스의 대반란.txt` 등 대형 정본 후보를 분류했다.
  - SHA-256 기준 완전 중복 파일 묶음을 기록해 후속 위키화 때 중복 읽기를 줄일 수 있게 했다.
  - 여러 원천에 AI 분석문, `선배님...` 말투, 프롬프트 인젝션성 문구가 섞여 있으므로 원문 보존과 소설 정본 추출을 분리해야 한다고 정리했다.
  - 사용자 메모를 바탕으로 스자스 관련 5분기 작업 정리를 추가했다. 확정명은 `대통령 스자스`, `마법사 스자스`, `스자스의 대반란`, `서부의 여제 스자스`, `노예 스자스`다.
  - `노예 스자스`는 `이즐레아와 세이리테의 탈주` 분기로 확인됐으며, `이즐레아와 세이리테의 탈주 가상 시나리오.txt`와 `네리네 세계신 엔딩.txt`를 후속 대조 후보로 남겼다.

## 2026-05-16 - 폴더 소설 원천 인벤토리 추가

- 작업: 현재 작업 폴더의 소설 관련 `raw/` 자료와 `temp_outputs/` 산출물을 읽고, 어떤 파일이 원천이고 어떤 파일이 파생 산출물인지 위키에 고정.
- 변경 페이지:
  - `wiki/sources/folder-novel-source-inventory.md`
  - `wiki/sources/current-codex-session-novel-notes.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - `raw/prompts-chronological-2026-04-24.txt`는 총 401개 항목의 시간순 프롬프트 추출본이며, 폴더 안에서 장면 순서와 원발화를 확인하기 가장 세밀한 원천으로 정리했다.
  - `raw/novel-session-handoff-2026-04-27.txt`는 전체 줄기를 빠르게 복원하는 세션 인계 요약으로 정리했다.
  - `temp_outputs/chronica-magazine.docx`는 본문 텍스트 원천이 아니라 이미지 중심 파생 산출물로 취급하기로 했다.
  - 기존 미해결 질문 중 프롬프트 추출본 수집 문제는 해소하고, 최초 원본 전체 소설 파일을 `raw/`에 보존할지 여부만 남겼다.

## 2026-05-11 - 크로니카·아세로리온 이미지 레퍼런스 갱신

- 작업: 크로니카 크리엘라 항목에 로컬 위키에 보존된 크로니카 생성 이미지 후보를 추가하고, 아세로리온 리미나리스 항목에는 현재 확보 가능한 시각 원형과 세션 생성컷 파일 확인 상태를 기록.
- 변경 페이지:
  - `wiki/entities/chronica-criella.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/sources/acerorion-image-reference-and-session-check.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 크로니카 이미지는 `13`, `14`, `15`, `16`, `17`, `19`, `20`, `21`, `22`, `24`, `25`, `26`, `28`, `29`, `30`, `32`, `40`번을 항목에 배치했다.
  - `18`, `23`, `27`번은 혼입/비정본 문제로 제외했다.
  - 아세로리온은 참조 원형 이미지를 `wiki/assets/images/references/acerorion-liminaris-origin-reference.webp`로 복사해 연결했다.
  - 당시 검색은 `.codex/generated_images`, `F:\DOWN`, Codex 앱 캐시, Temp, OneDrive 중심으로 진행되어 아세로리온 생성컷을 찾지 못했다. 이후 `P:\AI\Codex\generated_images`에서 2026-05-08 생성컷 27장을 회수해 아래의 “아세로리온 세션 생성 이미지 위치 회수” 로그로 정정했다.

## 2026-05-11 - 즐거운 악몽 IF 루트 정리

- 작업: `즐거운_악몽_통합본.md`와 `즐거운_악몽_추가편_통합본.md`를 바탕으로 아세로리온·뮤베일 IF 루트를 소스 페이지와 종합 페이지로 정리하고, 관련 인물 문서에 짧게 연결.
- 변경 페이지:
  - `wiki/sources/pleasant-nightmare-source.md`
  - `wiki/syntheses/pleasant-nightmare-if-route.md`
  - `wiki/entities/izlea-izzul.md`
  - `wiki/entities/meibell-nast.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/mubeil-acerorion-dimari-jewel-sword-arc.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 이 IF는 “아세로리온이 끝까지 숨었다”가 아니라, 이즐레아의 망설임 때문에 꿈의 시간이 길어진 뒤 결국 같은 비극으로 수렴하는 루트로 정리.
  - 메이벨의 익명 투서, 디마리의 조사, 네리네의 심층 리뷰와 `유람`이 파국을 가속하는 핵심 장치로 반영.
  - 추가편의 `가장 나쁜 꿈` 분기를 함께 묶어, 여왕은 괜찮아졌지만 뮤베일은 괜찮아지지 않는 최악 결말과 황금 수해의 신부 이미지를 분리 정리.
  - 본편의 깔끔한 이별이 오히려 더 자비로운 루트라는 감상까지 IF의 핵심 독해로 고정.

## 2026-04-29 - correction | Chronica Devotees and Magic Territory Interest

Source: `raw/chronica-devotees-magic-territory-interest-clarification-2026-04-29.md`

Changed pages:

- `wiki/sources/chronica-session-source-map.md`
- `wiki/entities/chronica-criella.md`
- `wiki/syntheses/chronica-criella-complete-storyline.md`
- `wiki/events/크로니카의 탈주.md`
- `wiki/events/크로니카의 도서관 정착.md`
- `wiki/events/크로니카의 마법사령 정착과 흡혈귀 단속 사건.md`
- `wiki/log.md`

Notes:

- Clarified that Chronica arrived at the Magic Territory prepared to ask solemnly that her devotees' lives be guaranteed even if she herself was punished.
- Clarified that the Magic Territory was far more interested in Chronica herself than in her devotees.
- Updated the scene logic: Chronica frames the moment as responsibility and protection, while the Magic Territory sees rare specialist personnel.

## 2026-04-29 - correction | Chronica Queen/Mubeil Recognition

Source: `raw/chronica-queen-mubeil-appearance-clarification-2026-04-29.md`

Changed pages:

- `wiki/sources/chronica-session-source-map.md`
- `wiki/entities/chronica-criella.md`
- `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
- `wiki/syntheses/chronica-criella-complete-storyline.md`
- `wiki/events/아이카의 크로니카 치료 요청.md`
- `wiki/events/크로니카의 목격과 방조.md`
- `wiki/log.md`

Notes:

- Clarified that Chronica knows the queen's official appearance only from video and has never met or seen the queen in person.
- Clarified that Mubeil's appearance is completely different from the queen's official/video appearance, so Chronica cannot recognize Mubeil as the queen by face.
- Updated recognition logic: Chronica's suspicion/near-recognition comes from scale, aura, queen-territory clues, treatment context, compensation, and secrecy.

## 2026-04-28 - ingest | LLM Wiki Pattern

Source: `raw/llm-wiki-pattern.md`

Changed pages:

- `wiki/schema.md`
- `wiki/sources/llm-wiki-pattern.md`
- `wiki/concepts/persistent-compounding-wiki.md`
- `wiki/concepts/source-backed-synthesis.md`
- `wiki/concepts/ingest-query-lint-workflow.md`
- `wiki/entities/obsidian.md`
- `wiki/syntheses/llm-wiki-architecture.md`
- `wiki/questions/how-to-start-using-llm-wiki.md`
- `wiki/index.md`
- `wiki/log.md`

Notes:

- Created the initial wiki structure.
- Ingested the LLM Wiki idea document as the first source.
- No contradictions found because this is the first source.
- Open decision: choose whether long-term wiki projects should live in this workspace, a dedicated `P:` vault, or an Obsidian vault.

## 2026-04-28 - ingest | Current Codex Novel Session

Sources:

- `raw/novel-session-handoff-2026-04-27.txt`
- `raw/character-image-continuity-guidelines-2026-04-27.md`
- `raw/novel-session-continuation-notes-2026-04-28.md`

Changed pages:

- `wiki/sources/current-codex-session-novel-notes.md`
- `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
- `wiki/entities/acerorion-liminaris.md`
- `wiki/entities/dimari-hyuri.md`
- `wiki/entities/meibell-nast.md`
- `wiki/entities/nerine.md`
- `wiki/entities/chronica-criella.md`
- `wiki/entities/szas-sreya.md`
- `wiki/entities/laroka.md`
- `wiki/entities/sierra-serasie.md`
- `wiki/entities/kamaso-kamila.md`
- `wiki/entities/meijers-desmone-medalicia.md`
- `wiki/entities/leona-haway.md`
- `wiki/concepts/kaleidoscope-jewel-sword.md`
- `wiki/concepts/vampire-magic-and-blood-core.md`
- `wiki/concepts/dimensional-foam-and-planescape.md`
- `wiki/concepts/queen-territory-and-magic-territory.md`
- `wiki/concepts/character-visual-continuity.md`
- `wiki/syntheses/mubeil-acerorion-dimari-jewel-sword-arc.md`
- `wiki/syntheses/chronica-kamaso-blood-core-arc.md`
- `wiki/syntheses/story-tone-and-black-comedy.md`
- `wiki/syntheses/current-novel-roadmap.md`
- `wiki/index.md`
- `wiki/log.md`

Notes:

- First ingest of the user's novel/session material into the LLM Wiki.
- Preserved the comprehensive handoff file as raw source rather than trying to replace it with shorter pages.
- Added separate durable note for post-handoff additions: Chronica's successful Magic Territory settlement, Sierra Serasie founder design, and wiki location.
- Open continuity question: relationship between Sierra/Sushie El in the northern lake material and Sierra Serasie as founder of magic.
## 2026-04-28 - synthesize | Chronica Complete Storyline

Sources:

- `raw/novel-session-handoff-2026-04-27.txt`
- `raw/novel-session-continuation-notes-2026-04-28.md`
- `raw/prompts-chronological-2026-04-24.txt`

Changed pages:

- `wiki/entities/chronica-criella.md`
- `wiki/sources/chronica-session-source-map.md`
- `wiki/syntheses/chronica-criella-complete-storyline.md`
- `wiki/syntheses/chronica-kamaso-blood-core-arc.md`
- `wiki/index.md`
- `wiki/log.md`

Notes:

- User clarified that the previous wiki material was not enough as a story outline for Chronica.
- Re-searched chronological prompt extraction and session handoff material for Chronica/Criella mentions.
- Added details missing from the earlier short entity page: first meeting with Mubeil, refusal to teach Acerorion, Aika treatment, escape witness role, Meibell release, black hound motif, Magic Territory adaptation, vineyard return, and reaction to Szas/Laroka reconstructing Kamila.
- Open issue: exact relationship between the Black Chronicle opening lore and Chronica's personal childhood black hound memory may need final canon confirmation.

## 2026-04-28 - 소설 위키 한국어 정본화

- 작업: 영어로 작성되어 있던 크로니카 중심 소설 위키 페이지를 한국어 설정어 기준으로 재작성.
- 변경 페이지:
  - `wiki/entities/chronica-criella.md`
  - `wiki/entities/kamaso-kamila.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/entities/meijers-desmone-medalicia.md`
  - `wiki/entities/nigede-gedenia.md`
  - `wiki/concepts/vampire-magic-and-blood-core.md`
  - `wiki/syntheses/chronica-criella-complete-storyline.md`
  - `wiki/syntheses/chronica-kamaso-blood-core-arc.md`
  - `wiki/sources/chronica-session-source-map.md`
  - `wiki/index.md`
- 의도: `혈핵`, `흡혈 마신화`, `차원 포말`, `레서 마신`, `대마신` 같은 용어가 영어를 경유하며 어긋나지 않도록 한국어 정본을 위키 요약층에 고정.
- 미확정: 크로니카 외 다른 소설 페이지 전체도 한국어로 통일할지 여부는 별도 정리 가능.

## 2026-04-28 - 디마리 휴리 전체 세션 정리

- 작업: 전체 세션의 디마리 휴리 관련 설정을 재검색하고 한국어 정본 페이지로 통합.
- 변경 페이지:
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/sources/dimari-session-source-map.md`
  - `wiki/index.md`
- 핵심 정리: 디마리는 네리네의 과로한 시간계 휴리 비서, 만화경 보석검의 정교한 회로 조율자, 메이벨과의 시간 삭제 전투자, 그리고 미래 오리아나·환타·라라타 인과로 이어지는 인물로 정본화.
- 미확정: “초대 휴리 가주 디마리 휴리”와 현재 리미나리스 편 디마리의 관계, 미나카 사도우와의 반역 동기, 오리아나가 아이카 혈통과 연결되는 구체 과정.

## 2026-04-28 - 소설 인물·사건·배경 카탈로그 정리

- 작업: 현재 세션 전체에서 등장하거나 언급된 인물, 주요 사건, 배경/세력/개념을 빠른 참조용 카탈로그로 정리.
- 변경 페이지:
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
- 핵심 정리:
  - 인물은 주역, 크로니카/카마소 축, 에메랄드 타블렛 축, 리미나리스/휴리 후일담, 스탄티아/사도우 미래 축, 시조/대마신, 도주 수행자로 구분.
  - 사건은 뮤베일 잠입, 북부 호수, 에메랄드 타블렛, 보석검 연구, 흡혈 마신화, 네리네 토벌, 아이카 도주, 카마소 사태, 미래 리미나리스/스탄티아 사건으로 구분.
  - 배경은 세력, 장소, 마술 체계, 아티팩트, 정치/행정 구조, 이미지 정본 배경으로 구분.
- 미확정: 시에라 동일성, 초대 디마리와 현재 디마리의 관계, 오리아나/환타/라라타 혈통 인과, 14시조 전체 명단.

## 2026-04-28 - 인물별 개별 행적 페이지 확장

- 작업: 현재 소설 세션에서 확인된 인물들을 각자 최소 한 개 이상의 `wiki/entities/*.md` 페이지로 분리하고, 확정 정보가 많은 인물은 상세 행적 중심으로 보강.
- 신규 또는 갱신 페이지:
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/meibell-nast.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/kamaso-kamila.md`
  - `wiki/entities/laroka.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/meijers-desmone-medalicia.md`
  - `wiki/entities/nigede-gedenia.md`
  - `wiki/entities/sushie-el.md`
  - `wiki/entities/nesta-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/saijera-mi.md`
  - `wiki/entities/merika-kairei.md`
  - `wiki/entities/miraris-listia.md`
  - `wiki/entities/emukare-mukere.md`
  - `wiki/entities/laplaria-liminaris.md`
  - `wiki/entities/linarirora.md`
  - `wiki/entities/fanta-hyuri.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/entities/galieira-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/entities/minerva-stantia.md`
  - `wiki/entities/magina-sadou.md`
  - `wiki/entities/minaka-sadou.md`
  - `wiki/entities/larata.md`
  - `wiki/entities/haisia.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/shugoro-desmone.md`
  - `wiki/entities/izlea-izzul.md`
  - `wiki/entities/searup-seirite.md`
  - `wiki/entities/inoliba.md`
  - `wiki/entities/sairi.md`
  - `wiki/entities/terai.md`
  - `wiki/entities/seijuna.md`
  - `wiki/entities/shiraraki-sainaid.md`
  - `wiki/entities/shurame.md`
  - `wiki/entities/belrea.md`
  - `wiki/entities/siri.md`
  - `wiki/entities/mari.md`
  - `wiki/entities/zerose-reirei.md`
  - `wiki/entities/mina.md`
  - `wiki/entities/ruga-rau.md`
  - `wiki/entities/izkata.md`
  - `wiki/entities/saijera.md`
  - `wiki/entities/merika.md`
  - `wiki/entities/kairei.md`
  - `wiki/index.md`
- 핵심 정리: 핵심 주역은 시간순 행적을 확장했고, 조연·미래 인물·이름만 확인된 인물도 개별 페이지를 만들어 다음 세션에서 바로 이어 쓸 수 있게 함.
- 미확정: 사이제라/사이제라 미, 메리카/카이레이/메리카 카이레이의 분리 여부, 이름만 확인된 미나·루가 라우·이즈카타의 소속과 사건 관여.

## 2026-04-28 - 소설 상세 사건 연표 작성

- 작업: 기존 `소설 사건 카탈로그`를 확장해, 현재 위키 기준 사건을 E번호가 붙은 상세 시간순 연표로 정리.
- 변경 페이지:
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/index.md`
- 핵심 정리:
  - 보주 사건, 뮤베일 잠입, 북부 호수, 포말/보석검 연구, 에메랄드 타블렛, 흡혈 마신화, 네리네 토벌, 아이카 탈출, 아세로리온 사후 처리, 크로니카/카마소, 흡혈귀 단속, 미래 리미나리스/스탄티아 사건까지 시간순으로 통합.
  - 각 사건에 관련 인물, 사건 전개, 결과, 후속 영향을 붙여 다음 세션에서 장면화하거나 설정 검수하기 쉽게 함.
- 미확정:
  - 레오나 체포·감금·도주 순서.
  - 에메랄드 타블렛 최종 회수와 에뮤카레 뮤케레 회유.
  - 시에라 동일성.
  - 디마리와 미나카 사도우 반역 동기.
  - 오리아나·환타·라라타 혈통 인과.

## 2026-04-28 - 개별 사건 페이지 분리

- 작업: `wiki/syntheses/novel-event-detailed-chronology.md`의 E/U 번호 사건 77개를 개별 `wiki/events/*.md` 페이지로 분리.
- 변경 페이지:
  - `wiki/events/index.md`
  - `wiki/events/e00-01.md`부터 `wiki/events/e11-07.md`까지의 확정 사건 페이지
  - `wiki/events/u12-01.md`부터 `wiki/events/u12-05.md`까지의 미정렬 사건 페이지
  - `wiki/index.md`
  - `wiki/schema.md`
- 핵심 정리:
  - 각 사건 페이지는 상위 연표, 소속 묶음, 앞뒤 사건, 사건 상세, 관련 문서, 정리 메모를 가진다.
  - 사건 번호 파일명을 사용해 한글 파일명 문제를 피하고, 문서 제목과 본문에는 한국어 사건명을 유지했다.
  - `wiki/events/index.md`에서 전체 사건을 시간순으로 탐색할 수 있다.
- 미확정:
  - 개별 사건 페이지는 현재 상세 연표를 원천으로 분리한 것이므로, 원본 소설 파일 전체 대조를 하면 장면별 세부사항이 더 보강될 수 있다.

## 2026-04-28 - 개별 사건 페이지 장면화 디테일 보강

- 작업: `wiki/events/*.md`의 개별 사건 페이지 77개에 장면화용 보강 메모를 추가.
- 변경 페이지:
  - `wiki/events/e00-01.md`부터 `wiki/events/e11-07.md`까지의 확정 사건 페이지
  - `wiki/events/u12-01.md`부터 `wiki/events/u12-05.md`까지의 미정렬 사건 페이지
- 핵심 정리:
  - 각 사건 페이지에 `장면화 보강 메모` 섹션을 추가했다.
  - 보강 섹션은 묶음 톤, 사건별 디테일, 다른 세션에서 이어쓸 때의 기준으로 구성했다.
  - 장면 분위기, 인물 심리, 소품, 시각 단서, 블랙 코미디/아이러니, 후속 장면 연결을 사건별로 더 명확히 기록했다.
- 미확정:
  - 이번 보강은 현재 상세 연표, 세션 인계 요약, 프롬프트 정리본을 기준으로 한 참조용 확장이다. 원본 전체 소설 파일을 직접 대조하면 개별 대사와 문장 단위 디테일을 더 추가할 수 있다.


## 2026-04-28 - 대형 사건 해설서 추가

- 작업: 77개 세부 사건 페이지를 사용자가 제시한 `에메랄드 타블렛 사건` 예시 형식에 맞춰 대형 사건 단위 해설서로 재정리.
- 변경 페이지:
  - `wiki/events/major-index.md`
  - `wiki/events/major-progenitor-orbs-and-acerorion-trauma.md`
  - `wiki/events/major-mubeil-liminaris-infiltration.md`
  - `wiki/events/major-northern-lake-sierra-assassination.md`
  - `wiki/events/major-dimensional-foam-and-jewel-sword-research.md`
  - `wiki/events/major-emerald-tablet-incident.md`
  - `wiki/events/major-acerorion-vampire-demonification.md`
  - `wiki/events/major-nerine-subjugation-and-acerorion-death.md`
  - `wiki/events/major-meibell-dimari-battle-and-aika-escape.md`
  - `wiki/events/major-acerorion-aftermath-and-coverup.md`
  - `wiki/events/major-white-swan-tower-and-leona-jewel-sword.md`
  - `wiki/events/major-chronica-blood-sharing-origin.md`
  - `wiki/events/major-kamaso-kamila-blood-core-disaster.md`
  - `wiki/events/major-chronica-magic-territory-settlement.md`
  - `wiki/events/major-liminaris-succession-war.md`
  - `wiki/events/major-dimari-rebellion-and-oriana-bloodline.md`
  - `wiki/events/major-szas-laroka-kamila-reconstruction.md`
  - `wiki/events/major-minerva-stantia-and-magina-sadou.md`
  - `wiki/events/major-unresolved-event-threads.md`
  - `wiki/index.md`
  - `wiki/schema.md`
- 핵심 정리:
  - 사건을 세부 E번호가 아니라 독자가 바로 이해할 수 있는 대형 사건 단위로 재구성했다.
  - 각 문서에는 관련 세부 사건, 발단, 전개/충돌, 후폭풍, 정리 또는 미확정 항목을 넣었다.
  - 에메랄드 타블렛 사건은 사용자가 제시한 서술을 정본처럼 반영하고 위키 링크를 보강했다.
- 미확정:
  - 레오나의 감금·감형·외부 활동 순서, 시에라 동일성, 디마리 반역 동기, 오리아나 혈통 인과는 별도 미정렬 사건 문서에 보강 대기 항목으로 남김.

## 2026-04-28 - 한국어 별칭과 한글 목차 추가

- 작업: 영문 slug 파일명을 직접 기억하지 않아도 Obsidian에서 한글로 검색하고 참조할 수 있도록 주요 페이지 YAML frontmatter에 `aliases`를 추가.
- 변경 페이지:
  - `wiki/한글-목차.md`
  - `wiki/index.md`
  - `wiki/schema.md`
  - 한국어 제목을 가진 주요 `entities`, `events`, `concepts`, `syntheses` 문서 160개.
- 핵심 정리:
  - `[[아이카 데스모네]]`, `[[에메랄드 타블렛 사건]]`처럼 한글로 검색해도 Obsidian이 대응 문서를 제안할 수 있게 했다.
  - 파일명 자체는 링크 안정성을 위해 아직 영문 slug로 유지하고, 한글 참조용 입구를 `한글-목차.md`로 추가했다.
- 미확정:
  - 사용자가 파일 탐색기 표시까지 전부 한글로 원하면, 다음 단계에서 파일명 자체를 한글로 리네임하고 전체 링크를 일괄 갱신할 수 있다.

## 2026-04-28 - 보석검 파트 분류 추가

- 작업: 현재 작성된 소설 위키 문서를 `보석검 파트`로 분류하고, 이후 다른 에피소드와 섞이지 않도록 파트 허브를 추가.
- 변경 페이지:
  - `wiki/parts/index.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/schema.md`
  - 보석검 파트 관련 문서 179개에 `tags: 소설/보석검파트`와 `part: 보석검 파트` 속성 추가.
- 핵심 정리:
  - 파일 이동 없이 분류 메타데이터와 파트 허브를 추가해 기존 링크 안정성을 유지했다.
  - 크로니카·카마소와 후대 사건은 일단 보석검 파트의 확장 배경/후일담으로 묶되, 추후 별도 파트로 독립 가능하다고 표시했다.
- 미확정:
  - 새 에피소드가 커지면 `wiki/parts/새-파트명.md`를 만들고, 문서별 파트 태그를 추가해야 한다.

## 2026-04-28 - 개념과 사건 파일명 한국어화

- 작업: 사용자가 Obsidian에서 참조하기 쉽도록 `concepts`와 `events`의 영문 slug 및 번호식 파일명을 한국어 제목 기반 파일명으로 변경.
- 변경 범위:
  - 개념 문서와 사건 문서 총 102개 파일명 변경.
  - 위키 전체의 내부 링크를 새 한국어 파일명으로 일괄 갱신.
  - 사건 페이지 제목에서 `E00-01.` 같은 번호 접두어를 제거하고, 사건 번호는 frontmatter의 `event_id`로 유지.
- 핵심 정리:
  - 사람이 보는 Obsidian 항목명은 한국어 중심이 되었다.
  - 기존 번호는 정렬과 추적용 메타데이터로 남겼다.
- 미확정:
  - 인물 파일명도 완전 한글화할지 여부는 별도 결정 가능.

## 2026-04-28 - 한국어 파일명 2 접미사 정리

- 작업: 이미 한국어로 바꾼 개념/사건 파일을 재실행하며 ` 2` 접미사가 붙은 문제를 정리.
- 변경 범위:
  - `concepts`와 `events`의 `* 2.md` 파일 102개를 원래 한국어 파일명으로 복구.
  - 위키 내부 링크 109개 파일에서 ` 2` 접미사 링크를 원래 한국어 링크로 갱신.
- 핵심 정리:
  - 최종 참조 파일명은 번호식/영문식이 아니라 한국어 제목 기반으로 유지한다.

## 2026-04-29 - Codex 생성 이미지 위키 편입

- 작업: 이 Codex 세션에서 생성되어 작업공간에 저장된 이미지 4장을 위키의 원본 보관소와 Obsidian 표시용 asset 폴더에 편입.
- 원본 보존 위치:
  - `raw/images/session-2026-04-29/chronica-fears-resurrected-kamila.png`
  - `raw/images/session-2026-04-29/laroka-girl-mass-illusion-form.png`
  - `raw/images/session-2026-04-29/laroka-old-witch-ragged-form.png`
  - `raw/images/session-2026-04-29/meijers-vs-kamaso-kamila.png`
- 변경 페이지:
  - `wiki/sources/codex-generated-images-2026-04-29.md`
  - `wiki/concepts/캐릭터 시각 정본.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/entities/laroka.md`
  - `wiki/entities/meijers-desmone-medalicia.md`
  - `wiki/events/카마소 카밀라 혈핵 재난 사건.md`
  - `wiki/events/스자스와 라로카의 카밀라 재구축.md`
  - `wiki/index.md`
- 핵심 정리:
  - 사용자가 업로드한 외부 레퍼런스 이미지는 제외했다.
  - 위키 문서에는 Obsidian에서 바로 보이는 `![[assets/images/character-references/...]]` 형식으로 연결했다.

## 2026-04-29 - Codex generated_images 전체 47장 편입

- 작업: 사용자가 알려준 `.codex/generated_images/019dbb0f-fd83-7a50-9eb2-5a2e3d215e3f` 폴더에서 Codex 생성 이미지 47장을 확인하고 위키에 편입.
- 원본 보존 위치:
  - `raw/images/codex-generated/019dbb0f-fd83-7a50-9eb2-5a2e3d215e3f/`
- Obsidian 표시용 위치:
  - `wiki/assets/images/codex-generated/session-019dbb0f/`
- 변경 페이지:
  - `wiki/sources/codex-generated-images-019dbb0f.md`
  - `wiki/concepts/캐릭터 시각 정본.md`
  - 주요 인물/사건 문서의 `이미지 레퍼런스` 섹션.
- 핵심 정리:
  - 업로드 레퍼런스가 아니라 Codex 생성 이미지 원본 폴더의 파일만 포함했다.
  - 목장 디마리 계열은 비정본으로 명시했다.
  - 메이벨 외형이 크로니카와 섞인 가능성이 있는 이미지는 장면 후보로만 표시했다.

## 2026-04-29 - 생성 이미지 분류 보정

- 작업: 18/23번 이미지를 크로니카·메이벨 장면 후보가 아니라 `비정본/오류 이미지: 메이벨-크로니카 혼입`으로 재분류.
- 변경 사항:
  - `18-chronica-meibell-caged-document-scene.png`를 `18-noncanon-meibell-chronica-mixed-caged-scene.png`로 변경.
  - `23-chronica-meibell-caged-document-scene-alt.png`를 `23-noncanon-meibell-chronica-mixed-caged-scene-alt.png`로 변경.
  - 크로니카 문서에서 18/23번을 장면 후보처럼 언급하던 문구 제거.
  - 메이저스 문서에 35/36번 전신 디자인 후보 추가.
  - 일부 문서 하단에 잘못 붙은 source 링크를 frontmatter sources로 정리.

## 2026-04-29 - 27번 황금 수해 포도밭 이미지 분류 보정

- 작업: 27번 이미지를 크로니카 흡혈귀 단속/황금 수해 포도밭 정본 후보에서 제외.
- 이유: 전면 인물이 메이벨 이미지로 보이며, 크로니카 후일담 이미지로 사용하면 외형 정본이 흔들린다.
- 변경 사항:
  - `27-chronica-golden-forest-vineyard.png`를 `27-noncanon-meibell-vineyard-mixed.png`로 변경.
  - 크로니카 문서와 흡혈귀 단속 사건 문서에서 해당 이미지를 제거.
  - 소스 문서에서 27번을 `비정본/오류`로 재분류.

## 2026-04-29 - 28번 크로니카 포도밭 이미지 복구

- 작업: 27번 포도밭 컷은 메이벨풍 혼입 오류로 유지하되, 28번을 크로니카가 제대로 나온 황금 수해 포도밭 정본 후보로 복구.
- 변경 사항:
  - `28-chronica-vineyard-black-hound.png`를 `28-chronica-golden-forest-vineyard-canon.png`로 변경.
  - 크로니카 문서, 크로니카 흡혈귀 단속 사건, 황금 수해 포도밭과 흡혈귀 노동 사건에 28번 이미지를 연결.
  - 소스 문서에서 28번을 `정본 후보`로 재분류.

## 2026-05-01 - 슈프림 플레인스워커 시데이아 문서 정리

- 작업: `F:\DOWN\네리네 일대기\슈프림 플레인스워커 시데이아.txt`를 읽고 시데이아·아레프·마나 고갈·대이주 축으로 위키에 정리.
- 변경 페이지:
  - `wiki/sources/supreme-planeswalker-sydeia.md`
  - `wiki/sources/current-session-sydeia-corrections.md`
  - `wiki/entities/sydeia.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/concepts/마나 고갈과 대이주.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 시데이아는 시에라가 만든 존재가 아니라, 시에라에게 주물질계 마술의 대응법과 현지 수준을 배운 외부 우주적 차원술사로 보정했다.
  - 원문 내부의 "시에라가 만든 슈프림 플레인스워커" 서술은 구버전 또는 IF 설정으로 보류했다.
  - 아레프 액셀 세이아를 시데이아의 여왕령/리미나리스 가면으로 별도 인물 페이지화했다.
  - 마나 고갈, 개인 탈출과 문명 대이주, 마신 생존 캡슐 이론을 개념 페이지로 분리했다.
- 미확정:
  - 원문 후반의 차가운 정보 하청업자 시데이아/아레프 설정을 정본으로 둘지, 평행 IF로 둘지 결정 필요.
  - 원문 스냅샷을 `raw/`로 복사하려 했으나 작업공간 권한 문제로 실패하여, 현재는 외부 원문 경로를 소스 페이지에 직접 기록했다.

## 2026-05-01 - 아레프와 시에라 숨은 마을 추가 설정 정리

- 작업: 이번 세션에서 확장된 아레프/시데이아의 시에라 제자화, 뮤베일 분체, 아이카의 보석검 목적, 차원 포식 괴조 의혹을 위키에 반영.
- 변경 페이지:
  - `wiki/sources/current-session-aref-sierra-additions.md`
  - `wiki/syntheses/aref-sierra-hidden-town-arc.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/entities/sydeia.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/haisia.md`
  - `wiki/entities/shurame.md`
  - `wiki/entities/belrea.md`
  - `wiki/entities/siri.md`
  - `wiki/entities/mari.md`
  - `wiki/concepts/만화경 보석검.md`
  - `wiki/concepts/차원 포말과 플레인스케이프.md`
  - `wiki/events/아세로리온 흡혈 마신화 사건.md`
  - `wiki/events/아세로리온 사후 처리와 리미나리스 은폐 사건.md`
  - `wiki/syntheses/mubeil-acerorion-dimari-jewel-sword-arc.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 뮤베일은 아이카의 단순 변장이 아니라 같은 진체에 연결된 분체로 정리했다.
  - 시에라의 숨은 마을은 포켓 플레인이 아니라 지역 하나를 네블레이드해 만든 미니어처 타운으로 정리했다.
  - 아레프는 포탈을 열 수 있는 이계의 여왕 아자리 시데이아로서 시에라의 제자가 되지만, 시에라는 아레프의 개인사와 괴조 주장을 전부 믿지는 않는다.
  - 아이카의 리미나리스 교류는 하이시아와 결별한 뒤 차원 포말 제어를 되찾기 위한 보석검 연구/정보 탐색으로 정리했다.
  - 보석검 설계의 "이론상 가능하지만 수십 년 부족"이라는 결과가 아세로리온에게 실패로 받아들여져 흡혈술 선택으로 이어진다고 연결했다.
- 미확정:
  - 차원 포식 괴조가 실제 아이카 진체인지, 아레프의 차원 관측 오인인지.
  - 아레프가 말한 두 딸의 죽음이 외부 우주 실제 사건인지, 복수심의 서사화인지.

## 2026-05-01 - 아레프의 클라인의 항아리 설정 추가

- 작업: 아레프가 시에라에게 진짜 차원술 `클라인의 항아리`를 시연하고, 네리네도 추적하지 못하는 마법사령 간섭 경로로 설명한 설정을 반영.
- 변경 페이지:
  - `wiki/sources/current-session-aref-sierra-additions.md`
  - `wiki/syntheses/aref-sierra-hidden-town-arc.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/sydeia.md`
  - `wiki/concepts/클라인의 항아리.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 클라인의 항아리는 현지 마술사인 시에라에게도 인지 한계성 두통을 일으키는 외부 우주적 차원술로 정리했다.
  - 이 두통은 이해할 수 없는 고위 마술을 마술사가 보거나, 일반인이 그랜드급 이상 마신을 볼 때의 반응과 같은 계열로 정리했다.
  - 아레프는 이 기술을 통해 네리네조차 추적하지 못하는 경로로 마법사령에 간섭할 수 있다고 주장한다.
- 미확정:
  - 클라인의 항아리의 정확한 차원 구조.
  - 네리네의 추적 체계를 우회하는 구체 원리.
  - 시에라가 이 기술을 이후 해석하거나 배울 수 있는지.

## 2026-05-04 - 아레프와 시에라 첫만남 보강

- 작업: 이번 세션에서 확장된 아레프/시데이아와 시에라의 첫만남, 시에라의 불신 논리, 마법·유계·진체 해석, 미료카네온 비교, 제자화 이유를 위키에 정리.
- 변경 페이지:
  - `wiki/events/아레프와 시에라의 첫만남.md`
  - `wiki/sources/current-session-aref-sierra-additions.md`
  - `wiki/syntheses/aref-sierra-hidden-town-arc.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/sydeia.md`
  - `wiki/index.md`
  - `wiki/events/소설 개별 사건 인덱스.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 시에라는 아레프의 능력은 인정하지만, 이계의 여왕이 단신으로 왔다는 점이 설명되지 않아 이계인 주장은 끝내 믿지 않는다.
  - 아레프의 증거는 리미나리스 심층부 지식, 고위 차원 관측, 환영술로 설명 가능하다고 시에라는 판단한다.
  - 아레프는 마법을 유계 영체 포획·교체 시스템이자 강령술의 극의로 해석하고, 시에라의 진체를 전 차원의 마녀 지도자 집합체로 본다.
  - 아이카는 전 우주의 차원술사 유체 집합체이자 차원 포식 괴조와 연결된 존재로 아레프에게 해석된다.
  - 시에라가 아레프를 제자로 받아들인 이유는 신뢰가 아니라 관리와 관찰이다.
- 미확정:
  - 아레프가 본 시에라의 진체와 죽은 여제의 흔적이 실제인지.
  - 미료카네온의 과거 주장이 망상인지, 외부 우주 진실의 파편인지.
  - 아이카와 차원 포식 괴조의 동일성이 정본으로 확정되는지.

## 2026-05-05 - 아라드노아의 행적과 노리어 분기 정리

- 작업: `F:\DOWN\네리네 일대기\아라드노아의 소실.txt`와 현 대화에서 추가된 설정을 바탕으로 아라드노아 분체, 이즈카타 결투 소실, 노리어, 엑시즈 디바이너, 스자스 루트 분기를 위키에 반영.
- 변경 페이지:
  - `wiki/sources/aradnoa-disappearance.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/nesta-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/entities/izkata.md`
  - `wiki/entities/emukare-mukere.md`
  - `wiki/entities/eridina-rinasita.md`
  - `wiki/entities/wimea-haran.md`
  - `wiki/entities/naksha.md`
  - `wiki/concepts/노리어.md`
  - `wiki/concepts/엑시즈 디바이너.md`
  - `wiki/concepts/만화경 보석검.md`
  - `wiki/events/아라드노아의 소실.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/events/소설 개별 사건 인덱스.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 아라드노아는 시에라가 리미나리스 방계 마술교사의 육체를 운용한 분체로 정리했다.
  - 아라드노아의 교사·대학·연구소·스테리 행적은 불우한 천재의 공적 이력이지만, 실제로는 시에라의 위장과 노리어 설계 과정이다.
  - 노리어는 에뮤카레 뮤케레와 에리디나 리나시타의 에텔을 연료로 쓰는 정보의 마신이며, 아라드노아가 엑시즈 디바이너 노심이 된다.
  - 아라드노아의 소실은 이즈카타와의 결투를 이용한 공개적 죽음 위장이다. 보석검은 승리용이 아니라 도주와 사망 증거용으로 정리했다.
  - 네리네 시해는 공통 사건이 아니라 스자스 루트 분기로 정리했다. 스자스나 다른 시조가 먼저 움직이면 네리네는 경계심을 강화해 당하지 않는다.
- 미확정:
  - 이즈카타전의 세부 전투 순서와 소실 트릭의 최종 연출.
  - 리미나리스가 아라드노아를 나크샤 화신으로 믿는 신화가 후대 정치에 미치는 범위.
  - 노리어 완성 후 스자스 루트와 비스자스 루트의 정확한 연표.
  - `raw/` 원문 사본 저장은 현재 권한 문제로 실패해, 외부 원문 경로와 소스 요약 문서로 연결했다.

## 2026-05-05 - 아라드노아 연구소 위상 보정

- 작업: 아라드노아가 리미나리스 연구소에 있을 때의 위상을 “가주 후보급 신화”가 아니라 “떠오르는 샛별 연구자이자 아레프 라인 인물”로 낮춰 정리.
- 변경 페이지:
  - `wiki/sources/aradnoa-disappearance.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/naksha.md`
  - `wiki/events/아라드노아의 소실.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
- 핵심 정리:
  - 아라드노아 신화는 소실 이후 사후 해석이며, 연구소 시절의 평판과 분리된다.
  - 연구소 단계의 아라드노아는 흔한 “떠오르는 샛별”이며 추후 중역까지 오를 가능성이 높은 정도다.
  - 귀족 사회에서는 이미 진보파 리더 아레프의 인물로 공유되어 있었기 때문에, 정치적 한계도 함께 정해져 있었다.

## 2026-05-05 - 네리네 선택 이후 아라드노아 정치 위상 보정

- 작업: 네리네에게 선택되어 돌아온 뒤 아라드노아가 연구소 샛별에서 리미나리스 가주 후보급 권력투쟁 인물로 격상되는 전환을 반영.
- 변경 페이지:
  - `wiki/sources/aradnoa-disappearance.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/events/아라드노아의 소실.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
- 핵심 정리:
  - 아라드노아의 연구소 시절 정치적 천장은 여전히 유지된다. 그녀는 아레프 라인의 떠오르는 샛별이므로 중역 이상으로 올라가기 어렵다.
  - 네리네가 아라드노아를 선택해 시즈리나이에게 맡기면서 이 천장이 깨진다. 네리네의 권위가 얹힌 순간 아라드노아는 리미나리스 가주 후보로 보이기 시작한다.
  - 시즈리나이는 미래의 라이벌을 자기 손으로 키워야 하는 처지가 되고, 이브리사스·리체트리사와 레오나 하웨이·사이제라 미·크로니카 크리엘라 등 내부·동맹 세력이 아라드노아를 주목한다.
  - 연구소는 STEM 계열이라 정치 중심지와 거리가 있지만, 가주 후보가 된 아라드노아는 리미나리스 의회가 통제하기 어려운 새 권력다툼의 주인공 중 하나가 된다.

## 2026-05-05 - 시즈리나이의 아라드노아 열등감과 책임감 보정

- 작업: 아라드노아가 자신보다 우수하다는 사실을 가장 먼저 알아본 사람이 시즈리나이라는 설정을 반영.
- 변경 페이지:
  - `wiki/sources/aradnoa-disappearance.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/events/아라드노아의 소실.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-character-catalog.md`
- 핵심 정리:
  - 시즈리나이는 스승 네리네의 명령 때문에 아라드노아를 데려왔지만, 아라드노아가 자신보다 우수하다는 사실을 가장 먼저 파악한다.
  - 시즈리나이는 스스로도 아라드노아가 더 가주에 어울린다고 인정해버려 매일 울 것처럼 힘들어한다.
  - 그럼에도 리미나리스를 움직이는 것은 자신이어야 한다고 믿기 때문에, 아라드노아를 키우면서도 가문 운영권을 지키는 힘든 정치전을 시작한다.

## 2026-05-05 - 제라애의 리나리로라 찬탈 자료와 이즈카타 증오 근거 반영

- 작업: `F:\DOWN\네리네 일대기\제라애의 리나리로라 찬탈.txt`를 참고해 리미나리스가 이즈카타를 증오하면서도 두려워하는 감정 근거를 위키에 반영.
- 변경 페이지:
  - `wiki/sources/jerae-linarirora-usurpation.md`
  - `wiki/entities/izkata.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/events/리미나리스 계승전.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/index.md`
- 핵심 정리:
  - 이즈카타 휴리 6는 완성형 차원 방랑자이며, 리미나리스의 결계와 차원술 방어를 무시하고 침투할 수 있다.
  - 제라애의 찬탈 자료에서 이즈카타는 리나리로라 납치, 방어 결계 코드 확보, 리미나리스의 군사적 자존심 파괴를 맡는 물리적 조커다.
  - 리미나리스의 이즈카타 증오는 순수한 분노가 아니라, 차원 절단 마법이 보랏빛 포말 앞에서 무효화된 집단적 트라우마와 결합되어 있다.
  - 리나리로라 계보와 사건 전체의 정본 적용은 기존 계승전 설정과 충돌 가능성이 있어 보류하고, 우선 이즈카타에 대한 증오/공포 근거로 부분 적용한다.

## 2026-05-05 - 열리지 않는 빈 스텁과 링크 오인 문제 점검

- 작업: 일부 문서가 열리지 않거나 빈 문서처럼 보이는 문제를 점검하고, 빈 스텁을 안내 문서로 전환.
- 변경 페이지:
  - `wiki/log.md`
  - `wiki/events/2026-04-28.md`
  - `wiki/events/entities/meibell-nast.md`
  - `wiki/events/events/e00-01.md`
  - `wiki/events/events/e00-02.md`
  - `wiki/events/events/e01-03.md`
  - `wiki/events/events/e04-03.md`
  - `wiki/events/events/e07-04.md`
  - `wiki/events/events/e09-04.md`
  - `wiki/events/events/e11-01.md`
  - `wiki/events/syntheses/novel-event-detailed-chronology.md`
  - `wiki/위치 퀸덤 위키/환영합니다!.md`
- 핵심 정리:
  - `events/events/...`, `events/entities/...`, `events/syntheses/...` 아래에 frontmatter만 있는 빈 스텁 9개와 날짜 스텁 1개가 있었다.
  - 삭제하지 않고 실제 문서로 안내하는 리다이렉트성 스텁으로 바꿨다.
  - 로그의 `## [2026-04-28]` 같은 제목은 Obsidian에서 날짜 링크로 오인될 수 있어 일반 제목 형식으로 고쳤다.
  - 코드/이미지 링크를 제외한 위키 링크 검사 기준으로 깨진 내부 문서 링크가 남지 않도록 정리했다.

## 2026-05-05 - 아라드노아의 리미나리스 차원술 격차 축소 보정

- 작업: 아라드노아가 본체의 그랜드 파워급 연산력을 이용해 리미나리스 차원술 당면 과제를 해결하고, 그 공을 시즈리나이에게 돌린 설정을 반영.
- 변경 페이지:
  - `wiki/sources/aradnoa-disappearance.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/events/아라드노아의 소실.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
- 핵심 정리:
  - 시에라는 아라드노아 껍데기를 버릴 생각이었지만, 몇 년간 차원술사로 활동하며 얻은 현지 지식이 사라지는 것이 아까워 리미나리스에 풀어놓는다.
  - 아라드노아는 시에라 본체의 그랜드 파워급 연산력을 적당히 활용해 리미나리스의 당면 차원술 과제들을 해결한다.
  - 그 결과 휴리와의 차원술 격차가 15년 차에서 5년 차까지 줄어든다.
  - 아라드노아는 모든 공을 시즈리나이에게 돌리지만, 주변에서는 이를 처세와 겸손으로 읽어 아라드노아를 더 고평가한다.

## 2026-05-11 - 사건 일러스트 재배치와 비정본/중복 정리

- 작업: 생성 이미지 중 장면 컷을 `개별 사건 문서` 기준으로 재배치하고, 인물/정본 문서와 카탈로그 문서에서 중복 노출을 줄였다.
- 변경 페이지:
  - `wiki/entities/meibell-nast.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/concepts/캐릭터 시각 정본.md`
  - `wiki/events/메이벨과 디마리 전투, 아이카 탈출 사건.md`
  - `wiki/events/크로니카의 흡혈 마신 문서 연구.md`
  - `wiki/events/흡혈귀 단속 임명.md`
  - `wiki/events/식물성 피 열매 하사.md`
  - `wiki/events/크로니카의 마법사령 정착과 흡혈귀 단속 사건.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/log.md`
- 핵심 정리:
  - 메이벨, 디마리, 크로니카 인물 문서에서는 초상/정본 컷만 남기고 사건용 장면 컷은 걷어냈다.
  - 디마리 문서에 노출돼 있던 비정본 `목장 디마리` 계열 이미지는 본문 표면에서 제거하고 소스 카탈로그에만 남겼다.
  - 장면 컷은 `메이벨의 난입과 디마리 전투`, `크로니카의 목격과 방조`, `크로니카의 흡혈 마신 문서 연구`, `흡혈귀 단속 임명`, `식물성 피 열매 하사`, `황금 수해 포도밭과 흡혈귀 노동` 같은 세부 사건 문서에만 남기도록 정리했다.
  - `novel-event-catalog.md`, `novel-setting-catalog.md`, `캐릭터 시각 정본.md`에서는 같은 장면 컷을 다시 보여주지 않도록 중복 배치를 줄였다.

## 2026-05-11 - 아세로리온 세션 생성 이미지 위치 회수

- 작업: 이전에 못 찾았다고 기록한 아세로리온 생성 이미지를 `P:\AI\Codex\generated_images`에서 찾아 위키 자산으로 복사하고, 인물/정본/소스 문서에 반영.
- 변경 페이지:
  - `AGENTS.md`
  - `wiki/sources/acerorion-image-reference-and-session-check.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/concepts/캐릭터 시각 정본.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 추가 자산:
  - `wiki/assets/images/codex-generated/session-019ddf78-acerorion/`
- 핵심 정리:
  - 실제 생성 원본은 `P:\AI\Codex\generated_images\019ddf78-2c3a-78a2-8e96-2632753633ce` 아래에 있었다.
  - 2026-05-08 생성 이미지 27장을 위키 자산 폴더로 복사하고 `manifest.json`을 만들었다.
  - 아세로리온 정본 후보는 붉은 드레스와 금발, 마녀 귀족 사회의 가주 이미지가 강한 컷으로 선별했다.
  - 남성 귀족/마법사처럼 보이는 초기 컷과 과하게 기울어진 침실 컷은 정본이 아니라 주의/보류 컷으로 분리했다.
  - 앞으로 Codex 생성 이미지 탐색은 `P:\AI\Codex\generated_images`를 최우선 경로로 삼도록 프로젝트 지시 파일에 남겼다.

## 2026-05-11 - 크로니카 캐릭터 시트와 분체 보강

- 작업: 이번 대화에서 추가된 크로니카의 분체/스왑 인지 한계, 검은 새 분체, 소심한 실무형 매력을 위키 소스로 고정하고 캐릭터 시트로 정리.
- 변경 페이지:
  - `wiki/sources/current-session-chronica-split-body-additions.md`
  - `wiki/sources/chronica-session-source-map.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/syntheses/chronica-criella-character-sheet.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 크로니카는 `마법`에 접속한 마신이지만 레서 본체이고 교육도 없어, 더 강한 분체나 복수 분체 운용 가능성을 스스로 자각하지 못하는 쪽으로 정리했다.
  - 분체는 본체를 약화시키는 구조이며, `스왑`은 분체가 본체가 되는 것이 아니라 잠든 본체의 존재를 분체 위에 덮어씌우는 운용으로 요약했다.
  - 시에라와 스자스만이 이 체계를 능동적으로 실전 운용하는 예외라는 현재 해석을 소스에 기록했다.
  - 크로니카는 전략적으로 분체를 굴리는 인물이 아니라, 기껏해야 작은 검은 새 같은 분체를 만들어 귀여워하는 쪽이 더 잘 맞는다고 정리했다.
  - 새 캐릭터 시트에는 외형, 성격, 욕망, 공포, 능력, 한계, 관계, 말투, 소도구, 작법 금지 포인트를 한 장에 묶었다.

## 2026-05-20 - 크로니카 흡혈귀 관리, 혈핵 우회, 진체 보강

- 작업: 이번 대화에서 추가된 크로니카의 연구형 영주 위상, 흡혈귀 관리 범위, 마신-흡혈귀 비대칭, 혈핵 집중 연결, 카마소 카밀라 재승천, 검은 잎 진체 연출을 위키 소스와 인물 문서에 반영.
- 변경 페이지:
  - `wiki/sources/current-session-chronica-vampire-management-additions.md`
  - `wiki/sources/chronica-session-source-map.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 크로니카는 정치형 영주보다 연구형 영주에 가깝고, 주변 경쟁자가 적어 위험한 기술 개발에 더 오래 몰두할 수 있었다.
  - 크로니카는 일반 흡혈귀들을 마음만 먹으면 하루 만에 정리할 수 있지만, 보통은 완화와 격리, 보급 같은 관리 체계를 택한다.
  - 크로니카가 흡혈귀 현상을 과소평가한 이유는 자신이 마신이라 흡혈귀화를 진체가 자동 복구해버렸기 때문이며, 뮤베일 역시 그 구조 때문에 흡혈귀가 되지 않는다.
  - 흡혈귀화는 마신 승천 가능성을 크게 떨어뜨리는 퇴행으로 정리했고, 스자스와 라로카가 혈핵만 진체에 연결하는 우회술로 그 한계를 깨고 카마소 카밀라를 새로운 얼티밋급 마신으로 재구축했다는 보강을 추가했다.
  - 나크샤의 강제 흡혈 사건, 메이벨이 가세한 황금 수해 탈주, 크로니카의 검은 잎 나무 진체와 발밑 검은 뿌리 연출을 크로니카 축 서사에 묶었다.

## 2026-05-28 - 뮤케레·리나시타 외전과 상위 개념 위키 반영

- 작업: `뮤케레와 리나시타 .md` 외전 묶음과 현 세션에서 정리한 72 대마신·초절자·승천자 초안을 실제 위키 문서로 승격했다.
- 변경 페이지:
  - `wiki/sources/mukere-rinasita-side-stories.md`
  - `wiki/sources/current-session-high-concept-drafts.md`
  - `wiki/syntheses/mukere-rinasita-and-miriokarion.md`
  - `wiki/entities/emukare-mukere.md`
  - `wiki/entities/eridina-rinasita.md`
  - `wiki/entities/miriokarion.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/concepts/노리어.md`
  - `wiki/concepts/유계와 진체 기억 장막.md`
  - `wiki/concepts/영면과 검은 개 진체.md`
  - `wiki/concepts/의도된 오답.md`
  - `wiki/concepts/72-대마신.md`
  - `wiki/concepts/초절자.md`
  - `wiki/concepts/승천자.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
- 핵심 정리:
  - 뮤케레와 리나시타는 1차 마법전쟁에서 죽고 유계에서 먼저 깨어난 초기 제자/시조급 존재로 정리했다.
  - 두 사람의 반복 부활 실패가 현세에 녹색·붉은색 에텔을 퍼뜨리고, 노리어의 에너지 기반으로 이어진다는 구조를 반영했다.
  - 유계에서 얻은 기억은 현세의 마녀 자아에 연결되지 않는 정보 방화벽으로 정리했다.
  - 미료카리온은 거의 정확한 우주론을 파악했지만, 뮤케레와 리나시타의 의도된 오답 덕분에 네리네의 감시망에서 살아남은 학자로 문서화했다.
  - 시에라의 상아탑 진체와 미료카리온의 마지막 감사, 스자스의 검은 개 진체와 영면 구조를 새 개념으로 분리했다.
  - 노리어는 분산형 네트워크, 휘/쿠이라 노드, 네트워크 피 토큰, 아라드노아 킬 스위치, 트레저리 생체 백업 우선순위를 포함하도록 보강했다.
  - 72 대마신, 초절자, 승천자는 각각 여왕령 최고위 대마신 체계, 마법사령의 역사적 방어 예비 전력, 마법사 공석 즉시 승급 대기열로 정리했다.
- 검삭 필요:
  - 뮤케레와 리나시타 각각의 에텔 색상 대응.
  - 부활 후 두 사람이 시에라 곁에서 지내는 장면의 정본/IF 여부.
  - 노리어 네트워크 피 토큰과 두 마신의 에텔이 같은 자원인지, 층위가 다른 자원인지.
  - 초절자 400명, 승천자 1000명, 72 대마신 숫자의 정본성.

## 2026-05-28 - 영면 시작 단계 보정

- 작업: 현재 대화에서 추가된 영면 규칙을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-eternal-sleep-correction.md`
  - `wiki/concepts/영면과 검은 개 진체.md`
  - `wiki/concepts/유계와 진체 기억 장막.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 영면은 완전한 끝만이 아니라 시작, 진행, 완전 이행의 단계가 있는 현상으로 보정했다.
  - 영면을 시작한 마신은 유계에서 의식이 깨어나 현세를 내려다볼 수 있다.
  - 유계 의식과 현세의 마녀 의식은 직접 이어지지 않는다.
  - 현세의 마녀에게는 유계 기억이 아니라 삶이 꿈 같은 비현실감, 현실감 상실, 강렬하고 나른한 휴식 유혹으로 나타난다.

## 2026-05-28 - 승천자 제도 보정

- 작업: 현재 대화에서 추가된 승천자 제도 보정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-ascendant-correction.md`
  - `wiki/concepts/승천자.md`
  - `wiki/sources/current-session-high-concept-drafts.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 승천자는 본래 1000명 단위까지 쌓이는 대기열이 아니다.
  - 본래 설계는 자동화된 마법사 자리뺏기 경쟁이며, 마법사 자리도 필요하면 늘릴 수 있다.
  - 마법사령이 커지며 마법사가 지방 지도자급이 되고 서로 만날 일이 줄어 교체 빈도가 낮아졌다.
  - 승천자 지위만으로도 마법사급 사회적 예우를 받지만 마법사의 책임은 지지 않는다.
  - 지방 지배 가문이 직접 마법사 좌석을 갖는 편이 지원망 운용에 효율적이므로, 경쟁은 본래 설계보다 덜 치열해졌다.

## 2026-05-28 - 마법사 좌석 배분 보정

- 작업: 현재 대화에서 추가된 마법사 좌석 배분을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-mage-seat-distribution.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/concepts/승천자.md`
  - `wiki/entities/searup-seirite.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 보통 마법사 자리는 14석으로 이해된다.
  - 네리네 네에나리, 이즐레아 이즈쥴, 세이첼 세아루프 세이리테의 세 시조 좌석은 거의 고정이다.
  - 휴리, 리미나리스, 사도우, 브쥴은 한 자리씩 나눠먹는다.
  - 남은 7석이 사실상 순환하는 마법사 자리다.
  - 승천자 경쟁은 실질적으로 이 7개 순환석과 주요 세력 내부 교체 문제에 집중된다.

## 2026-05-28 - 순환석과 시드석 보정

- 작업: 현재 대화에서 추가된 순환 7석의 출신 계보와 지역 할당석의 시드 성격을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-mage-seat-distribution.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/concepts/승천자.md`
  - `wiki/concepts/초절자.md`
  - `wiki/entities/izlea-izzul.md`
  - `wiki/entities/searup-seirite.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 대부분의 7개 순환 마법사는 이즐레아 이즈쥴과 세이첼 세아루프 세이리테의 제자들에게서 나왔다.
  - 마법사가 되려면 마법 시스템이 마술 발전에 업적을 남겼다고 인정해야 한다.
  - 휴리, 리미나리스, 사도우, 브쥴의 좌석은 가문과 지역 자원을 몰아받는 할당석이며, 나라급 지역에 대한 도전으로 취급되어 사실상 시드급이다.
  - 이즈쥴과 세이리테의 제자들은 빠르게 마법사가 되고 빠르게 초절자로 은퇴하는 순환 경로를 만든다.

## 2026-05-28 - 차원술사 귀족의 마법사 경쟁 회피 보정

- 작업: 현재 대화에서 추가된 리미나리스 차원술사 귀족의 폐쇄성과 마법사 경쟁 회피 동기를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-mage-seat-distribution.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/concepts/승천자.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/syntheses/aref-sierra-hidden-town-arc.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 차원술사 귀족들은 마법사 경쟁에 참여하면 성공 확률이 높지만, 비전과 성과를 공공에 공유하기보다 리미나리스 내부에 독점하려 한다.
  - 그들 대부분이 모인 리미나리스는 이미 네리네의 직계 지배령이므로, 마법사 승급은 최고 권력 획득보다 네리네 아래 지사장급 승급처럼 보인다.
  - 귀족들은 네리네를 직접 상대하기보다 신하 질서와 내부 자치권에 익숙하며, 이 선택은 리미나리스의 나라 안의 나라 욕망을 설명한다.
  - 아레프는 이 폐쇄 귀족 사회의 진보파 수장으로서, 내부 비전 독점 구조를 바깥 기술과 차원 관측으로 흔드는 예외 변수다.

## 2026-05-28 - 리미나리스 직통 핫라인과 법령 구조 보정

- 작업: 현재 대화에서 추가된 네리네-리미나리스 귀족 직통 핫라인, 법령상 보고 의무, 모두가 아는 정치 연극 구조를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-hotline.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/events/네리네의 리미나리스 통제극.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네는 차원술사 귀족들과 직통 핫라인을 연결해 리미나리스 가주의 이상행동을 보고받는다.
  - 리미나리스 측도 이 라인의 존재를 알고 있지만, 묻거나 공개적으로 따지는 것은 금지되어 있다.
  - 차원술사 귀족은 보통 가주의 뜻을 따르지만, 마법사령 전체에 해가 되는 일이라면 대마법사에게 직접 보고할 수 있도록 교육받는다.
  - 이 직접 보고권은 리미나리스 귀족 특권이 아니라 마법사령 법령의 기본이다.
  - 여왕령 출신 귀족들은 이 구조를 리미나리스 지방 군주와 네리네 황제의 위계처럼 이해하지만, 실제 마법사령은 신분제가 아니다.

## 2026-05-28 - 휴리 혈족과 마법사령 프로젝트 집단 보정

- 작업: 현재 대화에서 추가된 휴리 혈족의 기원, 공통 외형/에텔, 리미나리스 견제 역할, 프로젝트·군사·학술 집단 성격, 자율 보장과 네리네의 감시를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-bloodline.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리는 네리네가 직접 만든 두 번째 차원술사 혈족이다.
  - 휴리는 은발, 푸른 눈, 높은 백색 에텔 적성을 공통으로 지닌다.
  - 휴리는 마법사령의 가장 강력한 군대이자 학술 집단이며, 주요 프로젝트 대부분을 수행하는 계획 종족/서번트 종족이다.
  - 리미나리스가 거의 자치령처럼 방치되는 것과 달리, 휴리는 네리네에게 지속적으로 의뢰와 명령을 받는다.
  - 휴리는 차원술사 귀족이 헛된 꿈을 꾸지 못하게 하는 가장 강력한 억제력이다.
  - 휴리의 가주회의와 가주의 거취는 대마법사도 침범할 수 없는 절대 보장 영역이지만, 네리네는 비공식 수단으로 정보를 훔쳐보려 한다.

## 2026-05-28 - 휴리 순혈 지배층과 리미나리스 인재 배치 차이 보정

- 작업: 현재 대화에서 추가된 휴리의 혼혈 지향, 네리네의 새 순수 휴리 고위층 투입, 리미나리스와 휴리의 인재 배치 차이, 끄나풀 충성의 역설을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-bloodline.md`
  - `wiki/concepts/휴리.md`
  - `wiki/entities/nerine.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리들은 자기들의 공통 형질을 단조롭게 여겨 다양한 혼혈을 추구한다.
  - 네리네는 때가 되면 출처가 불명확한 새로운 순수 휴리를 고위층에 투입해 휴리 지배층을 순수 휴리로 유지한다.
  - 리미나리스에는 유망 인재를 교육해 내려보내도 현지 실력으로 자리 잡게 하지만, 휴리에는 쓰임이 정해진 인재를 직접 꽂아 넣는다.
  - 휴리의 새 인재는 처음에는 네리네에게 충성하지만 시간이 지나면 휴리 사회에 동화되어 휴리를 우선한다.
  - 반대로 리미나리스에 보낸 네리네의 끄나풀은 별 도움을 받지 못하는데도 네리네에게 충성하는 역설이 있다.

## 2026-05-28 - 이레니아 휴리 34의 차기 가주 후보 지시 보정

- 작업: 현재 대화에서 추가된 이레니아 휴리 34의 마법사 후보·차기 가주 후보 지정, 현 휴리 가주 제라애의 견제, 시즈리나이 리미나리스와의 후보성 대비를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-bloodline.md`
  - `wiki/concepts/휴리.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 이레니아 휴리 34는 "마법사 후보로 키우고 차기 가주 후보로 지정하라"는 강한 지시와 함께 휴리에 내려온다.
  - 현 휴리 가주 제라애는 이레니아를 강하게 경계하지만, 후보 지명이 곧 승계 강제는 아니므로 이레니아를 가주로 만들 생각이 없다.
  - 이레니아가 실제 가주가 되는지는 그녀 자신의 능력과 휴리 내부 정치에 달려 있다.
  - 시즈리나이 리미나리스도 가주 후보로 보내졌지만, 리미나리스에 내려가는 네리네의 인사는 모두 가주 후보 취급을 받으므로 후보성 자체가 큰 주목을 받지는 않는다.

## 2026-05-28 - 제라애와 시에라 공모 흔적 및 회의록 보정

- 작업: 현재 대화에서 추가된 제라애가 이레니아를 경계하는 실제 이유, 곧 시에라 세라시에와의 네리네 반역 공모 흔적, 휴리 가주회의 회의록, 부재 정보 접근 위험을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-jerae-sierra-conspiracy.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/nerine.md`
  - `wiki/concepts/휴리.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 제라애가 이레니아를 경계하는 진짜 이유는, 후속 보정 기준으로 이레니아가 표면 가주 후보 권한과 기록 추적을 통해 회의록의 흔적과 부재 정보에 접근하면 시에라 세라시에와의 반역 공모 흔적을 파고들 수 있기 때문이다.
  - 회의록에는 이레니아를 어떻게 탈 없이 내칠지에 관한 기록이 가득하며, 이레니아가 직접 보면 충격으로 앓아누울 정도의 내용이다.
  - 회의록 자체에는 네리네에 대한 직접 반역 문구가 없다.
  - 그러나 제라애의 부재 정보와 행적 공백을 추적하면 시에라 세라시에에게 접근할 수 있다.
  - 이레니아의 가주 후보 지위는 단순 승계 경쟁이 아니라, 제라애의 방첩 약점을 건드리는 위험한 기록 추적 문제다.

## 2026-05-28 - 네리네 사망 시 회의록 폐기와 이레니아 수용 보정

- 작업: 현재 대화에서 추가된 네리네 사망 분기 조건을 제라애, 이레니아, 휴리 가주회의 회의록 설정에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-jerae-sierra-conspiracy.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/concepts/휴리.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네가 살아 있는 동안 휴리 가주회의 회의록은 제라애의 방첩 약점이다.
  - 네리네가 사망한 분기에서는 제라애가 자기 권한으로 회의록을 폐기하고, 해당 시기의 기록은 관리 소홀로 사라졌다고 처리할 수 있다.
  - 눈치를 줄 상위권자가 사라졌기 때문에 기록 폐기를 제지할 권위도 사라진다.
  - 이 조건에서는 이레니아가 제라애의 치명적 증거 접근자가 아니게 되며, 역설적으로 휴리의 일원으로 수용될 수 있다.

## 2026-05-28 - 스이카와 카나데라 휴리 집행 라인 보정

- 작업: 현재 대화에서 추가된 제라애 휘하 휴리 실권자 스이카 휴리와 카나데라 휴리를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-executors.md`
  - `wiki/entities/suika-hyuri.md`
  - `wiki/entities/kanadera-hyuri.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 스이카 휴리와 카나데라 휴리는 제라애의 명을 받드는 휴리 실권자들이다.
  - 스이카는 이레니아를 겉으로 웃으며 대해주지만, 언젠가 제거해야 한다는 사실에 가슴아파한다.
  - 스이카는 결국 제라애의 명을 실행한다.
  - 카나데라는 직접 실행 명령을 받았으나 이레니아가 껄끄러워 피해다닌다.
  - 카나데라는 마지막에 크게 망설이다가 이레니아에게 고백하고 도망치게 한다.

## 2026-05-28 - 나마애 휴리와 명령 지연 보정

- 작업: 현재 대화에서 추가된 제라애의 친딸 나마애 휴리, 이레니아의 오해, 스이카의 집행 명령 지연 설정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-namaae-hyuri.md`
  - `wiki/entities/namaae-hyuri.md`
  - `wiki/sources/current-session-hyuri-executors.md`
  - `wiki/entities/suika-hyuri.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 나마애 휴리는 제라애 휴리의 친딸이다.
  - 나마애는 제라애의 딸이지만 가주 후보로 고려되지는 않는다.
  - 이레니아는 나마애 때문에 제라애가 자신을 인정하지 않는다고 오해한다.
  - 나마애는 이레니아 제거를 부당하다고 여기며, 제라애의 친딸이라는 지위를 이용해 스이카의 명령 실행을 계속 지연시킨다.
  - 이 지연을 통해 나마애는 이레니아를 구한다.

## 2026-05-28 - 제라애 사후/실종 트리거 암살 지시 보정

- 작업: 현재 대화에서 추가된 제라애의 사후/실종 대비 즉시 암살 지시를 소스와 개념 문서로 분리하고 관련 휴리 문서에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-jerae-deadman-order.md`
  - `wiki/concepts/제라애의 사후 암살 지시.md`
  - `wiki/sources/current-session-hyuri-executors.md`
  - `wiki/sources/current-session-namaae-hyuri.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/namaae-hyuri.md`
  - `wiki/entities/suika-hyuri.md`
  - `wiki/entities/kanadera-hyuri.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 제라애는 자신이 죽거나 사라질 경우를 대비해 즉시 암살 지시를 미리 내려놓았다.
  - 지시의 목적은 이레니아가 가주 후보가 되는 것을 막는 것이다.
  - 제라애의 부재는 이레니아에게 해방이 아니라 새 암살 트리거가 된다.
  - 나마애의 명령 지연이 살아 있는 제라애의 명령에는 통할 수 있지만, 사후/실종 트리거 지시까지 막을 수 있는지는 미확정으로 남겼다.

## 2026-05-28 - 이즈카타 휴리 6 진짜 후계자 보정

- 작업: 현재 대화에서 추가된 이즈카타 휴리 6의 극비 후계자 설정, 차원 방랑자 복원계획, 네리네의 차원 닻 대비, 죽음의 계곡 휴리 비밀 차원 연구소를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-izkata-true-heir.md`
  - `wiki/entities/izkata.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/nerine.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/차원 방랑자 복원계획.md`
  - `wiki/concepts/차원 닻.md`
  - `wiki/concepts/죽음의 계곡 휴리 비밀 차원 연구소.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/concepts/제라애의 사후 암살 지시.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 이즈카타 휴리 6은 제라애가 정말로 가주로 만들려는 자다.
  - 이즈카타는 차원 방랑자 복원계획의 성공례다.
  - 이즈카타의 존재는 휴리 가주회의 참가자와 죽음의 계곡 비밀 차원 연구소 외에는 모르는 극비다.
  - 네리네는 이즈카타의 존재를 알고 있으며, 거역에 대비해 차원 닻을 만들어두었다.
  - 이레니아는 네리네가 알려주지 않았기 때문에 이즈카타의 존재를 모른다.
  - 기존 회의록/시에라 공모 흔적은 방첩상의 공포로 유지하고, 제라애가 이레니아를 인정하지 않는 진짜 계승 사유는 이즈카타로 상위 보정했다.

## 2026-05-28 - 이레니아 축출 계획의 즉시 제거 격상 보정

- 작업: 현재 대화에서 추가된 "이즈카타가 있기에 제라애가 가주회의에서 이레니아 축출 계획을 모조리 말했고, 이후 부재기록 위험을 깨달아 즉시 제거로 격상했다"는 설정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-irenia-elimination-escalation.md`
  - `wiki/concepts/제라애의 이레니아 제거 명령.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/namaae-hyuri.md`
  - `wiki/entities/suika-hyuri.md`
  - `wiki/entities/kanadera-hyuri.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/concepts/제라애의 사후 암살 지시.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 이즈카타 휴리 6이 있기 때문에 제라애는 이레니아를 내칠 계획을 가주회의에서 노골적으로 말했다.
  - 이후 점검에서 이레니아가 회의록 내용보다 수많은 제라애의 부재기록을 캐물을 위험이 높다는 사실을 깨닫는다.
  - 이 때문에 판단은 단순 축출이 아니라 즉시 제거 명령으로 격상된다.
  - 스이카와 카나데라는 이즈카타가 진짜 가주 후보라 해도 즉시 제거는 심한 것 아닌가 생각하지만, 제라애와 시에라의 관계를 몰라 진짜 방첩 이유는 알지 못한다.

## 2026-05-28 - 휴리 가주회의 이너서클 보정

- 작업: 현재 대화에서 추가된 휴리 가주회의의 참가 자격, 표면 행정부와의 분리, 네리네 계열 인재 배제 설정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-family-council-inner-circle.md`
  - `wiki/concepts/휴리 가주회의.md`
  - `wiki/concepts/휴리 가주회의 회의록.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/차원 방랑자 복원계획.md`
  - `wiki/concepts/제라애의 이레니아 제거 명령.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/izkata.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리 가주회의는 표면 행정부와 다른 이너서클이며, 실제 의사는 이곳에서 결정된다.
  - 네리네로부터 내려온 자들은 가주회의에 참여하지 못하고, 존재 자체도 모른다.
  - 참가자는 초대 디마리 휴리 시절부터 이어져 온 집안과 네리네와 무관한 휴리 중에서 선택된다.
  - 이레니아는 원칙적으로 가주회의에 접근하지 못하지만, 표면 가주 후보/행정 권한을 통해 회의록과 부재기록의 흔적을 캐낼 수 있어 제라애에게 위험하다.

## 2026-05-28 - 리미나리스 가주회의와 귀족 의회 보정

- 작업: 현재 대화에서 추가된 리미나리스 가주회의의 밥상머리 회의 성격과, 귀족 의회가 중대 사안을 결정한다는 설정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-family-council-parliament.md`
  - `wiki/concepts/리미나리스 가주회의.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/sources/current-session-liminaris-hotline.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/entities/sizurinai-liminaris.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스 가주회의는 휴리 가주회의와 달리 실질 의사결정 이너서클이 아니라 밥상머리 집안 회의다.
  - 진짜 중요한 일은 귀족들이 참여하는 리미나리스 의회에서 결정된다.
  - 가주의 의향은 절대적이지만, 귀족 전체가 반대하는 일까지 실행하지는 못한다.
  - 귀족들의 반대와 파벌 다툼은 가주를 제약하는 동시에, 실패 시 가주가 단독 책임을 지지 않게 하는 책임 분산 장치다.

## 2026-05-28 - 리미나리스 의회 기원과 동족 공작 금지 불문율 보정

- 작업: 현재 대화에서 추가된 리미나리스 의회의 성립 배경, 차원술사 귀족의 폭력 정치 반성, 동족 대상 공작·암살 금지 불문율을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-parliament-origin.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/차원술사 동족 공작 금지 불문율.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스 의회는 차원술사 귀족들이 과거 음모·공작·암살 때문에 외부 위기에 통합 대응하지 못한 일을 반성해 만든 기구다.
  - 다수결과 토론은 이상주의가 아니라, 차원술사 귀족 사회가 다시 통합 불능 상태에 빠지지 않기 위한 생존 장치다.
  - 일부 차원술사 귀족은 여전히 공작과 암살을 좋아하지만, 같은 차원술사 귀족을 상대로는 하지 않는 불문율이 있다.
  - 이 불문율은 리미나리스 의회가 폭력 정치로 되돌아가지 않기 위한 최소한의 자기 통제 규범이다.

## 2026-05-28 - 리미나리스 의회 좌우파와 한통속 오해 보정

- 작업: 현재 대화에서 추가된 리미나리스 의회 우파/좌파 대립, 파벌 간 유연한 협력, 백성들의 한통속 오해를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-parliament-left-right-factions.md`
  - `wiki/concepts/리미나리스 의회 좌우파.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/entities/aref-accel-seia.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스 의회는 우파와 좌파, 또는 보수파와 진보파로 갈라져 첨예하게 대립한다.
  - 파벌 대립은 필요할 때 안건별 협력으로 전환될 수 있다.
  - 백성들은 유연한 협력을 보고 겉으로만 싸우고 실제로는 한통속이라고 오해한다.
  - 실제 내부의 주도권 싸움은 언제나 치열하며, 협력은 경쟁의 중단이 아니라 전술적 연합이다.

## 2026-05-28 - 차원술사 불문율의 일반인 반응 보정

- 작업: 현재 대화에서 추가된 차원술사 동족 공작 금지 불문율에 대한 일반인의 당연한 윤리 반응을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-unwritten-rule-commoner-reaction.md`
  - `wiki/concepts/차원술사 동족 공작 금지 불문율.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/리미나리스 의회 좌우파.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 차원술사 귀족 사회에서는 같은 차원술사 귀족을 상대로 모함, 암살, 사기를 하지 않는다는 불문율이 의미 있는 규범이다.
  - 일반인에게는 이것이 대단한 문명화가 아니라, 원래 다른 사람에게 하면 안 되는 당연한 최소 윤리로 보인다.
  - 이 반응은 리미나리스 의회와 차원술사 귀족 사회가 일반 시민 윤리가 아니라 폭력 정치의 자기 제한에서 출발했다는 블랙 코미디를 강화한다.

## 2026-05-28 - 리미나리스 개방성과 첩보 오염 보정

- 작업: 현재 대화에서 추가된 휴리의 순혈 지배층 유지와 리미나리스의 상대적 개방성, 그로 인한 네리네·여왕령 첩보망 산재 설정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-openness-spy-network.md`
  - `wiki/concepts/리미나리스 개방성과 첩보 오염.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 뒷문 구조.md`
  - `wiki/concepts/리미나리스 의회 좌우파.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리는 지배층의 순수성을 유지하지만, 리미나리스는 상대적으로 외부에 열려 있다.
  - 리미나리스는 외부 유입이 공급하는 역동성을 자랑으로 여기지만, 보안과 개방성은 양립하기 어렵다.
  - 네리네가 따로 견제할 필요도 없이 리미나리스 곳곳에는 네리네의 첩자가 산재한다.
  - 여왕령 첩자도 많으며, 일부는 보수파 귀족들과 연결되어 있고 이것은 비밀도 아니다.

## 2026-05-31 - 휴리 조직 구조와 리미나리스 운영 방식 대비 보정

- 작업: 현재 대화에서 추가된 휴리의 중앙·연구부·전쟁부·생산부 4분할 구조와, 리미나리스가 의회 아래 귀족별 기업·사회 재단으로 운영된다는 대비를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-department-structure.md`
  - `wiki/concepts/휴리 조직 구조.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리는 중앙, 연구부, 전쟁부, 생산부로 나뉘며 전체가 하나의 집단처럼 운영된다.
  - 리미나리스는 의회 아래 각 차원술사 귀족이 기업과 사회 재단을 운영하는 병렬 네트워크에 가깝다.
  - 이 대비는 휴리의 통합 실행 집단 성격과 리미나리스의 귀족별 자율·개방·정치 생태를 선명하게 만든다.
  - 중앙/연구부/전쟁부/생산부가 표면 행정부인지, 가주회의 이너서클과 직접 이어지는 실질 조직인지는 추가 검삭 대상으로 남겼다.

## 2026-05-31 - 하이시아의 휴리 시조성과 마신화 동기 보정

- 작업: 현재 대화에서 추가된 하이시아의 백금발·푸른 눈 돌연변이형 외형, 불임, 휴리 시조성, 마신화 선택 동기를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-haisia-hyuri-progenitor.md`
  - `wiki/entities/haisia.md`
  - `wiki/concepts/휴리.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 하이시아는 휴리의 시조이며, 백금발과 푸른 눈은 일반 마녀 인종 기준으로 돌연변이에 가까운 형질이다.
  - 하이시아는 독특한 외모와 엄청난 차원술 실력으로 주목받았지만, 불임 때문에 그 좋은 형질을 자연 후대에 전하지 못할 위기에 있었다.
  - 이 절박함은 하이시아가 고위 차원술사임에도 마신화를 선택한 이유로 정리된다.
  - 휴리는 하이시아의 형질과 차원술 적성을 네리네가 은발·푸른 눈·백색 에텔 적성의 계획 혈족으로 보존·재구성한 결과로 읽힌다.

## 2026-05-31 - 휴리 클론과 여왕령 마녀들의 충격 보정

- 작업: 현재 대화에서 추가된 하이시아 유전자 클론, 칵테일식 혈통 혼합, 휴리 수십만 인구, 그리고 이를 본 여왕령 마녀들의 충격을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-haisia-hyuri-progenitor.md`
  - `wiki/entities/haisia.md`
  - `wiki/concepts/휴리.md`
  - `wiki/entities/nerine.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 휴리는 하이시아 유전자 클론과 칵테일식 혈통 혼합으로 수십만 인구가 태어난 계획 혈족이다.
  - 하이시아를 알던 여왕령 마녀들에게 휴리의 존재는 마법사령이 개인의 고유 형질과 비극을 대규모 군사·학술 인구로 재가공할 수 있다는 증거가 된다.
  - 이 충격은 여왕령 마녀들이 마법사령을 단순한 경쟁 세력이 아니라, 혈통과 정체성까지 체제의 재료로 바꾸는 집단으로 인식하게 만든다.

## 2026-05-31 - 휴리 세 줄기와 숨은 지배층 계통 보정

- 작업: 현재 대화에서 추가된 휴리 제작 초기의 세 줄기, 포악하고 복수심 강한 계통의 지배층화, 내부 무지, 이레니아의 후일 충격을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-three-branches.md`
  - `wiki/concepts/휴리 세 줄기.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네가 휴리를 만들었을 때 학구적이고 재빠른 계통, 고상하고 자비로운 계통, 포악하고 복수심 강한 계통의 세 줄기가 나왔다.
  - 네리네는 포악하고 복수심 강한 세 번째 계통을 휴리의 주 지배층으로 삼았다.
  - 이 사실은 휴리 내부에서도 알려져 있지 않으며, 권력 있는 휴리들은 이를 "성격이 세다"는 식으로만 느낀다.
  - 이레니아 휴리 34는 나중에 이 비밀을 알고, 휴리 권력 구조의 강압성이 제작 단계의 설계와 연결되어 있음을 깨달아 충격을 받는다.

## 2026-05-31 - 하스터·제라스·휴리 코드네임과 종족명 보정

- 작업: 현재 대화에서 추가된 휴리 세 줄기의 내부 코드네임, 하스터와 제라스의 우위, 코드네임 휴리의 주 계열화, 종족명 휴리의 기원, 휴리의 자기오해를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-three-branches.md`
  - `wiki/concepts/휴리 세 줄기.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/휴리 가주회의.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/irenia-hyuri-34.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 학구적이고 재빠른 계통의 내부 코드네임은 하스터, 고상하고 자비로운 계통은 제라스, 포악하고 복수심 강한 계통은 휴리다.
  - 하스터가 더 똑똑하고 제라스가 더 강력하지만, 네리네는 군사적으로 유용하다고 판단한 코드네임 휴리를 주 계열과 지배층으로 삼았다.
  - 마지막 계통의 이름인 휴리가 종족 전체의 이름이 된 점은 네리네의 의도를 드러낸다.
  - 정작 휴리는 하스터와 제라스 계통을 보며 자신들이 신속하고 지성적이며 우아하고 자비로운 형질을 공유한다고 생각한다.

## 2026-05-31 - 디마리 파라곤 원형과 네블레이드 파국 보정

- 작업: 현재 대화에서 추가된 디마리 휴리의 초대 가주성, 하이시아 능력의 무제약 파라곤 원형성, 네리네의 만능 평가와 신뢰, 정의 처리 임무, 네블레이드 파국을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-dimari-paragon-first-head.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/concepts/휴리 세 줄기.md`
  - `wiki/concepts/휴리.md`
  - `wiki/entities/nerine.md`
  - `wiki/events/디마리와 미나카 사도우의 반역 동기.md`
  - `wiki/events/디마리의 미래 반역과 실종.md`
  - `wiki/events/디마리의 미래 반역과 오리아나 혈통 인과 사건.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/sources/current-session-hyuri-family-council-inner-circle.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/nerine-concept-review-list.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 디마리 휴리는 휴리의 초대 가주이며, 하이시아의 능력에 제약을 걸지 않고 약점까지 극대화한 파라곤 휴리다.
  - 디마리는 하스터·제라스·휴리 3계통 중 하나라기보다, 제약을 가해 세 계통이 나뉘기 전의 휴리 혈족 원형이다.
  - 네리네는 디마리를 만능이라 부를 정도로 신뢰하고 좋아했지만, 디마리가 네리네의 네블레이드 사태를 알아차리고 정의 처리 임무에 따라 파고들자 네블레이드해 처리할 수밖에 없었다.
  - 디마리의 후일 파국은 단순 반역이 아니라, "마법에 따라 모든 사건을 정의롭게 처리하라"는 임무가 네리네 자신에게 되돌아온 사건으로 정리된다.

## 2026-05-31 - 디마리 암호 마나와 오리아나 납치 오해 보정

- 작업: 현재 대화에서 추가된 디마리의 최후 암호·고액 마나 전송, 아이카의 오리아나 구출 오해, 스자스의 납치·보호, 휴리와 리미나리스 관계 악화 인과를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-dimari-encrypted-mana-oriana-abduction.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/szas-sreya.md`
  - `wiki/events/디마리의 미래 반역과 실종.md`
  - `wiki/events/오리아나와 데스모네 혈통 인과.md`
  - `wiki/events/오리아나, 환타, 라라타 혈통 인과.md`
  - `wiki/events/디마리의 미래 반역과 오리아나 혈통 인과 사건.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 디마리는 네리네에게 제거되기 전, 자신의 수사 결과를 암호와 고액의 마나와 함께 여왕령 쪽 암흑가로 전송했다.
  - 디마리의 실제 의도는 딸 오리아나가 여왕령 쪽과 접촉해 암호를 해석하고 마나를 수령하게 하는 것이었다.
  - 아이카는 이를 친구 디마리의 유언 같은 오리아나 구출 요청으로 오해하고, 스자스에게 오리아나를 납치해 여왕령 쪽에서 보호하게 했다.
  - 오리아나가 리미나리스에서 휴리로 돌아오는 길에 납치되었기 때문에 휴리는 리미나리스의 암살 시도로, 리미나리스는 휴리의 근거 없는 모함으로 받아들였다.
  - 이 사건 이후 휴리와 리미나리스 관계는 급속히 악화되며, 오리아나가 아이카 혈통 인과에 들어가는 첫 구체 연결고리가 된다.

## 2026-05-31 - 오리아나 아르킬 혼인과 환타 라라타 쌍둥이 보정

- 작업: 현재 대화에서 추가된 아이카의 보호 설명, 디마리 암호 해석의 정치적 의미, 오리아나와 아르킬 백작의 혼인, 환타와 라라타의 쌍둥이 출생을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-oriana-arkill-fanta-larata.md`
  - `wiki/sources/current-session-dimari-encrypted-mana-oriana-abduction.md`
  - `wiki/entities/arkill-count.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/fanta-hyuri.md`
  - `wiki/entities/larata.md`
  - `wiki/entities/nerine.md`
  - `wiki/events/오리아나와 데스모네 혈통 인과.md`
  - `wiki/events/오리아나, 환타, 라라타 혈통 인과.md`
  - `wiki/events/디마리의 미래 반역과 오리아나 혈통 인과 사건.md`
  - `wiki/events/디마리의 미래 반역과 실종.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/events/네리네의 보주와 아세로리온 트라우마 사건.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 아이카는 오리아나에게 자신이 보호를 위해 데려왔다고 설명하고, 어머니 디마리와 자신의 친분을 밝힌다.
  - 오리아나는 디마리의 의미 불명의 실종이 대마법사 네리네와 관련되어 있고 그래서 사라졌다는 아이카의 설명을 받아들인다.
  - 디마리의 암호 해석 내용은 여왕령에 널리 퍼진 "네리네가 시조들을 처리하고 그 힘을 빼앗았다"는 음모론을 확인하는 것이었으므로, 새 정치 파문은 만들지 않는다.
  - 오리아나는 아이카의 혈족인 아르킬 백작과 혼인하고, 두 사람 사이에서 쌍둥이 환타와 라라타가 태어난다.

## 2026-05-31 - 바르딜의 아르킬 살해와 오리아나 도주 보정

- 작업: 현재 대화에서 추가된 바르딜의 범죄, 아르킬의 죽음, 오리아나의 실어증과 마법사령 도주, 환타와 라라타 분리, 아이카의 바르딜 처벌과 라라타 고아원 양육 방침을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-bardil-arkill-oriana-flight.md`
  - `wiki/sources/current-session-oriana-arkill-fanta-larata.md`
  - `wiki/entities/bardil-prince.md`
  - `wiki/entities/arkill-count.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/fanta-hyuri.md`
  - `wiki/entities/larata.md`
  - `wiki/events/바르딜의 아르킬 살해와 오리아나 도주 사건.md`
  - `wiki/events/리미나리스 계승전.md`
  - `wiki/events/환타 휴리의 패배.md`
  - `wiki/events/리미나리스 계승전과 보석검 귀환 사건.md`
  - `wiki/events/오리아나와 데스모네 혈통 인과.md`
  - `wiki/events/오리아나, 환타, 라라타 혈통 인과.md`
  - `wiki/events/디마리의 미래 반역과 오리아나 혈통 인과 사건.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/events/스자스와 라로카의 카밀라 재구축.md`
  - `wiki/events/소설 개별 사건 인덱스.md`
  - `wiki/events/소설 대형 사건 해설서 인덱스.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 바르딜은 오리아나를 이상형으로 여기고 있었고, 자신이 유약하다고 무시하던 아르킬이 오리아나와 혼인하자 열등감에 사로잡힌다.
  - 바르딜은 아르킬의 집을 습격해 아르킬을 죽이고 오리아나를 성폭행한다.
  - 아이카는 왕자라고 봐주던 바르딜을 귀족 감옥이 아니라 극악 범죄자용 지하 감옥에 가둔다.
  - 오리아나는 충격으로 실어증에 걸린 뒤 두 딸을 데리고 마법사령 쪽으로 도망치지만, 추격대가 오는 사이 환타만 데리고 가고 라라타는 놓친다.
  - 환타는 오리아나와 함께 마법사령 쪽으로 넘어가고, 라라타는 아이카의 결정으로 여왕령 고아원에서 강하게 길러진다.

## 2026-05-31 - 환타 라라타 완성형 차원 방랑자 보정

- 작업: 현재 대화에서 추가된 환타와 라라타의 완성형 차원 방랑자 혈통, 환타의 휴리 상층부 숭배와 리미나리스 결투 공격, 어린 제라애의 환타 숭배, 라라타의 재능 은폐와 72 대마신 등극 및 여왕령 원한을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-fanta-larata-planeswalker-twins.md`
  - `wiki/sources/current-session-oriana-arkill-fanta-larata.md`
  - `wiki/sources/current-session-bardil-arkill-oriana-flight.md`
  - `wiki/entities/fanta-hyuri.md`
  - `wiki/entities/larata.md`
  - `wiki/entities/jerae-hyuri.md`
  - `wiki/entities/haisia.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/entities/arkill-count.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/concepts/72-대마신.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/차원 방랑자 복원계획.md`
  - `wiki/events/리미나리스 계승전.md`
  - `wiki/events/환타 휴리의 패배.md`
  - `wiki/events/리미나리스 계승전과 보석검 귀환 사건.md`
  - `wiki/events/오리아나와 데스모네 혈통 인과.md`
  - `wiki/events/오리아나, 환타, 라라타 혈통 인과.md`
  - `wiki/events/바르딜의 아르킬 살해와 오리아나 도주 사건.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 환타와 라라타는 여왕의 차원 방랑자 혈통과 전체론적 차원술사 하이시아의 혈통이 어우러진 완성형 차원 방랑자 쌍둥이다.
  - 환타는 휴리 상층부에서 보물로 떠받들어지고, 어린 제라애는 사촌격인 환타의 천재성에 매료되어 환타를 숭배한다.
  - 환타는 리미나리스에 감정이 나쁘던 휴리 상층부의 말에 선동당해 리미나리스 적대감을 키우고, 결투로 리미나리스 차원술사 귀족들을 공격한다.
  - 라라타는 재능이 있으나 여왕의 "교만하게 키우지 말라"는 방침과 하이시아식 돌연변이 외모 때문에 힘을 숨기고 자란다.
  - 라라타는 노력 끝에 여왕령 72 대마신 지위까지 오르지만, 자신을 강하게 키운다는 명목으로 사실상 내쳤다고 여기며 여왕령에 악감정을 품는다.

## 2026-05-31 - 환타의 리미나리스 결투와 리나리로라 암살 보정

- 작업: 현재 대화에서 추가된 환타의 리미나리스 인재 결투 피해, 후우라 크로노스 후세이의 피해, 오리아나의 제지 실패, 리나리로라의 보석검 암살 동기를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-fanta-liminaris-duels-assassination.md`
  - `wiki/sources/current-session-fanta-larata-planeswalker-twins.md`
  - `wiki/entities/huura-chronos-husei.md`
  - `wiki/entities/fanta-hyuri.md`
  - `wiki/entities/linarirora.md`
  - `wiki/entities/oriana-hyuri.md`
  - `wiki/events/환타 휴리의 패배.md`
  - `wiki/events/리미나리스 계승전.md`
  - `wiki/events/리미나리스 계승전과 보석검 귀환 사건.md`
  - `wiki/events/오리아나와 데스모네 혈통 인과.md`
  - `wiki/events/오리아나, 환타, 라라타 혈통 인과.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 환타는 결투로 리미나리스 차원술사 귀족을 포함한 리미나리스 인재들을 불구나 재기불능으로 만들어댔다.
  - 피해자 중에는 오리아나를 도와준 후우라 크로노스 후세이도 있었다.
  - 오리아나는 환타에게 제발 그만두라고 말렸지만, 환타는 휴리 지도부의 영향 아래 어머니를 괴롭힌 것은 리미나리스라고 주장하며 듣지 않았다.
  - 견디지 못한 리나리로라 리미나리스는 보석검을 사용해 환타를 몰래 암살했다.

## 2026-05-31 - 미나카 사도우 유상 협력과 휴리-사도우 악화 보정

- 작업: 현재 대화에서 추가된 미나카 사도우의 낮은 열의의 유상 협력, 네리네의 미나카 동시 네블레이드, 사도우 계좌 마나 반환 거절, 휴리-사도우 관계 악화를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-minaka-sadou-paid-cooperation-neblade.md`
  - `wiki/sources/current-session-dimari-paragon-first-head.md`
  - `wiki/sources/dimari-session-source-map.md`
  - `wiki/entities/minaka-sadou.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/nerine.md`
  - `wiki/events/디마리와 미나카 사도우의 반역 동기.md`
  - `wiki/events/디마리의 미래 반역과 실종.md`
  - `wiki/events/디마리의 미래 반역과 오리아나 혈통 인과 사건.md`
  - `wiki/events/미정렬 사건과 후속 보강 필요 사건.md`
  - `wiki/syntheses/dimari-hyuri-complete-storyline.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 미나카 사도우는 디마리 휴리의 협력 요청에 응했지만, 디마리가 사도우 계좌로 보낸 거액의 마나 때문에 응한 것이며 애초에 별 열의는 없었다.
  - 미나카는 디마리가 네리네에게 일상적인 항의를 하는 줄 알고 동조했다가, 디마리가 네블레이드된 뒤 명백한 관련성이 발견되어 함께 네블레이드당한다.
  - 휴리는 후에 사도우 계좌로 이체된 거액의 마나를 찾아내 사도우를 추궁하지만, 사도우는 이미 받은 마나를 돌려줄 수 없고 왜 자신들을 의심하느냐며 반환 시도를 거절한다.
  - 이 사건 이후 휴리와 사도우의 사이도 나빠진다.

## 2026-05-31 - 리미나리스 나크샤 하웨이 기원 보정

- 작업: 현재 대화에서 추가된 리미나리스 시조 나크샤 크샤트리아 나즈샤라의 하웨이 가문 마신 출신 설정, 네리네가 나크샤를 통해 리미나리스를 만들었다는 기원, 리미나리스의 하웨이 직계 후손성, 스테리의 감정적 적의를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-naksha-haway-origin.md`
  - `wiki/concepts/리미나리스.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/리미나리스 개방성과 첩보 오염.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/acerorion-liminaris.md`
  - `wiki/events/에메랄드 타블렛 사건.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스의 시조는 여왕령 하웨이 가문의 마신 출신인 나크샤 크샤트리아 나즈샤라다.
  - 네리네는 나크샤를 통해 리미나리스를 만들어냈고, 리미나리스는 하웨이의 사실상 직계 후손이다.
  - 스테리 클랜은 리미나리스에 원한을 품는 것이 논리적이지 않다는 점을 알지만, 금발과 흰 피부의 하웨이 혈통에 대한 적의를 감정적으로 숨기기 어렵다.
  - 리미나리스는 네리네가 만든 집단이고 리미나리스 영토는 휴리를 거쳐야 도달할 수 있으므로, 스테리와 평소 직접 만날 일은 적다.

## 2026-05-31 - 하웨이의 스테리 침공과 세 마신 보정

- 작업: 현재 대화에서 추가된 하웨이의 스테리 클랜 침공, 나크샤·이노리 이놀이바·테라시에 테라이 세 마신의 선봉 역할, 스테리의 골렘 군대와 정보 조작계 무기 붕괴, 마신 부재 후회와 노리어 동기를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-haway-steri-invasion-three-demons.md`
  - `wiki/events/하웨이의 스테리 침공.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/inoliba.md`
  - `wiki/entities/terai.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/nesta-haway.md`
  - `wiki/concepts/노리어.md`
  - `wiki/concepts/리미나리스.md`
  - `wiki/events/에메랄드 타블렛 사건.md`
  - `wiki/events/네리네의 권능 전개.md`
  - `wiki/events/네리네의 흡혈귀 토벌과 아세로리온 최후 사건.md`
  - `wiki/events/소설 개별 사건 인덱스.md`
  - `wiki/events/소설 대형 사건 해설서 인덱스.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 하웨이는 스테리의 잠재력에 마신이 더해질 경우 자신들이 밀릴 수 있다고 두려워해 스테리 클랜을 선제 침공했다.
  - 나크샤 크샤트리아 나즈샤라, 이노리 이놀이바, 테라시에 테라이는 하웨이 침공의 선봉에 선 세 위의 차원술사 마신이다.
  - 스테리의 골렘 군대와 정보 조작계 무기는 세 마신의 압도적 화력 앞에서 박살났고, 모든 마녀 왕국이 하웨이를 비난했지만 마신 없는 스테리를 제대로 도운 가문은 없었다.
  - 스테리는 뒤늦게 마신을 만들지 않은 선택을 한탄했으며, 이 기억은 훗날 정보의 마신 노리어를 받아들이는 역사적 토양이 된다.

## 2026-05-31 - 비스타리오 하웨이와 스테리 침공 기만 보정

- 작업: 현재 대화에서 추가된 비스타리오 하웨이, 아이카가 이끄는 마신 연맹에 밀리던 차원술사 영향력, 하웨이의 마지막 무력에 기댄 폭력적 영향력, 스테리 대량 살상 무기 정보와 세 마신의 사후 불만을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-vistario-haway-steri-deception.md`
  - `wiki/entities/vistario-haway.md`
  - `wiki/events/하웨이의 스테리 침공.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/inoliba.md`
  - `wiki/entities/terai.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/events/에메랄드 타블렛 사건.md`
  - `wiki/events/네리네의 권능 전개.md`
  - `wiki/events/네리네의 흡혈귀 토벌과 아세로리온 최후 사건.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 비스타리오 하웨이는 스테리 침공을 통해 아이카가 이끄는 마신 연맹에 밀리던 차원술사들의 영향력을 일시적으로 회복했다.
  - 이 영향력은 과거 고귀한 하웨이에 대한 존중이 아니라, 하웨이가 마지막으로 남은 무력에 기댄 폭력적 영향력이었다.
  - 세 마신은 스테리가 대량 살상 무기를 만든다는 정보를 믿고, 스테리 무력화를 고귀한 하웨이의 책무로 여겨 침공에 앞장섰다.
  - 이후 세 마신은 비스타리오에게 속았음을 알고 큰 불만을 품으며, 이 보정은 침공의 가해 책임과 하웨이 내부의 도덕적 균열을 함께 남긴다.

## 2026-05-31 - 스테리 대체 마신화와 노리어 동기 보정

- 작업: 현재 대화에서 추가된 스테리의 대체 마신화 집착, 네리네의 대량 제물 마신화 금지, 스테리의 윤리적 긍지, 에뮤카레 뮤케레와 네리네 네에나리의 스테리 출신 마신성을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-steri-alternative-mashinization.md`
  - `wiki/concepts/스테리 대체 마신화.md`
  - `wiki/concepts/노리어.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/emukare-mukere.md`
  - `wiki/events/하웨이의 스테리 침공.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 하웨이 침공과 마신에게 패배한 기억은 스테리가 미친 듯이 대체 마신 기술에 매달리는 원인이 된다.
  - 네리네는 대량의 제물을 쓰는 전통적 마신화를 금지했지만, 스테리는 이 금지를 자신들이 사악한 의식을 거부했다는 긍지를 지키는 새 시대의 원칙으로도 받아들인다.
  - 노리어는 스테리의 대체 마신화 흐름을 대표하는 희생자 없는 정보의 마신 프로젝트다.
  - 에뮤카레 뮤케레와 네리네 네에나리는 스테리 출신 마신으로 정리되며, 스테리에게 "우리 출신 마신"의 기억을 형성한다.

## 2026-05-31 - 하웨이 세 마신의 동방 탈주와 스테리 노예 해방 보정

- 작업: 현재 대화에서 추가된 시에라 세라시에의 마법 완성 시점, 하웨이 세 마신의 속죄, 스테리 노예 과반수 동방 탈주, 하웨이 영향력 약화와 제한적 명예 회복을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-three-demons-eastern-defection.md`
  - `wiki/events/하웨이 세 마신의 동방 탈주와 스테리 노예 해방.md`
  - `wiki/events/하웨이의 스테리 침공.md`
  - `wiki/entities/vistario-haway.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/inoliba.md`
  - `wiki/entities/terai.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/events/소설 대형 사건 해설서 인덱스.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 시에라가 마법을 완성했을 때, 하웨이의 세 마신은 과거의 속죄로 자신들이 관리하던 스테리 노예 과반수를 이끌고 동쪽으로 탈주한다.
  - 이 동쪽은 훗날 마법사령이 되는 축으로 이어진다.
  - 하웨이의 영향력과 비스타리오의 야망은 크게 무너지지만, 세 마신의 속죄로 하웨이는 과거의 고귀함을 조금은 회복한다.

## 2026-05-31 - 스테리 시조 마법사 자긍심과 시에라의 선택 보정

- 작업: 현재 대화에서 추가된 네리네 네에나리와 에뮤카레 뮤케레의 스테리 출신 시조급 마법사성, 스테리의 비마신화 선택 정당화, 시에라 세라시에의 스테리 응원 의도를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-steri-founder-pride-sierra-selection.md`
  - `wiki/concepts/스테리 시조 마법사 자긍심.md`
  - `wiki/concepts/스테리 대체 마신화.md`
  - `wiki/concepts/노리어.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/emukare-mukere.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/aradnoa-liminaris.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/aradnoa-disappearance-arc.md`
  - `wiki/syntheses/mukere-rinasita-and-miriokarion.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네 네에나리와 에뮤카레 뮤케레는 스테리가 열등한 민족이 아니라, 그저 대량 제물을 쓰는 마신화를 하지 않았을 뿐이라는 스테리의 서사에 정당성을 부여한다.
  - 압도적인 마법사령의 시조급 마법사들 중 둘이나 스테리 출신이라는 사실은 스테리의 자긍심이다.
  - 시에라 세라시에는 일부러 스테리 클랜을 응원하는 차원에서 네리네와 에뮤카레를 고른 측면이 있다.
  - 이 자긍심은 노리어와 스테리 대체 마신화를 열등감만이 아니라 윤리적 선택과 민족적 자부심의 연장선으로 보이게 한다.

## 2026-05-31 - 네리네의 시조 네블레이드 공식 신화와 스테리 수용 보정

- 작업: 현재 대화에서 추가된 네리네의 시조 마신 네블레이드 공식 발표, 마녀 왕국 마신들의 쿠데타 인식, 스테리 클랜의 피해자 정체성에 따른 수용, 여왕령의 신정 독재화 조롱을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-nerine-founder-neblade-official-myth.md`
  - `wiki/concepts/네리네의 시조 네블레이드 공식 신화.md`
  - `wiki/events/네리네의 보주와 시조 수감.md`
  - `wiki/events/네리네의 보주와 아세로리온 트라우마 사건.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/concepts/스테리 시조 마법사 자긍심.md`
  - `wiki/concepts/스테리 대체 마신화.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네는 시조 마신들을 네블레이드한 뒤, 그들이 악행에 대한 속죄로 모든 권한과 능력을 넘기고 진리를 찾으러 떠났다고 발표했다.
  - 모든 마녀 왕국의 마신들은 이 발표를 쿠데타로 보았다.
  - 스테리 클랜은 마신들에게 피해를 입은 민족이라는 정체성 때문에 이 발표를 믿었다. 정확히는 믿어준 것에 가깝다.
  - 여왕령은 스테리가 피해자인 척하다 결국 네리네 중심의 신정 독재로 갔다고 비웃는다.

## 2026-05-31 - 리미나리스와 스테리의 하웨이 혈통 인식 보정

- 작업: 현재 대화에서 추가된 리미나리스, 스테리, 여왕령의 하웨이 혈통 인식 차이를 별도 관계 개념으로 정리하고 관련 문서에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-steri-haway-perception.md`
  - `wiki/concepts/리미나리스와 스테리의 하웨이 혈통 인식.md`
  - `wiki/concepts/리미나리스.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/entities/naksha.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/events/하웨이의 스테리 침공.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스는 하웨이 혈통 덕분에 여왕령의 차원술사와 마신들이 우호적으로 나오는 것을 경험하고, 그 의미를 완전히 알지는 못해도 좋은 일로 받아들인다.
  - 스테리는 리미나리스가 속죄한 나크샤의 후예라는 점을 논리적으로 알지만, 나크샤 대장군이 스테리 방어선 대부분을 박살낸 장본인이었기 때문에 리미나리스를 곱게 보지 못한다.
  - 여왕령의 차원술사와 마신들은 리미나리스를 보며 하웨이가 멸망한 것이 아니라 다른 방식으로 번영한다고 받아들인다.

## 2026-05-31 - 휴리의 스테리 구출 작전과 스테리의 휴리 인식 보정

- 작업: 현재 대화에서 추가된 에메랄드 타블렛 사건 이후 디마리 지휘의 대규모 스테리 구출 작전, 휴리에 대한 스테리의 좋은 인식, 네리네의 레오나 체포 투정을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-hyuri-steri-rescue-operation.md`
  - `wiki/concepts/스테리의 휴리 인식.md`
  - `wiki/events/네리네의 분노와 휴리 투입.md`
  - `wiki/events/에메랄드 타블렛 사건.md`
  - `wiki/events/디마리의 리미나리스 방문과 아세로리온 불안 증폭.md`
  - `wiki/entities/dimari-hyuri.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/leona-haway.md`
  - `wiki/entities/meinoa-steri.md`
  - `wiki/concepts/휴리.md`
  - `wiki/concepts/리미나리스와 스테리의 하웨이 혈통 인식.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/log.md`
- 핵심 정리:
  - 에메랄드 타블렛 사건 이후 네리네는 디마리 휴리에게 지시해 대규모 스테리 구출 작전을 개시했고, 휴리는 남은 스테리 민족마저 구출해왔다.
  - 이 때문에 스테리는 휴리를 민족 구출자로 매우 좋게 인식한다.
  - 작전 완료 뒤 네리네는 디마리에게 "그런데 레오나는? 알아서 나의 레오나를 잡아왔어야지"라고 투정하고, 디마리는 황당함과 스트레스를 겪는다.

## 2026-06-01 - 리미나리스 개척 경제와 조직 구조 보정

- 작업: 현재 대화에서 추가된 황금 수해 임업, 북부 호수 수산업, 네리네의 마수 험지 개척, 여왕령 교류와 벤처 기업 산실로서의 리미나리스 경제 구조를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-liminaris-economy-development.md`
  - `wiki/concepts/리미나리스 조직 구조.md`
  - `wiki/concepts/리미나리스.md`
  - `wiki/concepts/리미나리스 의회.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/concepts/리미나리스 개방성과 첩보 오염.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 리미나리스는 차원술 귀족 연구국만이 아니라, 황금 수해의 임업과 북부 호수의 수산업을 바탕으로 한 탄탄한 1차 산업 기반을 가진다.
  - 과거 여왕령이 마수 천지 험지로 본 지역들을 네리네가 마법 시스템과 리미나리스 혈족으로 개척했고, 그 생산량이 리미나리스의 경제 번영을 만든다.
  - 현재 리미나리스는 네리네의 지원과 여왕령과의 교류를 통해 수많은 벤처 기업이 태어나는 산실이다.
  - 이로써 리미나리스의 조직도는 가주와 의회뿐 아니라 귀족별 기업·사회 재단, 개척지 1차 산업, 연구소와 벤처 생태계까지 포함하는 구조로 정리된다.

## 2026-06-01 - 여왕령 투자와 리미나리스 경제 협력 보정

- 작업: 현재 대화에서 추가된 여왕령 유력자들의 리미나리스 개척지 투자, 여왕의 경제 협력 요청, 스테리 전체의 이익을 계산한 네리네의 수락을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-queenrealm-liminaris-investment-trade.md`
  - `wiki/concepts/리미나리스 조직 구조.md`
  - `wiki/concepts/리미나리스.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/리미나리스 개방성과 첩보 오염.md`
  - `wiki/concepts/차원술사 귀족.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 여왕령은 처음에는 마법사령을 험지로 밀려난 집단처럼 무시했지만, 복제 혈족과 마경 효과로 황금 수해와 북부 호수 개발이 성공하자 태도를 바꾼다.
  - 여왕령 유력자들은 이 개발을 새로운 부의 탄생으로 보고 아낌없이 투자했다.
  - 여왕은 경제적 협력을 요청했고, 네리네는 여왕령 곡창지대와 서부 문물, 마법사령 생산물 교환이 스테리 전체에도 이득이라고 판단해 선선히 받아들였다.
  - 네리네에게 이 협력은 감정적 화해가 아니라, 밀과 쌀 없이 버섯·과일·물고기 위주로만 살아가는 마법사령 경제를 피하기 위한 실무적 판단이다.

## 2026-06-01 - 여왕령과 마법사령 정통성 분쟁 보정

- 작업: 현재 대화에서 추가된 네리네의 통합론, 현자 의회 계승 주장, 아이카의 반란군 대우 유지, 공식 휴전과 실무 교류가 공존하는 마녀 나라 체제를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-queenrealm-mageorder-legitimacy-truce.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 여왕령과 마법사령은 그대로 두 개의 국가로 성립할 수도 있었지만, 네리네는 통합을 절대로 포기하지 않았다.
  - 네리네는 마녀 나라의 정통한 지도자가 제1대 여왕을 자칭한 아이카가 아니라, 대마녀들의 의회를 통해 선출되어야 한다고 주장한다.
  - 네리네는 마법사령이 전통적인 현자 의회를 이어받았으므로 마법사령이 정당한 마녀들의 지도자라고 본다.
  - 아이카는 이를 여왕권 부정으로 받아들여 마법사령에 대한 반란군 대우를 유지한다.
  - 따라서 마녀 나라는 공식 휴전 상태에서 경제·학술 교류가 이어지는 기묘한 체제가 된다.
- 검삭 필요:
  - 대마녀들의 의회와 현자 의회의 정확한 제도적 관계.
  - 아이카가 제1대 여왕 칭호를 확정한 절차와 명분.
  - 반란군 대우가 외교·통행·무역·포로법에 반영되는 방식.

## 2026-06-01 - 그랜드 매트론 호칭과 현자 회의 의장권 보정

- 작업: 현재 대화에서 추가된 네리네의 아이카 호칭, 그랜드 매트론의 의미, 현자 회의 의원과 의장 구도를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-grand-matron-title-dispute.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 네리네는 아이카를 상대로 여왕이 아니라 그랜드 매트론이라고 부른다.
  - 공식 석상에서의 여왕 호칭은 왕권 승인이라기보다, 상대가 요구하는 호칭을 외교적으로 불러주는 태도다.
  - 그랜드 매트론은 과거 현자 회의의 의원 중 하나를 칭하는 말이다.
  - 네리네에게 아이카는 현자 회의 의원 중 하나가 불법적으로 여왕을 자칭한 존재다.
  - 네리네는 마법사령이 현자 회의를 계승했고, 그 의장인 대마법사 자신이 진짜 지도자라고 본다.
- 검삭 필요:
  - 그랜드 매트론의 원래 권한과 현자 회의 내 서열.
  - 현자 회의 의장 직함과 대마법사 칭호의 관계.
  - 공식 외교문서에서 아이카 호칭이 여왕과 그랜드 매트론 사이에서 어떻게 표기되는지.

## 2026-06-01 - 현자 회의와 72 대마신 체제 전환 보정

- 작업: 현재 대화에서 추가된 아이카의 현자 회의 의장 임명과 추종자 과반수 즉위, 시에라의 마법 창시와 동부 이탈, 현자 회의 폐지와 72 대마신 체제 전환, 아이카와 네리네 양측 정통성 주장의 억지를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-sage-council-aika-sierra-succession.md`
  - `wiki/concepts/현자 회의와 72 대마신 체제.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/72-대마신.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 현자 회의는 아이카를 의장으로 임명했고, 아이카는 이후 추종자들을 대거 들여와 과반수 찬성으로 여왕이 되었다.
  - 현자 회의에는 여왕을 만들 권한은 있었지만, 만든 여왕을 내릴 권한은 없어 보였다.
  - 시에라 세라시에는 현자 회의 의장 겸 수석 궁중 마술사로서 마법을 만들고 동부로 이탈했다.
  - 네리네는 이를 마법사령이 현자 회의의 후신이라는 근거로 삼지만, 시에라는 마법을 만든 것이지 현자 회의를 끌고 간 것이 아니다.
  - 시에라 이후 여왕령의 현자 회의는 의미 없다고 여겨져 폐지되고 72 대마신 체제로 바뀌었다.
  - 72 대마신 체제에서는 대마신이 아니면 여왕령 정치에 참여하기 거의 불가능해져, 차원술사 정치 참여를 사실상 막았다.
  - 네리네는 마법사령의 마법이 현자 회의를 계승하기 때문에 마신이 아니어도 참여 가능하다고 주장한다.
  - 따라서 아이카와 네리네의 정통성 주장은 둘 다 과거 제도의 빈틈을 자기 권력 논리로 재해석한 억지다.
- 검삭 필요:
  - 아이카가 현자 회의에 추종자들을 들여온 절차와 반대파의 대응.
  - 현자 회의의 여왕 선출권과 폐위권 부재의 법적·관습적 근거.
  - 현자 회의 폐지와 72 대마신 체제 도입의 공식 절차.
  - 마법사령이 마신 외 계층의 참여를 실제로 얼마나 제도적으로 보장했는지.

## 2026-06-01 - 여왕령의 사이비 종교 반군 담론과 시에라 실세설 보정

- 작업: 현재 대화에서 추가된 여왕령의 마법사령 이중 대우, `사이비 종교 반군` 공식 담론, 시에라 세라시에 실세설, 네리네의 시에라 행방 회피를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-queenrealm-cult-rebel-sierra-power-rumor.md`
  - `wiki/concepts/마법사령 시에라 실세설.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/sierra-serasie.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 여왕령은 마법사령을 실제로는 모든 면에서 또 하나의 국가처럼 대한다.
  - 그러나 공식 담론에서는 네리네의 태도 때문에 마법사령을 사이비 종교 반군이라고 부른다.
  - 여왕령의 설명은 "미친 놈들이기 때문에 놔둔다"는 조롱과 방치 논리에 가깝다.
  - 여왕령 내부에는 마법사령의 실세가 네리네가 아니라 사라진 시에라 세라시에라는 가설도 돈다.
  - 네리네가 힘을 물려받았다는 시조들 중에 마법사령의 시초인 시에라가 없고, 시에라의 행방을 물으면 "그분이 자기를 인정했다"고만 반복하며 답을 피하기 때문이다.
- 검삭 필요:
  - 사이비 종교 반군 호칭이 공식 외교문서, 귀족 담론, 민간 담론 중 어디까지 쓰이는지.
  - 시에라 실세설을 믿는 여왕령 파벌과 이 가설의 정치적 활용 방식.
  - 네리네가 시에라의 행방 질문에 답을 피하는 대표 장면.

## 2026-06-01 - 여왕령과 마법사령 장기 휴전 및 통치자 고유명사화 보정

- 작업: 현재 대화에서 추가된 마지막 전쟁 이후 수백 년간 굳은 여왕령-마법사령 장기 휴전, 사실상 국경인 경계선의 국지전, 네리네와 아이카 직함의 고유명사화를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-long-truce-proper-noun-rulers.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 마지막 전쟁 이후 수백 년이 흐르면서 여왕령과 마법사령의 공식 휴전은 장기 생활 질서로 굳었다.
  - 사실상 국경인 경계선에서 가끔 큰 긴장과 국지전이 벌어지지만, 양측 중앙 권력 모두 확전을 원하지 않아 전면전으로 커지지 않는다.
  - 겉으로 보기에 두 마녀령은 온전히 살아가는 두 국가처럼 보인다.
  - 일부 학자들은 네리네와 아이카가 하야하면 두 국가 체제가 평화롭게 정리될 것이라고 예측했지만, 두 통치자는 불로불사의 마신이라 그런 학자들이 먼저 죽었다.
  - 양 세력의 국민에게 `대마법사`는 네리네, `여왕`은 아이카에 가까운 고유명사가 되었고, 다른 이름이 붙으면 어색하게 느껴진다.
- 검삭 필요:
  - 마지막 전쟁의 명칭과 시점.
  - 장기 휴전 경계에서 자주 충돌하는 지방 영주 가문과 국지전 규칙.
  - `대마법사 네리네`와 `여왕 아이카`의 고유명사화가 공식 예법과 민간 언어에서 각각 어떻게 나타나는지.

## 2026-06-01 - 장기 평화 속 군비 불신과 계층별 인식 보정

- 작업: 현재 대화에서 추가된 작중 시점의 오래 지속된 평화, 마법사령 상층부의 구호화 인식, 여왕령 지방 영주의 수도 불만, 최상위층의 군비 불신을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-long-peace-military-suspicion.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/entities/nerine.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/log.md`
- 핵심 정리:
  - 작중 시점에는 평화가 너무 오래 지속되어 마법사령 상층부는 네리네의 통합론을 구호 정도로 이해한다.
  - 여왕령 지방 영주들은 실제 전쟁 가능성이 낮은데도 수도가 마법사령을 핑계로 자신들을 쥐어짠다고 생각한다.
  - 양측 최상위층은 이 애매한 구도가 언젠가 끝나는 날이 오리라고 본다.
  - 마법사령은 아무리 평화로워도 군비를 절대 줄이지 않으며, 여왕령은 이를 네리네가 언젠가 일을 저지를 증거로 본다.
  - 여왕령은 네리네만 하야하면 마법사령도 침략 야욕을 단념하리라고 보지만, 네리네는 불로불사의 대마법사로 계속 버틴다.
- 검삭 필요:
  - 마법사령 군비의 규모와 구체 배분.
  - 여왕령 수도가 지방 영주들을 쥐어짜는 세금·병력·물자·충성 요구의 세부.
  - 최상위층이 예상하는 "끝나는 날"의 구체 형태.

## 2026-06-01 - 스테리 반마신 사상교육과 네리네 영웅 신화 보정

- 작업: 현재 대화에서 추가된 스테리 영역의 강경 반마신 사상교육, 다른 지방의 완화 교리, 네리네를 `스테리의 불타는 창`으로 기억하는 영웅 신화를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-steri-anti-mashin-indoctrination.md`
  - `wiki/concepts/스테리 반마신 사상교육.md`
  - `wiki/concepts/스테리 대체 마신화.md`
  - `wiki/concepts/스테리 시조 마법사 자긍심.md`
  - `wiki/concepts/스테리의 휴리 인식.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 스테리 영역에서는 여왕령 마신들을 사악한 실패작으로 가르치고, 마신의 겉모습과 힘에 매혹되어서는 안 된다고 교육한다.
  - 스테리 내륙으로 갈수록 마신은 사람을 잡아먹고 자기들끼리도 잡아먹으려는 식인종처럼 묘사된다.
  - 다른 지방에서는 여왕령 마신을 원시적 미개인 정도로 낮춰 가르치며, 마법사로 개종한 마신은 더 이상 사악하지 않다고 본다.
  - 여왕령과 교류가 활발한 지역일수록 마신도 그냥 사람들이라는 분위기가 강하다.
  - 스테리 교육에서 네리네는 `스테리의 불타는 창`이자 구원자로 기억되지만, 네리네 자신도 마신이라는 질문은 스테리 영토 안에서 금기시된다.
- 검삭 필요:
  - 스테리 반마신 사상교육을 담당하는 기관과 교과서 표현.
  - `스테리의 불타는 창` 칭호의 공식성.
  - 금기 질문을 한 아이나 성인에게 적용되는 실제 처벌 또는 사회적 압박.
  - 지역별 교리 차이를 마법사령 중앙이 어느 정도 허용하거나 관리하는지.

## 2026-06-01 - 여왕령 반마법사령 선전과 신생 엘리트 이반 유혹 보정

- 작업: 현재 대화에서 추가된 여왕령의 마법사령 선전, 마법사령의 학술성과 자유가 만드는 이반 유혹, 네리네의 마신 척살론이 친마법사령 분위기를 꺼뜨리는 구조를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-queenrealm-mageorder-propaganda-elite-defection.md`
  - `wiki/concepts/여왕령 반마법사령 선전과 이반 유혹.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/concepts/마법사령 시에라 실세설.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/현자 회의와 72 대마신 체제.md`
  - `wiki/entities/aika-desmone-mubeil-aiki-lau.md`
  - `wiki/entities/nerine.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
  - `wiki/log.md`
- 핵심 정리:
  - 여왕령은 마법사령을 미치광이 살인광 네리네가 스승과 친구를 배신하고 독재하는 `인형놀이 왕국`으로 가르친다.
  - 이 선전은 네리네의 실제 폭력성, 네블레이드, 시에라 행방 의혹, 가까운 인물 처분에 기대므로 완전한 날조는 아니다.
  - 그럼에도 마법사령의 객관적 학술성과 자유로운 분위기는 여왕령 백성, 특히 오랜 인사 누적으로 출세가 막힌 신생 엘리트에게 유혹으로 작동한다.
  - 네리네가 꾸준히 마신 척살론을 외치기 때문에, 마신을 지도자·두뇌·신앙 대상으로 보는 여왕령 백성의 친마법사령 분위기는 커지다가도 다시 수그러든다.
  - 일부 학자는 네리네가 온화했다면 아이카가 마신과 엘리트 이반을 막기 위해 거의 입헌 군주제에 가까울 정도로 권력을 내려놓았을 수 있다고 본다.
- 검삭 필요:
  - `인형놀이 왕국` 선전의 공식성.
  - 신생 여왕령 엘리트의 구체 계층과 실제 이탈 사례.
  - 네리네의 마신 척살론이 공식 정책, 연설, 개인적 구호 중 어디에 속하는지.
  - 여왕령의 마신 신앙이 교육·의례·정치 예법에서 나타나는 방식.

## 2026-06-01 - 크로니카 투항과 마법사령 수용 충격 보정

- 작업: 현재 대화에서 추가된 크로니카의 마법사령 투항, 백성 보호 각오, 마법사령의 예상 밖 수용, 여왕령 마신들의 충격을 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-chronica-surrender-asylum-shock.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/entities/kamaso-kamila.md`
  - `wiki/events/크로니카의 탈주.md`
  - `wiki/events/크로니카의 도서관 정착.md`
  - `wiki/events/크로니카의 마법사령 정착과 흡혈귀 단속 사건.md`
  - `wiki/events/카마소 카밀라 혈핵 재난 사건.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/여왕령 반마법사령 선전과 이반 유혹.md`
  - `wiki/syntheses/chronica-criella-complete-storyline.md`
  - `wiki/syntheses/chronica-kamaso-blood-core-arc.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/index.md`
- 핵심 정리:
  - 크로니카는 흡혈 주술의 발명자라는 이유로 자신뿐 아니라 신도와 영지민, 백성까지 숙청될 수 있다고 보았다.
  - 그녀는 자기 하나를 제물 또는 책임자로 바쳐서라도 따라온 사람들을 마법사령에서 안전하게 살릴 각오로 투항했다.
  - 마법사령은 뜻밖에도 크로니카 본인까지 그대로 받아들였고, 그녀의 마도서·행정·조직 관리 능력을 희소한 실무 인력으로 흡수했다.
  - 이 사건은 여왕령 마신들에게 마법사령이 위험한 발명자도 처형하지 않고 제도 안에 흡수할 수 있다는 충격적인 선례가 되었다.
  - 크로니카의 성공적 정착은 여왕령 내부의 친마법사령 이반 유혹을 실제 사례로 뒷받침한다.
- 검삭 필요:
  - 크로니카의 법적 지위가 투항, 망명, 탈주, 배신 중 무엇으로 기록되는지.
  - 크로니카가 데려간 신도와 영지민의 규모.
  - 크로니카 수용을 결정한 마법사령 측 주체.
  - 여왕령 마신들이 이 사건을 공개 발언과 사적 논의에서 어떻게 해석했는지.

## 2026-06-01 - 브줄 가문 이반과 크로니카 선례 보정

- 작업: 현재 대화에서 추가된 파괴의 마신 브줄 가문의 마법사령 이반, 에리디나 리나시타 혈통 제한, 티라하 브줄의 72 대마신 배제, 사바하 브줄의 이주 결정, 네리네의 광산 지역 하사를 위키에 반영했다.
- 변경 페이지:
  - `wiki/sources/current-session-bzul-defection-chronica-precedent.md`
  - `wiki/concepts/브줄 가문.md`
  - `wiki/entities/sabaha-bzul.md`
  - `wiki/entities/tiraha-bzul.md`
  - `wiki/events/브줄 가문의 마법사령 이반.md`
  - `wiki/entities/eridina-rinasita.md`
  - `wiki/entities/wimea-haran.md`
  - `wiki/entities/chronica-criella.md`
  - `wiki/entities/nerine.md`
  - `wiki/concepts/마법사 좌석 구조.md`
  - `wiki/concepts/승천자.md`
  - `wiki/concepts/72-대마신.md`
  - `wiki/concepts/현자 회의와 72 대마신 체제.md`
  - `wiki/concepts/여왕령 반마법사령 선전과 이반 유혹.md`
  - `wiki/concepts/여왕령과 마법사령.md`
  - `wiki/concepts/여왕령과 마법사령 정통성 분쟁.md`
  - `wiki/events/크로니카의 마법사령 정착과 흡혈귀 단속 사건.md`
  - `wiki/events/소설 개별 사건 인덱스.md`
  - `wiki/sources/current-session-mage-seat-distribution.md`
  - `wiki/syntheses/mukere-rinasita-and-miriokarion.md`
  - `wiki/syntheses/novel-character-catalog.md`
  - `wiki/syntheses/novel-setting-catalog.md`
  - `wiki/syntheses/novel-event-catalog.md`
  - `wiki/syntheses/novel-event-detailed-chronology.md`
  - `wiki/index.md`
  - `wiki/한글-목차.md`
  - `wiki/parts/보석검-파트.md`
- 핵심 정리:
  - 브줄은 에리디나 리나시타를 배출한 오래된 파괴의 마신 가문이다.
  - 브줄은 강력했지만 마법사령 시조 혈통 때문에 여왕령에서 출세에 은근한 제한을 받았다.
  - 티라하 브줄이 72 대마신에서 밀려난 뒤, 가주 사바하 브줄은 능력 부족도 아닌데 계속 눈칫밥을 먹느니 마법사령으로 이주하겠다고 판단했다.
  - 크로니카가 위험한 흡혈 주술 발명자였음에도 마법사령에 받아들여진 선례가 브줄 이반의 결정적 근거가 되었다.
  - 네리네는 브줄을 에리디나의 가문으로 격렬히 환영하고, 자원은 많지만 개발되지 않은 산맥 광산 지역을 통째로 하사했다.
  - 브줄은 휴리·리미나리스·사도우와 함께 마법사령 주요 세력 몫 좌석을 설명하는 축으로 정리했다.
- 검삭 필요:
  - `파괴의 마신`이 가문 별칭인지, 특정 조상/가주 칭호인지.
  - 티라하가 기존 72 좌석에서 축출된 것인지, 후보 경쟁에서 밀려난 것인지.
  - 브줄 이주 규모와 내부 반대파 여부.
  - 네리네가 하사한 산맥 광산 지역의 이름과 위치, 생산 자원.
  - 여왕령이 브줄 이반을 공식적으로 어떻게 선전하거나 대응했는지.
