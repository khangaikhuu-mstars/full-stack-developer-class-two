const playlist = [
  ['So What', 'singer1', '3.13'],
  ['Respect', 'singer2', '2.18'],
  ['What a Wonderful World','singer3', '4.32'],
  ['At Last', 'singer4', '4.23'],
  ['Three Little Birds', 'singer5', '2.67'],
  
];

function createListItems(arr) {
  let items = '';
  let item = '';
  for ( let i = 0; i < arr.length; i++ ) {
    for(let j = 0; j < arr[i].length; j++){
      item  += `<li>${ arr[j] }</li>`
     
    }
   items += `<li>${ arr[i]}</li>`
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;





