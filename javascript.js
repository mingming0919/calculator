let firstNumber = "";
let secondNumber = "";
let operationSymbol = "";
let hasOperationSymbol = false;

const mainScreen = document.querySelector("#mainScreen");
const topScreen = document.querySelector("#topScreen");
const numberButtons = document.querySelectorAll("#numbers");
const operationSymbolButtons = document.querySelectorAll("#operationSymbol");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clearButton");
const delButton = document.querySelector("#delButton");

let displayValue = "";

//on click handler for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", function (val) {
    if (hasOperationSymbol === true) {
      displayValue = "";
      hasOperationSymbol = false;
    }

    displayValue = displayValue + val.target.textContent;

    displayOnMainScreen(displayValue);
  });
});

//on click handler for operation symbols
operationSymbolButtons.forEach((button) => {
  button.addEventListener("click", function (val) {
    if (mainScreen.textContent != "") {
      firstNumber = parseInt(displayValue);
      operationSymbol = val.target.textContent;
      hasOperationSymbol = true;

      displayOnTopScreen(displayValue + " " + val.target.textContent);
    }
  });
});

//equal button login
equalButton.addEventListener("click", function () {
  secondNumber = parseInt(displayValue);

  displayOnTopScreen(
    topScreen.textContent + " " + mainScreen.textContent + " ="
  );

  check2ndNumIfDivision(secondNumber, operationSymbol);

  let result = operate(operationSymbol, firstNumber, secondNumber);

  let [integerPart, decimalPart] = result.toString().split(".");

  if (decimalPart && decimalPart.length > 4) {
    decimalPart = Number(decimalPart).toPrecision(3);
  }

  result = parseFloat(integerPart + (decimalPart ? "." + decimalPart : ""));

  displayOnMainScreen(result);
});

//clear button login
clearButton.addEventListener("click", clearCalc);

//del button login
delButton.addEventListener("click", function () {
  let str = mainScreen.textContent;
  str = str.substring(0, str.length - 1);
  displayValue = str;
  mainScreen.textContent = str;
});

// FUNCTIONS
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  const result = a * b;
  const threshold = 100000;

  if (Math.abs(result) > threshold) {
    return result.toFixed(0);
  }

  return result;
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

function displayOnMainScreen(displayValue) {
  return (mainScreen.textContent = displayValue);
}

function displayOnTopScreen(displayValue) {
  return (topScreen.textContent = displayValue);
}

function clearCalc() {
  firstNumber = "";
  secondNumber = "";
  operationSymbol = "";
  hasOperationSymbol = false;
  displayValue = "";
  mainScreen.textContent = "";
  topScreen.textContent = "";
}

function check2ndNumIfDivision(num, operationSymbol) {
  if (num === 0) {
    if (operationSymbol === "/") {
      alert("Cannot divide with 0");
      clearCalc();
    }
  }
}
