// Generates a random number in a range of 3 (from 0 to 2)
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

// Compares playerSelection and computerChoice and declares a winner (or a tie)
function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        playerWin = true 
        computerWin = true
        console.log("It's a tie!")
        return
    }

    else if (playerSelection == 0 && computerChoice == 1) {
        console.log("Paper beats Rock. You lose!")
        computerWin = true
        return
    }

    else if (playerSelection == 0 && computerChoice == 2) {
        console.log("Rock beats Scissors. You win!")
        playerWin = true
        return
    }

    else if (playerSelection == 1 && computerChoice == 2) {
        console.log("Scissors beats Paper. You lose!")
        computerWin = true
        return
    }

    else if (playerSelection == 1 && computerChoice == 0) {
        console.log("Paper beats Rock. You win!")
        playerWin = true
        return
    }

    else if (playerSelection == 2 && computerChoice == 0) {
        console.log("Rock beats Scissors. You lose!")
        computerWin = true
        return
    }

    else if (playerSelection == 2 && computerChoice == 1) {
        console.log("Scissors beats Paper. You win!")
        playerWin = true
        return
    }

    else {
        return console.log("Something went horribly wrong...")
    }
}

// Generates a prompt to ask for a player choice and turns it into an number from 0 to 2. (0=rock, 1=paper, 2=scissors)
function playerChoice() {
    let choice = prompt("Choose either Rock, Paper or Scissors").toLowerCase()

    if (choice == "rock") {
        choice = 0
        return choice
    }

    else if (choice == "paper") {
        choice = 1
        return choice
    }

    else if (choice == "scissors") {
        choice = 2
        return choice
    }

    else {
        alert("You have to choose either Rock, Paper or Scissors")
        return playerChoice()
    }
}

// Checks the score of the player vs the computer in the main game function and declares a winner.
function checkScore(playerScore, computerScore) {
    if (playerScore == computerScore) {
        console.log("It's a tie!")
    }

    else if (playerScore > computerScore) {
        console.log("Player wins!")
    }

    else if (playerScore < computerScore) {
        console.log("Computer wins!")
    }

    else {
        console.log("Something went horribly wrong...")
    }
}

// Main game function. Runs the game in a while loop until a score reaches 5, then runs checkScore function.
function game() {

    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        console.log("Player Score: ", playerScore)
        console.log("Computer Score: ", computerScore)
        playRound(playerChoice(), getComputerChoice())

        if (playerWin == true && computerWin == true) {
            playerScore += 1
            computerScore += 1
            playerWin = false
            computerWin = false
        }

        else if (playerWin == true) {
            playerScore += 1
            playerWin = false
        }

        else if (computerWin == true) {
            computerScore += 1
            computerWin = false
        }

        else {
            console.log("Something went horribly wrong...")
        }
    }

    checkScore(playerScore, computerScore)

}

let playerWin = false
let computerWin = false

game()