// class Pet {
//   constructor(animal, age, type) {
//     this.animal = animal;
//     this.age = age;
//     this.type = type;
//   }
// }

// let hatna = new Pet("dog", 5, "bulldog");
// let banhar = new Pet("dog", 5, "mongol dog");

// console.log(hatna.animal);

class Student {
  constructor(name, gpa, credit) {
    this.name = name;
    this.gpa = gpa;
    this.credit = credit;
  }
  get level() {
    if (this.credit > 90) {
      return "Senior";
    } else if (this.credit > 60) {
      return "Junior";
    } else if (this.credit > 30) {
      return "Sophomore";
    } else if (this.credit <= 30) {
      return "Freshman";
    }
  }
}

let me = new Student("Miracle", 3.5, 31);

console.log(me.level);
