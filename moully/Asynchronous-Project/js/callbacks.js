const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

// Make an AJAX request
function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if (request.status == 200) {
      let parsedRes = JSON.parse(request.responseText);
      callback(parsedRes);
    }
  };
  request.send();
  //create xmlhttpreuqest
  //open request with url
  //onload if status is 200 then parse the response then call the callback function with parsed data
  //send request
}

// Generate the markup for each profile
function generateHTML(data) {
  //create section document element

  let section = document.createElement("section");
  peopleList.appendChild(section);

  //append that section into peopleList

  // Checking if request returns a 'standard' page from Wiki
  if (data.type === "standard") {
    section.innerHTML = `<img src=${data.thumbnail.source}></img> 
    <h2>${data.displaytitle}</h2>
    <p>${data.description}</p>
    <p>${data.extract}}</p>
    `;
    //in section as innerHTML with template litral:
    //create img with src of value data.thumbnail.source
    //create h2 with data.title value
    //create p with data.description
    //create p with data.extract
  } else {
    section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
  }
  btn.addEventListener("click", (e) => {});
}

btn.addEventListener("click", (event) => {
  getJSON(astrosUrl, function (data) {
    data.people.forEach((e) => {
      getJSON(`${wikiUrl}${e.name}`, generateHTML);
    });
  });
  //call getJson function with astrosUrl and anonymous callback function
  //anonymous callback function is taking data as argument then access people property of its
  //then map over the its. Inside map call getJson function with wikiUrl plus
  //the name property of the element and generateHTML function as callback function
});
