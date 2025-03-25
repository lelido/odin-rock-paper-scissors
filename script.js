let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return null;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?");

    if (choice !== null) {
        choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

        if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
            choice = null;
        }
    }

    return choice;
}