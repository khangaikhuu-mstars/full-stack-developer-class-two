console.log("Exercises");

var N = 2;
var Z = "Dulamkhand";
var X = "Ulaanbaatar";
var Y = "CEO";
console.log(
  "You wil be a " +
    Y +
    " in " +
    X +
    ", " +
    "and married to " +
    Z +
    " with " +
    N +
    " kids."
);

// age calculator
var birth = 1984;
var future = 2035;
console.log(
  "I will be either " +
    (future - birth) +
    " or " +
    (future - birth + 1) +
    " in " +
    future
);

var current = 38;
var max = 93;
var food = 3;
console.log(
  "You will need " +
    (max - current) * food +
    " to last you until the ripe old age of " +
    max
);

var radius = 5;
const PI = 3.14;
console.log(2 * PI * radius);
console.log(PI * radius * radius);
console.log(PI * radius ** 2);

var celsius = 10;
console.log(celsius + "C" + " is " + (celsius * 1.8 + 32) + "F");

var fahrenheit = 10;
console.log(fahrenheit + "F" + " is " + (fahrenheit - 32) / 1.8 + "C");

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
