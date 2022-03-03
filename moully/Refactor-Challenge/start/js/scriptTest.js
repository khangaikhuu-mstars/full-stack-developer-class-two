let html = "";
let red;
let green;
let blue;
let randomRGB;

const randomcolor = (max, min) => {
  return Math.floor(Math.random() * max + min);
};

function forColor(redMax, redMin, greenMax, greenMin, blueMax, blueMin) {
  let a = prompt("heden buble gargah ve");
  for (i = 0; i < a; i++) {
    randomRGB = `rgb(${randomcolor(redMax, redMin)}, ${randomcolor(
      greenMax,
      greenMin
    )}, ${randomcolor(blueMax, blueMin)})`;
    html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
  }
}

function chooseColor(
  color = prompt(
    "Ongoo oruulna uu? \n 1: Blue \n 2:Red \n 3:Green \n 4:Orange \n 5:Pink \n 6: Grey"
  )
) {
  if (color === "blue" || color === "Blue" || color == "1") {
    forColor(20, 1, 130, 20, 143, 112);
  } else if (color === "red" || color === "Red" || color == "2") {
    forColor(115, 150, 110, 1, 110, 1);
  } else if (color === "green" || color === "Green" || color == "3") {
    forColor(30, 1, 155, 100, 25, 0);
  } else if (color === "orange" || color === "Orange" || color == "4") {
    forColor(1, 254, 105, 150, 10, 1);
  } else if (color === "pink" || color === "Pink" || color == "5") {
    forColor(150, 100, 50, 1, 200, 55);
  } else if (color === "grey" || color === "Grey" || color == "6") {
    forColor(70, 130, 70, 130, 70, 130);
  }
}
chooseColor();

document.querySelector("main").innerHTML = html;
