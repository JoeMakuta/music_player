const audio = document.getElementById("audio");
const playButton = document.querySelector(".play_button");
const play_icon = document.getElementById("play_icon");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const title = document.getElementById("title");

const musics = [
  "Jenn_Johnson,_You're_Gonna_Be_ok_(Lyric_Video)(128k)",
  "Elton_John_-_Sacrifice(128k)",
];

let playingIndex = 0;

//FUNCTIONS

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
  title.innerHTML = song;
  audio.autoplay = true;
  play_icon.setAttribute("name", "pause");
};

//EVENT LISTENERS

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextButton.addEventListener("click", () => {
  playingIndex++;
  loadSong(musics[playingIndex]);
});

prevButton.addEventListener("click", () => {
  playingIndex--;
  loadSong(musics[playingIndex]);
});

//APPLICATION

loadSong(musics[playingIndex]);
console.log(audio);
