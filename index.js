const setOfWords = ["Do you love the typing speed test game?",
    "Start typing the text to check the typing speed.",
    "You have done a great job...!"];
const msg = document.getElementById('showSentence');
const typeWords = document.getElementById('textarea');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
let startTime, endTime, totalTimeTaken;



const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typeWords.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} letters per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 letters per minutes & time taken ${time_taken} sec`;
    }
}

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    // console.log(randomNumber);
    msg.innerHTML = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}
const endTyping = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    msg.innerHTML = "";
    typeWords.value = "";
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