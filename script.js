function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    return console.log(computerChoice)
}

function playRound(playerSelection, computerChoice) {

}

function playerChoice() {
    choice = prompt("Choose either Rock, Paper or Scissors").toLowerCase()

    if (choice == "rock") {
        choice = 0
        return console.log(choice)
    }

    else if (choice == "paper") {
        choice = 1
        return console.log(choice)
    }

    else if (choice == "scissors") {
        choice = 2
        return console.log(choice)
    }

    else {
        alert("You have to choose either Rock, Paper or Scissors")
        return playerChoice()
    }
}
