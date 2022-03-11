const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        resolve(data);
      } else {
        reject("error");
      }
    };
    xhr.send();
  });
}

function accessWiki(obj) {
  obj.people.map((e) => {
    getData(wikiUrl + e.name).then((res) => {
      generateHTML(res);
      console.log(res);
    });
  });
}
function generateHTML(person) {
  let div = document.querySelector("#people");
  let section = document.createElement("section");
  section.innerHTML = `<img src="${person.thumbnail.source}">
  <h2>${person.title}</h2>
  <p>${person.description}</p>
  <p>${person.extract}}</p>`;
  div.appendChild(section);
}

function PrintRes(res) {
  console.log(res.people);
}

getData(astrosUrl)
  .then(accessWiki)
  .catch((e) => {
    console.log(e);
  });
