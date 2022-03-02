let num1 = parseInt(prompt("enter first number: "));
let num2 = parseInt(prompt("enter second number: "));
let maxim;

if (num1 > num2) {
  maxim = num1;
} else {
  maxim = num2;
}
console.log(maxim);
document.getElementById("answer").innerHTML = maxim;
