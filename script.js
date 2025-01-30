let randomNumber;
let computerChoice;
let input;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

// function for get computer choice
// using the math.radom we going select rock paper scissor
// if math.radom is 0 to 1/3 then computerChoice == rock
// if math.radom is 1/3 to 2/3 then computerChoice == paper
// if math.radom is 2/3 to 1 then computerChoice == scissor

function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber <= 1/3)
    {
        computerChoice = "ROCk";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3)
    {
        computerChoice = "PAPER";
    } else 
    {
        computerChoice = "SCISSOR";
    }
}
getComputerChoice();
console.log(computerChoice);

// function for get human choice
// using the prompt we going get user input
// after get input then we going to convert the string to uppercase.

function getHumanChoice() {
    input = prompt("Please enter your choice(rock, paper, scissor) : ").toUpperCase();
    if (input.toUpperCase() == 'ROCK')
    {
        humanChoice = input.toUpperCase();
    }else if (input.toUpperCase() == 'PAPER')
    {
        humanChoice = input.toUpperCase();
    }else if (input.toUpperCase() == 'SCISSOR')
    {
        humanChoice = input.toUpperCase();
    }else{
        alert("Wrong choice!");
        getHumanChoice();
    }
    
}

getHumanChoice();
console.log(humanChoice);

// function for check the winner
// if the winner is human then the humanScore will be increase
// if the winner is computer then the computerScore will be increase

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        computerScore++;
        humanScore++;
        console.log('tie');
    } else if (computerChoice == 'ROCK') {
        if (humanChoice == 'PAPER') {
            humanScore = humanScore + 1;
            console.log('Human win');
        } else {
            computerScore = computerScore + 1;
            console.log('Computer win');
        }
    } else if (computerChoice == 'PAPER') {
        if (humanChoice == 'ROCK') {
            computerScore = computerScore + 1;
            console.log('Computer win');
        } else {
            humanScore = humanScore + 1;
            console.log('Human win');
        }
    } else {
        if (humanChoice == 'ROCK') {
            humanScore = humanScore + 1;
            console.log('Human win');
        } else {
            computerScore = computerScore + 1;
            console.log('Computer win');
        }
    }
}

playRound(computerChoice, humanChoice);

console.log(computerScore);
console.log(humanScore);