param(
  [string]$WorkspaceRoot,
  [int]$Port = 43891,
  [string]$NodePath
)

$ErrorActionPreference = 'Stop'
$ScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

if (-not $WorkspaceRoot) {
  $WorkspaceRoot = (Resolve-Path (Join-Path $ScriptRoot '..\..')).Path
} else {
  $WorkspaceRoot = (Resolve-Path $WorkspaceRoot).Path
}

if (-not $NodePath) {
  $bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
  if (Test-Path $bundledNode) {
    $NodePath = $bundledNode
  } else {
    $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
    if (-not $nodeCommand) {
      throw 'Node.js was not found. Pass -NodePath or install Node.js.'
    }
    $NodePath = $nodeCommand.Source
  }
}

$env:MULTIMODEL_WORKSPACE = $WorkspaceRoot
$env:MULTIMODEL_HELPER_PORT = [string]$Port

& $NodePath (Join-Path $ScriptRoot 'helper\server.js')
