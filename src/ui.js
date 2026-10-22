// Variables and DOM selectors

const closePanels = document.querySelector("#close-panels");

const howToPlay = document.querySelector("#how-to-play");
const about = document.querySelector("#about");

const videoTab = document.querySelector("#video-example");
const movementsTab = document.querySelector("#show-movements");

const nextLevelButton = document.querySelector("#next-level");

// Functions

function closeOtherInput(changedInput, otherInput) {
  if (changedInput.checked) {
    otherInput.checked = false;
  }
}

function handleTabChange(changedTab, otherTab) {
  closeOtherInput(changedTab, otherTab);
}

// Close the main panels

closePanels.addEventListener("click", () => {
  howToPlay.checked = false;
  about.checked = false;
});

// Keep the main panels mutually exclusive

howToPlay.addEventListener("change", () => {
  closeOtherInput(howToPlay, about);
});

about.addEventListener("change", () => {
  closeOtherInput(about, howToPlay);
});

// Keep the tabs mutually exclusive and update their arrows

videoTab.addEventListener("change", () => {
  handleTabChange(videoTab, movementsTab);
});

movementsTab.addEventListener("change", () => {
  handleTabChange(movementsTab, videoTab);
});
