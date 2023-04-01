// Nieuwe URL instellen
history.pushState(null, null, "/hoe-werkt-het");

// Even wachten om de URL in de adresbalk te zien
setTimeout(() => {
  console.log("Nieuwe URL: ", window.location.href);
}, 1000);

// Luisteren naar URL wijzigingen
window.addEventListener("popstate", function (event) {
  console.log("Teruggegaan naar: ", window.location.href);
});
