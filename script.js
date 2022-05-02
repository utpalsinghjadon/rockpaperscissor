'use strict';

const choiceRock = document.querySelector('.choices-rock');
const choicePaper = document.querySelector('.choices-paper');
const choiceScissors = document.querySelector('.choices-scissors');
const userScore = document.querySelector('.score-user');
const userComputer = document.querySelector('.score-computer');
const winnerMessage = document.querySelector('.message');

const rock = 1;
const paper = 2;
const scissors = 3;

const userMessage = (compchoice, userchoice) => {
    winnerMessage.textContent = `You Choose ${userchoice} and Computer Choose ${compchoice}, Hence you Win😁🙌`;
    userScore.textContent = 1;
}

const winner = function (userChoice) {
    const computerChoice = Math.ceil(Math.random() * 3)
    console.log(computerChoice)
    if (computerChoice === 1 && userChoice === 3) {
        userMessage(computerChoice, userChoice)

    }
}

choiceRock.addEventListener('click', function () {
    let userChoice = 1;
    winner(userChoice);

})
choicePaper.addEventListener('click', function () {
    let userChoice = 2;
    winner(userChoice);
})
choiceScissors.addEventListener('click', function () {
    let userChoice = 3;
    winner(userChoice);
})


