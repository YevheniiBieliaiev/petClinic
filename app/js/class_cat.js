import Animal from "./class_animal";

export default class Cat extends Animal {
  constructor(nickname, food, location, isHomless = true) {
    super(nickname, food, location);
    this.isHomless = isHomless;
  }
}