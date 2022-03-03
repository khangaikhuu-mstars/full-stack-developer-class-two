const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");
let option = "";
let img = "";
// ------------------------------------------
//  FETCH FUNCTIONS -promise butsaadag
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((res) => {
    res.message.map((e) => {
      option += `<option value=${e}>${e}</option>`;
    });
    select.innerHTML = option;
  });
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
select.addEventListener("change", () => {
  fechData(select.value).then((res) => {
    card.innerHTML = res;
  });
});

card.addEventListener("click", () => {
  fechData(select.value).then((res) => {
    card.innerHTML = res;
  });
});
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
async function fechData(dogName) {
  const res = await fetch(
    `https://dog.ceo/api/breed/${select.value}/images/random`
  );
  const data = await res.json();
  const img = `<img src="${data.message}">`;
  return img;
}
// ------------------------------------------
//  POST DATA
// ------------------------------------------
