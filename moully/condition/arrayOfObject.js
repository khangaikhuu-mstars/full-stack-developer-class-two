let cars = [
  { color: "purple", type: "minivan", price: 11000, capacity: 7 },
  { color: "grey", type: "bigVan", price: 20000 },
  { color: "orange", type: "camero", price: 800 },
  { color: "black", type: "dodge", price: 500 },
  { color: "red", type: "mustang", price: 1000 },
];

// let total = 0;
// let total1 = 0;
// for (let i = 0; i < cars.length; i++) {
//   total += cars[i].price;
// }
// cars.map((e) => (total += e.price));
// console.log(total);

let expensiveCars = cars.filter(biggerThan1000());
function biggerThan1000(value) {
  return value.price > 1000;
}

console.log(expensiveCars);
