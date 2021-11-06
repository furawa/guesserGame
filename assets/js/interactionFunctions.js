/* Here we have all the functions to interact with the DOM
   Creation, removal and modification of elements and nodes */

// Retrieve all the elements necessary for the project
const roundLabel = document.getElementsByClassName("round-label")[0];
const computerScoreEl = document.getElementById("computer-score"); // Get the computer score
const playerScoreEl = document.getElementById("player-score"); // Get the player score
const secretNumberLabel = document.getElementById("target-label"); // Get the label of the secret number
const computerGuessLabel = document.getElementsByClassName(
  "computer-guess-label"
)[0];
const nextRoundButton = document.getElementsByClassName("btn-next")[0];
const endGameButton = document.getElementsByClassName("btn-end")[0];
const playerWinDisplay = document.getElementById("player-win");
const computerWinDisplay = document.getElementById("computer-win");
const guessBtn = document.getElementsByClassName("btn-guess")[0];

/*===================Elements Creation=====================*/

// Create the player input element
const playerInput = createEle(
  (element = "input"),
  (id = "playerInput"),
  (fontSize = "1.4rem"),
  (width = "90px"),
  (height = "90px")
);
playerInput.type = "number"; // Set the type of the input
playerInput.min = "0"; // Set the min value
playerInput.max = "9"; // Set the max value
playerInput.value = "0"; // Set the default value;
// Style the input field. This can be done in style.css too
playerInput.style.margin = "auto";
playerInput.style.textAlign = "center";

// Create a span to display error message
const error = createEle(
  "span",
  "error",
  "0.7rem",
  (width = "200px"),
  (height = "30px")
);
error.style.display = "none";
error.style.color = "black";
error.style.marginTop = "5px";
error.style.border = "1px solid red";
error.style.margin = "auto";
// Add the input after the score

// Create minus button
const btnMinus = createEle(
  "button",
  (id = "minus"),
  (width = "45px"),
  (height = "45px")
); // Create the minus button
btnMinus.textContent = "-"; // Set the text to be -
btnMinus.style.borderRadius = "50% 0 0 50%";
btnMinus.style.border = "1px solid #4D5061";
btnMinus.style.color = "#4D5061";
// btnMinus.style.backgroundColor = "#E7E247";
btnMinus.disabled = "true";

// Create plus button
const btnPlus = createEle(
  "button",
  (id = "plus"),
  (width = "45px"),
  (height = "45px")
);
btnPlus.textContent = "+";
btnPlus.style.borderRadius = "0 50% 50% 0";
btnPlus.style.border = "1px solid #4D5061";
btnPlus.style.cursor = "pointer";
btnPlus.style.color = "#4D5061";
btnPlus.style.backgroundColor = "#E7E247";

// Create a div to append the buttons into
const divControl = createEle(
  (element = "div"),
  (id = "btn-controls"),
  (fontSize = "0")
); // Create the div container for the buttons
divControl.className = "container-controls"; // Set a class to the div
divControl.style.margin = "1% auto 5% auto";

/*=========================== Functions ========================== */
// Function to insert the input
function insertInput() {
  guessBtn.insertAdjacentElement("beforebegin", playerInput);
  // Insert the error span, won't be visible as there is no text
  playerInput.insertAdjacentElement("afterend", error);
}

// Insert the div with buttons before the guess button
function insertControls() {
  // First we insert the buttons inside the div
  guessBtn.insertAdjacentElement("beforebegin", divControl);
  // Append the buttons inside the div
  divControl.appendChild(btnMinus);
  divControl.appendChild(btnPlus);
}

/* Function to display the results after end game */
const showResult = () => {
  // Create the div to contain the results
  divResults = createEle("div", "1rem", (width = "100%"));
  divResults.className = "result";
  divResults.innerHTML = `<h2>Game ${GameNumber}<h2>
                        <p>Your Score: ${playerScore}<br>
                        Computer Score: ${computerScore}<br>
                        Number of Rounds: ${currentRoundNumber - 1}</p>`;
  // Little styling
  // divResults.style.border = "1px solid black";
  divResults.style.textAlign = "left";
  // Append the div in the footer
  document.getElementById("div-container").appendChild(divResults);
};

// Helper functions
function createEle(
  element,
  id = "",
  fontSize = "1.5rem",
  width = "auto",
  height = "auto"
) {
  const el = document.createElement(element);
  el.style.fontSize = fontSize;
  el.style.width = width;
  el.style.height = height;
  el.id = id;

  return el;
}

