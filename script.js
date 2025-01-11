console.log("Welcome to Spotify");


//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('songs/Ransom.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName:"Eastside", filePath: "songs/Eastside.mp3", coverPath:"cover/East.png"},
    {songName:"Hear me Calling", filePath: "songs/Hear me calling.mp3", coverPath:"cover/hear me.png"},
    {songName:"Lean With me", filePath: "songs/Lean with me.mp3", coverPath:"cover/lean.jpg"},
    {songName:"Lifestyle", filePath: "songs/Lifestyle.mp3", coverPath:"cover/lifestyle.png"},
    {songName:"Psycho", filePath: "songs/Psycho.mp3", coverPath:"cover/psychp.png"},
    {songName:"Rewrite the Stars", filePath: "songs/Rewrite the stars.mp3", coverPath:"cover/rewrite.jpg"},
    {songName:"Versace on the floor", filePath: "songs/Versace on the floor", coverPath:"cover/versace.jpg"},
    {songName:"Think About Us", filePath: "songs/Think about us.mp3", coverPath:"cover/think.jpg"},
    {songName:"Lightyears", filePath: "songs/Lightyears", coverPath:"cover/lean.jpg"},
    {songName:"Ransom", filePath: "songs/Ransom.mp3", coverPath:"cover/ransom-cover.png"},
]

songItems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].filePath;

})

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