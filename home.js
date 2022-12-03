const arrowLeft = document.querySelector(".slider-arrow-left");
const arrowRight = document.querySelector(".slider-arrow-right");
const cardsContainer = document.querySelector(".cards-container");
const dotOne = document.querySelector(".dot-one");
const dotTwo = document.querySelector(".dot-two");
const card = document.querySelector(".card-one");
let transformPx = 0;


function moveRight () {
  let cardWidth = card.offsetWidth;
  transformPx = transformPx + cardWidth + 15;
  let newTransform = transformPx + 'px';
  cardsContainer.style.transform = `translateX(${newTransform})`;
  dotTwo.classList.remove("active");
  dotOne.classList.add("active");
  arrowRight.classList.remove("inactive");
  arrowLeft.classList.add("inactive");
}

function moveLeft () {
  let cardWidth = card.offsetWidth;
  transformPx = transformPx - cardWidth - 15;
  let newTransform = transformPx + 'px';
  cardsContainer.style.transform = `translateX(${newTransform})`;
  dotOne.classList.remove("active");
  dotTwo.classList.add("active");
  arrowLeft.classList.remove("inactive");
  arrowRight.classList.add("inactive");
}
