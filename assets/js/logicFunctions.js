/* Here are all the logical functions necessary to play the game */

let playerScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let GameNumber = 1;

// Function to generate the number to guess

const generateNumber = () => {
    return Math.floor(Math.random() * 10);
}

// Function to compare the results between computer and player
const compareGuesses = (playerGuess, computerGuess, secretNumber) => {
    const playerResult = getAbsoluteDistance(playerGuess, secretNumber);
    const computerResult = getAbsoluteDistance(computerGuess, secretNumber);
    return playerResult <= computerResult; // The player wins in case of a tie
}

// Function to update the score
const updateScore = winner => {
    if (winner === "player") {
        playerScore += 1;
    } else {
        computerScore += 1;
    }
}

// Function to go to the next round
const goNextRound = () => {
    
    // Enable the end game button after 3 rounds
    if (currentRoundNumber > 3) {
        endGameButton.removeAttribute("disabled");
    }
    nextRoundButton.setAttribute("disabled", true); // Disable button after clicking
    roundLabel.textContent = currentRoundNumber;
    btnPlus.removeAttribute("disabled");
    guessBtn[0].removeAttribute("disabled");
    playerInput.value = "0";
    playerWinDisplay.textContent = "You";
    computerWinDisplay.textContent = "Computer";
    computerGuessLabel.textContent = "?";
    playerInput.removeAttribute("readonly");
    correctColor();

}

// Function to end the Game. The function will reset all the values
const endGame = () => {
    showResult();
    resetEndGame();
}
// Helper functions

const getAbsoluteDistance = (a, b) => {
    return Math.abs(a - b);
}

// Function to reset for the next round
const resetNextRound = () => {
    nextRoundButton.setAttribute("disabled", true); // Disable button after clicking
    roundLabel.textContent = currentRoundNumber;
    btnPlus.removeAttribute("disabled");
    guessBtn[0].removeAttribute("disabled");
    playerInput.value = "0";
    playerWinDisplay.textContent = "You";
    computerWinDisplay.textContent = "Computer";
    computerGuessLabel.textContent = "?";
    playerInput.removeAttribute("readonly");
}

// Funtion to reset after end game

const resetEndGame = () => {
    resetNextRound();
    GameNumber += 1;
    playerScore = 0;
    computerScore = 0;
    currentRoundNumber = 1;
    roundLabel.textContent = currentRoundNumber;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    endGameButton.setAttribute("disabled", true);
}

// Function to initialize values
const initializeValues = () => {
    return playerScore, computerScore, currentRoundNumber;
}

function correctColor() {
    if (btnMinus.disabled) {
       btnMinus.style.backgroundColor = "#E9EDDE";
    } else {
       btnMinus.style.backgroundColor = "#E7E247";
    }
    if (btnPlus.disabled) {
       btnPlus.style.backgroundColor = "#E9EDDE";
    } else {
       btnPlus.style.backgroundColor = "#E7E247";
    }
 }

 