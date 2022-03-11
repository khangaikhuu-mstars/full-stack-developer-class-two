let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabetLenght() {
  if (myAlphabet.length > 4) {
    console.log(myAlphabet.length);
  }
}

let planets = [
  "hello",
  "bye",
  "good morning",
  "good afternoon",
  "good evening",
];
function planetslengt() {
  var i = 0;
  while (i < planets.length) {
    console.log(i + " deh utga n " + planets[i]);
    i++;
  }
}
function dataTypes() {
  let wowDataTypes = ["Heregtei", 12, 12.52, true];
  var i = 0;
  while (i < wowDataTypes.length) {
    console.log(typeof wowDataTypes[i]);
    i++;
  }
}

let course = [
  ["math", "english", "programm"],
  ["geographic", "spain", "programm"],
  ["aaaa", "bb", "cc"],
];

for (let i = 0; i < course.length; i++) {
  for (let j = 0; j < course[i].length; j++) {
    console.log(course[i][j]);
  }
  console.log("___________");
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);
