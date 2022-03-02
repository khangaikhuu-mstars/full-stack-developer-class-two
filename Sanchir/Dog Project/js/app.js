const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
fetch("https://dog.ceo/api/breeds/list")
  .then((response) => response.json())
  .then((res) => {
    let options = "";
    for (let i = 0; i < res.message.length; i++) {
      options = options + `<option>${res.message[i]}</option>`;
    }
    select.innerHTML = options;
  });
// ------------------------------------------

// ------------------------------------------
//  HELPER FUNCTIONS
async function fechData(dogName) {
  const res = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`);
  const data = await res.json();
  const img = `<img src = "${data.message}">`;
  return img;
}
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

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
