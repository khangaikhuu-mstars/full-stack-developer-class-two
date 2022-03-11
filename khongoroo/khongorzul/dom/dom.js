// function login(){
//     let username = document.
//     let existform = document.getElementById("eform");
//     let textar =document.querySelector("#eform").setAttribute("placeholder", "Enter Username");
//     let pass = document.querySelector("eform").setAttribute("placeholder", "EnterPassword")
//     let btn = document.
// }

document.getElementById("button").addEventListener("click", () => {
  let para = document.createElement("input");
  para.setAttribute("type", "text");
  para.setAttribute("placeholder", "username");

  document.querySelector("#eform").appendChild(para);

  let para1 = document.createElement("input");
  para1.setAttribute("type", "password");
  para1.setAttribute("placeholder", "password");

  document.querySelector("#eform").appendChild(para1);

  let bton = document.createElement("button");
  bton.appendChild(document.createTextNode("submit"));
  bton.setAttribute("id", "ttt");

  document.querySelector("#eform").appendChild(bton);

  document.getElementById("ttt").addEventListener("click", () => {
    alert(para.value + "\n" + para1.value);
  });
});

//para
// creat text element
// text >  append into para
// append par into existform
// submit deer darahad inputeer avsan utgaa alertaar garga
