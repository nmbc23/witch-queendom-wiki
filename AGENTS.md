# Project Notes

- When looking for Codex-generated images for this project, check `P:\AI\Codex\generated_images` first. This is the active Codex home image store in this environment.
- Then check `P:\AI\forge\outputs\txt2img-images`, `P:\AI\forge\outputs\img2img-images`, `P:\AI\LLM-Wiki\wiki\assets\images`, and `P:\AI\LLM-Wiki\raw\images`.
- Treat `C:\Users\CadriacLord\.codex\generated_images` as a legacy/secondary location, not the primary one.
- If the user asks where a generated image from the current session went, search `P:\AI\Codex\generated_images` before checking `F:\DOWN` or app cache folders.
- 위키 유지 규칙과 디렉토리 역할은 `wiki/schema.md`(v2)를 따른다. index.md는 `python tools/generate_index.py`로 재생성한다.

## Wiki Encoding Rules

- Treat all markdown wiki files as UTF-8.
- On Windows PowerShell, always pass `-Encoding UTF8` when reading or writing wiki markdown with `Get-Content`, `Set-Content`, `Add-Content`, or `Out-File`.
- If Korean text or Obsidian links appear mojibaked, retry the same check with explicit UTF-8 before reporting corruption, adding a cleanup task, or appending to `wiki/log.md`.
- Do not treat image or asset links as broken page links; validate them against files under `wiki/assets/` separately.
