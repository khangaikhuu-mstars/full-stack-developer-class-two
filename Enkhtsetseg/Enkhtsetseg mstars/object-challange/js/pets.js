/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const Pets = [
{name: "Aussie", type: "aussie", breed: "aussie", age: "3", photo: "/img/aussie.jpg"},
{name: "Dachshund", type: "dachshund", breed: "dachshund", age: "5", photo: "/img/dachshund.jpg"},
{name: "Golden", type: "golden", breed: "golden", age: "6", photo: "/img/golden.jpg"},
{name: "Persian", type: "persian", breed: "persian", age: "7", photo: "/img/persian.jpg"},
{name: "Pug", type: "pug", breed: "pug", age: "8", photo: "/img/pug.jpg"},
{name: "Tabby", type: "tabby", breed: "tabby", age: "2", photo: "/img/tabby.jpg"},
]
//console.log(Pets[0].hasOwnProperty('age'));

let str = "";

for (let index in Pets) {
console.log(index);
  

  str += `<h2>${Pets[index].name}</h2>
         <h3>Type: ${Pets[index].type}</h3>
         <p>Age: ${Pets[index].age}</p>
          <img src = "${Pets[index].photo}"></img>`
  
}
document.getElementById("div").innerHTML = str;

// <!--
//       <h2>Joey</h2>
//       <h3>Dog | Australian Shepherd</h3>
//       <p>Age: 8</p>
//       <img src="img/aussie.jpg" alt="Australian Shepherd">
// --></img>