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
    gender: "female",
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
// function gender_m_f() {
//   let char_gender_m = characters.filter((e) => {
//     return e.gender === "male";
//   });
// }

// function gender_f_f() {
//   let char_gender_f = characters.filter((e) => {
//     return e.gender === "female";
//   });
// }

document.querySelector("#btn_m").setAttribute("value", "eregtei");

document.querySelector("#btn_f").setAttribute("value", "emegtei");

document.querySelector("#btn_f").addEventListener("click", () => {
  let womans = characters.filter((e) => {
    e.gender === "female";
  });
});
