function add() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  console.log(num1, num2);
  document.getElementById("answer").innerHTML = parseInt(num1) + parseInt(num2);
}
function hasah() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  console.log(num1, num2);
  document.getElementById("answer").innerHTML = parseInt(num1) - parseInt(num2);
}
function urjih() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  console.log(num1, num2);
  document.getElementById("answer").innerHTML = parseInt(num1) * parseInt(num2);
}
function huvaah() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  console.log(num1, num2);
  document.getElementById("answer").innerHTML = parseInt(num1) / parseInt(num2);
}

let addButton = document
  .getElementById("button-nemeh")
  .addEventListener("click", add);
let minusButton = document
  .getElementById("button-hasah")
  .addEventListener("click", hasah);
let multiButton = document
  .getElementById("button-urjih")
  .addEventListener("click", urjih);
let divideButton = document
  .getElementById("button-huvaah")
  .addEventListener("click", huvaah);
