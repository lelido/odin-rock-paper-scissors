// playGame();

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results");
const gameResults = document.querySelector("#game-results");
const computerScoreSpan = document.querySelector("#score #computer");
const humanScoreSpan = document.querySelector("#score #human");
let computerScore = 0;
let humanScore = 0;

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));

function playGame() {
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
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let winner;

    if (computerChoice !== null && humanChoice === null ||
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper") {
        winner = "Computer";
        roundResults.textContent = `Computer won! ${computerChoice} beats ${humanChoice}.`;
    } else if (computerChoice === humanChoice) {
        winner = "Tie";
        roundResults.textContent = `It's a tie! ${computerChoice} against ${humanChoice}.`;
    }
    else {
        winner = "Human";
        roundResults.textContent = `Human won! ${humanChoice} beats ${computerChoice}.`;
    }

    updateScore(winner);

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

function updateScore(winner) {
    if (winner === "Computer") {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    } else if (winner === "Human") {
        humanScore++;
        humanScoreSpan.textContent = humanScore;
    }

    if (computerScore >= 5) {
        gameResults.textContent = "COMPUTER SCORED 5 POINTS AND WON THE GAME";
    } else if (humanScore >= 5) {
        gameResults.textContent = "HUMAN SCORED 5 POINTS AND WON THE GAME";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?");

    if (choice === "") {
        choice = null;
    }

    if (choice !== null) {
        choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

        if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
            choice = null;
        }
    }

    return choice;
}