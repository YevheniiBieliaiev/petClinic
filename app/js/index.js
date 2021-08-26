"use strict";
import Person from "./class_person";
import Cat from "./class_cat";
import Dog from "./class_dog";
import Hospital from "./class_hospital";
import Veterinarian from "./class_veterinarian";

function main() {
  const hospital = new Hospital("Cat & Dog");

  const veterinarian = new Veterinarian("Corniei Ivanovich", "Chukovskii", hospital);

  hospital.addPeople(
    new Person("Darkwing", "Duck"),
    new Person("Gena", "The Crocodile"),
    new Person("Show", "Maiden"),
    new Person("Little", "Mermaid"),
    new Person("Snow", "White"),
    new Person("Little Red", "Riding Hood"),
    new Person("Topple", "Withoutfriends"),
    new Person("Shrek", "Green"),
    new Person("WALL-E", "The robot"),
    new Person("Bender", "Ironsod")
  );

  let catTom = new Cat("Tom", "pet food", "New York");
  let dogDruzhok = new Dog("Druzhok", "meat", "Kharkiv", 25);
  let catBarsik = new Cat("Barsik", "vegetables", "Dnipro");
  let dogCharli = new Dog("Charli", "pet food", "London", 12);
  let catSonia = new Cat("Sonia", "Whiskas", "Poltava");

  let petsArr = [catTom, dogDruzhok, catBarsik, dogCharli, catSonia]

  //врач + результат проверки
  console.group(veterinarian.getFullName());
  petsArr.forEach(item => {
    console.log(veterinarian.treatAnimal(item));
  });
  console.groupEnd();

  //животные в клинике
  const arr = hospital.getAnimals().map(item => " " + item.nickname);
  console.log('Animals in the hospital:' + arr);
}

main();