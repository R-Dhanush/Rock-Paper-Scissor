let randomNumber;
let computerChoice;
let input;
let humanChoice;

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
    }
    
}

getComputerChoice();
console.log(computerChoice);
getHumanChoice();
console.log(humanChoice);