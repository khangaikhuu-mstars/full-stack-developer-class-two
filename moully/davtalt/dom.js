let test = document.createTextNode("Document.createTextnode-r uusgesen text");
let datagg = document.createElement("p");
let existDiv = document.getElementById("div1");
datagg.appendChild(test);
existDiv.appendChild(datagg);


document.querySelector("#startBTN").addEventListener("click", () => {
  const inp = document.createElement("input");
  inp.setAttribute("type", "text");
  inp.setAttribute("placeholder", "Enter username");

  document.querySelector("#startBTN").appendChild(inp);

  const inp1 = document.createElement("input");
  inp1.setAttribute("type", "password");
  inp1.setAttribute("placeholder", "Enterpassword");

  document.querySelector("#startBTN").appendChild(inp1);
});




