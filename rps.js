// Your JavaScript goes here!

console.log("Hello World");



const weapon = ["rock", "paper", "scissors"]; // global variable 
let playerScore = 0; // Step two - add global counting variables
let computerScore = 0;


function playGame() {  // Step five - replay game for five rounds, then game over and result displayed.
    
    for (let i = 1; i <=5; i++) {
        playRound();
    }
    console.log("Game Over");
    if(playerScore > computerScore){
        console.log("Congrats you win!");
    } else if (playerScore < computerScore){
        console.log("Better luck next time!");
    } else {
        console.log("it's a tie!");
    }
};

// Step four - create round function that evaluates each player's input and circles through loop until condition satsified

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); // declare variables that take in results of previous functions
    const roundWinner = checkWinner(humanSelection, computerSelection);
    return roundWinner;
};

// Step one - define computer  & human choice functions

function getComputerChoice() {

    const randomChoice = weapon[Math.floor(Math.random() * weapon.length)]; //randomised array selection
    return randomChoice;
};

function getHumanChoice() {

    let input = prompt("Choose your weapon: ");
    while (input == null) {
        input = prompt("Choose your weapon: "); // if we press 'cancel', it will refresh the prompt box
    }
    input = input.toLowerCase(); // Now it is case sensitive
    let validInput = validateInput(input);
    if(validInput == true) {
        console.log(input);
    }
    return input; // make sure to store the value!!!
};

function validateInput(option) { // Built function that checks for human input to match array items of 'weapon'
    if(option.includes(weapon)) {
        return true;
    } else {
        return false;
    }
};


// Step three - determine function that sees who wins in each scenario 

function checkWinner(humanChoice, computerChoice) {
    
     if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("Player Wins!");
        playerScore++;
    } else if ((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "paper")) {
        console.log("Computer Wins!");
        computerScore++;
    }
};





