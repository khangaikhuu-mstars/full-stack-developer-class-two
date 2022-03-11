{
  /* <div class="buttons">
  <button class="btn">Button1</button>
  <button class="btn">Button2</button>
  <button class="btn">Button3</button>
  <button class="btn">Button4</button>
  <button class="btn">Button5</button>
  <button class="btn">Button6</button>
  <button class="btn">Button7</button>
  <button class="btn">Button8</button>
  <button class="btn">Button9</button>
  <button class="btn">Button10</button>
</div>; */
}

for (let i = 0; i < 20; i++) {
  let div = document.querySelector("#buttons");
  let newButton = document.createElement("button");
  newButton.setAttribute("class", "btn");
  div.appendChild(newButton);
  const textNode = document.createTextNode("Hello");
  newButton.appendChild(textNode);
}
