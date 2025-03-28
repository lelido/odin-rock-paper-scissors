const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results");
const gameResults = document.querySelector("#game-results");
const computerScoreSpan = document.querySelector("#score #computer");
const humanScoreSpan = document.querySelector("#score #human");
let computerScore = 0;
let humanScore = 0;
let gameEnded = false;

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let winner;

    if (gameEnded) {
        resetGame();
    }

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
        gameEnded = true;
    } else if (humanScore >= 5) {
        gameResults.textContent = "HUMAN SCORED 5 POINTS AND WON THE GAME";
        gameEnded = true;
    }
}

function resetGame() {
    gameEnded = false;
    computerScore = 0;
    humanScore = 0;
    computerScoreSpan.textContent = 0;
    humanScoreSpan.textContent = 0;
    gameResults.textContent = "";
}