const emojis = [
    "⚽",
    "⚽",
    "⚾",
    "⚾",
    "🥎",
    "🥎",
    "🏀",
    "🏀",
    "🏐",
    "🏐",
    "🏈",
    "🏈",
    "🏉",
    "🏉",
    "🎱",
    "🎱",
];
let openCards = [];

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

function playSound() {
    let audio = new Audio("./src/sound/turncard.m4a");
    audio.volume = 0.3;
    audio.play();
}

function playSound2() {
    let audio = new Audio("./src/sound/error.m4a");
    audio.volume = 0.3;
    audio.play();
}

function playSound3() {
    let audio = new Audio("./src/sound/correct.m4a");
    audio.volume = 0.3;
    audio.play();
}


for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
    
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
        playSound();
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
}
}
function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatched"); 
        openCards[1].classList.add("boxMatched"); 
        playSound3();
    } else {
        openCards[0].classList.remove("boxOpen"); 
        openCards[1].classList.remove("boxOpen"); 
        playSound2();
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatched").length === emojis.length){
        alert("Congratulation! You found all pairs!");
    }

} 

