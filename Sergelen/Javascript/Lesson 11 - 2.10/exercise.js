//Bodlogo: array ugugdsun baigaa. Delgets deer 3 knop baina. All, Male, Female. Ali negiig darahad tuhain elementuugiig gargana.

const characters = [
    {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
    },
    {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
    },
    {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
    },
    {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
    }
]
//Html nuuren deer 2 button baina. Male,Female darahad Male,Female humuusiin medeelel garna.

let female = characters.filter((value)=>{return  value.gender === 'female';});
let male = characters.filter((value)=>{return  value.gender === 'male';});

//div1 id-tai element dotor button1 shineer nemne.
let button1 = document.createElement('button');
document.querySelector('div1').appendChild(button1);
button1.setAttribute('id','btn1');

//div1 id-tai element dotor button2 shineer nemne.
let button2 = document.createElement('button');
document.querySelector('div1').appendChild(button2);
button1.setAttribute('id','btn2');

document.querySelector('#btn1').addEventListener('click', ()=>{result = male});
document.querySelector('#btn2').addEventListener('click', ()=>{result = female});



//div1 id-tai element dotor p shineer nemne.
let result = document.querySelector('div1').appendChild(document.createElement('p'));
//shine p -dee result nertei id ugnu.
result.setAttribute('id','result');









