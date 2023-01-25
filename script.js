function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        playerWin = true 
        playerLose = true
        return
    }

    else if (playerSelection == 0 && computerChoice == 1) {
        console.log("Paper beats Rock. You lose!")
        return playerLose = true
    }

    else if (playerSelection == 0 && computerChoice == 2) {
        console.log("Rock beats Scissors. You win!")
        return playerWin = true
    }

    else if (playerSelection == 1 && computerChoice == 2) {
        console.log("Scissors beats Paper. You lose!")
        return playerLose = true
    }

    else if (playerSelection == 1 && computerChoice == 0) {
        console.log("Paper beats Rock. You win!")
        return playerWin = true
    }

    else if (playerSelection == 2 && computerChoice == 0) {
        console.log("Rock beats Scissors. You lose!")
        return playerLose = true
    }

    else if (playerSelection == 2 && computerChoice == 1) {
        console.log("Scissors beats Paper. You win!")
        return playerWin = true
    }

    else {
        return console.log("Something went horribly wrong...")
    }
}

//Generates a prompt to ask for a player choice and turns it into an number from 0 to 2. (0=rock, 1=paper, 2=scissors)
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

//Checks the score of the player vs the computer in the main game function and declares a winner.
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

//Main game function. Runs the game in a while loop until a score reaches 5, then runs checkScore function.
function game() {

    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        console.log("Player Score: ", playerScore)
        console.log("Computer Score: ", computerScore)
        playRound(playerChoice(), getComputerChoice())

        if (playerWin == true && playerLose == true) {
            playerScore += 1
            computerScore += 1
            playerWin = false
            playerLose = false
        }

        else if (playerWin == true) {
            playerScore += 1
            playerWin = false
        }

        else if (playerLose == true) {
            computerScore += 1
            playerLose = false
        }

        else {
            console.log("Something went horribly wrong...")
        }
    }

    checkScore(playerScore, computerScore)

}

let playerWin = false
let playerLose = false

game()