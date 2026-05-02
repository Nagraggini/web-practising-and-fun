/*Akkor fut a JS, ha betöltött teljesen az oldal.*/
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tbody = document.querySelector("tbody");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); /*Ezzel akadályozzuk meg, hogy ne küldje el a szerverre, mert akkor újra töltené az oldalt és elveszne a beírt adat.*/

        const nev = document.getElementById("nev").value.trim();
        const kor = document.getElementById("kor").value.trim();

        //Ez a select:
        const tantargy = document.getElementById("tantargy");
        const tantargyText = tantargy.options[tantargy.selectedIndex].text;

        //Leellenőrizzük, hogy ki vannak-e töltve a mezők.
        if (nev && kor && tantargy.value) {
            //Új sor beszúrása a táblázatba.

            const ujSor = document.createElement("tr");
            ujSor.innerHTML = `
                <td>${nev}</td>
                <td>${kor}</td>
                <td>${tantargyText}</td>
                `;
            tbody.appendChild(ujSor);
            form.reset();
        } else {
            alert("Minden mezőt ki kell tölteni!");
        }
    });
});
