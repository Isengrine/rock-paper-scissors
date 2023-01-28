// Generates a random number in a range of 3 (from 0 to 2)
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Transforms playerchoice from str to int
// so it can be evaluated against computerchoice in playRound function
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
        document.getElementById("roundtxt").textContent =
        "It's a tie!";
        return;
    }

    else if (playerSelection == 0) {
        if (computerChoice == 1) {
            computerWin = true;
            document.getElementById("roundtxt").textContent =
            "You lose!";
            return;
        }

        else {
            playerWin = true;
            document.getElementById("roundtxt").textContent =
            "You win!";
            return;
        }
    }

    else if (playerSelection == 1) {
        if (computerChoice == 2) {
            computerWin = true;
            document.getElementById("roundtxt").textContent =
            "You lose!";
            return;
        }

        else {
            playerWin = true;
            document.getElementById("roundtxt").textContent =
            "You win!";
            return; 
        }
    }

    else if (playerSelection == 2) {
        if (computerChoice == 0) {
            computerWin = true;
            document.getElementById("roundtxt").textContent =
            "You lose!";
            return;
        }

        else {
            playerWin = true;
            document.getElementById("roundtxt").textContent =
            "You win!";
            return;
        }
    }

    else if (playerSelection == "gun") {
        playerWin = true;
        document.getElementById("roundtxt").textContent = 
        "Gun beats everything!";
        return;
    }
}

// Checks the score of the player vs the computer in the main game function and declares a winner
// TODO: Make this one better
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

// Restart function
function restart() {
    if (rtrt == true) {
        location.reload();
    }

    else {
        return;
    }
}

// Runs the game in a while loop until a score reaches 5
// then runs checkScore function.
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

function easterEgg() {
    if (easterEggCounter == 3) {
        const gun = document.createElement("button");
        gun.setAttribute("id", "gun");
        btns.appendChild(gun);
        gun.innerHTML = "<img src=./images/gun.png>";
        document.getElementById("title").textContent =
        "Rock, Paper, Scissors and Gun!";
        gun.addEventListener("click", () => {
            let choice = "gun";
            playRound(choice);
            game()});
    }
}

// Global Variables
let playerWin = false;
let computerWin = false;
let playerScore = 0;
let computerScore = 0;
let rtrt = false;
let easterEggCounter = 0;

const btns = document.querySelector(".buttons");
const rck = document.querySelector("#rck");
const ppr = document.querySelector("#ppr");
const scs = document.querySelector("#scs");
const egg = document.querySelector("#easteregg");

// Buttons
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

egg.addEventListener("click", () => {
    ++easterEggCounter;
    easterEgg()});