// 8second huleeh hugatsaand edit hiij bolno

const btn = document.querySelector(".form__btn");

function wait() {
  console.log("starting...");
  let start = new Date().getTime();
  while (new Date().getTime() - start < 8000);
  setTimeout(() => {
    console.log(btn);
  });
}

btn.addEventListener("click", wait);
