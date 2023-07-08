$filepath = "F:\Users\nshepard\Desktop\Vicki not school\2018 Vicki's Movie List.xlsx - Sheet1.csv"
#$filepath2 = "C:\Users\nshepard\Documents\My Web Sites\missingMovies2.txt"
#
#Get-Content -Path $filepath | ForEach-Object {
#    #if ($_.ToLower().Contains('dvd')) {
#    #    $_ = $_.Replace('dvd', 'DVD')
#    #    if ($_.ToLower().Contains(', DVD')) { }
#    #    else { $_ = $_.Replace('DVD', ',DVD') }
#    #    }
#    #    else { $_ = $_ + ',Blu-Ray' }
#    #    $_
#    $_ = $_.Replace(', ,', ',')
#    $_
#        } | Set-Content -Path $filepath2
#
#Remove-Item -Path $filepath
#
#Rename-Item -Path $filepath2 -NewName "missingMovies.txt"

Import-Csv -Path $filepath | ConvertTo-Json | Add-Content -Path "F:\Users\nshepard\Documents\MyWebSites\NolShepard.github.io\movies\movies2.json"