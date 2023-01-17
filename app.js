const audio = document.getElementById("audio");
const playButton = document.querySelector(".play");

const playSong = () => {
  audio.play();
};

playButton.addEventListener("click", () => {
  playSong();
});
