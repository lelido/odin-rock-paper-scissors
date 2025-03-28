const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results");
const gameResults = document.querySelector("#game-results");
const computerScoreSpan = document.querySelector("#computer-score");
const humanScoreSpan = document.querySelector("#human-score");
const humanChoiceDiv = document.querySelector("#human-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const rockIcon = "🪨";
const paperIcon = "📜";
const scissorsIcon = "✂️";
let computerScore = 0;
let humanScore = 0;
let gameEnded = false;

rockButton.addEventListener("click", () => {
    humanChoiceDiv.textContent = rockIcon;
    playRound("Rock");
});
paperButton.addEventListener("click", () => {
    humanChoiceDiv.textContent = paperIcon;
    playRound("Paper");
});
scissorsButton.addEventListener("click", () => {
    humanChoiceDiv.textContent = scissorsIcon;
    playRound("Scissors");
});

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
            computerChoiceDiv.textContent = rockIcon;
            return "Rock";
        case 1:
            computerChoiceDiv.textContent = paperIcon;
            return "Paper";
        case 2:
            computerChoiceDiv.textContent = scissorsIcon;
            return "Scissors";
        default:
            return null;
    }
}

function updateScore(winner) {
    if (winner === "Computer") {
        computerScore++;
        computerScoreSpan.textContent = `Score: ${computerScore}`;
    } else if (winner === "Human") {
        humanScore++;
        humanScoreSpan.textContent = `Score: ${humanScore}`;
    }

    if (computerScore >= 5) {
        gameResults.textContent = "COMPUTER SCORED 5 POINTS AND WON THE GAME!";
        gameEnded = true;
    } else if (humanScore >= 5) {
        gameResults.textContent = "HUMAN SCORED 5 POINTS AND WON THE GAME!";
        gameEnded = true;
    }
}

function resetGame() {
    gameEnded = false;
    computerScore = 0;
    humanScore = 0;
    computerScoreSpan.textContent = "Score: 0";
    humanScoreSpan.textContent = "Score: 0";
    gameResults.textContent = "";

}