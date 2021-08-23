import Person from "./class_person";

export default class Veterinarian extends Person {
  constructor(firstName, lastName, hospital) {
    super(firstName, lastName);
    this.hospital = hospital;
    this.diagnosis = {
      ill: "ill",
      healthy: "healthy"
    }
  }
  getFullName() {
    return `${this.firstName} ${this.lastName} - ${this.hospital}`;
  }
  _setDiagnosis() {
   
    return {
      diagnosis: `healthy or ill diagnosis from #diagnosis property`,
      info: `some message to user`
    }
  }
}