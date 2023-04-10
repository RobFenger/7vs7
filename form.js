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

// Sending the form and redirect user to thank-you-page

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  fetch('https://app.7versus7.nl/api/aanmelden', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (window.location == "https://www.7versus7.nl/aanmelden") {
        window.location = "https://www.7versus7.nl/bedankt";
      } else if (window.location == "https://www.7versus7.nl/en/subscribe") {
        window.location = "https://www.7versus7.nl/en/thankyou";
      }
    })
    .catch(error => console.error(error));
});
