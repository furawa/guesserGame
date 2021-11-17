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
const table = document.getElementsByTagName("table")[0]; // Get the table element
const tbody = document.getElementsByTagName("tbody")[0]; // Get the body element of the table
const tfoot = document.getElementsByTagName("tfoot")[0]; // Get the foot element of the table
/*===================Elements Creation=====================*/

// Create the player input element
const playerInput = createEle(
  (element = "input"),
  (id = "playerInput"),
  (fontSize = "1.4rem"),
  (width = "80px"),
  (height = "110px")
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
  (id = "error"),
  (fontSize = "0.6rem"),
  (width = "200px"),
  (height = "30px")
);
error.style.display = "none";
error.style.color = "black";
error.style.border = "1px solid red";
error.style.margin = "auto";
error.style.marginBottom = "5px";
error.style.paddingTop = "3px";


// Create minus button
const btnMinus = createEle(
  "button",
  (id = "minus"),
  (width = "45px"),
  (height = "45px")
); 
// Style the minus button
btnMinus.textContent = "-"; // Set the text to be -
btnMinus.style.borderRadius = "50% 0 0 50%";
btnMinus.style.border = "1px solid #4D5061";
btnMinus.style.color = "#4D5061";
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
  playerInput.insertAdjacentElement("beforebegin", error);
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
  // display the table
  table.style.display = "table";
  // var documentFragment = document.createDocumentFragment();
  const newRow = document.createElement("tr");
  
  // Update the table cells of the body
  newRow.insertCell(0).textContent = `Game ${GameNumber}`;
  newRow.insertCell(1).textContent = `${playerScore}`;
  newRow.insertCell(2).textContent = `${computerScore}`;
  newRow.insertCell(3).textContent = `${currentRoundNumber - 1}`;
  tbody.appendChild(newRow);

  tfoot.innerHTML = `<tr><th>Total Wins</th>
                     <td>${totalPlayerWins}</td>
                     <td>${totalComputerWins}</td>
                     <td>${totalRounds}</td></tr>`;
  
}

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

