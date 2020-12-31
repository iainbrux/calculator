//Variables

let display = document.querySelector('.numbers-display');
let pastDisplay = document.querySelector('.past-display');
let operatorDisplay = document.querySelector('.operator-display');
let currentNumber = display.innerText;
let getInputValue;
let getInputFunction;
let calculatedValue;

const limit = 999999999999999;
const clearEntry = document.querySelector('#cancel-entry');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalsSign = document.querySelector('#equals');
const decimalSign = document.querySelector('#decimal');
const factorialSign = document.querySelector('#factorial');

//Functions

clearDisplays = () => {
    pastDisplay.innerText = "";
    operatorDisplay.innerText = "";
    decimalSign.disabled = false;
}

divideByZero = () => {
    if (operatorDisplay.innerText === '/' && display.innerText === '0') {
        clearDisplays();
        display.innerText = "Cannot divide by zero. Result: Infinity! (sqRT -1)"
    }
}

factorial = number => {
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

isAlreadyPopulated = () => {
    if (pastDisplay.innerText.includes(getInputValue) && operatorDisplay.innerText.includes(getInputFunction)) {
        if (getInputFunction === "+") {
            //pastDisplay.innerText = getInputValue;
            //operatorDisplay.innerText = getInputFunction;
            pastDisplay.innerText = Number(getInputValue) + Number(display.innerText.value);
            console.log(Number(getInputValue) + Number(display.innerText));
        }
    }
}

calculate = () => {
    operatorDisplay.innerText === "+" ? 
        (display.innerText = Number(pastDisplay.innerText) + Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "-" ? 
        (display.innerText = Number(pastDisplay.innerText) - Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "X" ? 
        (display.innerText = Number(pastDisplay.innerText) * Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "eX" ? 
        (display.innerText = Number(pastDisplay.innerText) ** Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "/" && display.innerText === "0" ? 
        divideByZero() : 
    operatorDisplay.innerText === "/" && display.innerText !== "0" ? 
        (display.innerText = Number(pastDisplay.innerText) / Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
        display.innerText;
}

//Events

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText < limit ? display.innerText = display.innerText + number.value : display.innerText + "";
        getInputValue = display.innerText;
        display.innerText.includes(getInputFunction) ? (operatorDisplay.innerText = getInputFunction, display.innerText = number.value) : display.innerText + "";
    });
})

functions.forEach(operation => {
    operation.addEventListener('click', () => {
        display.innerText = "";
        getInputFunction = operation.value;
        pastDisplay.innerText = getInputValue;
        operatorDisplay.innerText = getInputFunction;
        //isAlreadyPopulated()
        decimalSign.disabled = false;
    });
});

decimalSign.addEventListener('click', () => {
    display.innerText;
    decimalSign.disabled = true;
});

factorialSign.addEventListener('click', () => {
    getInputValue = Number(display.innerText);
    factorial(getInputValue);
})

clearEntry.addEventListener('click', () => {
    display.innerText = "";
    clearDisplays();
});

equalsSign.addEventListener('click', () => {
    calculate();
});
