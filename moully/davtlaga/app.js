console.log("loading");

var xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    let test = JSON.parse(xhr.responseText);
    let htmlTest = document.getElementById("test");
    let tableNames = "";
    for (i = 0; i < test.length; i++) {
      tableNames += `
      <span>${test[i].name}</span>
      <span>${test[i].age}</span>
      <span>${test[i].job}</span>
      <br>`;
    }
    htmlTest.innerHTML = tableNames;
  }
};

xhr.open("GET", "test.json");

xhr.send();

fetch("test.json")
  .then((e) => e.text())
  .then((e) => console.log(JSON.parse(e)));
