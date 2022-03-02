const astrosUrl = "http://api.open-notify.org/astros.json";

function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = () => {
    if (request.status === 200) {
      let parsedRes = JSON.parse(request.responseText);
      callback(parsedRes);
    } else {
      console.log(error);
    }
  };
  request.send();
}

function printResult(request) {
  console.log(request);
}
getJSON(astrosUrl, printResult);
