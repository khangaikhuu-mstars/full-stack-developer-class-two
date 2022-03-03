//
let x = 32;
let y = 91;
let z = 21;
let a = 74;
let b = 77;
console.log(x + z);
console.log(y + x);
console.log(a + z);
console.log(b + x);
console.log(z + y);

function add(x, y) {
  let z = x + y;
  let w = x * y;
  let a = z / w;
  return a;
}

console.log(add(2, 5));

function tellFortune(children, wifeName, geographicLocation, jobTitle) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      geographicLocation +
      "," +
      " and married to " +
      wifeName +
      " with " +
      children +
      " kids."
  );
}
tellFortune(2, "Dulamkhand", "Ulaanbaatar", "Ceo");

let hariu = calculateDogAge(6);

// Puppy age

function calculateDogAge(age) {
  let dogAge = age * 7;
  return dogAge;
}

console.log("Your doggie is " + hariu + " years old in dog years");

//function declaration

const addDeclaration = (x, y) => {
  let z = x + y;
  let w = x * y;
  let a = z / w;
  return a;
};

console.log(addDeclaration(2, 5));
