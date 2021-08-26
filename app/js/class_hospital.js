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
    this.#illAnimals.push(pet);
  }
  addPeople(...seekers) {
    this.#findingPetsPeople = [...this.#findingPetsPeople, ...seekers];
  }
  findHome(animal) {
    if (this.#illAnimals.find(item => item.nickname === animal.nickname)) {
      return {
        status: "restricted",
        message: `We need to heal ${animal.nickname} firstly`
      }
    }
    return {
      status: "success",
      name: this.#findingPetsPeople.splice((Math.floor(Math.random() * this.#findingPetsPeople.length)), 1)[0].getFullName()
      //решил так, не хочу выносить никуда переменные. это одноразовая акция - пусть остается
    }
  }
}