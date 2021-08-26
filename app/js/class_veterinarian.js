import Person from "./class_person";

export default class Veterinarian extends Person {
  #diagnosis = {
    ill: "ill",
    healthy: "healthy"
  }
  constructor(firstName, lastName, hospital) {
    super(firstName, lastName);
    this.hospital = hospital;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName} - ${this.hospital.name}`;
  };
  _setDiagnosis(animal) {
    if (animal.weight > 20) {
      return {
        diagnosis: this.#diagnosis.ill,
        info: "overweight"
      }
    } else if (animal.food === "pet food") {
      return {
        diagnosis: this.#diagnosis.ill,
        info: `Change food. Now ${animal.nickname} eats ${animal.changeFood()}`
      }
    } else if (animal.isHomless) {
      return {
        diagnosis: this.#diagnosis.healthy,
        info: `Change home. Now ${this.hospital.findHome(animal).name} has a new friend - ${animal.nickname}`
      }
    } else {
      return {
        diagnosis: this.#diagnosis.healthy
      }
    }
  };
  treatAnimal(animal) {
    let setDiagnosis = this._setDiagnosis(animal);
    if (setDiagnosis.diagnosis === "ill") {
      this.hospital.addAnimal(animal);
      return {
        info: `${animal.nickname} from ${animal.location}`,
        fullDiagnos: `${setDiagnosis.diagnosis}: ${setDiagnosis.info}`
      }
    }
    return setDiagnosis;
  }
}