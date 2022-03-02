let request = new XMLHttpRequest();
request.onload = function () {
  JSON.parse(request.responseText).forEach((element) => {
    document.getElementById("Aimee").innerHTML = element.name;
  });
};
request.open("GET", "data/employees.json");
request.send();
