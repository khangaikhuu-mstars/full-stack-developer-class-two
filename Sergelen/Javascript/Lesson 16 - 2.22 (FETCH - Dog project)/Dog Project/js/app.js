const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((response) => response.json())
  .then((response) => {
    let i = 0;
    let names = "";
    response.message.forEach((e) => {
      names = names + `<option>${e}</option>`;
    });
    select.innerHTML = names;
  });

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
select.addEventListener("change", () => {
  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((response) => response.json())
    .then((response) => {
      card.innerHTML = `<img src="${response.message}">`;
    });
  console.log(select.value);
});
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
