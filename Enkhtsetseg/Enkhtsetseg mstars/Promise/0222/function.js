/*let sel = document.getElementById("selection");
let options = "";
for(let i = 0; i < 10; i++) {
    options = options + `<option value = ${i}> ${i} K </options>`
}
sel.innerHTML = options;
selection.addEventListener("change", () => {
    console.log(sel.value);
})*/
fetch("http://api.open-notify.org/astros.json")
.then((response) => response.json())
.then((response) => {
    console.log(response);
}).catch((e) => console.log(e.message))
