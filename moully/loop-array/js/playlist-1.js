const playlist = [
  ["bounty", "alchemist", "2.00"],
  ["haste", "razor", "3.00"],
  ["double damage", "Phanthom assassin", "4.00"],
  ["regenartion", "Lina", "6.00"],
  ["arcane rune", "Storm", "7.00"],
];

function createPlayList(array) {
  let items = "";
  let item = "";
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      item = `bounty `
      
      
      document.querySelector("main").innerHTML += `<p> ${item} </p>`;
      
    }
  }
}
