let randomNumber;
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
const playerScore = document.querySelector('#playerScore');
const AiScore = document.querySelector('#computerScore');
const message = document.querySelector('#message');
const input = document.querySelector('#controls');

input.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    humanChoice = e.target.id.toUpperCase();
    playRound(computerChoice, humanChoice);
    playGame();
})

// function for get computer choice
// using the math.radom we going select rock paper scissor
// if math.radom is 0 to 1/3 then computerChoice == rock
// if math.radom is 1/3 to 2/3 then computerChoice == paper
// if math.radom is 2/3 to 1 then computerChoice == scissor

function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= 1/3)
    {
        return "ROCK";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3)
    {
        return "PAPER";
    } else 
    {
        return "SCISSOR";
    }
}

// function for check the winner
// if the winner is human then the humanScore will be increase
// if the winner is computer then the computerScore will be increase

function playRound(computerChoice, humanChoice) {
    message.textContent = ``;
    if (computerChoice == humanChoice) {
        message.textContent = `It's a tie.`;
    }
    else if ((computerChoice == 'ROCK' && humanChoice == 'SCISSOR') || (computerChoice == 'PAPER' && humanChoice == 'ROCK') || (computerChoice == 'SCISSOR' && humanChoice == 'PAPER')) {
        computerScore++;
        message.textContent = `Computer wins.`;
    }
    else {
        humanScore++;
        message.textContent = `You win.`;
    }
}

function playGame() {
    if(computerScore >= 5 || humanScore >= 5) {
        if (computerScore > humanScore) {
            message.textContent = `Game over! Computer wins.`;
        } else {
            message.textContent = `Game over! You win.`;
        }
        playerScore.textContent = humanScore;
        AiScore.textContent = computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else {
        playerScore.textContent = humanScore;
        AiScore.textContent = computerScore;
    }
}