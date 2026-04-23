param([string]$Input = "")

$NavItems  = @("acScrew","ngx","accessories","eloOpp","chainGlide","pmxLegacy","rhine")
$NavLabels = @("AC/DC Screw","NGX","Accessories","ELO/OPP","ChainGlide","PMX/Legacy","Rhine")

if (-not $Input) {
    Write-Host "Usage: .\pandoc\build.ps1 'path\to\doc.docx'"
    exit 1
}
$Input = $Input -replace '\\','/'

# output path
$docName    = [System.IO.Path]::GetFileNameWithoutExtension($Input)
$defaultOut = "docs/$docName.html"
$output = Read-Host "Output HTML [$defaultOut]"
if (-not $output) { $output = $defaultOut }
$output = $output -replace '\\','/'

# title
$title = Read-Host "Page title"

# tags
$tagInput = Read-Host "Tags (comma-separated, or leave blank)"
$tagFlags = @()
if ($tagInput) {
    foreach ($t in ($tagInput -split ',')) {
        $tagFlags += "--metadata", "tags=$($t.Trim())"
    }
}

# active nav
Write-Host "`nActive nav item (leave blank to skip):"
for ($i = 0; $i -lt $NavLabels.Count; $i++) {
    Write-Host "  $($i+1)) $($NavLabels[$i])"
}
$navChoice = Read-Host ">"
$navFlag = @()
if ($navChoice -match '^\d+$') {
    $idx = [int]$navChoice - 1
    if ($idx -ge 0 -and $idx -lt $NavItems.Count) {
        $navFlag = "--variable", "active-$($NavItems[$idx])=true"
    }
}

# run pandoc
$outDir = Split-Path $output -Parent
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$pandocArgs = @(
    $Input,
    "-d", "pandoc/training.yaml",
    "--extract-media", $outDir,
    "--metadata", "title=$title",
    "-o", $output
) + $tagFlags + $navFlag

& pandoc @pandocArgs

# fix image paths
$prefix = $outDir.TrimEnd('/\') + "/media/"
(Get-Content $output -Raw) -replace [regex]::Escape("src=`"$prefix"), 'src="media/' |
    Set-Content $output -Encoding utf8

Write-Host "`nBuilt: $output"
