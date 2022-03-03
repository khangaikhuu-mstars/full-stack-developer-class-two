let q = [
  "Mongol ul heden aimagtai ve",
  "Mongol ulsiin niislel",
  "bagshiin nas",
  "Sanchiriin nas",
  "Mongin ulsiin mungur temdegt",
];
let a = [21, "ulaanbaatar", 32, 27, "mnt"];
let kk = 0;

let rank = ["buur suga", "ggu suga", "bronze", "silver", "gold"];

for (let i = 0; i < q.length; i++) {
  let answer = prompt(q[i]);
  console.log(answer);
  console.log(a[i]);
  answer.toLowerCase() === a[i] ? console.log("aldcla") : kk++;
}

alert(rank[kk]);
