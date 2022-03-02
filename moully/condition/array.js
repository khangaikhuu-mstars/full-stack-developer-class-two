// let array = [100, 200, 300]; //array.lengh = 12

// let total = 0;
// for (let i = 0; i < array.length; i++) {
//   total = total + array[i];
// }

// console.log(total);

// let array = ["a", "b", "c", "d", 1, 2, 3, 4, 5, 6];
// array.pop();
// console.log(array);

/* 
loop-r hereglegchees 10n ner avna promtoor avna
avj baigaa nersee array ruu nemj oruulna
bu nersiig loop davtalaar nersiinh ni urt 5-s ih
buh nersiig string dotor tsugluulaad daraa ni hevlii
*/

let ners;
let sainuu = [];
for (i = 0; i <= 4; i++) {
  ners = prompt("Neree oruulah");
  if (ners > 5) {
    sainuu.push(ners);
  }
}
console.log();
console.log(sainuu);
