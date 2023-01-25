function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        playerWin = true 
        playerLose = true
        return
    }

    else if (playerSelection == 0 && computerChoice == 1) {
        return playerLose = true
    }

    else if (playerSelection == 0 && computerChoice == 2) {
        return playerWin = true
    }

    else if (playerSelection == 1 && computerChoice == 2) {
        return playerLose = true
    }

    else if (playerSelection == 1 && computerChoice == 0) {
        return playerWin = true
    }

    else if (playerSelection == 2 && computerChoice == 0) {
        return playerLose = true
    }

    else if (playerSelection == 2 && computerChoice == 1) {
        return playerWin = true
    }

    else {
        return console.log("Something went horribly wrong...")
    }
}

function playerChoice() {
    choice = prompt("Choose either Rock, Paper or Scissors").toLowerCase()

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

function game() {

    var playerScore = 0
    var computerScore = 0

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

var playerWin = false
var playerLose = false

game()