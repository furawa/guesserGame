/* Here are all the logical functions necessary to play the game */

let playerScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let GameNumber = 1;

// Function to generate the number to guess
const generateNumber = () => {
  return Math.floor(Math.random() * 10);
};

// Function to compare the results between computer and player
const compareGuesses = (playerGuess, computerGuess, secretNumber) => {
  const playerResult = getAbsoluteDistance(playerGuess, secretNumber);
  const computerResult = getAbsoluteDistance(computerGuess, secretNumber);
  return playerResult <= computerResult; // The player wins in case of a tie
};

// Function to update the score
const updateScore = (winner) => {
  winner === "player" ? playerScore++ : computerScore++;
};

// Function to go to the next round
const goNextRound = () => {
  // Enable the end game button after 3 rounds
  if (currentRoundNumber > 3) {
    endGameButton.removeAttribute("disabled");
  }
  resetNextRound();
  adjustColor();
};

// Function to end the Game. The function will reset all the values
const endGame = () => {
  showResult();
  resetEndGame();
};
// Helper functions

const getAbsoluteDistance = (a, b) => {
  return Math.abs(a - b);
};

// Function to reset for the next round
const resetNextRound = () => {
  nextRoundButton.setAttribute("disabled", true); // Disable button after clicking
  roundLabel.textContent = currentRoundNumber;
  btnPlus.removeAttribute("disabled");
  guessBtn.removeAttribute("disabled");
  playerInput.value = "0";
  playerWinDisplay.textContent = "You";
  computerWinDisplay.textContent = "Computer";
  computerGuessLabel.textContent = "?";
  playerInput.removeAttribute("readonly");
};

// Function to reset values after end game

const resetEndGame = () => {
  resetNextRound();
  GameNumber += 1; // Increase the game number by 1
  playerScore = 0; // Reset player score
  computerScore = 0; // Reset computer Score
  currentRoundNumber = 1; // Reset current round number to 1
  // Show the reseted values
  roundLabel.textContent = currentRoundNumber; 
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  // Disable the end Game button
  endGameButton.setAttribute("disabled", true);
};

// Function to adjust the color of the -/+ buttons base on their state
function adjustColor() {
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

// Function to Check the value of the input
const handleInputValue = (value) => {
  const maxInput = Number(playerInput.max);
  const minInput = Number(playerInput.min);
  // Value is between min and max
  if (value > minInput && value < maxInput) {
    btnMinus.removeAttribute("disabled");
    btnPlus.removeAttribute("disabled");
    guessBtn.removeAttribute("disabled");
    showErrorMessage(); // No error message shown, Remove it
  } else if (value > maxInput) { 
    // disable the buttons and show error message
    btnPlus.setAttribute("disabled", true);
    guessBtn.setAttribute("disabled", true);
    showErrorMessage("block", "You should enter a number less than 10!!");
  } else if (value < minInput) {
    // Disable the buttons and show error message
    btnMinus.setAttribute("disabled", true);
    guessBtn.setAttribute("disabled", true);
    showErrorMessage(
      "block",
      "You should enter a number greater than or equal to 0"
    );
  } else if (value == playerInput.min) {
    btnMinus.setAttribute("disabled", true);
    showErrorMessage();
  } else if (value == maxInput) {
    btnPlus.setAttribute("disabled", true);
    showErrorMessage();
  } else {
    guessBtn.setAttribute("disabled", true);
    showErrorMessage("block", "No empty value allowed!");
  }
  adjustColor();
};

// Function to display the error message
const showErrorMessage = (display = "none", message = "", color = "") => {
  playerInput.style.color = color;
  error.style.display = display;
  error.textContent = message;
};
