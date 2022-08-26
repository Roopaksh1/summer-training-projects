// E = (P.r.(1+r)n) / ((1+r)n – 1) 
// Here, 
// P = loan amount i.e principal amount 
// R = Interest rate per month 
// T = Loan time period in year

// Monthly EMI is= 461.449677

// MODEL
const calculateEmi = (p, r, t) => {
  r = r / (12 * 100); // One month interest
  t = t * 12; // One month period
  return  Math.round(((p * r * (1 + r) ** t) / ((1 + r) ** t - 1) ) * 100) / 100;
}

// CONTROLLER
const bindEvents = () => {
  document.querySelector("button").addEventListener("click", handleEvent);
}

window.addEventListener("load", bindEvents);

const handleEvent = () => {
  if (inputValid()) {  
    const p = document.querySelector("#loan-amount").value;
    const r = document.querySelector("#interest-rate").value;
    const t = document.querySelector("#loan-time").value;
    const emi = calculateEmi(p, r, t);
    displayEmi(emi);
  }
}

const inputValid = () => {
  const inputs = [...document.querySelectorAll("input")];
  return inputs.every((i) => i.validity.valid);
}

const displayEmi = (emi) => {
  document.querySelector(".result").textContent = `Monthly EMI: ${emi} ₹`;
}