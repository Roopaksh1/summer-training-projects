function checkButton(e) {
    if (e.target.textContent === '=') {
        if (correctExpression()) {
            displayResult(eval(getExpression()));
        }
    } else if (e.target.textContent.match(/[+*\-\/]/)) {
        if (hasPreviousOperator()) {
            return;
        } else {
            display(e.target.textContent);
        }
    } else if (e.target.textContent === 'C') {
        clearDisplay();
    } else {
        display(e.target.textContent);
    }
}

function hasPreviousOperator() {
    const str = getExpression();
    if (str === '') {
        return 1;
    }
    return str[str.length - 1].match(/[+*\-\/]/);
}

function correctExpression() {
    const str = getExpression();
    return !(str[str.length - 1].match(/[+*\-\/]/));
}