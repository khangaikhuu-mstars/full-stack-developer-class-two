const inStock = [
  "pizza",
  "cookies",
  "eggs",
  "apples",
  "milk",
  "cheese",
  "bread",
  "lettuce",
  "carrots",
  "broccoli",
  "potatoes",
  "crackers",
  "onions",
  "tofu",
  "limes",
  "cucumbers",
];

let message = inStock;
const search = prompt("Search for a product.");
// for (i = 0; i < inStock.length; i++) {
//   if (inStock[i] === search) {
//     message = `we have ${search} in stock`;
//     break;
//   } else {
//     message = `Sorry we don't have ${search} but we have ${inStock}`;
//   }
// }

// document.querySelector("body").innerHTML += `<p>${message}</p>`;

if (inStock.includes(search)) {
  message = `Yes we have <b>${search}</b> in stock`;
} else {
  message = `Sorry we don't have <b> ${search} </b> in stock. But we have <b>${inStock.join(
    `   `
  )}</b>`;
}

document.querySelector("main").innerHTML = `<p>${message}</p>`;
