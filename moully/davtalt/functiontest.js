function bodlogo() {
  const dice = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  if (dice > dice2) {
    return dice + " dice > dice2 " + dice2;
  } else if (dice === dice2) {
    return dice + " dice = dice2 " + dice2;
  } else {
    return dice + " dice < dice2 " + dice2;
  }
}

console.log(bodlogo());
