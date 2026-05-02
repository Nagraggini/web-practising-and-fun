document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("page_title");
    title.innerText = "Welcome";
    //====================== 0. feladat ============================
    //Egy oldalon egy ID-t csak egyszer szabad használni, így ez a parancs mindig pontosan egy elemet ad vissza.
    const elsoGomb = document.getElementById("elsoGomb");

    elsoGomb.addEventListener("click", () => {
        //A gomb szövegét módosítjuk.
        elsoGomb.innerText = "Hahó! Megváltozott a szöveg.";
    });

    //Ha több ilyen osztályú elem is van, a querySelector csak a legelsőt fogja kiválasztani.
    const masodikGomb = document.querySelector(".masodikGomb");
    const kiemeltCikk = document.querySelector("kiemeltCikk");

    masodikGomb.addEventListener("click", () => {
        masodikGomb.innerText = "Hello";
        console.log("Kiemelt cikk: " + kiemeltCikk);
    });

    //====================== 1. feladat ============================
    // 1. Gomb lekérése
    const harmadikGomb = document.querySelector("#harmadikGomb");
    console.log("A gomb szövege: " + harmadikGomb.innerText);

    // 2. Gomb színének változtatása click eseményre
    harmadikGomb.addEventListener("click", (event) => {
        console.log("A gomb szövege target-el: " + event.target.innerText);
        event.target.style.backgroundColor = "blue";
    });
    //====================== 2. feladat ============================
    const kivalasztottSzinHatterhez = document.getElementById(
        "kivalasztottSzinHatterhez",
    );

    kivalasztottSzinHatterhez.addEventListener("input", (e) => {
        const hexColor = e.target.value;
        document.querySelector("body").style.backgroundColor = hexColor;
        document.querySelector(".kiemeltCikk").style.backgroundColor = hexColor;
    });
    //====================== 3. feladat ============================
    // 3. Színválasztó input
    const kivalasztottSzinInput = document.getElementById("kivalasztottSzin");
    const szinMutatasa = document.getElementById("szinMutatasaLabel");

    // 4. Színváltozás figyelése
    kivalasztottSzinInput.addEventListener("input", (e) => {
        const hexColor = e.target.value;
        console.log("Most kiválasztott szín:", hexColor);
        szinMutatasa.textContent = `Kiválasztott szín hex kódja: ${hexColor}`;
    });

    // 5. Kézi alapértelmezett érték beállítása
    kivalasztottSzinInput.value = "#448e88"; // lila
    //szinMutatasa.textContent = `Kiválasztott szín hex kódja: ${kivalasztottSzinInput.value}`;

    //====================== 4. feladat ============================

    //A querySelectorAll nem egyetlen elemet ad vissza, hanem egy NodeList-et (olyan, mint egy tömb/lista).
    const ingredientsLista = document.querySelectorAll("ul.ingredients li");
    const negyedikGomb = document.getElementById("negyedikGomb");

    negyedikGomb.addEventListener("click", () => {
        // Egy ciklussal végigmegyünk a lista minden egyes elemén
        ingredientsLista.forEach((e) => {
            e.style.backgroundColor = "blue";
            e.style.color = "white";
            ingredientsLista[0].textContent = "Teljeskiőrlésű liszt";
        });
    });
});
