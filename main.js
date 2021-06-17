//Variables

let display = document.querySelector('.numbers-display');
let pastDisplay = document.querySelector('.past-display');
let operatorDisplay = document.querySelector('.operator-display');
let currentNumber = display.innerText;
let displayValue = display.innerText;
let pastDisplayValue = pastDisplay.innerText;
let operatorDisplayValue = operatorDisplay.innerText;
let heldValue;
let getInputValue = "";
let getInputFunction;
let calculatedValue;

const clearEntry = document.querySelector('#cancel-entry');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalsSign = document.querySelector('#equals');
const decimalSign = document.querySelector('#decimal');
const factorialSign = document.querySelector('#factorial');
const backspace = document.querySelector('#backspace');

//Functions

const clearDisplays = () => {
    pastDisplay.innerText = "";
    operatorDisplay.innerText = "";
}

const divideByZero = () => {
    if (operatorDisplay.innerText === '÷' && display.innerText === '0') {
        clearDisplays();
        display.innerText = "Error: Cannot divide by zero."
    }
}

const factorial = number => {
	let answer = 1;
	if (number == 0 || number == 1) {
		return answer;
	} else {
		for (let i = number; i >= 1; i--) {
            answer = answer * i;
            getInputValue = answer;
		}  
		return display.innerText = getInputValue;
	}
}

const isAlreadyPopulated = () => {
    if (pastDisplay.innerText.includes(heldValue) 
        && operatorDisplay.innerText.includes(getInputFunction) 
        && display.innerText.includes(getInputValue)) {
        calculate();
    }
}

const calculate = () => { //could be converted into a switch statement?
    operatorDisplay.innerText === "+" 
    ? (display.innerText = +pastDisplay.innerText + +display.innerText, clearDisplays(), getInputValue = display.innerText) 
    : operatorDisplay.innerText === "-" 
    ? (display.innerText = +pastDisplay.innerText - +display.innerText, clearDisplays(), getInputValue = display.innerText) 
    : operatorDisplay.innerText === "×" 
    ? (display.innerText = +pastDisplay.innerText * +display.innerText, clearDisplays(), getInputValue = display.innerText) 
    : operatorDisplay.innerText === "e˟" 
    ? (display.innerText = Number(pastDisplay.innerText) ** +display.innerText, clearDisplays(), getInputValue = display.innerText) //had to use Number() because can't use +var in exponential expression?
    : operatorDisplay.innerText === "÷" && display.innerText === "0" 
    ? divideByZero() 
    : operatorDisplay.innerText === "÷" && display.innerText !== "0" 
    ? (display.innerText = +pastDisplay.innerText / +display.innerText, clearDisplays(), getInputValue = display.innerText) 
    : display.innerText;

    /* 
    switch (operatorDisplay.innerText) {
        case "+":
            do function(operator)
            break;
        default:
            println('This is pseudocode')
    }

    */
}

//Events

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText = display.innerText + number.value;
        getInputValue = display.innerText;
        display.innerText.includes(getInputFunction) ? (operatorDisplay.innerText = getInputFunction, display.innerText = number.value) : display.innerText + "";
        if (display.innerText.length >= 12) {
            display.innerText = display.innerText.substring(0, 12);
            getInputValue = display.innerText.substring(0, 12);
        }
    })
})

window.addEventListener('keydown', (e) => {
    let keyValue = document.querySelector(`input[data-key="${e.key}"]`);
    if (keyValue !== null) {
        keyValue.classList.add('active');
    }
    (keyValue !== null) 
    ? keyValue.click() 
    : (e.key === "=") 
    ? (keyValue = document.querySelector(`input[data-key="Enter"]`), keyValue.click()) 
    : e.preventDefault();
});

window.addEventListener('keyup', (e) => {
    let keyValue = document.querySelector(`input[data-key="${e.key}"]`);
    if (keyValue !== null) {
        keyValue.classList.remove('active');
    }
});

functions.forEach(operation => {
    if (display.innerText !== undefined) {
        operation.addEventListener('click', () => {
            isAlreadyPopulated();
            display.innerText = "";
            getInputFunction = operation.value;
            heldValue = getInputValue
            pastDisplay.innerText = heldValue;
            operatorDisplay.innerText = getInputFunction;
            decimalSign.disabled = false;
        });
    }
});

decimalSign.addEventListener('click', () => {
    decimalSign.disabled = true;
});

factorialSign.addEventListener('click', () => {
    getInputValue = +display.innerText;
    factorial(getInputValue);
});

clearEntry.addEventListener('click', () => {
    display.innerText = "";
    getInputValue = "";
    decimalSign.disabled = false;
    clearDisplays();
});

equalsSign.addEventListener('click', () => {
    calculate();
    (!display.innerText.includes('.')) ? decimalSign.disabled = false : decimalSign.disabled = true;
});

backspace.addEventListener('click', () => {
    (!display.innerText.includes('.')) ? decimalSign.disabled = false : decimalSign.disabled = true;
    let displayLength = display.innerText.length;
    display.innerText = display.innerText.substring(0, displayLength - 1);
    getInputValue = display.innerText;
});