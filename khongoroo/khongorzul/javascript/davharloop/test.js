let twoDarr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11],
];
var set = "";
for (let i = 0; i < twoDarr.length; i++) {
  for (let j = 0; j < twoDarr[i].length; j++) {
    set = set + " " + twoDarr[i][j];
  }
}
console.log(set);
// let twoDarr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// //console.log(twoDarr[1][3])
// for (let row = twoDarr.length - 1; row > 0; row--) {
//   for (let col = twoDarr[i].length - 1; col >= 0; col--) {
//     //
//     console.log(twoDarr[row][col]);
//   }
//   console.log("-----");
// }

// let twoDarr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let str = "";
// for (let i = 0; i < twoDarr.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     str += twoDarr[i][j] + " ";
//   }
//   str += "\n";
// }
// document.getElementById("answer").innerText = str;
// document.getElementById("btn").addEventListener("click", shuffle());
// function shuffle() {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//       let random = parseInt(Math.random() * 3);
//       let temp = twoDarr[i][0];
//       twoDarr[i][0] = twoDarr[i][random];
//       twoDarr[i][random] = temp;
//     }
//   }
// }
