/* Here are all the functions necessary to play the game */

let secretNumber;

const roundLabel = document.getElementsByClassName("round-label")[0];
const computerScoreEl = document.getElementById("computer-score"); // Get the computer score
const playerScoreEl = document.getElementById("player-score"); // Get the player score
const secretNumberLabel = document.getElementById("target-label"); // Get the label of the secret number
const computerGuessLabel = document.getElementsByClassName("computer-guess-label")[0];
const nextRoundButton = document.getElementsByClassName("btn-next")[0];
const endGameButton = document.getElementsByClassName("btn-end")[0];
const playerWinDisplay = document.getElementById("player-win");
const computerWinDisplay = document.getElementById("computer-win");

// Link to controls button to the player input
btnPlus.addEventListener("click", () => {
    playerInput.value = Number(playerInput.value) + 1;
    handleInputValue(Number(playerInput.value));
})

btnMinus.addEventListener("click", () => {
    playerInput.value = Number(playerInput.value) - 1;
    handleInputValue(Number(playerInput.value));
})

// Function to disable the guess btn if a wrong value is inserted
playerInput.addEventListener("input", function(e) { // No useful with readonly
    handleInputValue(e.target.value);
})

// Player click the button 
guessBtn[0].addEventListener("click", () => {
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

    const IsPlayerWinner = compareGuesses(currentPlayerGuess, computerGuessNumber, secretNumber);
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
    guessBtn[0].setAttribute("disabled", true); // Disable the guess button
    nextRoundButton.removeAttribute("disabled"); // Enable the next round button 
    btnMinus.setAttribute("disabled", true); // Disable the minus button
    btnPlus.setAttribute("disabled", true); // Disable the plus button
    playerInput.setAttribute("readonly", true); // Disable the input field
    correctColor();
    currentRoundNumber += 1; // Increase the round
});

// Player click the Next round button 

nextRoundButton.addEventListener("click", () => {
    goNextRound();
})

// Player end the game

endGameButton.addEventListener("click", () => {
    endGame();
})
/* Helper functions */

// Function to Check the value of the input
const handleInputValue = value => {
    if(value > Number(playerInput.min) && value < Number(playerInput.max)) {
        btnMinus.removeAttribute("disabled");
        btnPlus.removeAttribute("disabled");
        guessBtn[0].removeAttribute("disabled");
        showErrorMessage();
    } else if (value > Number(playerInput.max)) {
        btnPlus.setAttribute("disabled", true);
        guessBtn[0].setAttribute("disabled", true);
        showErrorMessage("block", "You should enter a number less than 10!!");
    } else if (value < Number(playerInput.min)) {
        btnMinus.setAttribute("disabled", true);
        guessBtn[0].setAttribute("disabled", true);
        showErrorMessage("block", "You should enter a number greater than or equal to 0");
    } else if (value == Number(playerInput.min)) {
        btnMinus.setAttribute("disabled", true);
        showErrorMessage("none");
    } else if (value == Number(playerInput.max)) {
        btnPlus.setAttribute("disabled", true);
        showErrorMessage("none");
    }
    correctColor();
 }
 
 // Function to display the error message
 const showErrorMessage = (display = "none", message = "") => {
    error.style.display = display;
    error.textContent = message;
 }