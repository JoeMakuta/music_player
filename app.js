const audio = document.getElementById("audio");
const playButton = document.querySelector(".play_button");
const music = "Jenn_Johnson,_You're_Gonna_Be_ok_(Lyric_Video)(128k)";
const play_icon = document.getElementById("play_icon");

const playSong = () => {
  audio.play();
  playButton.classList.add("playing");
  playButton.classList.remove("paused");
  play_icon.setAttribute("name", "pause");
};

const pauseSong = () => {
  audio.pause();
  playButton.classList.remove("playing");
  playButton.classList.add("paused");
  play_icon.setAttribute("name", "play");
};

const loadSong = (song) => {
  audio.src = `music/${song}.mp3`;
  audio.controls = false;
};

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

// pauseButton.addEventListener("click", () => {
//    pauseSong();
//  });

loadSong(music);
console.log(audio);
