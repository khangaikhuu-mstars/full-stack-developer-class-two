function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) + parseInt(num2);
}
function deduct(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) - parseInt(num2);
}
function multiply(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) * parseInt(num2);
}
function divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").innerText = parseInt(num1) / parseInt(num2);
}

document.getElementById("button1").addEventListener("click", add);
document.getElementById("button2").addEventListener("click", deduct);
document.getElementById("button3").addEventListener("click", multiply);
document.getElementById("button4").addEventListener("click", divide);