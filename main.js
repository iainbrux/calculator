//Variables

let display = document.querySelector('.numbers-display');
let pastDisplay = document.querySelector('.past-display');
let operatorDisplay = document.querySelector('.operator-display');
let getInputValue;
let getInputFunction;
let calculatedValue;

const limit = 999999999999999;
const clearEntry = document.querySelector('#cancel-entry');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalsSign = document.querySelector('#equals');

//Functions

clearDisplays = () => {
    pastDisplay.innerText = "";
    operatorDisplay.innerText = "";
}

//Events

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText < limit ? 
        display.innerText = display.innerText + number.value : display.innerText + "";
        getInputValue = display.innerText;
        display.innerText.includes(getInputFunction) ? 
        (operatorDisplay.innerText = getInputFunction, display.innerText = number.value) : 
        display.innerText + "";
    });
})

functions.forEach(operation => {
    operation.addEventListener('click', () => {
        getInputFunction = operation.value;
        pastDisplay.innerText = getInputValue;
        display.innerText = getInputFunction;
    });
});

clearEntry.addEventListener('click', () => {
    display.innerText = "";
    clearDisplays();
});

equalsSign.addEventListener('click', () => {
    operatorDisplay.innerText === "+" ? 
        (display.innerText = Number(pastDisplay.innerText) + Number(display.innerText), clearDisplays()) :
    operatorDisplay.innerText === "-" ? 
        (display.innerText = Number(pastDisplay.innerText) - Number(display.innerText), clearDisplays()) :
    operatorDisplay.innerText === "/" ? 
        (display.innerText = Number(pastDisplay.innerText) / Number(display.innerText), clearDisplays()) :
    operatorDisplay.innerText === "X" ? 
        (display.innerText = Number(pastDisplay.innerText) * Number(display.innerText), clearDisplays()) :
    operatorDisplay.innerText === "eX" ? 
        (display.innerText = Number(pastDisplay.innerText) ** Number(display.innerText), clearDisplays()) :
        display.innerText;
});