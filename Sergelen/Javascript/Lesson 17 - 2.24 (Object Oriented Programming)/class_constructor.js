// Student class uusgeed dotor ni stringGPA gesen method uusgeed golch dung string bolgo
class Student {
  constructor(x, y, z) {
    this.name = x;
    this.gpa = y;
    this.credit = z;
  }
  stringGPA() {
    let str = "";
    str = str + this.gpa;
    return str;
  }
  get level() {
    if (this.credit > 90) {
      return "Senior";
    } else if (this.credit > 60) {
      return "Junior";
    } else {
      return "Sophomore";
    }
  }
  set major(m) {
    if (this.level === "Senior" || this.level === "Junior") {
      this._major = m;
    } else {
      this._major = "Unemployed";
    }
  }
  get major() {
    return this._major;
  }
}
let student1 = new Student("Bolor", 3.5, 95);
console.log(student1.gpa);

console.log(typeof student1.stringGPA());

console.log(student1.level);
student1.major = "Police";
console.log(student1.major);
