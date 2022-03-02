document.getElementById("start").addEventListener("click", () => {
  const aaa = document.createElement("input");
  aaa.setAttribute("type", "text");
  aaa.setAttribute("placeholder", "Username");

  document.querySelector("#startBTN").appendChild(aaa);

  const bbb = document.createElement("input");
  bbb.setAttribute("type", "password");
  bbb.setAttribute("placeholder", "Enter password");

  document.querySelector("#startBTN").appendChild(bbb);

  const c = document.createElement("input");
  c.setAttribute("type", "button");
  c.setAttribute("value", "Login");

  document.querySelector("#startBTN").appendChild(c);
  c.addEventListener("click", () => {
    utga = document.getElementById("ada").value;
    alert(utga);
  });
});
