// let car = {
//   color: "red",
//   brand: "500",
//   signal: () => {
//     console.log("honk honk");
//   },
// };
// car.signal();
// console.log(car.brand);
// car.color = "blue";
// console.log(car.color);

let cars = [
  {
    color: "purple",
    type: "minivan",
    price: 100000,
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    price: 300,
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    price: 20000,
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    price: 10000,
    capacity: 7,
  },
  {
    color: "purple",
    type: "station wagon",
    price: 500,
    capacity: 7,
  },
];
let total = 0;
// let total1 = 0;
for (let i = 0; i < cars.length; i++) {
  total += cars[i].price;
}
// cars.map((e) => (total1 += e.price)); - for loop - ийн товчилсон хэлбэр
// console.log(total);

// Дээрх обжэктоос үнэ нь 1000 -аас бага машины үнэ- үүдийг гаргаж ир.
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].price < 1000) {
//     console.log(cars[i].price);
//   }
// }
// function isBigEnough(value) {
//   return value.price <= 1000;
// }
// let expensiveCars = cars.filter(isBigEnough);
// console.log(expensiveCars);

// function isBig(value) {
//   return value.color == "purple";
// }
// let ecars = cars.filter(isBig);
// console.log(ecars);

//temnary operator - хэрэв  true бол old false бол young
let age = 18;
let x = age > 15 ? "old" : "young";
console.log(x);
