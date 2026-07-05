#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""wiki/index.md 자동 생성기.

사용법 (저장소 루트에서):
    python tools/generate_index.py

wiki/ 아래 페이지를 폴더별로 모아 가나다순 링크 목록을 만든다.
index.md는 이 스크립트의 산출물이므로 손으로 편집하지 않는다.
"""
import re
from datetime import date
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
WIKI = REPO / "wiki"

SECTIONS = [
    ("parts",     "파트 입구",   "에피소드 파트 단위 진입점."),
    ("entities",  "인물·세력",   None),
    ("concepts",  "개념·설정",   None),
    ("events",    "사건",        "시간 순서는 [[syntheses/소설 상세 사건 연표|소설 상세 사건 연표]] 참조."),
    ("syntheses", "종합",        "아크 서사·연표·톤 문서. 목록형 카탈로그는 두지 않는다."),
    ("sources",   "원문 소스",   "원고·외전·인벤토리 단위. 세션 보정은 raw/sessions/에 있다."),
    ("questions", "질문",        None),
    ("meta",      "위키 메타",   "위키 자체에 대한 문서."),
]

def pages(folder: str):
    d = WIKI / folder
    if not d.exists():
        return []
    ps = [p for p in d.glob("*.md") if p.stem != "index"]
    return sorted(ps, key=lambda p: p.stem)

def main():
    out = []
    out.append("---")
    out.append("type: index")
    out.append("status: generated")
    out.append(f"updated: {date.today().isoformat()}")
    out.append("---")
    out.append("")
    out.append("# Wiki Index")
    out.append("")
    out.append("> 이 문서는 `python tools/generate_index.py`로 자동 생성된다. 손으로 편집하지 않는다.")
    out.append("")
    out.append("작업 문서: [[schema|스키마]] · [[log|작업 로그]]")
    out.append("")
    for folder, title, note in SECTIONS:
        ps = pages(folder)
        if not ps:
            continue
        out.append(f"## {title} ({len(ps)})")
        out.append("")
        if note:
            out.append(note)
            out.append("")
        if folder == "parts" and (WIKI / "parts/index.md").exists():
            out.append("- [[parts/index|소설 파트 인덱스]]")
        for p in ps:
            out.append(f"- [[{folder}/{p.stem}|{p.stem}]]")
        out.append("")
    (WIKI / "index.md").write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")
    total = sum(len(pages(f)) for f, _, _ in SECTIONS)
    print(f"index.md 재생성 완료: {total}개 페이지 색인")

if __name__ == "__main__":
    main()
