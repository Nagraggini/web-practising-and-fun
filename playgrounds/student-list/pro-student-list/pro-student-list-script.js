function tanuloTablazatbaSzurasa() {
    const nev = document.getElementById("nev").value.trim();
    const kor = document.getElementById("kor").value.trim();

    //Ez a select:
    const tantargy = document.getElementById("tantargy");
    const tantargyText = tantargy.options[tantargy.selectedIndex].text;

    //Leellenőrizzük, hogy ki vannak-e töltve a mezők.
    if (nev && kor && tantargy.value) {
        //Új sor beszúrása a táblázatba.
        const tbody = document.querySelector("table tbody");
        const ujSor = document.createElement("tr");
        ujSor.innerHTML = `
        <td>${nev}</td>
        <td>${kor}</td>
        <td>${tantargyText}</td>
        `;
        tbody.appendChild(ujSor);
        document.querySelector("form").reset();
    } else {
        alert("Minden mezőt ki kell tölteni!");
    }
}
