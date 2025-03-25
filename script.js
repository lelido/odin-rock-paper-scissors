let computerScore = 0;
let humanScore = 0;

playRound(getComputerChoice(), getHumanChoice());

function playRound(computerChoice, humanChoice) {
    if (computerChoice !== null && humanChoice === null ||
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}.`);
    } else if (computerChoice === humanChoice) {
        console.log(`It's a tie! ${computerChoice} against ${humanChoice}.`)
    }
    else {
        humanScore++;
        console.log(`Human won! ${humanChoice} beats ${computerChoice}.`);
    }

    console.log(`Score: Computer - ${computerScore} | Human - ${humanScore}`)
}

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