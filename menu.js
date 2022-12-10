const body = document.querySelector("body");
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");
navMenu.style.display = "none";

function toggleMenu () {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "flex";
    body.classList.add("no-scroll");
    menuIcon.classList.add("clicked");
  } else {
    navMenu.style.display = "none";
    body.classList.remove("no-scroll");
    menuIcon.classList.remove("clicked");
  }
}