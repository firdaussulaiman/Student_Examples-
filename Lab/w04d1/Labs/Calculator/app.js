// calculator
// Create a calculator in JavaScript.

// Requirements
// Prompt the user to enter an operator and two number.
// Support the following operations: addition, subtraction, multiplication, and division.
// Output may appear in the console or in an alert.

let displayText = "";

const storage = {
  operator: undefined,
  firstNumber: "",
  secondNumber: "",
};
const checkDecimal = (number) => {
  if (number[number.length - 1] === ".") {
    return number.slice(0, number.length - 1);
  }
};

let counter = 0;
const out = document.querySelector("#output");
const numberButton = document.querySelectorAll(".number");
numberButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const value = event.target.id;
    displayText += value;
    // First number
    if (storage.operator === undefined) {
      out.innerText = displayText;
      storage.firstNumber = displayText;
    }
    // Second Number
    else {
      storage.secondNumber = displayText;
      out.innerText = displayText;
    }
  });
});

const operatorButton = document.querySelectorAll(".operator");
operatorButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // displayText = checkDecimal(displayText);
    storage.firstNumber = parseFloat(displayText);
    const value = event.target.id;
    storage.operator = value;
    displayText = "";
  });
});

let result = 0;
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", (event) => {
  storage.secondNumber = parseFloat(displayText);
  // storage.firstNumber = parseFloat(storage.firstNumber);
  console.log(storage);
  switch (storage.operator) {
    case "add":
      result = storage.firstNumber + storage.secondNumber;
      break;
    case "minus":
      result = storage.firstNumber - storage.secondNumber;
      break;
    case "mutiply":
      result = storage.firstNumber * storage.secondNumber;
      break;
    case "divide":
      result = storage.firstNumber / storage.secondNumber;
      break;
  }
  console.log(result);
  out.innerText = result;
  displayText = "";
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (event) => {
  displayText = "";
  storage.operator = undefined;
  storage.firstNumber = "";
  storage.secondNumber = "";
  out.innerText = 0;
});

const dotButton = document.querySelector(".dot");
const dotActivated = false;
dotButton.addEventListener("click", (e) => {
  if (!displayText.includes(".")) {
    displayText += e.target.id;
    out.innerText = displayText;
  }
});
