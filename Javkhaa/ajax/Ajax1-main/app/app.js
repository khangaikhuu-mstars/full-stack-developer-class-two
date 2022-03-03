const firstAjax = new XMLHttpRequest();

firstAjax.onreadystatechange = () => {
  if (firstAjax.readyState === 4) {
    const dataas = JSON.parse(firstAjax.responseText);

    // console.log(firstAjax.responseText);

    function func() {
      let a = document.createTextNode(e.name);
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      li.appendChild(a);
      ul.appendChild(li);
      let o = document.createTextNode(" " + e.inoffice);

      li.appendChild(o);
      document.getElementById("employeeList").appendChild(ul);
    }

    // dataas.forEach((e) => {

    // dataas.filter((t) => {
    //   if (t.name === "Jason");
    //   {
    //     return t.name;
    //   }
    // });
    //document.getElementById("employeeList");
    //});
    // func(t);
  }
};

firstAjax.open("GET", "../data/employees.json");
firstAjax.send();

// let xhr = new XMLHttpRequest();
// xht.onreadystatechange = function () {};

// xhr.open("GET", "data.json");

// xhr.send();
