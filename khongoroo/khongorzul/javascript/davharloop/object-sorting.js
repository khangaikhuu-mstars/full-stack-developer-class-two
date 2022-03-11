let employee = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },
  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "December 15, 2019",
  },
  {
    firstName: "JZion",
    lastName: "Albert",
    age: 30,
    joinedDate: "December 15, 2011",
  },
];
//Ихээс нь бага болон багаас нь ихрүү b.age - b.age = сөрөг болон эерэг гарахаас шалтгаална
// employee.sort((a, b) => {
//   return a.age - b.age;
// });
// employee.forEach((e) => {
//   console.log(e.lastName + ":" + e.age);
// });

// filter - true, false - array доторх
// sort - тоо буцаана -array  шинэ утга оноож өгнө
// include - true, false
// let newChars = employee.filter((e) => {
//   return e.age > 25;
// });

//
employee.sort((a, b) => {
  return b.lastName.length - a.lastName.length;
});
employee.forEach((e) => {
  console.log(e.lastName);
});
