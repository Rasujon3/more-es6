class TeamMember {
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  designation = "support Web Dev";
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember {
  designation = "care Web Dev";
  buildARoutine(student) {
    console.log(this.name, "Build a routine for", student);
  }
}
class NaptuneDev extends TeamMember {
  codeEditor;
  designation = "Neptune App Dev";
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "release app version", version);
  }
}

const aamir = new Support("Aamir Khan", "India", 9);
const salman = new Support("Solaiman Khan", "Dubai", 11);
const sharuk = new Support("SRK Khan", "Dubai", 3);
const akshay = new Support("Akshay Kumar", "Dubai", 5);

const alia = new StudentCare("Alia Bhatt", "Mumbai");
// console.log(alia);
// console.log(aamir);
// console.log(alia);
const ash = new NaptuneDev("Ash", "Mumbai", "Android studio");
// console.log(ash);
ash.releaseApp("1.4.5");
console.log(ash.name);
