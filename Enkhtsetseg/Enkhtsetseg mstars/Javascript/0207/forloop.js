let sen = "";
for (let row = 0; row<5; row++) {
    for(let col = 5; col>row; col--){
        sen += "*";
    }
    sen +="\n";
}
console.log(sen);