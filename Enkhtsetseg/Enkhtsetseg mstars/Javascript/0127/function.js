function add() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) + parseInt(num2);
}
function sub() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) - parseInt(num2);
}
function multi() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) * parseInt(num2);
}
function division() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) / parseInt(num2);
}
let addButton = document.getElementById("button").addEventListener("click", add);
let subButton = document.getElementById("button1").addEventListener("click", sub);
let multiButton = document.getElementById("button2").addEventListener("click", multi);
let divisionButton = document.getElementById("button3").addEventListener("click", division);



