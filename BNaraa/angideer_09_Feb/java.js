document.querySelector("#begin-login").addEventListener("click", () => {
  const inp = document.createElement("input");
  inp.setAttribute("type", "text");
  inp.setAttribute("placeholder", "Enter username");

  document.querySelector("#div1").appendChild(inp);

  const inp1 = document.createElement("input");
  inp1.setAttribute("type", "password");
  inp1.setAttribute("placeholder", "Enter password");

  document.querySelector("#div1").appendChild(inp1);

  const logBtn = document.createElement("button");
  const text = document.createNextNode("Login");
  loginBtn.appendChild(text);
  document.querySelector("#div1").appendChild(loginBtn);
});

/*
    <input type="text" placeholder="Enter Username">
    <input type="password" placeholder="Enter password">
    <input type="button" value="Login">

*/
