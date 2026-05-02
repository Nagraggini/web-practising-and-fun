"use strict";

// Importálás.
import { UI } from "./ui-script.js";
import { Events } from "./events-script.js";
import { Test } from "./test-script.js";

//Példányosítások.
const uiInstance = new UI();
const eventsInstance = new Events();
const testInstance = new Test();

//Név és quest lista lekérésése, valamint évszám beállítása.
window.addEventListener("load", () => {
    (((window.onload = uiInstance.setName()), uiInstance.displayQuestList()),
        uiInstance.setYear()); //Kiírjuk a quest listát, ha nincs akkor a teszt sort.
});

function setDateInput() {
    //Beállítjuk, hogy csak jövőbeli dátumot lehessen megadni.
    // 1. Lekérjük a mai dátumot ISO formátumban (YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    // 2. Beállítjuk a 'min' attribútumot a HTML elemünkön.
    document.getElementById("quest-date").setAttribute("min", today);
}

setDateInput();

let nameInput = document.querySelector(".name");

/*Név beállítása-*/
document.querySelector(".nameSubmit").addEventListener("click", (event) => {
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    event.preventDefault();

    // Kiolvassuk az értéket az input mezőből.
    let name = nameInput.value;
    console.log(name);
    uiInstance.newNameDisplayClear();
    if (name) {
        //Template Literal
        document.querySelector(".welcome").textContent = `Hello ${name}!`;

        //Mentés
        localStorage.setItem("name", name);
    }
});

document.querySelector(".questSubmit").addEventListener("click", (e) => {
    // Ez a titkos fegyver: megakadályozza az oldal frissítését.
    e.preventDefault();

    //localStorage mentéshez.
    let descriptionInput = document.querySelector(".description").value;
    let dateInput = new Intl.DateTimeFormat("hu-HU").format(
        new Date(document.querySelector(".date").value),
    );
    let priorityInput = document.querySelector(".priority").value;

    //Leellenőrizzük, hogy tuti nem üresek.
    if (descriptionInput && dateInput && priorityInput) {
        // Generálunk egy egyedi ID-t
        const id = Date.now().toString();

        //Mentés tömbben.
        let lista = [id, false, descriptionInput, dateInput, priorityInput];

        //Hozzáadjuk a localStorage-hoz.
        localStorage.setItem(id, JSON.stringify(lista));

        //Kiírjuk a konzolra az értékeket.
        console.log("A lista hossza: " + lista.length);
        console.log(lista.toString());

        uiInstance.newNameDisplayClear();
        uiInstance.newQuestDisplayClear();
        uiInstance.displayQuestList();
    } else {
        alert("Kérlek tölts ki minden mezőt!");
    }
});

//Egy soros utasításnál nem kell a függvény mögő tenni a zárójeleket, ha kiteszed, akkor az oldalbetültésekor egyből lefut.
document.querySelector(".deleteAllButton").addEventListener("click", () => {
    localStorage.clear();
    document.querySelector(".welcome").textContent = "Hello!";

    //Beviteli mezők kiürításe.
    uiInstance.newNameDisplayClear();
    uiInstance.newQuestDisplayClear();

    uiInstance.displayQuestList();

    uiInstance.displayFirework();
    console.log("History cleared!");
});

//Oda rakod a függvény mögé a ()-et akkor mindig lefut, ha elindítod az oldalt. De nem fut, amikor rányomsz a gombra.
document.querySelector(".randomQuestButton").addEventListener("click", () => {
    (testInstance.newTestQuest(), uiInstance.displayQuestList());
});

// TODO deleteButton gomb eseménykezelője.
// TODO doneButton eseménykezelője.
