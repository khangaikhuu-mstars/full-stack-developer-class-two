sekund = 0;
let aTsag = document.createElement("p");
document.querySelector("#hellow").appendChild(aTsag);

let tsag = setInterval(() => {
  console.log(sekund++);
  aTsag.innerText = sekund;
}, 1000);

document.querySelector("#stopTimer").addEventListener("click", () => {
  clearInterval(tsag);
});

