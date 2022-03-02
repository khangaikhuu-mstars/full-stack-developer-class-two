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
];

/* <div id = "gButton">
        <button type = "button" id = "btn-all">All</button>
        <button type = "button" id = "btn-male">Male</button>
        <button type = "button" id = "btn-female">Female</button>
    </div> */

let btn = document.createElement("button");
btn.innerHTML = "All";
document.body.appendChild(btn);
document.addEventListener("click", function () {
  document.getElementById("btn-all").characters.gender.sort();
});

let btn = document.createElement("button");
btn.innerHTML = "Male";
document.body.appendChild(btn);

let btn = document.createElement("button");
btn.innerHTML = "Female";
document.body.appendChild(btn);
