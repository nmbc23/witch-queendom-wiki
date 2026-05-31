# Multimodel Web Console

This tool opens ChatGPT, Claude, and Google AI Studio in visible browser windows, sends one prompt to selected services, captures the latest answers, and saves each run to `raw/multimodel/<run-id>/`.

## Start The Local Helper

From the repository root:

```powershell
$env:MULTIMODEL_WORKSPACE='C:\Users\CadriacLord\OneDrive\문서\New project'
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' tools\multimodel-console\helper\server.js
```

The helper listens on `http://127.0.0.1:43891`.

## Load The Extension

1. Open Chrome.
2. Go to `chrome://extensions`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select `tools/multimodel-console/extension`.

## Run Tests

```powershell
& 'C:\Users\CadriacLord\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tools/multimodel-console/helper/*.test.js tools/multimodel-console/extension/test/*.test.js
```
