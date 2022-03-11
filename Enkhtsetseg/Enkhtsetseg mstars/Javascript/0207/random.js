document.getElementById('shufflebtn').addEventListener('click', shuffle);
let twoDarr = [[1,2,3], [4,5,6], [7,8,9]];
let arr = "";
for(let i = 0; i<twoDarr.length; i++){
    for (let j = 0; j < 3; j++){
        arr +=twoDarr[i][j] + " ";
    }
    arr += "\n";
}
document.getElementById("answer").innerText = arr;

function shuffle(twoDarr) {
    
}



//