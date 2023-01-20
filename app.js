const audio = document.getElementById("audio");
const playButton = document.querySelector(".play_button");
const play_icon = document.getElementById("play_icon");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const title = document.getElementById("title");
const loopBack = document.querySelector('.loopBack')

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
  audio.autoplay = true;
  title.innerHTML = song + '.mp3';
  play_icon.setAttribute("name", "pause");
};

const lastSong = () => {
  if (playingIndex === musics.length - 1) {
    playingIndex = 0;
  } else {
    playingIndex++;
  }
};

const firstSong = () => {
  if (playingIndex === 0) {
    playingIndex = musics.length - 1;
  } else {
    playingIndex--;
  }
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
  lastSong();
  loadSong(musics[playingIndex]);
});

prevButton.addEventListener("click", () => {
  firstSong();
  loadSong(musics[playingIndex]);
});

loopBack.addEventListener('click', () => {
  loopBack.classList.add('loopBackColor')
})

//APPLICATION

loadSong(musics[playingIndex]);
console.log(audio);

