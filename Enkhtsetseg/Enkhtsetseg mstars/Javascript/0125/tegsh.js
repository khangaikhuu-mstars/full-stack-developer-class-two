let a = parseInt(prompt("Enter number:"));
function tegsh() {
    if (a%2==0) {
        document.getElementById("text").innerHTML = "This number is equal"
    } else {
        document.getElementById("text").innerHTML = "This number is odd"
    }
}
tegsh();