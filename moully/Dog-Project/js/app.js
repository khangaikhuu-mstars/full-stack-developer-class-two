const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((res) => {
    let options = "";
    res.message.map((e) => {
      options = options + `<option value ${e}> ${e} </option>`;
    });
    select.innerHTML = options;
  });
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

select.addEventListener("change", () => {
  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.message);
      card.innerHTML = `<img src="${res}">`;
    });
});

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
