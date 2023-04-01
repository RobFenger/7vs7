// Nieuwe URL instellen
history.pushState(null, null, "7vs7/home");

// Even wachten om de URL in de adresbalk te zien
setTimeout(() => {
  console.log("Nieuwe URL: ", window.location.href);
}, 1000);

// Luisteren naar URL wijzigingen
window.addEventListener("popstate", function (event) {
  console.log("Teruggegaan naar: ", window.location.href);
});

//to get the swiping functions
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);

const arrowLeft = document.querySelector(".slider-arrow-left");
const arrowRight = document.querySelector(".slider-arrow-right");
const cardsContainer = document.querySelector(".cards-container");
const numberOfCards = cardsContainer.childElementCount;
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
  if (index != 0) {
    transformPx = transformPx + cardWidth + 15;
    let newTransform = transformPx + 'px';
    cardsContainer.style.transform = `translateX(${newTransform})`;
    index -= 1;
  }

  console.log(dots[index]);

  if (window.innerWidth > 992) {
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
  } else {
    if (index == 0) {
      arrowLeft.classList.add("inactive");
    }

    if (index < numberOfCards - 1) {
      arrowRight.classList.remove("inactive");
    }
  }
}

function moveRight () {
  if (index != numberOfCards - 1) {
    transformPx = transformPx - cardWidth - 15;
    let newTransform = transformPx + 'px';
    cardsContainer.style.transform = `translateX(${newTransform})`;
    index += 1;
  }



  if (window.innerWidth > 992) {
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
  } else {
    if (index >= numberOfCards - 1) {
      arrowRight.classList.add("inactive");
    }

    if (index > 0) {
      arrowLeft.classList.remove("inactive");
    }
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

cardsContainer.addEventListener("swiped-right", moveLeft);
cardsContainer.addEventListener("swiped-left", moveRight);
