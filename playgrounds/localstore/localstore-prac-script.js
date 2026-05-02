"use strict";

//https://www.geeksforgeeks.org/javascript/javascript-localstorage/
/*
localStorage.setItem("nev", "Leroy");

ourStorage = window.localStorage;

localStorage.setItem("key", "value");

let value = localStorage.getItem("key");

console.log("Adat: " + value);

//localStorage.removeItem('key');
//Összes adat törlése:
//localStorage.clear();

if (localStorage.getItem("username") !== null) {
    console.log("Username exists in localStorage");
} else {
    console.log("Username does not exist in localStorage");
}
*/

/*
Nem szöveges adatok tárolása
A localStorage kizárólag karakterláncokat (string) képes tárolni. Ha objektumokat vagy tömböket szeretnél menteni, használd a JSON metódusokat:
*/
/*
// Mentésnél (Objektum -> String):
const first = { name: "Anna", age: 25 };
localStorage.setItem("first", JSON.stringify(first));

// 1. módszer: Közvetlen lekérés
const getFirst = JSON.parse(localStorage.getItem("first"));
console.log("getFirst (teljes objektum):", getFirst);
console.log("getFirst (teljes objektum):" + getFirst); //getFirst (teljes objektum):[object Object]

// 2. módszer: Referencia használatával (ourStorage)
const ourStorage = window.localStorage;
const storedUser = JSON.parse(ourStorage.getItem("first"));

// Itt a javítás: a .name-et kérjük le a storedUser-ből
console.log("A keresett név: ", storedUser.name); // Eredmény: "Anna"
*/

//==========================================
//Teszt adatok.
function newTestQuest() {
    //13 karakteres szám.
    let id = Math.floor(Math.random() * 9000000000000) + 1000000000000;

    //Random true vagy false.

    let check = {
        id: Date.now(),
        check: ["true", "false"][Math.floor(Math.random() * 2)],
    };

    let checkbox = check.check;
    //Random szöveg.
    let descriptionInput = crypto.randomUUID();

    //Random dátum.
    let d = new Date(
        +new Date(2024, 0, 1) +
            Math.random() * (+new Date(2026, 11, 31) - +new Date(2024, 0, 1)),
    );
    let dateInput = `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;

    //Random priority.
    let task = {
        id: Date.now(),
        priority: ["Low", "Normal", "High"][Math.floor(Math.random() * 3)],
    };

    let priorityInput = task.priority;

    let list = [id, checkbox, descriptionInput, dateInput, priorityInput];

    localStorage.setItem(id, JSON.stringify(list));
    console.log("A lista hossza: " + list.length);
    console.log(list.toString()); //62120516,[object HTMLInputElement],,,
}

//Oda rakod a függvény mögé a ()-et akkor mindig lefut, ha elindítod az oldalt. De nem fut, amikor rányomsz a gombra.
document
    .querySelector(".randomQuestButton")
    .addEventListener("click", newTestQuest);

function adatlekeres() {
    const ourStorage = window.localStorage; //Visszaolvasás, vagy üres tömböt kapunk.
    console.log(ourStorage);

    // Visszaalakítjuk tömbbé (ha létezik az adat).
    if (ourStorage) {
        console.log("A tömb hossza:" + ourStorage.length);

        // 1. Kiszedjük az értékeket és végigmennyünk rajtuk
        Object.values(ourStorage).forEach((item) => {
            //Ebben a forEachben az AI segített bevallom a tbody sorig. :)
            // 2. Mivel a "length" is benne van a Storage-ben, azt ki kell szűrni
            if (typeof item === "string") {
                // 3. A szöveget (string) valódi tömbbé alakítjuk
                const dataArray = JSON.parse(item);

                // Most már hozzáférsz az adatokhoz index alapján:
                const idOld = dataArray[0];
                const checkboxOld = dataArray[1];
                const descriptionOld = dataArray[2];
                const dateOld = dataArray[3];
                const priorityOld = dataArray[4];

                // Osztálynév meghatározása a select értéke alapján
                let pClass = "";
                if (priorityOld === "Low") pClass = "low";
                else if (priorityOld === "Normal") pClass = "normal";
                else if (priorityOld === "High") pClass = "high";

                //Új sor beszúrása a táblázatba.
                const tbody = document.querySelector("table tbody");
                const ujSor = document.createElement("tr");
                ujSor.id = idOld; //Egyedi id.

                //A tr-nek van egyedi id-ja.
                ujSor.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${descriptionOld}</td>
            <td>${dateOld}</td>            
            <td class="${pClass}">${priorityOld}</td>`; // Itt adjuk át a class-t, ami kell a színkódhoz.

                //Hozzáadjuk a táblázathoz.
                tbody.appendChild(ujSor);
                //id-ra hivatkozunk.
                document.getElementById("questForm").reset();
            }
        });
    } else {
        console.log("Nincs egy feladat sem a localStorage-ban.");
    }
}

adatlekeres();
