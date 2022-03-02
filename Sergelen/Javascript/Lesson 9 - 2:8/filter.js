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

// let female = characters.filter(filterFemale);

// function filterFemale(value){
//     return  value.gender === 'female';
// }

// console.log(female);

// characters.forEach((ob) => {console.log(ob.name)});
// characters.sort((a,b) => {
//     return a.mass - b.mass;
// });

// characters.forEach((e) => {console.log(e)} );

characters.sort((a,b) => {
    return a.name.length - b.name.length;
});

characters.forEach((e) => {
    console.log(e.name)} );
