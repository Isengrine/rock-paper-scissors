// Generates a random number in a range of 3 (from 0 to 2)
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Compares playerSelection and computerChoice and declares a winner (or a tie)
function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        playerWin = true ;
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

// Checks the score of the player vs the computer in the main game function and declares a winner.
function checkScore(playerScore, computerScore) {
    if (playerScore == computerScore) {
        console.log("It's a tie!");
    }

    else if (playerScore > computerScore) {
        console.log("Player wins!");
    }

    else if (playerScore < computerScore) {
        console.log("Computer wins!");
    }
}

// Main game function. Runs the game in a while loop until a score reaches 5, then runs checkScore function.
function game() {

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        playRound(playerChoice(), getComputerChoice());

        if (playerWin == true && computerWin == true) {
            playerScore += 1;
            computerScore += 1;
            playerWin = false;
            computerWin = false;
        }

        else if (playerWin == true) {
            playerScore += 1;
            playerWin = false;
        }

        else if (computerWin == true) {
            computerScore += 1;
            computerWin = false;
        }
    }

    checkScore(playerScore, computerScore);

}

const rck = document.querySelector("#rck");
const ppr = document.querySelector("#ppr");
const scs = document.querySelector("#scs");

rck.addEventListener("click", () => {
    let choice = playerChoice("rock");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice)});

ppr.addEventListener("click", () => {
    let choice = playerChoice("paper");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice)});
    
scs.addEventListener("click", () => {
    let choice = playerChoice("scissors");
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice)});

let playerWin = false;
let computerWin = false;