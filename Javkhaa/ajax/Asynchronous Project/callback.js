function getData(url, callback) {
  const test = new XMLHttpRequest();
  test.open("GET", url);
  test.onload = () => {
    if (test.status === 200) {
      let data = JSON.parse(test.responseText);
      callback(data);
    } else {
      console.log(error);
    }
  };
  test.send();
}

function printResult(data) {
  console.log(data);
}
getData("http://api.open-notify.org/astros.json", printResult);
