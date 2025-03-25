playGame();

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)

        const winner = playRound(getComputerChoice(), getHumanChoice());

        if (winner === "Computer") {
            computerScore++;
        } else if (winner === "Human") {
            humanScore++;
        }

        console.log(`Score: Computer - ${computerScore} | Human - ${humanScore}\n\n`);
    }

    if (computerScore > humanScore) {
        console.log(`\nCOMPUTER IS THE OVERALL WINNER! ${computerScore}:${humanScore}`);
    } else if (humanScore > computerScore) {
        console.log(`\nHUMAN IS THE OVERALL WINNER! ${humanScore}:${computerScore}`);
    } else {
        console.log(`\nIT'S A TIE AFTER ALL! ${computerScore}:${humanScore}`);
    }
}

function playRound(computerChoice, humanChoice) {
    let winner;

    if (computerChoice !== null && humanChoice === null ||
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper") {
        winner = "Computer";
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}.`);
    } else if (computerChoice === humanChoice) {
        winner = "Tie";
        console.log(`It's a tie! ${computerChoice} against ${humanChoice}.`)
    }
    else {
        winner = "Human";
        console.log(`Human won! ${humanChoice} beats ${computerChoice}.`);
    }

    return winner;
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