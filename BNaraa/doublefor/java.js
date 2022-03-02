// let sen = "";
// for (let row = 0; row < 5; row++) {
//   for (let col = 0; col < 5 - row; col++) {
//     sen += "*";
//   }
//   sen += "\n";
// }
// console.log(sen);

// let student1Courses = ["Математик", "Англи хэл", "Програмчлал"];
// let student2Courses = ["Газар зүй", "Испани", "Програмчлал"];
// 2 array дээр давталт хийж, хэрэв нийтлэг element байгаа бол тэдгээрийг гаргаж ирнэ үү

// let twoDarr = [
//   ["Математик", "Англи хэл", "Програмчлал"],
//   ["Газар зүй", "Испани", "Програмчлал"],
// ];

// for (let i = twoDarr.length - 1; i >= 0; i--) {
//   for (let j = twoDarr[i].length - 1; j >= 0; j--) {
//     console.log(twoDarr[i][j]);
//   }
// }

// Math.floor(Math.random() * 100-10) + 10

// document.getElementById("shuffleBtn").addEventListener("click,shuffle");

// let twoDarr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let str = "";
// for (let i = 0; i < Array.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     str += arr[i][j] + " ";
//   }
//   str += "\n";
// }
// document.getElementById("answer").innerText = str;
// function shuffle() {
//   for (let i = 0; i < 3; i++) {
//     let temp = arr[i][0];
//     let random = parseInt(Math.random() * 3);
//     arr[random] = arr[i][0];
//     arr[i][0] = temp;
//   }
// }

let cars = [
  {
    color: "purple",
    type: "minivan",
    price: 11000,
    capacity: 7,
  },
  {
    color: "red",
    type: "jeep",
    price: 1000,
    capacity: 5,
  },

  {
    color: "white",
    type: "car",
    price: 800,
    capacity: 4,
  },
];

// console.log(cars);

let total = 0;
let total1 = 0;
for (let i = 0; i < cars.length; i++) {
  total += cars(i).price;
}
console.log(total);

// Price ni 1000 aas door unetei cars-iin object-iig hevleh:

// let total = 0;
// let total1 = 0;
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].price < 1000) {
//     console.log(cars[i]);
//   }
// }

// let biggerCars = cars.filter(capacityMore4);

// function capacityMore4(value) {
//   return value.capacity > 4;
// }
// console.log(biggerCars);
