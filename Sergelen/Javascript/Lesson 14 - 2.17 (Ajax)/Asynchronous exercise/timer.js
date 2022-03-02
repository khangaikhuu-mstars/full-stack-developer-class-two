let but1 = document.createElement("button");
but1.innerHTML = "Start";
document.querySelector(".timerBox").appendChild(but1);

let but2 = document.createElement("button");
but2.innerHTML = "Stop";
document.querySelector(".timerBox").appendChild(but2);

let par = document.createElement("p");
par.setAttribute("class", "para");
document.querySelector(".timerBox").appendChild(par);

but1.addEventListener("click", () => {
  let i = 1;
  let si = setInterval(() => {
    document.querySelector(".para").innerText = i;
    i++;
  }, 1000);
  but2.addEventListener("click", () => {
    clearInterval(si);
  });
});
