/* Here are all the functions necessary to play the game */

let secretNumber;

// Player change the value of the input number with the -/+ buttons
btnPlus.addEventListener("click", () => {
  playerInput.value = Number(playerInput.value) + 1; // Player increase the number
  handleInputValue(Number(playerInput.value)); // Check if the number is correct and adjust button state
});

btnMinus.addEventListener("click", () => {
  playerInput.value = Number(playerInput.value) - 1; // Player decrease the number
  handleInputValue(Number(playerInput.value));
});

// Function to disable the guess btn if a wrong value is inserted
playerInput.addEventListener("input", function (e) {
  handleInputValue(e.target.value);
});

// Select the input value on focus
playerInput.addEventListener("focus", () => {
  playerInput.select(); // select the value on click. setSelectionRange doesn't work with number
  // this doesn't work in this context?
});

// Player click on the guess button
guessBtn.addEventListener("click", () => {
  // Generate Secret number
  secretNumber = generateNumber();

  // Get the player guessed number
  const currentPlayerGuess = playerInput.value;
  // Compute the computer guess
  const computerGuessNumber = Math.floor(Math.random() * 10);

  // Show the computer guess and secret number
  secretNumberLabel.textContent = secretNumber;
  computerGuessLabel.textContent = computerGuessNumber;

  // Find the winner
  const IsPlayerWinner = compareGuesses(
    currentPlayerGuess,
    computerGuessNumber,
    secretNumber
  );
  const winner = IsPlayerWinner ? "player" : "computer";

  // Update the score
  updateScore(winner);

  // Show the winner
  if (IsPlayerWinner) {
    playerWinDisplay.textContent = "You Win!!!!!";
  } else {
    computerWinDisplay.innerText = "Computer Wins:(";
    playerWinDisplay.textContent = "Try again!";
  }

  // Update the scores
  computerScoreEl.textContent = computerScore;
  playerScoreEl.textContent = playerScore;

  // Change the state of the buttons
  guessBtn.setAttribute("disabled", true); // Disable the guess button
  nextRoundButton.removeAttribute("disabled"); // Enable the next round button
  btnMinus.setAttribute("disabled", true); // Disable the minus button
  btnPlus.setAttribute("disabled", true); // Disable the plus button
  playerInput.setAttribute("readonly", true); // Disable the input field
  adjustColor();
  currentRoundNumber += 1; // Increase the round
});

// Player click the Next round button
nextRoundButton.addEventListener("click", () => {
  goNextRound();
});

// Player end the game
endGameButton.addEventListener("click", () => {
  endGame();
});
