let currentInput = "";
let hasCalculated = false;

function appendCharacter(character) {
  if (hasCalculated && !isOperator(character)) {
    currentInput = currentInput.slice(currentInput.indexOf('=') + 1);
    hasCalculated = false;
  }
  currentInput += character;
  updateDisplay();
}

function calculate() {
  if (currentInput !== "") {
    try {
      const result = eval(currentInput);
      currentInput = `${currentInput}=${result}`;
      hasCalculated = true;
      updateDisplay();
    } catch (error) {
      currentInput = "Error";
      hasCalculated = true;
      updateDisplay();
    }
  }
}

function clearDisplay() {
  currentInput = "";
  hasCalculated = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("output").value = currentInput;
}

function isOperator(character) {
  const operators = ["+", "-", "*", "/"];
  return operators.includes(character);
}
