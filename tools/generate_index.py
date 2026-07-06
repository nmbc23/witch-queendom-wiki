#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""wiki/index.md 자동 생성기. 사용법(저장소 루트): python tools/generate_index.py
index.md는 이 스크립트의 산출물이므로 손으로 편집하지 않는다."""
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
WIKI = REPO / "wiki"

NOTE_EVT = "시간 순서는 [[종합/소설 상세 사건 연표|소설 상세 사건 연표]] 참조."
SECTIONS = [
    ("파트", "파트 입구", "에피소드 파트 단위 진입점."),
    ("인물", "인물", None),
    ("세력", "세력", None),
    ("장소", "장소", None),
    ("법칙", "법칙·체계", None),
    ("사물", "사물", None),
    ("관계", "관계", "둘 이상에 걸친 관계·분쟁·상호 인식."),
    ("사건", "사건", NOTE_EVT),
    ("종합", "종합", "아크 서사·연표·톤 문서. 목록형 카탈로그는 두지 않는다."),
    ("소스", "원문 소스", "원고·외전·인벤토리 단위. 세션 보정은 raw/sessions/에 있다."),
    ("질문", "질문", None),
    ("메타", "위키 메타", "위키·제작 자료."),
]

def pages(folder):
    d = WIKI / folder
    if not d.exists():
        return []
    return sorted((p for p in d.glob("*.md") if p.stem != "index"), key=lambda p: p.stem)

def main():
    out = ["---", "type: index", "status: generated",
           f"updated: {date.today().isoformat()}", "---", "", "# Wiki Index", "",
           "> 이 문서는 `python tools/generate_index.py`로 자동 생성된다. 손으로 편집하지 않는다.", "",
           "작업 문서: [[schema|스키마]] · [[log|작업 로그]] · [[미결|미결 큐]]", ""]
    for folder, title, note in SECTIONS:
        ps = pages(folder)
        if not ps:
            continue
        out.append(f"## {title} ({len(ps)})")
        out.append("")
        if note:
            out.append(note); out.append("")
        if folder == "파트" and (WIKI / "파트/index.md").exists():
            out.append("- [[파트/index|소설 파트 인덱스]]")
        for p in ps:
            out.append(f"- [[{folder}/{p.stem}|{p.stem}]]")
        out.append("")
    (WIKI / "index.md").write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")
    print(f"index.md 재생성: {sum(len(pages(f)) for f,_,_ in SECTIONS)}개 페이지 색인")

if __name__ == "__main__":
    main()
