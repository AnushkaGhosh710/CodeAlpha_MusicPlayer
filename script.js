const songs = [
    {
        name:"Girl That I Am",
        file:"songs/song1.mp3"
    },
    {
        name:"Hope Is a Scary Thing",
        file:"songs/song2.mp3"
    },
    {
        name:"I Love You, I'm Sorry",
        file:"songs/song3.mp3"
    },
    {
        name:"Human Nature",
        file:"songs/song4.mp3"
    },
    {
        name:"Edge Of The Earth",
        file:"songs/song5.mp3"
    },
    {
        name:"tomorrow tonight",
        file:"songs/song6.mp3"
    }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

loadSong();

function loadSong(){
    audio.src = songs[index].file;
    title.textContent = songs[index].name;
}

function playPause(){

    if(audio.paused)
        audio.play();
    else
        audio.pause();

}

function nextSong(){

    index = (index + 1) % songs.length;

    loadSong();

    audio.play();
}

function prevSong(){

    index = (index - 1 + songs.length) %
             songs.length;

    loadSong();

    audio.play();
}

audio.addEventListener("timeupdate", ()=>{

    progress.value =
        (audio.currentTime/audio.duration)*100;

});

progress.addEventListener("input", ()=>{

    audio.currentTime =
      (progress.value/100)*audio.duration;

});

volume.addEventListener("input", ()=>{

    audio.volume = volume.value;

});

audio.addEventListener("ended", () => {
    nextSong();
});