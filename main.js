//Variables

let display = document.querySelector('.numbers-display');
let getInputValue;
let getInputFunction;

const limit = 999999999999999;
const clearEntry = document.querySelector('#cancel-entry');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');

//Events

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText < limit ? display.innerText = display.innerText + number.value : display.innerText + "";
        getInputValue = display.innerText;
    });
})

functions.forEach(operation => {
    operation.addEventListener('click', () => {
        getInputFunction = operation.value;
    });
});

// calculations();

clearEntry.addEventListener('click', () => {
    display.innerText = "";
});