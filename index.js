const setOfWords = ["Do you love the typing speed test game?",
    "Start typing the text to check the typing speed.",
    "You have done a great job...!"];
const msg = document.getElementById('showSentence');
const typeWords = document.getElementById('textarea');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
let startTime, endTime, totalTimeTaken;


const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    // console.log(randomNumber);
    msg.innerHTML = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}



btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typeWords.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typeWords.setAttribute('disabled', 'true');
            endTyping();
            break;
    }
})