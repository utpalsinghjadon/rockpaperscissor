'use strict';

const choiceRock = document.querySelector('.choices-rock');
const choicePaper = document.querySelector('.choices-paper');
const choiceScissors = document.querySelector('.choices-scissors');
const userScore = document.querySelector('.score-user');
const computerScore = document.querySelector('.score-computer');
const winnerMessage = document.querySelector('.message');
const newGameButton = document.querySelector('.newgame-button')

const choices = [[1, 'Rock'], [2, 'Paper'], [3, 'Scissors']]

const drawMsg = function (choice) {
    winnerMessage.textContent = `Draw -> Computer and You Both Choose ${choices[choice - 1][1]}`
    computerScore.textContent = scores[1]
    userScore.textContent = scores[0]
}

const winMsgUser = () => {
    winnerMessage.textContent = "Draw"
}

let scores = [0, 0]


const winner = function (uChoice) {
    const computerChoice = Math.ceil(Math.random() * 3)
    console.log(computerChoice)

    if (uChoice === computerChoice) {
        scores[0]++
        scores[1]++
        drawMsg(uChoice)
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


