const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

// Make an AJAX request
function getJSON(url, callback) {
  //create xmlhttpreuqest
  const firstAjax = new XMLHttpRequest();
  //open request with url
  firstAjax.open("GET", url);
  //onload if status is 200 then parse the response then call the callback function with parsed data
  firstAjax.onload = () => {
    if (firstAjax.status === 200) {
      console.log(firstAjax.responseText);
      let data = firstAjax.responseText;
      let jsonData = JSON.parse(data);
      callback(jsonData);
    }
  };
  //send request
  firstAjax.send();
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
    section.innerHTML;
    // document.getElementById("demo").innerHTML = "Paragraph changed!";
    //create img with src of value data.thumbnail.source
    let image = document.createElement("img");
    image.setAttribute("src", data.thumbnail.source);
    section.appendChild(image);
    //create h2 with data.title value
    let garchig = document.createElement("h2");
    garchig.innerText = data.title;
    section.appendChild(garchig);
    //create p with data.description
    let para1 = document.createElement("p");
    para1.innerHTML = `${data.description}`;
    section.appendChild(para1);
    //create p with data.extract
    let para2 = document.createElement("p");
    para2.innerText = data.extract;
    section.appendChild(para2);
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
  getJSON(astrosUrl, (data) => {
    data.people.map((x) => {
      getJSON(`${wikiUrl}${x.name}`, generateHTML);
    });
  });
  //anonymous callback function is taking data as argument then access people property of its
  //then map over the its. Inside map call getJson function with wikiUrl plus
  //the name property of the element and generateHTML function as callback function
});
