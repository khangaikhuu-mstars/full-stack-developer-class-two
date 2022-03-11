// html deer option-oor oruulj bga zuiliig valuegaar barij avch gargana
let sel = document.getElementById("sel");

let options = "";
for (let i = 0; i < 10; i++) {
  options += `<option value=${i}>${i}000 MNT</option>`;
}
sel.innerHTML = options;

sel.addEventListener("change", () => {
  console.log(sel.value);
});
