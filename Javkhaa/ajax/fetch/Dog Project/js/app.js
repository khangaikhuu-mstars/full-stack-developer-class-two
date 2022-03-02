const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((res) => {
    let option = "";
    res.message.map((e) => {
      option = option + `<option value=${e}>${e}</option>`;
    });
    select.innerHTML = option;
  });

select.addEventListener("change", () => {
  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.message);
      card.innerHTML = `<img src="${res.message}">`;
    });
});
// for (let i = 0; i < response.message.lenght; i++) {
//   option = option + `<option>${response.message[i]}</option>`;
// }
// select.innerHTML = option;
// select.addEventListener("change", () => {
//   console.log(select.value);
// });

// sel.innerHTML = option;
// sel.addEventListener("change", () => {
//   console.log(sel.value);
// });
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
