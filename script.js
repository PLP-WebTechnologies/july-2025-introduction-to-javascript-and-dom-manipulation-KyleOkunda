// Variables, Conditionals, and DOM interaction (combined with Part 4)

const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = parseInt(ageInput.value);

  if (age >= 18) {
    ageResult.textContent = "You are old enough to vote!";
    ageResult.classList.remove("warning");
    ageResult.classList.add("highlight");
  } else if (age > 0 && age < 18) {
    ageResult.textContent = "You are not old enough to vote yet.";
    ageResult.classList.remove("highlight");
    ageResult.classList.add("warning");
  } else {
    ageResult.textContent = "Please enter a valid age.";
    ageResult.classList.remove("highlight");
    ageResult.classList.add("warning");
  }
});

// Functions

function processString(inputString) {
  if (typeof inputString !== "string" || inputString.length === 0) {
    return "Invalid input. Please enter a string.";
  }

  const capitalizedString = inputString.toUpperCase();

  const reversedString = capitalizedString.split("").reverse().join("");

  return reversedString;
}

function addListItem(listId, content) {
  const list = document.getElementById(listId);
  if (!list) return;

  const newItem = document.createElement("li");
  newItem.textContent = content;
  list.appendChild(newItem);
}

const greetingInput = document.getElementById("greetingInput");
const processGreetingBtn = document.getElementById("processGreetingBtn");
const processedGreeting = document.getElementById("processedGreeting");

processGreetingBtn.addEventListener("click", () => {
  const userInput = greetingInput.value;
  const result = processString(userInput);
  processedGreeting.textContent = result;
});

// Loops and DOM Interaction

const countdownList = document.getElementById("countdownList");
const countdownNumbers = [5, 4, 3, 2, 1, "Blast Off!"];

for (let i = 0; i < countdownNumbers.length; i++) {
  addListItem("countdownList", countdownNumbers[i]);
}

countdownNumbers.forEach((item) => {
  console.log(`Countdown item: ${item}`);
});

const dynamicText = document.getElementById("dynamicText");
const domToggleBtn = document.getElementById("domToggleBtn");

let isTextToggled = false;

domToggleBtn.addEventListener("click", () => {
  if (isTextToggled) {
    dynamicText.textContent =
      "Click the button below to change this text and its style.";
    dynamicText.classList.remove("changed");
    isTextToggled = false;
  } else {
    dynamicText.textContent = "Wow! The text and style have changed!";
    dynamicText.classList.add("changed");
    isTextToggled = true;
  }
});
