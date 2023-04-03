const team = document.querySelector('input[id=team]:checked');
const teamName = document.querySelector(".team-name-input");
const formContainer = document.querySelector(".form-container");
const btnSubmit = document.querySelector(".submit-button");
const form = document.querySelector("form.submit-form");
let formHeight = 110;

function animateUp() {
    if (formHeight >= 2500) {
      clearInterval(animateFormUp);
    } else {
      formHeight = formHeight + 8;

      // this 8 is used for the speed of the animation. the height of the form decreases with 8px per 1/100 second
      // So speed = (800px per second)

      formContainer.style.maxHeight = formHeight + 'px';
    };
  };

function displayForm() {
  formContainer.classList.remove("form-is-closed");
  btnSubmit.style.zIndex = 1;
  if (formContainer.classList.contains("hide-form")) {
    clearInterval(animateUp);
  };
  formContainer.classList.add("show-form");
  formContainer.classList.remove("hide-form");
  animateFormUp = setInterval(animateUp, 10);
};

function showTeam () {
    teamName.style.display = "flex";
};

function hideTeam () {
  teamName.style.display = "none";
};

function naarBedankt() {
  window.location.href = "https://www.7versus7.nl/bedankt";
};

function toThanks() {
  window.location.href = "https://www.7versus7.nl/en/thankyou";
};