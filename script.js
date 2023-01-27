// Generates a random number in a range of 3 (from 0 to 2)
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Generates a prompt to ask for a player choice and turns it into an number from 0 to 2. (0=rock, 1=paper, 2=scissors)
function playerChoice(choice) {
    if (choice == "rock") {
        return choice = 0;
    }

    else if (choice == "paper") {
        return choice = 1;
    }

    else if (choice == "scissors") {
        return choice = 2;
    }
}

// Compares playerSelection and computerChoice and declares a winner (or a tie)
function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        playerWin = true;
        computerWin = true;
        console.log("It's a tie!");
        return;
    }

    else if (playerSelection == 0 && computerChoice == 1) {
        console.log("Paper beats Rock. You lose!");
        computerWin = true;
        return;
    }

    else if (playerSelection == 0 && computerChoice == 2) {
        console.log("Rock beats Scissors. You win!");
        playerWin = true;
        return;
    }

    else if (playerSelection == 1 && computerChoice == 2) {
        console.log("Scissors beats Paper. You lose!");
        computerWin = true;
        return;
    }

    else if (playerSelection == 1 && computerChoice == 0) {
        console.log("Paper beats Rock. You win!");
        playerWin = true;
        return;
    }

    else if (playerSelection == 2 && computerChoice == 0) {
        console.log("Rock beats Scissors. You lose!");
        computerWin = true;
        return;
    }

    else if (playerSelection == 2 && computerChoice == 1) {
        console.log("Scissors beats Paper. You win!");
        playerWin = true;
        return;
    }
}

let rtrt = false

// Checks the score of the player vs the computer in the main game function and declares a winner.
function checkFinalScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        rtrt = confirm("You won!\nPlay again?");
        restart();
    }

    else if (playerScore < computerScore) {
        rtrt = confirm("The Computer won!\nPlay again?");
        restart();
    }
}

function restart() {
    if (rtrt == true) {
        location.reload();
    }

    else {
        return;
    }
}

// Main game function. Runs the game in a while loop until a score reaches 5, then runs checkScore function.
function game() {
    while (playerScore < 5 && computerScore < 5) {
        if (playerWin == true && computerWin == true) {
            playerWin = false;
            computerWin = false;
            break;
        }

        else if (playerWin == true) {
            playerScore++;
            document.getElementById("pscore").textContent = playerScore;
            playerWin = false;
            break;
        }

        else if (computerWin == true) {
            computerScore++;
            document.getElementById("cscore").textContent = computerScore;
            computerWin = false;
            break;
        }
    }

    if (playerScore >= 5 || computerScore >= 5) {
        checkFinalScore(playerScore, computerScore);
    }
}

let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;

const rck = document.querySelector("#rck");
const ppr = document.querySelector("#ppr");
const scs = document.querySelector("#scs");

rck.addEventListener("click", () => {
    let choice = playerChoice("rock");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice)
    game()});

ppr.addEventListener("click", () => {
    let choice = playerChoice("paper");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice);
    game()});
    
scs.addEventListener("click", () => {
    let choice = playerChoice("scissors");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice);
    game()});