const body = document.querySelector("body");
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");

if (window.innerWidth < 992) {
  navMenu.style.transform = `translateX(-100%)`;
}

function toggleMenu () {
  if (navMenu.style.transform == "translateX(-100%)") {
    navMenu.style.transform = 'translateX(0)';
    body.classList.add("no-scroll");
    menuIcon.classList.add("clicked");
  } else {
    navMenu.style.transform = "translateX(-100%)";
    body.classList.remove("no-scroll");
    menuIcon.classList.remove("clicked");
  }
}

const header = document.querySelector("header");

const onScroll = function onScroll(event) {
  if (window.pageYOffset > header.clientHeight) {
    header.classList.add("header-sm");
  } else {
    header.classList.remove("header-sm");
  }
};

// We would prefer to define onScroll inline, but JavaScript does not allow inline ifs
window.addEventListener("scroll", onScroll);