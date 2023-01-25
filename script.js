function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    return computerChoice
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        return console.log("It's a tie!")
    }

    else if (playerSelection == 0 && computerChoice == 1) {
        return console.log("Paper beats Rock. You lose!")
    }

    else if (playerSelection == 0 && computerChoice == 2) {
        return console.log("Rock beats Scissors. You win!")
    }

    else if (playerSelection == 1 && computerChoice == 2) {
        return console.log("Scissors beats Paper. You lose!")
    }

    else if (playerSelection == 1 && computerChoice == 0) {
        return console.log("Paper beats Rock. You win!")
    }

    else if (playerSelection == 2 && computerChoice == 0) {
        return console.log("Rock beats Scissors. You lose!")
    }

    else if (playerSelection == 2 && computerChoice == 1) {
        return console.log("Scissors beats Paper. You win!")
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

