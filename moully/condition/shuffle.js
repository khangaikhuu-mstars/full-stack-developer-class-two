document.getElementById("shuffleBtn").addEventListener("click", shuffle);
let sugalaa = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let str = "";
for (let i = 0; i < sugalaa.length; i++) {
  for (let j = 0; j < 3; j++) {
    str += sugalaa[i][j] + " ";
  }
  str += "\n";
}
document.getElementById("answer").innerText = str;



