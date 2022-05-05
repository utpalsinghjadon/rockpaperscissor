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
const winMsgUser = (uChoice, computerChoice) => {
    winnerMessage.textContent = `You win -> You Choose ${choices[uChoice - 1][1]} and Computer Choose ${choices[computerChoice - 1][1]}`
    computerScore.textContent = scores[1]
    userScore.textContent = scores[0]
}
const winMsgComp = (uChoice, computerChoice) => {
    winnerMessage.textContent = `Computer wins -> You Choose ${choices[uChoice - 1][1]} and Computer Choose ${choices[computerChoice - 1][1]}`
    computerScore.textContent = scores[1]
    userScore.textContent = scores[0]
}

let scores = [0, 0]


const winner = function (uChoice) {
    const computerChoice = Math.ceil(Math.random() * 3)
    if (uChoice === computerChoice) {
        scores[0]++
        scores[1]++
        drawMsg(uChoice)
    }
    else {
        if (uChoice === 1 && computerChoice === 2 || uChoice === 2 && computerChoice === 3 || uChoice === 3 && computerChoice === 1) {
            scores[1]++
            scores[1]++
            winMsgComp(uChoice, computerChoice)

        } else {
            scores[0]++
            scores[0]++
            winMsgUser(uChoice, computerChoice)

        }
    }

}

choiceRock.addEventListener('click', function () {
    let userChoice = 1;
    winner(userChoice);

});
choicePaper.addEventListener('click', function () {
    let userChoice = 2;
    winner(userChoice);
});
choiceScissors.addEventListener('click', function () {
    let userChoice = 3;
    winner(userChoice);
});



// New Game Button

newGameButton.addEventListener('click', function () {
    scores = [0, 0]
    computerScore.textContent = scores[1]
    userScore.textContent = scores[0]

})


