param(
  [Parameter(Mandatory=$true)][string]$Src,
  [Parameter(Mandatory=$true)][string]$OutDir,
  [string]$Prefix = 'slice',
  [int]$OutWidth = 1600,
  [int]$StripHeight = 1000
)
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($Src)
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$scale = [double]$OutWidth / $img.Width
$regionH = [int]($StripHeight / $scale)
$i = 0
for ($y = 0; $y -lt $img.Height; $y += $regionH) {
  $i++
  $h = [Math]::Min($regionH, $img.Height - $y)
  $outH = [int]($h * $scale)
  $bmp = New-Object System.Drawing.Bitmap($OutWidth, $outH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $dest = New-Object System.Drawing.Rectangle(0, 0, $OutWidth, $outH)
  $srcR = New-Object System.Drawing.Rectangle(0, $y, $img.Width, $h)
  $g.DrawImage($img, $dest, $srcR, [System.Drawing.GraphicsUnit]::Pixel)
  $path = Join-Path $OutDir ("{0}_{1:d2}.png" -f $Prefix, $i)
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  "$path = ${OutWidth}x${outH}" | Write-Output
  $g.Dispose(); $bmp.Dispose()
}
$img.Dispose()
Write-Output "scale=$scale regionH=$regionH strips=$i"
