//dog

function dog() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("dog");
  inp.setAttribute("class", "mmm");
  inp.appendChild(text);
  inp.setAttribute("id", "dog");

  document.getElementById("body").appendChild(inp);
}
dog();

document.querySelector("#dog").addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("id", "dogImage");
  image.setAttribute("class", "zurag");
  image.setAttribute("src", "/image/dog.jpg");
  document.getElementById("body").append(image);
});

//horse

function horse() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("horse");
  inp.appendChild(text);
  inp.setAttribute("id", "horse");
  inp.setAttribute("class", "mmm");

  document.getElementById("body").appendChild(inp);
}
horse();

document.querySelector("#horse").addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("id", "horseImage");
  image.setAttribute("class", "zurag");
  image.setAttribute("src", "/image/horse.jpg");
  document.getElementById("body").append(image);
});

//cat

function cat() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("cat");
  inp.appendChild(text);
  inp.setAttribute("id", "cat");
  inp.setAttribute("class", "mmm");

  document.getElementById("body").appendChild(inp);
}
cat();

document.querySelector("#cat").addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("id", "catImage");
  image.setAttribute("class", "zurag");
  image.setAttribute("src", "/image/cat.jpg");
  document.getElementById("body").append(image);
});

//cow

function cow() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("cow");
  inp.appendChild(text);
  inp.setAttribute("id", "cow");
  inp.setAttribute("class", "mmm");

  document.getElementById("body").appendChild(inp);
}
cow();

document.querySelector("#cow").addEventListener("click", () => {
  let image = document.createElement("img");
  image.setAttribute("id", "cowImage");
  image.setAttribute("class", "zurag");
  image.setAttribute("src", "/image/cow.jpg");
  document.getElementById("body").append(image);
});

// small

// document.querySelector("#").addEventListener("click", () => {
//   document.getElementById("#cowImage").style.width = "400px";
// });
function small() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("small");
  inp.appendChild(text);
  inp.setAttribute("id", "small");
  inp.setAttribute("class", "sm");

  document.getElementById("body").appendChild(inp);
}
small();

//big

function big() {
  const inp = document.createElement("button");
  inp.setAttribute("type", "button");
  let text = document.createTextNode("big");
  inp.appendChild(text);
  inp.setAttribute("id", "big");
  inp.setAttribute("class", "sm");

  document.getElementById("body").appendChild(inp);
}
big();
