---
type: log
status: draft
updated: 2026-05-16
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
