const body = document.querySelector("body");
const navMenu = document.querySelector(".nav-menu");

function showMenu () {
  navMenu.style.display = "flex";
  body.classList.add("no-scroll");
}

function closeMenu () {
  navMenu.style.display = "none";
  body.classList.remove("no-scroll");
}