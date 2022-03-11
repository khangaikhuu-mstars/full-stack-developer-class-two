const btn = document.querySelector(".form__btn");

function wait() {
  console.log("starting...");
  let start = new Date().getTime();
  setTimeout(() => {
    console.log("finished!");
  }, 2000);
}

btn.addEventListener("click", wait);
