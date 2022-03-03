// console.log("A");
// console.log("B");
// console.log("C");

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 3000);
// console.log("C");

let i = 0;
let button1 = document.createElement("button");
button1.innerHTML = "";
// let button2 = document.createElement("button");
document.querySelector(".second").innerHTML =
  '<button id="stop">stop</button><p id="aaa"><p><button id="start">start</button>';
let para = document.getElementById("aaa");

document.querySelector("#start").addEventListener("click", () => {
  let my = setInterval(() => {
    i++;
    // console.log(i);
    para.innerText = i;
  }, 1000);
  document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(my);
  });
});
