let html = "";
let red;
let green;
let blue;
let randomRGB;

// for (let i = 0; i < 500; i++) {
//   red = Math.floor(Math.random() * 256);
//   green = Math.floor(Math.random() * 256);
//   blue = Math.floor(Math.random() * 256);
//   randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//   html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
// }

const randomcolor = (max, min) => {
  return Math.floor(Math.random() * max + min);
};

function chooseColor(
  color = prompt(
    "Ongoo oruulna uu? \n 1: Blue \n 2:Red \n 3:Green \n 4:Orange \n 5:Pink \n 6: Grey"
  ),
  buble = prompt("Heden buble gargah toogoo oruulna uu")
) {
  if (color === "blue" || color === "Blue" || color == "1") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(20, 1)}, ${randomcolor(
        130,
        20
      )}, ${randomcolor(143, 112)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else if (color === "red" || color === "Red" || color == "2") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(115, 150)}, ${randomcolor(
        110,
        1
      )}, ${randomcolor(110, 1)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else if (color === "green" || color === "Green" || color == "3") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(30, 1)}, ${randomcolor(
        155,
        100
      )}, ${randomcolor(25, 0)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else if (color === "orange" || color === "Orange" || color == "4") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(1, 254)}, ${randomcolor(
        105,
        150
      )}, ${randomcolor(10, 1)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else if (color === "pink" || color === "Pink" || color == "5") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(150, 100)}, ${randomcolor(
        50,
        1
      )}, ${randomcolor(200, 55)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else if (color === "grey" || color === "Grey" || color == "6") {
    for (let i = 0; i < buble; i++) {
      randomRGB = `rgb( ${randomcolor(70, 130)}, ${randomcolor(
        70,
        130
      )}, ${randomcolor(70, 130)} )`;
      html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`;
    }
  } else {
    alert("Ta zovhon deer ogogdson utganaas songo nuu?");
  }
}

chooseColor();

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">2</div>`;

document.querySelector("main").innerHTML = html;
