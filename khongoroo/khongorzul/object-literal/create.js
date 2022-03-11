class student {
  constructor(name, gpa, credit) {
    this.name = name;
    this.gpa = gpa;
    this.credit = credit;
  }
  //   stringGPA() {
  //     return this.gpa.toString();
  //   }
  //   get activity() {
  //     const today = new Date();
  //     const hour = today.getHours();
  //     if (hour > 8 && new Date()) {
  //       return "playing";
  //     } else {
  //       return "sleeping";
  //     }
  //   }
  get level() {
    if (this.credit > 90) {
      return "senior";
    } else if (this.credit >= 61 && 90 >= this.credit) {
      return "junior";
    } else if (this.credit >= 31 && 31 >= this.credit) {
      return "sophomore";
    } else if (this.credit < 30) {
      return "freshman";
    } else {
      return "nothing";
    }
  }
  set owner(owner) {
    this._owner = owner;
  }
  get owner() {
    return this._owner;
  }
  set major(major) {
    this._major = major;
  }
  get major() {
    if (this.level == "junior" || this.level == "senior") {
      return `major`;
    } else if (this.level === "sophomore" || this.level === "freshman") {
      return "stupid";
    } else {
      return "nothing";
    }
  }
}

// let a = toString(prompt("golchoo oruulna uu"));
// let b = parse(prompt("golch2 oruul"));

let hatnaa = new student("hatna", 3, 20);
// let otgoo = new student("otgoo", b);
// alert(hatnaa.speak());
// alert(b);

// let hatnaa = new student("hatna", a);
// alert(hatnaa.a);
hatnaa.owner = "boldo";
// hatnaa.major = "major";
console.log(hatnaa.major);
