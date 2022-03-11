let twoDarr = [
    [1,2,3], 
    [5,6,7,8], 
    [9,10,11,12,4,7,8,8,53,2], 
    [13,14,15,16],
];
for (let row = twoDarr.length - 1; row >= 0; row--){

    for (let col = twoDarr[row].length-1; col>=0; col--){
        
        console.log(twoDarr[row][col]);
    }
    console.log("---------");
}

