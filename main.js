let display = document.querySelector('.numbers-display');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('#divide');
const clearEntry = document.querySelector('#cancel-entry');

seven.addEventListener('click', () => {
    display.innerText <= 99999999999999 ? display.innerText = display.innerText + '7' : display.innerText + "";
});

eight.addEventListener('click', () => {
    display.innerText <= 99999999999999 ? display.innerText = display.innerText + '8' : display.innerText + "";
});

nine.addEventListener('click', () => {
    display.innerText <= 99999999999999 ? display.innerText = display.innerText + '9' : display.innerText + "";
});

clearEntry.addEventListener('click', () => {
    display.innerText = "";
});

/* Look at shortening code snippet above to one function

Think something like, keys.addEventListener('click', () => {
    display.innerText = display.innerText + keys.value;
})

*/