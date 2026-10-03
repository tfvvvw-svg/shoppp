Add-Type -AssemblyName System.Drawing

function Load-Bmp($path) {
  $img = [System.Drawing.Bitmap]::FromFile($path)
  return $img
}

function BBox($bmp, $x0, $x1, $y0, $y1, $pred) {
  $minX = [int]::MaxValue; $maxX = -1; $minY = [int]::MaxValue; $maxY = -1
  for ($y = $y0; $y -le $y1; $y++) {
    for ($x = $x0; $x -le $x1; $x++) {
      $c = $bmp.GetPixel($x, $y)
      if (& $pred $c) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  return "$minX,$minY -> $maxX,$maxY  (w=$($maxX-$minX+1) h=$($maxY-$minY+1))"
}

$redPred = { param($c) return ($c.R -gt 170 -and $c.G -lt 100 -and $c.B -lt 100) }
$darkPred = { param($c) return ($c.R -lt 60 -and $c.G -lt 60 -and $c.B -lt 60) }

$dir = 'C:\Users\user\Desktop\shop new\src\figma examples'

$nf = Load-Bmp "$dir\notfound-1 (4).png"
Write-Output "notfound-1 size = $($nf.Width) x $($nf.Height)"
Write-Output ("nf title bbox:  " + (BBox $nf 0 ($nf.Width-1) 300 560 $darkPred))
Write-Output ("nf red btn bbox:" + (BBox $nf 0 ($nf.Width-1) 560 800 $redPred))
Write-Output ("nf crumbs bbox: " + (BBox $nf 0 ($nf.Width-1) 180 280 $darkPred))
$nf.Dispose()

$su = Load-Bmp "$dir\signup-1 (4).png"
Write-Output "signup-1 size = $($su.Width) x $($su.Height)"
Write-Output ("su red btn bbox: " + (BBox $su 900 ($su.Width-1) 600 780 $redPred))
Write-Output ("su title bbox:   " + (BBox $su 900 ($su.Width-1) 260 380 $darkPred))
$su.Dispose()
