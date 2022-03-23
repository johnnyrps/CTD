foreach($nome in $(Get-Content -Path .\lista_nomes.txt)) {
    Write-Output "O nome é $nome"
    if ($nome -eq "Pedro") {
        Write-Output "Encontrou $nome"
      } else {
         $outrosNomes++
      }
}

Agora segue resultado do exercício 2. 

$sourcePath = "/tmp/*"
$destinyPath = "/Users/johnny/vagrant"
$date = Get-Date -Format d-M-yyyy
Copy-Item $sourcePath $destinyPath -Recurse -Verbose *> "$destinyPath\log-$date.txt"