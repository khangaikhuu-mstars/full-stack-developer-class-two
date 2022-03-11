// function randomNumber() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   let dice1 = Math.floor(Math.random() * 6) + 1;
//   let dice2 = Math.floor(Math.random() * 6) + 1;

//   if (dice > dice1) {
//     return "fsuhf";
//   } else if (dice === dice1) {
//     return "equal";
//   } else {
//     return "fshusjnbf";
//   }
// }

// document.getElementById("btn").addEventListener("click", () => {
//   console.log(randomNumber());
//   document.getElementById("answer").innerText = randomNumber();
// });

let number1 = parseInt(prompt("Enter your number"));
let number2 = parseInt(prompt("Enter your number"));

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(number1, number2));
