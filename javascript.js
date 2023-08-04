let firstNumber = undefined;
let secondNumber = undefined;
let operationSymbol = undefined;
let hasOperationSymbol = false;

const mainScreen = document.querySelector("#mainScreen");
const topScreen = document.querySelector("#topScreen");
const numberButtons = document.querySelectorAll("#numbers");
const operationSymbolButtons = document.querySelectorAll("#operationSymbol");
const equalButton = document.querySelector("#equal");

let displayValue = "";

//on click handler for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", function (val) {
    displayOnMainScreen(val.target.textContent);
  });
});

//on click handler for operation symbols
operationSymbolButtons.forEach((button) => {
  button.addEventListener("click", function (val) {
    firstNumber = parseInt(displayValue);
    operationSymbol = val.target.textContent;
    hasOperationSymbol = true;
    displayOnTopScreen(displayValue + " " + val.target.textContent);
  });
});

//equal button login
equalButton.addEventListener("click", function () {
  secondNumber = parseInt(displayValue);
//   console.log(firstNumber);
//   console.log(operationSymbol);
//   console.log(secondNumber);
  displayOnTopScreen(topScreen.textContent + " " + mainScreen.textContent + " =");
  displayOnMainScreen(operate(operationSymbol, firstNumber, secondNumber));
  
});

//Console Testing
// console.log(operate(operationSymbol, firstNumber, secondNumber));
// console.log(numberArray);

// FUNCTIONS
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operationSymbol, firstNumber, secondNumber) {
  if (operationSymbol === "+") {
    return add(firstNumber, secondNumber);
  } else if (operationSymbol === "-") {
    return minus(firstNumber, secondNumber);
  } else if (operationSymbol === "x") {
    return multiply(firstNumber, secondNumber);
  } else if (operationSymbol === "/") {
    return divide(firstNumber, secondNumber);
  }
}

function displayOnMainScreen(num) {
  if (hasOperationSymbol === true) {
    displayValue = 0;
  }

  displayValue = displayValue + num;
  return (mainScreen.textContent = parseInt(displayValue));
}

function displayOnTopScreen(displayValue) {
  return (topScreen.textContent = displayValue);
}