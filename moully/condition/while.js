let sen = "";

for (let row = 10; row >= 0; row--) {
  for (let col = 0; col <= row; col++) {
    sen += "*";
  }
  sen += "\n";
}
console.log(sen);
