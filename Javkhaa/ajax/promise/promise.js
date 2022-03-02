let sel = document.getElementById("selection");
let option = "";

for (let i = 0; i < 10; i++) {
  option = option + `<option>${i}</option>`;
}
sel.innerHTML = option;
sel.addEventListener("change", () => {
  console.log(sel.value);
});
