var request = new XMLHttpRequest();

request.onreadystatechange = () => {
  if (request.readyState == 4) {
    let employees = JSON.parse(request.responseText);
    console.log(employees);
    employees.forEach((e) => {
      let empNames = document.createElement("p");
      document.querySelector("#employeeList").appendChild(empNames);
      console.log(e.name);
      empNames.innerHTML = `${e.name} ${e.inoffice}`;
    });
  }
};
request.open("GET", "data/employees.json");

request.send();

