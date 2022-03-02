//Ajax Process 1
let xhr = new XMLHttpRequest();

//Ajax Process 2
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // document.querySelector("#employeeList").innerHTML = request.responseText;
    const newArr = JSON.parse(xhr.responseText);

    function check(e) {
      let listbox = document.querySelector("#employeeList");
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      let ename = document.createTextNode(e.name);
      let stat = document.createTextNode(" inoffice status: " + e.inoffice);

      li.appendChild(ename);
      li.appendChild(stat);
      ul.appendChild(li);
      listbox.appendChild(ul);
    }

    newArr.forEach((e) => {
      check(e);
    });
  }
};

//Ajax Process 3
xhr.open("GET", "data/employees.json");

//Ajax Process 4
xhr.send();
