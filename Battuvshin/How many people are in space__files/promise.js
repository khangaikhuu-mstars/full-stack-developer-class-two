const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

function getData(url) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.open("GET", url);
    xml.onload = () => {
      if (xml.status === 200) {
        let data = JSON.parse(xml.responseText);
        resolve(data);
      } else {
        reject("error");
      }
    };
    xml.send();
  });
}

function wiki(obj) {
  obj.people.map((e) => {
    getData(wikiUrl + e.name).then((respoonse) => console.log(respoonse));
  });
}
function generateHTML(data) {
  let div = document.querySelector("#people");
  let section = document.createElement("section");
  section.innerHTML = `<img src="${data.thumbnail.source}"<h2>${data.title}</h2><p>${data.description}</p><p>${data.extract}</p>`;
}
generateHTML();
function printRes(res) {
  console.log(res.people);
}
getData(astrosUrl).then(wiki).catch(printRes);
