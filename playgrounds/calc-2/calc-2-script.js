function szamitas() {
    //html-ben lévő id-kra hivatkozunk.
    let aOperandus = Number(document.getElementById("a").value);
    let bOperandus = Number(document.getElementById("b").value);

    let muveletSelect = document.getElementById("muvelet");

    let muvelet = muveletSelect.options[muveletSelect.selectedIndex].value;

    let eredmeny = 0;

    switch (muvelet) {
        case "+":
            eredmeny = aOperandus + bOperandus;
            break;
        case "-":
            eredmeny = aOperandus - bOperandus;
            break;
        case "*":
            eredmeny = aOperandus * bOperandus;
            break;
        case "/":
            if (bOperandus != 0) {
                eredmeny = aOperandus / bOperandus;
            } else {
                eredmeny = "Nem végrehajtható művelet!";
            }

            break;
    }

    let ujLi = document.createElement("li");
    ujLi.innerHTML =
        aOperandus + " " + muvelet + " " + bOperandus + " = " + eredmeny;
    document.getElementById("elozo").appendChild(ujLi);
}

function oldalBetoltve() {
    //Egyszer kell, hogy betöltsön.
    // lambda üres paraméterrel. () => {}
    setTimeout(() => {
        const valasz = confirm("Szeretné megnézni a GitHub projektjeimet?");
        if (valasz) {
            window.location.href = "https://github.com/Nagraggini";
        } else {
            const h1 = document.querySelector("h1");
            h1.style.color = "red";
        }
    }, 10000); /// 1000 -> 1 másodperc
}
