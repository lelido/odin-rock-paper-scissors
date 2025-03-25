function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return null;
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?");

    if (choice !== null) {
        choice = choice.toLowerCase();

        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = null;
        }
    }

    return choice;
}