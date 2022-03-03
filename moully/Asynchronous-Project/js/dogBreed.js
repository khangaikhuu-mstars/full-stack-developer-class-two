const dogBreed = "https://dog.ceo/api/breeds/list";

function getDogName(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        resolve(data);
      } else {
        reject("error");
      }
    };
    xhr.send();
  });
}
function printName(obj) {
  obj.message.map((e) => {
    console.log(e);
  });
}

getDogName(dogBreed).then(printName);
