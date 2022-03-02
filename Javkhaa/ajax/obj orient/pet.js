class Student {
  constructor(name, gpa, credit, yea) {
    this.name = name;
    this.gpa = gpa;
    this.credit = credit;
    this.yea = yea;
  }
  yriya() {
    if (this.credit === "creditty");
    return "don don";
  }
  stringGPA() {
    return this.gpa.toString();
  }
  //   get activity() {
  //     const today = new Date();
  //     const timer = new hours();
  //     if (hour > 8 && hour < 20) {
  //       return "playing";
  //     } else {
  //       return "sleeping";
  //     }
  //   }
  get level() {
    if (this.credit > 90) {
      return "senior";
    } else if (this.credit > 60) {
      return "junior";
    } else if (this.credit > 30) {
      return "sophemore";
    } else {
      return "freshman";
    }
  }
  set region(uls) {
    this._uls = uls;
  }
  set mergejil(lvlMergejil) {
    if (this.level === "senior" || this.level === "junior") {
      this._mergejil = lvlMergejil;
    } else {
      this._mergejil = "none";
    }
  }
  get mergejil() {
    return this._mergejil;
  }
}

let engn = new Student("oyutan", 4, 50, "dun");

engn.uls = "mgl";
engn.name = "suragch";
engn.mergejil = "dfghj";
engn.credit = 100;
console.log(engn.mergejil);
