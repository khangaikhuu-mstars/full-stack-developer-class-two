function randomnumber() {
  const dice = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  if (dice > dice2) {
    return "dice 1 ni dice 2-s ih yum";
  } else if (dice === dice2) {
    return "dice 1 dice 2 ni hoorondoo adilhan yum";
  } else {
    return "dice 1 ni dice 2oos baga yum";
  }
}

const btn = document.getElementById("click");

btn.addEventListener("click", function () {
  console.log(randomnumber());
});
