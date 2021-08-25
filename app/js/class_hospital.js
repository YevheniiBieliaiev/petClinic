export default class Hospital {
  #illAnimals = [];
  #findingPetsPeople = [];
  constructor(name) {
    this.name = name;
  }
  getAnimals() {
    return this.#illAnimals;
  }
  getFindingPetsPeople() {
    return this.#findingPetsPeople;
  }
  addAnimal(pet) {
    return this.#illAnimals.push(pet);
  }
  addPeople(...seekers) {
    return seekers.forEach(item => this.#findingPetsPeople.push(item));
  }
  findHome(animal) {
    if (this.#illAnimals.find(item => item.nickname === animal.nickname)) {
      return {
        status: "restricted",
        message: `We need to heal ${animal.nickname} firstly`
      }
    } else {
      return {
        status: "success",
        name: this.#findingPetsPeople.splice(Math.floor(Math.random() * this.#findingPetsPeople.length), 1).join("")
      }
    }
  }
}