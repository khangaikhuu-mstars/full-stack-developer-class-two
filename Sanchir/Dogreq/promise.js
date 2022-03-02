const dogsURL = "https://dog.ceo/api/breeds/list";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const btn = document.querySelector("button");

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject("Error");
      }
    };
    xhr.send();
  });
}
function Wiki(obj) {
  obj.message.map((e) => {
    getData(wikiUrl + e).then((res) => generateHTML(res));
  });
}
function generateHTML(data) {
  let div = document.querySelector("#people");
  let section = document.createElement("section");
  if (data.type === "standard" && data.type === "disambiguation") {
    section.innerHTML = `
          <img src=${data.thumbnail.source}>
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p>${data.extract_html}</p>
          `;
  } else {
    section.innerHTML = `
    
    <h2>NOT FOUND</h2>
    
    `;
  }
  div.appendChild(section);
}

// getData(dogsURL).then(Wiki);
btn.addEventListener("click", (event) => {
  getData(dogsURL).then(Wiki);
});
