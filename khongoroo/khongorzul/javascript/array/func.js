// let array = ["a", "b", "c", "d", "e", "f"];
// var i;

// var c = prompt("toogo orul");
// array.push(c);
// for (i = 0; i < array.length; i++) {
//   var b;
//   b = i + " - " + array[i];
//   console.log(b);
// }

// array.pop();

// console.log(array);

// let number = 10;
// while (number > 5) {
//   console.log(number);
//   number--; //number = number - 1;
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// continue - гадна талын нөхцөл шалгалтруу буцна.

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }
var a = 0;
var arr = [];
while (a < 3) {
  var ner = prompt("Neree orulna uu : ");
  var aa = "";
  if (ner.length > 5) {
    aa = ner + aa;
    console.log("Songoson ner : " + aa);
  }
  a++;
}
