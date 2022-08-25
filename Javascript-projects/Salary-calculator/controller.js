window.addEventListener("load", bindEvents);

function bindEvents() {
  const button = document.querySelector("button");
  button.addEventListener("click", computeAllowances);
}

function computeAllowances() {
  clearDisplay();
  user.basicSalary = getBasicSalary();
  for (let key in user) {
    if (key === "basicSalary") {
      continue;
    }
    display(key, user[key]());
  }
}

function display(key, value) {
  const fieldSet = document.querySelector("fieldset");
  const p = document.createElement("p");
  p.textContent = `${key[0].toUpperCase()}${key.slice(1)} : ${value}`;
  fieldSet.appendChild(p);
}

function getBasicSalary() {
  return parseInt(document.querySelector("input").value);
}

function clearDisplay() {
  const fieldSet = document.querySelector("fieldset");
  while (fieldSet.children[1]) {
    fieldSet.removeChild(fieldSet.children[1]);
  }
}
