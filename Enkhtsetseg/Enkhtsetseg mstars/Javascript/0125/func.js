let a = parseInt(prompt("Enter your number"));
function cube() {
    number = a*a*a;
    document.getElementById('text').innerHTML = number;
}
cube();

// toirgiin diameter D = 2r r= radius
// toirgiin urt  C = 2pr p=3.14 r= radius
// toirgiin talbai  S = 9p p=3.14

let a = parseInt(prompt("Enter your number"));
function cube(number) {
    number = a*a*a;
    return number;
}
let b = cube(a)
document.getElementById("text").innerHTML = b;



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




