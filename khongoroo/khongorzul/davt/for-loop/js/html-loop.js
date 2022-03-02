const main = document.querySelector("main");

for (let i = 0; i < 10; i++) {
  main.innerHTML += `<div>${i + 1}</div>`;
}
