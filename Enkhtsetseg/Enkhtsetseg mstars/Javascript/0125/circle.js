let r = parseInt(prompt("Enter radius"));
function diameter() {
    d = 2*r;
    document.getElementById("text").innerHTML = d;
}
function circle() {
    c = 2*3.14*r;
    document.getElementById("text2").innerHTML = c;
}
function perimeter() {
    p = 3.14*r*r;
    document.getElementById("text3").innerHTML = p;
}
diameter();
circle();
perimeter();