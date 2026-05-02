//Mobilos navigációs bár mutatása és elrejtése.
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//Footerben lévő évszám beállítása.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
