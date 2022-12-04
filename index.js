let drumButton = document.getElementsByClassName("drum");
let buttonHTML = document.querySelector("button").addEventListener("click",handleClick);
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let sound = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3", "sounds/kick-bass.mp3","sounds/crash.mp3"];
    
// Detecting button press
function handleClick() {
    for (let i = 0; i < drumButton.length; i++) {
        drumButton[i].addEventListener('click' , handleClick) ; 
    }    
}

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonHTML = this.innerHTML;
    keySong(buttonHTML);
    butAnime(buttonHTML);
}
)}

// Detect keyboard press

document.addEventListener("keydown", function(event) {
    keySong(event.key);
    butAnime(event.key);
})
function keySong(key) {
    switch (key) {
        case "w":
            let crash = new Audio(sound[0]);
            crash.play();  
            break;
        case "a":
            let kickBass = new Audio(sound[1]);
            kickBass.play(); 
            break;
        case "s":
            let snare = new Audio(sound[2]);
            snare.play();  
            break;
        case "d":
            let tom1 = new Audio(sound[3]);
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio(sound[4]);
            tom2.play();
            break; 
        case "k":
            let tom3 = new Audio(sound[5]);
            tom3.play();  
            break;
        case "l":
            let tom4 = new Audio(sound[6]);
            tom4.play();
            break;
        default: console.log(buttonHTML);
    }
}
function butAnime(currentKey) {
   let activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100)
}