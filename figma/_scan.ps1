param(
  [Parameter(Mandatory=$true)][string]$Src,
  [ValidateSet('row','col')][string]$Mode = 'row',
  [Parameter(Mandatory=$true)][int]$At,
  [string]$Hex = 'F5F5F5',
  [ValidateSet('hex','any')][string]$Match = 'hex',
  [int]$Tol = 8,
  [int]$MinRun = 6,
  [int]$Gap = 0
)

Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile($Src)
$t = [System.Drawing.ColorTranslator]::FromHtml('#' + $Hex)

function Test-Hit($c) {
  if ($Match -eq 'any') {
    return -not ($c.R -ge 250 -and $c.G -ge 250 -and $c.B -ge 250)
  }
  return ([Math]::Abs($c.R - $t.R) -le $Tol -and [Math]::Abs($c.G - $t.G) -le $Tol -and [Math]::Abs($c.B - $t.B) -le $Tol)
}

$limit = 0
if ($Mode -eq 'row') { $limit = $bmp.Width } else { $limit = $bmp.Height }

$runs = New-Object System.Collections.ArrayList
$start = -1
for ($i = 0; $i -lt $limit; $i++) {
  if ($Mode -eq 'row') { $c = $bmp.GetPixel($i, $At) } else { $c = $bmp.GetPixel($At, $i) }
  $h = Test-Hit $c
  if ($h -and $start -lt 0) { $start = $i }
  elseif (-not $h -and $start -ge 0) {
    [void]$runs.Add(@($start, ($i - 1)))
    $start = -1
  }
}
if ($start -ge 0) { [void]$runs.Add(@($start, ($limit - 1))) }

$merged = New-Object System.Collections.ArrayList
foreach ($r in $runs) {
  $done = $false
  if ($merged.Count -gt 0 -and $Gap -gt 0) {
    $last = $merged[$merged.Count - 1]
    if (($r[0] - $last[1] - 1) -le $Gap) {
      $merged[$merged.Count - 1] = @($last[0], $r[1])
      $done = $true
    }
  }
  if (-not $done) { [void]$merged.Add($r) }
}

foreach ($m in $merged) {
    $len = $m[1] - $m[0] + 1
    if ($len -ge $MinRun) {
      "d=$($m[0])..$($m[1]) len=$len | css=$([Math]::Round($m[0]/2,1))..$([Math]::Round($m[1]/2,1)) clen=$([Math]::Round($len/2,1))"
    }
}
$bmp.Dispose()
