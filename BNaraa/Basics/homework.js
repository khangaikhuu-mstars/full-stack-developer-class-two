// Calculation for BMI
// BMI=kg/m2

let x = prompt("enter your weight");
let y = prompt("enter your height");

let a = parseFloat(x);
let b = parseFloat(y);

let answer = a / b ** 2;

alert("a/(b**2) = " + answer);
