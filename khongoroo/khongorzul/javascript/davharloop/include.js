// let arr = [1, 2, 3, 4];
// console.log();

// // foreach (функц агуулна)
// arr.forEach((e) => console.log(e)); //forEach  дотроо функцээ зарлана.
// arr.forEach((element, index) => {
//   console.log(element);
// });
// // foreach  бүх элментүүдрүү нэг нэгээр нь нэвтэрч орж байгаа.
// arr.forEach(test);
// function test(e) {
//   console.log(e);
// }

// // функц зарлах - энэ нь функцээ дээр нь зарлаж болно.
// function add(a, b) {
//   console.log(a + b);
// }
// add(10, 55);
// // arrow function - функцээ дараа нь дууддаг () => {}
// // () функц
// // {} arrow

// let addArrow = (a, b) => {
//   console.log(a + b);
// };
// addArrow(10, 55);

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

characters.forEach((d) => console.log(d.name));
