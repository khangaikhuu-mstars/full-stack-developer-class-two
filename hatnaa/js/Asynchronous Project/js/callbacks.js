const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("people");
const btn = document.querySelector("button");

// Make an AJAX request
function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = e =>{
      if(xhr.status === 200){

      }
      callback();
    }
  xhr.open("GET", url);
  xhr.send()
}

// Generate the markup for each profile
function generateHTML(data) {
  //create section document element

  //append that section into peopleList

  // Checking if request returns a 'standard' page from Wiki
  if (data.type === "standard") {
    peopleList.innerHTML = `<img src="${data.thumbnail.source}"></img>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>`
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
}

btn.addEventListener("click", (event) => {
  getJSON(astrosUrl, generateHTML)
});
