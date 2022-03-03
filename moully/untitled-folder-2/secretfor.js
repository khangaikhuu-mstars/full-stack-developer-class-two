let secretword = "miracle";
let message = "wrong answer";

for (let i = 5; i > 0; i--) {
  let guess = prompt("write your guess");
  alert("tand " + (i - 1) + " bolomj uldlee.");
  if (guess === secretword) {
    message = "welcome to world";
    break;
  }
}
alert(message);
