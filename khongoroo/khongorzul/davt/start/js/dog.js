let dogs = "https://dog.ceo/api/breeds/list";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById("dog");
const btn = document.querySelector("button");

function manDog(url) {
  return new Promise((resolve, reject) => {
    const ddogreq = new XMLHttpRequest();
    ddogreq.onload = () => {
      if (ddogreq.status === 200) {
        let data = JSON.parse(ddogreq.responseText);
        resolve(data);
      } else {
        reject("error");
      }
    };
    ddogreq.onerror = () => reject("error");
    ddogreq.open("GET", url);
    ddogreq.send();
  });
}

manDog(dogs)
  .then((obj) => {
    obj.message.map((e) => {
      manDog(wikiUrl + e).then((data2) => {
        if (data2.type == "standard") {
          // if (data2.status != "404") {
          console.log(data2);
          // }
        }
      });
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

// .then((obj) => {
//     obj.people.map((e) => {
//       getData(wikiUrl + e.name).
// .then((data) => {
//     const section = document.createElement("section");
//     peopleList.appendChild(section);
