let employee = [
  { Name: "Tom", salary: 15000 },
  { Name: "Maria", salary: 13000 },
  { Name: "James", salary: 9000 },
  { Name: "Homs", salary: 25000 },
  { Name: "Karia", salary: 25000 },
  { Name: "Kames", salary: 19000 },
];

let employ = employee.filter((e) => {
  return e.salary > 20000;
});
console.log(employ);
