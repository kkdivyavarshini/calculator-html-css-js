// Select the calculator screen and buttons
var calculatorScreen = document.querySelector('.calculator-screen');

var btn7 = document.querySelector('.btn:nth-child(1)');
var btn8 = document.querySelector('.btn:nth-child(2)');
var btn9 = document.querySelector('.btn:nth-child(3)');
var btnAdd = document.querySelector('.btn:nth-child(4)');

var btn4 = document.querySelector('.btn:nth-child(5)');
var btn5 = document.querySelector('.btn:nth-child(6)');
var btn6 = document.querySelector('.btn:nth-child(7)');
var btnSubtract = document.querySelector('.btn:nth-child(8)');

var btn1 = document.querySelector('.btn:nth-child(9)');
var btn2 = document.querySelector('.btn:nth-child(10)');
var btn3 = document.querySelector('.btn:nth-child(11)');
var btnMultiply = document.querySelector('.btn:nth-child(12)');

var btn0 = document.querySelector('.btn:nth-child(13)');
var btnDecimal = document.querySelector('.btn:nth-child(14)');
var btnDivide = document.querySelector('.btn:nth-child(15)');
var btnEqual = document.querySelector('.btn:nth-child(16)');

var btnClear = document.querySelector('.btn:nth-child(17)');

var currentInput = '';
var operator = '';
var previousInput = '';

// Add event listeners to each button
btn7.addEventListener('click', function() {
    currentInput += '7';
    updateScreen();
});
btn8.addEventListener('click', function() {
    currentInput += '8';
    updateScreen();
});
btn9.addEventListener('click', function() {
    currentInput += '9';
    updateScreen();
});
btnAdd.addEventListener('click', function() {
    setOperator('+');
});

btn4.addEventListener('click', function() {
    currentInput += '4';
    updateScreen();
});
btn5.addEventListener('click', function() {
    currentInput += '5';
    updateScreen();
});
btn6.addEventListener('click', function() {
    currentInput += '6';
    updateScreen();
});
btnSubtract.addEventListener('click', function() {
    setOperator('-');
});

btn1.addEventListener('click', function() {
    currentInput += '1';
    updateScreen();
});
btn2.addEventListener('click', function() {
    currentInput += '2';
    updateScreen();
});
btn3.addEventListener('click', function() {
    currentInput += '3';
    updateScreen();
});
btnMultiply.addEventListener('click', function() {
    setOperator('*');
});

btn0.addEventListener('click', function() {
    currentInput += '0';
    updateScreen();
});
btnDecimal.addEventListener('click', function() {
    currentInput += '.';
    updateScreen();
});
btnDivide.addEventListener('click', function() {
    setOperator('/');
});
btnEqual.addEventListener('click', function() {
    calculate();
});

btnClear.addEventListener('click', function() {
    currentInput = '';
    operator = '';
    previousInput = '';
    calculatorScreen.value = '';
});

// Function to update the calculator screen
function updateScreen() {
    calculatorScreen.value = previousInput + ' ' + operator + ' ' + currentInput;
}

// Function to set the operator
function setOperator(op) {
    if (currentInput && !previousInput) {
        previousInput = currentInput;
        operator = op;
        currentInput = '';
        updateScreen();
    }
}

// Function to perform the calculation
function calculate() {
    if (previousInput && currentInput && operator) {
        currentInput = eval(previousInput + ' ' + operator + ' ' + currentInput).toString();
        calculatorScreen.value = currentInput;
        operator = '';
        previousInput = '';
    }
}