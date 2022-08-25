const correctExpression = (expression) => {
  return expression[expression.length - 1].match(/\d/);
};

const hasPreviousOperator = (expression) => {
return expression[expression.length - 1].match(/[+*-/]/);
};

export const updateExpression = (e, value) => {
  const char = e.target.textContent;
  let currentExpression = value;
  if (char === "=") {
    if (correctExpression(currentExpression))
      currentExpression = eval(currentExpression);
  } else if (char.match(/[+*-/]/)) {
    if (!hasPreviousOperator(currentExpression)) currentExpression += char;
  } else if (char === "C") {
    currentExpression = " ";
  } else {
    if (currentExpression === "0") 
      currentExpression = char;
    else 
      currentExpression += char;
  }
  return currentExpression;
};

const DisplayScreen = (props) => {
  return <div className="screen">{props.expression}</div>;
};

export default DisplayScreen;
