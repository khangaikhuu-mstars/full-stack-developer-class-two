const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
  .then((response) => response.json())
  .then((response) => {
    let dog = "";
    response.message.map((e) => {
      dog = dog + `<option value=${e}>${e}</option>`;
    });
    select.innerHTML = dog;
    select.addEventListener("change", () => {
      fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp.message);
          card.innerHTML = `<img src="${resp.message}">`;
        });
    });
  });

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
async function fechData(url) {
  const res = await fetch(url);
  const data = await res.json();
  const img = `<igm src="${data.message}>`;
  return img;
}
select.addEventListener("change", () => {
  fechData(`https://dog.ceo/api/breed/${select.value}/images/random`).then(
    (res) => {
      card.innerHTML = res;
    }
  );
});
card.addEventListener("click", () => {
  fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((res) => res.json)
    .then((res) => {
      console.log(res.message);
      card.innerHTML = `<img src="${res.message}">`;
    });
});
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
