const audio = document.getElementById("audio");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const music = "Jenn_Johnson,_You're_Gonna_Be_ok_(Lyric_Video)(128k)";

const playSong = () => {
  audio.play();
};

const pauseSong = () => {
  audio.pause();
};

const loadSong = (song) => {
  audio.src = `music/${song}.mp3`;
  audio.controls = false
};

playButton.addEventListener("click", () => {
  playSong();
});

pauseButton.addEventListener("click", () => {
   pauseSong();
 });

loadSong(music);
console.log(audio);