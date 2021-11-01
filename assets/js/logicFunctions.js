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
const GoNextRound = () => {
    currentRoundNumber += 1;
}

// Function to end the Game. The function will reset all the values
const endGame = () => {
    // Create the footer element where to print the results
    const divResults = createEle("footer", "results", "1.7rem", "70%", "400px");
    divResults.innerHTML = `<h2>Game ${GameNumber} results<h2>
                            <p>Your Score: ${playerScore}<br>
                            Computer Score: ${computerScore}<br>
                            Number of Round: ${currentRoundNumber}`
    // Append the footer in the body
    document.querySelector("body").appendChild(divResults);
}
// Helper functions

const getAbsoluteDistance = (a, b) => {
    return Math.abs(a - b);
}