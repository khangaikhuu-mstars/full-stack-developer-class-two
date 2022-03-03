let sel = document.getElementById("selection");

let options = "";

for (let i = 0; i < 10; i++) {
  options = options + `<option>${i}</option>`;
}
sel.innerHTML = options;

sel.addEventListener("change", () => {
  console.log(sel.value);
});

// fetch("http://api.open-notify.org/astros.json").then((response)=> response.json()).then(response)=>{

// }

fetch("http://api.open-notify.org/astros.json").then((res) => {
  return res.json().then(console.log(res));
});
