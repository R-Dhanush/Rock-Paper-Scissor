let randomNumber ;
let computerChoice ;

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