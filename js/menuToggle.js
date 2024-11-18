function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById("hamburger");
x.onclick = toggleMenu;