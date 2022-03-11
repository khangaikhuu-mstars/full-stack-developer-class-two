const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/list")
.then((res) => res.json())
.then((res) => {
    let dog = "";
    res.message.forEach((e) => {
       dog = dog + `<option value = ${e}>${e}</option>`
    });
    select.innerHTML = dog;
});

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------


select.addEventListener("change", () => {
   
    fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((response) => response.json())
    .then((response) => {
       card.innerHTML = `<img src = ${response.message}>`
    })
})
card.addEventListener("click", () => {
    fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then((response) => response.json())
    .then((response) => {
       card.innerHTML = `<img src = ${response.message}>`
    })
})

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

