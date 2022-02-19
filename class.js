class Support {
  name;
  designation = "support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "India");
const salman = new Support("Solaiman Khan", "Dubai");
const sharuk = new Support("SRK Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
// console.log(aamir.designation);
// console.log(aamir);
// console.log(salman);
console.log(aamir, salman, sharuk, akshay);
