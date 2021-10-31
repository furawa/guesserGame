/* Here we have all the functions to interact with the DOM
   Creation, deletion and modification of elements and nodes */

// Create the player input element
const playerInput = document.createElement("input");
playerInput.className = "numberInput"; // Set an id to the input
playerInput.type = "number"; // Set the type of the input
playerInput.min = "0"; // Set the min value
playerInput.max = "9"; // Set the max value
playerInput.value = "0"; // Set the default value;
// Style the input field. This can be done in style.css too
playerInput.style.width = "90px";
playerInput.style.height = "90px";
playerInput.style.margin = "auto";
playerInput.style.textAlign = "center";
playerInput.style.fontSize = "1.5rem";

// Add the input after the score
const guessBtn = document.getElementsByClassName("btn-guess");
// Function to insert the input
function insertInput() {
   guessBtn[0].insertAdjacentElement("beforebegin", playerInput)
}

