// //innerText - string хэвлэж болно.
// document.getElementById("answer").innerText = "fregreger";
// // javascript-ээр style өгөх
// document.getElementById("answer").style.background = "blue";

document.getElementById("button").type = "button";
document.getElementById("button").setAttribute("class", "btn");
function dar() {
  document.getElementById("button").style.backgroundColor = "red";
  document.getElementById("button").setAttribute("value", "hongro tng");
  document.getElementById("button").style.width = "100px";
  document
    .getElementById("button")
    .setAttribute(
      "src",
      "https://www.ldoceonline.com/media/english/illustration/baby.jpg?version=1.2.43"
    );
}
// document.getElementById("button").innerText = ""
