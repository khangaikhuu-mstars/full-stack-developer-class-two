let a = parseInt(prompt("Enter a:"));
let b = parseInt(prompt("Enter b:"));
let min;
function minimum(min){
    if(a>b) {
        return min=b
    } else {
        return min=a
    }
    document.getElementById("text").innerHTML = min;
}
minimum();