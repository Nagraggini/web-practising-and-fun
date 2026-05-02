![Workflow neve](https://github.com/Nagraggini/web-practising-and-fun/actions/workflows/playwright.yml/badge.svg)
![Top Language](https://img.shields.io/github/languages/top/Nagraggini/web-practising-and-fun)
![License](https://img.shields.io/badge/license-MIT-green)

# Gamer/geek teendő lista

[Live demo](https://nagraggini.github.io/web-projects/apps/questlog/)

# Házi feladat leírása

•  Készítsen weboldalt, melyen egy tennivalólistát tudunk kezelni.      
• Az oldal megnyitásakor bekérünk a felhasználótól egy nevet, majd 
lehetősége van felvinni tennivalókat egy táblázatba.            
• Egy tennivaló bejegyzésről 3 dolgot adhat meg: Megnevezés, Dátum, Fontosság {nem fontos, normál, fontos}        
• A táblázatban jelenjen meg a megnevezés és a dátum, és a
fontosságnak megfelelő színnel legyen kiírva:                 
• Különböző színűek legyenek: Nem fontos, normál , fontos           
• UX miatt más színet lettek beállítva.  

<!--TODO -->
-> Ezek még nem működnek: Done selected,Delete selected

# localStorage cheatsheet

```javascript
//Mentés
localStorage.setItem("nev", "Leroy");

//Lekérés
const nev = localStorage.getItem("nev");
console.log(nev); // Leroy

//Törlés
localStorage.removeItem("nev");

//Összestörlése
localStorage.clear();

//Mentés tömbbel
const tod = ["tanulás", "edzés", "projekt"];
localStorage.setItem("tod", JSON.stringify(tod));

//Visszaolvaás
const tod = JSON.parse(localStorage.getItem("tod")) || [];
console.log(tod);
```

# Kép kicsinyítése (Linux Mint-en)

Terminálban:
sudo apt install imagemagick

cd Dokumentumok/Icons

convert kep.png -resize 24x24 kiskep.png

