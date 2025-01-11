console.log("Welcome to Spotify");


//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('Ransom.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');

let songs= [
    {songName:"Ransom", filePath: "./songs/Ransom.mp3", coverPath:"ransom-cover.png"},
    {songName:"Ransom", filePath: "./songs/Ransom.mp3", coverPath:"ransom-cover.png"},
    {songName:"Ransom", filePath: "./songs/Ransom.mp3", coverPath:"ransom-cover.png"},
    {songName:"Ransom", filePath: "./songs/Ransom.mp3", coverPath:"ransom-cover.png"},
]


//  audioElement.play();

//Handle play./ pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

//listen to Events

audioElement.addEventListener('timeupdate',()=>{

    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})