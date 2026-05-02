//Minden kattintáskor felkerül a víz a bevásárlólistára.
document.querySelector(".appendButton1").addEventListener("click", () => {
    //Létrehozunk egy üres li tag-et.
    const node = document.createElement("li");
    // Text note kreálás, vagyis létre jön maga a szöveg.
    const textnode = document.createTextNode("Víz(TextNode-os módszer)");
    //A text note-ot hozzáadjuk az li-hez. A node örökbe fogadja a textnode-t.
    node.appendChild(textnode);
    // A kész elemet felrakjuk a "falra".
    document.getElementById("myList").appendChild(node);
});

document.querySelector(".appendButton2").addEventListener("click", () => {
    /*Ez a leggyakrabban használt módszer a modern fejlesztésben. Átlátható, és mivel a textContent csak szövegként kezeli az adatot, nem kell tartanod attól, hogy valaki rosszindulatú kódot (scriptet) injektál az oldaladba.*/
    // 1. Elem létrehozása
    const node = document.createElement("li");

    // 2. Szöveg hozzáadása (nem kell külön textNode)
    node.textContent = "Víz (textContent módszer)";

    // 3. Beszúrás a listába
    document.getElementById("myList").appendChild(node);
});

document.querySelector(".appendButton3").addEventListener("click", () => {
    /*Ha nem akarsz változókkal és elem-létrehozással bajlódni, ez a legpraktikusabb. Itt közvetlenül a HTML-kódot (stringként) adod át.*/
    const list = document.getElementById("myList");

    // "beforeend" -> a listán belülre, az utolsó gyerek után szúrja be
    list.insertAdjacentHTML(
        "beforeend",
        "<li>Víz (insertAdjacentHTML módszer)</li>",
    );
});

document.querySelector(".appendButton4").addEventListener("click", () => {
    /*Az append() a hagyományos appendChild() modernebb verziója. A legnagyobb különbség, hogy ez egyszerre több elemet is tud fogadni, és sima szöveget is beszúrhatsz vele anélkül, hogy HTML tag-ekbe csomagolnád.*/

    const node = document.createElement("li");

    // Az .append() kezel szöveget és Node-ot is
    node.append("Víz (append módszer)");

    // Magát a listát is bővíthetjük .append()-del
    document.getElementById("myList").append(node);
});

document.querySelector(".appendButton5").addEventListener("click", (e) => {
    const node = document.createElement("li");

    // Az e.target maga a gomb, amire kattintottak.
    // Kivesszük belőle a gomb feliratát:
    node.textContent = e.target.textContent;

    document.getElementById("myList").append(node);
});

function addPlus() {
    /*Az addPlus függvényedben a collection[1]-et használod. Ez akkor működik, ha legalább két elem már van a listában (mivel az indexelés 0-tól indul, az [1] a második elem).*/
    const collection = document.getElementsByTagName("li");
    document.getElementById("demo").innerHTML = collection[1].innerHTML;
}
document.querySelector(".plusButton").addEventListener("click", addPlus);

//===================================================
//Gyors teszthez:
//document.write(b);
