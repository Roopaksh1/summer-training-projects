window.addEventListener('load', createCalculator);
window.addEventListener('load', bindEvents);

function bindEvents() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', checkButton));
}

function createCalculator() {
    const table = document.createElement('table');
    document.body.appendChild(table);
    createRows();
    createButtons();
    fillButtons();
}

function createRows() {
    const table = document.querySelector('table');
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        table.appendChild(row);
    }
    table.children[0].classList.add('screen');
}

function createButtons() {
    const table = document.querySelector('table');
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
            table.children[i].appendChild(document.createElement('button'));
        }
    }
}

function fillButtons() {
    const arr = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];
    let k = 0;
    const table = document.querySelector('table');
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
            table.children[i].children[j].textContent = arr[k];
            k++;
        }
    }
}

function display(str) {
    const table = document.querySelector('table');
    table.children[0].textContent += str;
}

function displayResult(str) {
    const table = document.querySelector('table');
    table.children[0].textContent = str;
}

function getExpression() {
    const table = document.querySelector('table');
    return table.children[0].textContent;
}

function clearDisplay() {
    const table = document.querySelector('table');
    table.children[0].textContent = '';
}