const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

// Make an AJAX request
function getJSON(url, callback) {
  //create xmlhttpreuqest
  //open request with url
  //onload if status is 200 then parse the response then call the callback function with parsed data
  //send request
  let request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status === 200) {
      let parsedRes = JSON.parse(request.responseText);
      callback(parsedRes);
    }
  };
  request.open("GET", url);
  request.send();
}

// Generate the markup for each profile
function generateHTML(data) {
  //create section document element
  let section = document.createElement("section");
  //append that section into peopleList
  peopleList.appendChild(section);
  // Checking if request returns a 'standard' page from Wiki
  if (data.type === "standard") {
    //in section as innerHTML with template litral:
    //create img with src of value data.thumbnail.source
    //create h2 with data.title value
    //create p with data.description
    //create p with data.extract
    section.innerHTML = `
    <img src=${data.thumbnail.source}>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract_html}</p>
    `;
  } else {
    section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
  }
}

btn.addEventListener("click", (event) => {
  //call getJson function with astrosUrl and anonymous callback function
  //anonymous callback function is taking data as argument then access people property of its
  //then map over the its. Inside map call getJson function with wikiUrl plus
  //the name property of the element and generateHTML function as callback function
  getJSON(astrosUrl, (data) => {
    data.people.forEach((e) => {
      getJSON(`${wikiUrl}${e.name}`, (data) => {
        generateHTML(data);
      });
    });
  });
});
