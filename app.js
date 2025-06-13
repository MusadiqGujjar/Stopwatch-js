var displayElement = document.querySelector('.display');
var currentInput = '';

function display(value) {
    if (displayElement.textContent === '0' && value !== '.') {
        currentInput = value.toString();
    } else {
        currentInput += value.toString();
    }
    displayElement.textContent = currentInput;
}

function displayOperator(operator) {
    const lastChar = currentInput
    if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput
    } 
    else {
        currentInput += operator;
    }
    displayElement.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    displayElement.textContent = '0';
}

function calculate() {
    var result = eval(currentInput);
    displayElement.textContent = result;
}

