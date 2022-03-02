const dogUrl = "https://dog.ceo/api/breeds/list";
function getJSON(resolve, reject) {
  const sabak = new XMLHttpRequest();
  sabak.open("GET", url);
  sabak.onload = () => {
    if (sabak.status === 200) {
      let pixD = sabak.responseText;
      resolve(pixD);
    }
    else{reject("err")}
  };
  sabak.send();
}

function generateHTML(data) {
  let div = document.createElement("div");
  let hIndeks = document.querySelector("#people");
  hIndeks.appendChild(div);
  div.setAttribute("src", data.thumbnail.source);
  if (data.type === ""){
      
  }
};
