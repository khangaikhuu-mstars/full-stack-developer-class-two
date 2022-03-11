// console.log("loading");

// //Step 1
// var xhr = new XMLHttpRequest();

// //Step 2
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log("data is recieved");
//     console.log(xhr.responseText);
//     const data = JSON.parse(xhr.responseText);
//     let tableE = document.querySelector("#table");

//     generateHTML(data, tableE);
//     console.log(data);
//   }
// };
// //Step 3

// xhr.open("GET", "test.json");

// //Step 4
// xhr.send();

// function generateHTML(data, tableE) {
//   const table = document.createElement("table");
//   const header = document.createElement("tr");
//   header.innerHTML = `
//         <th>Name</th>
//         <th>Age</th>
//         <th>Job</th>
//        `;
//   table.appendChild(header);

//   data.forEach((element) => {
//     const tableB = document.createElement("tr");
//     tableB.innerHTML = `
//         <td> ${element.name}</td>
//         <td> ${element.age}</td>
//         <td> ${element.job}</td>
//        `;

//     table.appendChild(tableB);
//     tableE.appendChild(table);
//   });
// }
fetch("test.json")
  .then((e) => e.text())
  .then((e) => {
    return console.log(e);
  });
