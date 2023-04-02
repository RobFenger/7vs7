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

function animateDown() {
    if (formHeight <= (btnDisplayHeight + btnDisplayMarginBottom)) {
      form.style.maxHeight = btnDisplayHeight + btnDisplayMarginBottom + 'px';
      clearInterval(animate);
      formContainer.classList.remove("show-form");
    } else {
      formHeight = formHeight - 8;

      // this 8 is used for the speed of the animation. the height of the form decreases with 8px per 1/100 second
      // So speed = (800px per second)

      form.style.maxHeight = formHeight + 'px';
    };
  };

function hideForm() {
  clearInterval(animateFormUp);
  formContainer.classList.add("hide-form");
  formHeight = form.offsetHeight;
  if (window.innerWidth <= 992) {
    body.classList.remove("no-scroll");
  };
  animate = setInterval(animateDown, 10);

};



function showTeam () {
    teamName.style.display = "flex";
}

function hideTeam () {
  teamName.style.display = "none";
}