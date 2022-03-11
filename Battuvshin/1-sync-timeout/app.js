const btn = document.querySelector(".form__btn");

function wait() {
  console.log("starting...");
  let start = new Date().getTime();
  while (new Date().getTime() - start < 8000);
  console.log("finished!");
}

// btn.addEventListener("click", wait);
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 3000);
// console.log("C");
