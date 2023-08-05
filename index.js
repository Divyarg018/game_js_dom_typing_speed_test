const setOfWords = ["Do you love the typing speed test game?",
    "Start typing the text to check the typing speed.",
    "You have done a great job...!"];
const msg = document.getElementById('showSentence');
const typeWords = document.getElementById('textarea');
const btn = document.getElementById('btn');
const score = document.getElementById('score');
let startTime, endTime, totalTimeTaken, sentence_to_write;


const errorChecking = (words) => {
    //console.log(words);

    let num = 0;
    sentence_to_write = msg.innerHTML;
    sentence_to_write = sentence_to_write.trim().split(" ");
     //console.log(sentence_to_write);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === sentence_to_write[i]) {
            num++
        }

    }
    return num;
}


const calculateTypingSpeed = (time_taken) => {
    let totalWords = typeWords.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ");

    actualWords = errorChecking(actualWords);

    if (actualWords !== 0) {
        let typing_speed = (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} WPM & you wrote <span class="correct-words"> ${actualWords} correct words </span> <span class="out-of"> out of ${sentence_to_write.length} </span> & time taken <span class="time-taken">${time_taken} sec </span>`;
    } else {
        score.innerHTML = `Your typing speed is 0 WPM & time taken ${time_taken} sec`;
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

    totalTimeTaken = (endTime - startTime) / 1000;

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