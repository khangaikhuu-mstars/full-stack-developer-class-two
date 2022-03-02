const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Zeia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
];
// // return хийхгүй
// characters.forEach((e) => {
//   console.log(e.name);
// });
// //  true false утгийг л буцаана.
// let maleChars = characters.filter((e) => {
//   return e.gender === "male";
// });
// //math yu ch return hiij bolno
// maleChars.forEach((e) => {
//   console.log(e.name);
// });

characters.forEach((e) => {
  let div = document.createElement("div");
  div.setAttribute("class", "inblock");

  let p = document.createElement("p");
  let text = document.createTextNode("name:" + e.name);
  p.appendChild(text);
  div.appendChild(p);
  document.querySelector(".block").appendChild(div);

  let pheight = document.createElement("p");
  let ptext1 = document.createTextNode("height:" + e.height);
  pheight.appendChild(ptext1);
  div.appendChild(pheight);

  let pmass = document.createElement("p");
  let ptext2 = document.createTextNode("mass:" + e.mass);
  pmass.appendChild(ptext2);
  div.appendChild(pmass);

  let peye = document.createElement("p");
  let ptext3 = document.createTextNode("eye-color:" + e.eye_color);
  peye.appendChild(ptext3);
  div.appendChild(peye);

  let pgender = document.createElement("p");
  let ptext4 = document.createTextNode("gender:" + e.gender);
  pgender.appendChild(ptext4);
  div.appendChild(pgender);
});

// neg tovchin deer darahaar zuvhun mass garch irne

/* <button class="tovch">mass</button> */

let button = document.createElement("button");
let textButton = document.createTextNode("mass");
button.setAttribute("class", "tovch");

document.querySelector("button").appendChild(textButton);

//neg tovchin deer darahaar gender garch irne - male, female ylgarch garah
