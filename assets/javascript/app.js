var trivia = {
questionsArray: ["Is Doofenshmirtz from Drusselstein?", "Did Phineas and Ferb pick Perry as a pet because he is a secret agent?", "Is Candace's middle name, Gertrude?", "Does Candace know how to play every instrument that starts with the letter 'B'?", "Is it true that Isabella has a crush on Phineas?"],
answersArray: ["True", "False"],
correctAnswers: ["True","False"],
correctCounter: 0,
wrongCounter: 0,
noAnswerCounter: 0,
clock: "",
questionCounter: 0,
};

var count = 20;
//timer start
function timer() {
    count--;
$(".seconds").html(count + " Seconds");
console.log(time);
}

if (count == -1) {
    timeUp();
}

function countdown() {
    setInterval(countdown, 1000);
}


