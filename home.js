const arrowLeft = document.querySelector(".slider-arrow-left");
const arrowRight = document.querySelector(".slider-arrow-right");
const cardsContainer = document.querySelector(".cards-container");
const sliderDots = document.querySelector(".slider-dots");
const dotOne = document.querySelector(".dot-one");
const dotTwo = document.querySelector(".dot-two");
const dotThree = document.querySelector(".dot-three");
const dots = [dotOne, dotTwo, dotThree];
const card = document.querySelector(".card-one");
let transformPx = 0;
let index = 0;
let cardWidth = card.offsetWidth;


function moveLeft () {
  transformPx = transformPx + cardWidth + 15;
  let newTransform = transformPx + 'px';
  cardsContainer.style.transform = `translateX(${newTransform})`;
  index -= 1;

  console.log(dots[index]);

  dots[index].classList.add("active");
  for (let i = 0; i < dots.length; i++) {
    if (i !== index) {
      dots[i].classList.remove("active");
    }
  }

  if (index == 0) {
    arrowLeft.classList.add("inactive");
  }

  if (index < dots.length -1) {
    arrowRight.classList.remove("inactive");
  }
}

function moveRight () {
  transformPx = transformPx - cardWidth - 15;
  let newTransform = transformPx + 'px';
  cardsContainer.style.transform = `translateX(${newTransform})`;
  index += 1;

  dots[index].classList.add("active");
  for (let i = 0; i < dots.length; i++) {
    if (i !== index) {
      dots[i].classList.remove("active");
    }
  }

  if (index == dots.length - 1) {
    arrowRight.classList.add("inactive");
  }

  if (index > 0) {
    arrowLeft.classList.remove("inactive");
  }
}

function dotClick (e) {

    for (let i = 0; i < dots.length; i++) {
      if (e.target == dots[i]) {
        index = i;
        if (index == 0) {
          transformPx = 0;
        } else {
          transformPx = 0 - (cardWidth + 15) * i;
        }

        let newTransform = transformPx + 'px';
        cardsContainer.style.transform = `translateX(${newTransform})`;
        dots[i].classList.add("active");
        dots.map(x => {if (x !== e.target) {x.classList.remove("active")}});
      }

      if (index == 0) {
        arrowLeft.classList.add("inactive");
      }

      if (index < dots.length -1) {
        arrowRight.classList.remove("inactive");
      }

      if (index == dots.length - 1) {
        arrowRight.classList.add("inactive");
      }

      if (index > 0) {
        arrowLeft.classList.remove("inactive");
      }
    }
}

sliderDots.addEventListener("click", dotClick);

//------------- Menu --------------

// const dropdownLink = document.querySelector(".dropdown-link");
// const dropdownContainer = document.querySelector(".dropdown-container");

// function toggleMenu () {

// }
