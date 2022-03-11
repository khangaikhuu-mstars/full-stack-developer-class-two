function randomNumber(){
    const dice1 = Math.floor(Math.random() *6 ) + 1;
    const dice2 = Math.floor(Math.random() *6 ) + 1;
    if(dice1 > dice2) {
        return `${dice1} ${dice2} 'First number greater than Second'`
    } else if(dice1 === dice2) {
        return `${dice1} ${dice2} 'Numbers are equal'`
    }
    else {
        return `${dice1} ${dice2} 'Second number greater than First'`
    } 
   
}
document.getElementById("button").addEventListener("click", function(){
    document.getElementById("answer").innerHTML = randomNumber();
});
