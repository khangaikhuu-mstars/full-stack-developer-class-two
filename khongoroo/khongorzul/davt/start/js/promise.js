// const astrosUrl = "http://api.open-notify.org/astros.json";

// function getData(url, callback) {
//   const request1 = new XMLHttpRequest();
//   request1.onload = () => {
//     if (request1.status === 200) {
//       let result = JSON.parse(request1.responseText);
//       callback(result);
//     } else {
//       console.log(error);
//     }
//   };
//   request1.open("GET", url);
//   request1.send();
// }
// function printResult(data) {
//   console.log(data);
// }
// getData(astrosUrl, printResult);

const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

function getData(url) {
  return new Promise((resolve, reject) => {
    const request1 = new XMLHttpRequest();
    request1.onload = () => {
      if (request1.status === 200) {
        let result = JSON.parse(request1.responseText);
        resolve(result);
      } else {
        reject("error");
      }
    };
    request1.open("GET", url);
    request1.send();
  });
}
// function accessWiki(obj) {
//   obj.people.map((e) => {
//     getData(wikiUrl + e.name).then(generateHTML);
//   });
// }

// function printRes(res) {
//   console.log(res.people);
// }

// function generateHTML(data) {
//   const section = document.createElement("section");
//   peopleList.appendChild(section);
//   // Check if request returns a 'standard' page from Wiki
//   if (data.type === "standard") {
//     section.innerHTML = `
//       <img src=${data.thumbnail.source}>
//       <h2>${data.title}</h2>
//       <p>${data.description}</p>
//       <p>${data.extract}</p>
//     `;
//   } else {
//     section.innerHTML = `
//       <img src="img/profile.jpg" alt="ocean clouds seen from space">
//       <h2>${data.title}</h2>
//       <p>Results unavailable for ${data.title}</p>
//       ${data.extract_html}
//     `;
//   }
// }

getData(astrosUrl)
  .then((obj) => {
    obj.people.map((e) => {
      getData(wikiUrl + e.name).then((data) => {
        const section = document.createElement("section");
        peopleList.appendChild(section);
        // Check if request returns a 'standard' page from Wiki
        if (data.type === "standard") {
          section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
        } else {
          section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
        }
      });
    });
  })
  .catch((e) => console.log(e));
