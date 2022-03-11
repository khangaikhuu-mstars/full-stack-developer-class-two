console.log("loading");

// Step 1. Create xml http request
var xhr = new XMLHttpRequest();

// Step 2. create callback function
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("data is received");
    console.log(xhr.responseText);
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

// Step 3. open a request with request data
xhr.open("GET", "test.json");
// Step 4. Send the request
xhr.send();

fetch("index.html")
  .then((e) => e.text())
  .then((e) => console.log(e));
