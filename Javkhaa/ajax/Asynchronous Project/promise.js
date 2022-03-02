function getData(url) {
  return new Promise((resolve, reject) => {
    const test = new XMLHttpRequest();
    test.open("GET", url);
    test.onload = () => {
      if (test.status === 200) {
        let data = JSON.parse(test.responseText);
        resolve(data);
      } else {
        reject("error");
      }
    };
    test.send();
  });
}
function url2(arr) {
  arr.people.map((e) => {
    getData("https://en.wikipedia.org/api/rest_v1/page/summary/" + e.name).then(
      (res) => generateHTML(res)
    );
  });
}
function generateHTML(person) {
  console.log(person);
  let div = document.querySelector("#people");
  let section = document.createElement("section");
  section.innerHTML = `<img src="${person.thumbnail.source}">
    <h2>${person.title}</h2>`;
  div.appendChild(section);
}

function printResult(res) {
  console.log(res.people);
}
getData("http://api.open-notify.org/astros.json")
  .then(url2)
  .catch((e) => console.log(e));
