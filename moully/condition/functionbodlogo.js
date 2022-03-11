// function findSumOfEven() {
//   let x = parseInt(prompt("x toog oruulna uu."));
//   let total = 0;
//   let counter = (x-1)
//   for (let counter = 1; counter < x && counter % 2 == 0; i++) {
//     total = total + counter;
//     alert(total);
//   }
// }
// findSumOfEven();
function findSumOfEven(x) {
  let total = 0;
  for (let i = 0; i < x; i++) {
    if (i % 2 == 0) {
      total = total + i;
    }
  }
  return total;
}
let x = parseInt(prompt("too oruulna uu?"));
let total = findSumOfEven(x);
console.log(total);
