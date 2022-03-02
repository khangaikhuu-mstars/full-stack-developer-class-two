// let sen = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     sen += "*";
//   }
//   sen += "\n";
// }
// console.log(sen);

//доошоо харсан гурвалжин - одоор
let sen = "";
for (let row = 0; row < 5; row++) {
  for (let col = 5; col > row; col--) {
    //for(let col = 5; col < 5 - row; col++) - нэг хувилбар
    sen += " *";
  }
  sen += "\n";
}
console.log(sen);
