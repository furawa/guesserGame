/* Here we have all the functions to interact with the DOM
   Creation, removal and modification of elements and nodes */

// Create the player input element
const playerInput = createEle(element="input", id="playerInput",fontSize="1.4rem",width="90px", height="90px");
playerInput.type = "number"; // Set the type of the input
playerInput.min = "0"; // Set the min value
playerInput.max = "9"; // Set the max value
playerInput.value = "0"; // Set the default value;
// Style the input field. This can be done in style.css too
playerInput.style.margin = "auto";
playerInput.style.textAlign = "center";
// playerInput.setAttribute("readonly", true);

// Create a span to display error message
const error = createEle("span", "error", "0.7rem", width="200px", height="30px");
error.style.display = "none";
error.style.color = "black";
error.style.marginTop = "5px";
error.style.border = "1px solid red";
error.style.margin = "auto";
// Add the input after the score
const guessBtn = document.getElementsByClassName("btn-guess");

// Function to insert the input
function insertInput() {
   guessBtn[0].insertAdjacentElement("beforebegin", playerInput)
   // Insert the error span, won't be visible as there is no text
   playerInput.insertAdjacentElement("afterend", error);
}
// Insert controls buttons to control the input field
const divControl = createEle(element = "div", id="btn-controls", fontSize = "0"); // Create the div container for the buttons
divControl.className = "container-controls"; // Set a class to the div
divControl.style.margin = "1% auto 5% auto";

// Create minus button
const btnMinus = createEle("button", id = "minus", width = "45px", height = "45px"); // Create the minus button
btnMinus.textContent = "-"; // Set the text to be -
btnMinus.style.borderRadius = "50% 0 0 50%";
btnMinus.style.border = "1px solid #4D5061";
btnMinus.style.color = "#4D5061";
btnMinus.disabled = "true";
// Create plus button
const btnPlus = createEle("button", id = "plus", width = "45px", height = "45px");
btnPlus.textContent = "+";
btnPlus.style.borderRadius = "0 50% 50% 0";
btnPlus.style.border = "1px solid #4D5061";
btnPlus.style.cursor = "pointer";
btnPlus.style.color = "#4D5061";

// Append the buttons inside the div
divControl.appendChild(btnMinus);
divControl.appendChild(btnPlus);

// Insert the div with buttons before the guess button
function insertControls() {
   // First we insert the buttons inside the div
   guessBtn[0].insertAdjacentElement("beforebegin", divControl);
}

/* Function to display the results after end game */

const showResult = () => {
   // Create the div to contain the results
   divResults = createEle("div","result", "1.2rem", width="100%");
   divResults.innerHTML = `<h2>Game ${GameNumber}<h2>
                        <p>Your Score: ${playerScore}<br>
                        Computer Score: ${computerScore}<br>
                        Number of Rounds: ${currentRoundNumber - 1}
                        <hr>`;
   
   
   // Little styling
   // divResults.style.border = "1px solid black";
   divResults.style.textAlign = "left";
   // Append the div in the footer
   document.querySelector("body").appendChild(divResults);
}



// Helper function
function createEle(element, id = "", fontSize="1.5rem", width = "auto", height ="auto") {
   const el = document.createElement(element);
   el.style.fontSize = fontSize;
   el.style.width = width;
   el.style.height = height;
   el.id = id;
   
   return el;
}