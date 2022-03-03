let sel = document.getElementById("selection");

let options = "";
for (let i = 0; i < 10; i++) {
  options = options + `<option> ${i} </option>`;
}
sel.innerHTML = options;

sel.addEventListener("change", () => {
  console.log(sel.value);
});
