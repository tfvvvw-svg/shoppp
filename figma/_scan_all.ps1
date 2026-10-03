$src = '.\figma\E-Commerce HomePage.png'
$out = '.\figma\_scan_out.txt'
"" | Out-File $out -Encoding utf8
function S($tag, $mode, $at, $match, $minrun, $gap) {
  "=== $tag (mode=$mode at=$at match=$match minrun=$minrun gap=$gap) ===" | Out-File -Append $out -Encoding utf8
  powershell -NoProfile -File .\figma\_scan.ps1 -Src $src -Mode $mode -At $at -Match $match -MinRun $minrun -Gap $gap |
    Out-File -Append $out -Encoding utf8
}

S 'hero row' 'row' 900 'any' 4 16
S 'flashsales cards strip' 'row' 1800 'hex' 20 0
S 'flashsales viewall button' 'row' 2400 'any' 4 16
S 'thismonth header row' 'row' 2940 'any' 4 16
S 'bestselling photo row' 'row' 3300 'any' 4 16
S 'explore header row' 'row' 3840 'any' 4 16
S 'explore row2 boxes' 'row' 7600 'hex' 20 0
S 'services row upper' 'row' 10400 'any' 4 16
S 'mystery band 5540' 'row' 11080 'any' 4 16
S 'page centre column' 'col' 1440 'any' 3 10
