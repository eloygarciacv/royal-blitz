// Close inputs content from other labels
const closePanels = document.querySelector("#close-panels");

closePanels.addEventListener("click", () => {
  document.querySelector("#how-to-play").checked = false;
  document.querySelector("#show-movements").checked = false;
  document.querySelector("#about").checked = false;
});

const howToPlay = document.querySelector("#how-to-play");
const about = document.querySelector("#about");

howToPlay.addEventListener("change", () => {
  if (howToPlay.checked) {
    about.checked = false;
  }
});

about.addEventListener("change", () => {
  if (about.checked) {
    howToPlay.checked = false;
  }
});

// Change the arrow direction of show/hide movements

const showMovementsLabel = document.querySelector("#show-movements");
const showMovementsIcon = document.querySelector(
  'label[for="show-movements"] .arrow-icon',
);

showMovementsLabel.addEventListener("change", () => {
  if (showMovementsLabel.checked) {
    showMovementsIcon.textContent = "↗";
  } else {
    showMovementsIcon.textContent = "↘";
  }
});
