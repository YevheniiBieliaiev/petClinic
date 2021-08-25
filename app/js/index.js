"use strict";
import Cat from "./class_cat";
import Dog from "./class_dog";
import Hospital from "./class_hospital";
import Veterinarian from "./class_veterinarian";

function main() {
  const hospital = new Hospital("Cat & Dog");

  const veterinarian = new Veterinarian("Corniei Ivanovich", "Chukovskii", hospital);

  hospital.addPeople(
    "Darkwing Duck",
    "Gena The Crocodile",
    "Snow Maiden",
    "Little Mermaid",
    "Snow White",
    "Little Red Riding Hood",
    "Topple",
    "Shrek",
    "WALL-E",
    "Bender"
  );

  let catTom = new Cat("Tom", "pet food", "New York");
  let dogDruzhok = new Dog("Druzhok", "meat", "Kharkiv", 25);
  let catBarsik = new Cat("Barsik", "vegetables", "Dnipro", false);
  let dogCharli = new Dog("Charli", "porridge", "London", 12);
  let catSonia = new Cat("Sonia", "Whiskas", "Poltava");

  //отправим животинку на проверку
  veterinarian.treatAnimal(catTom);
  veterinarian.treatAnimal(dogDruzhok);
  veterinarian.treatAnimal(catBarsik);
  veterinarian.treatAnimal(dogCharli);
  veterinarian.treatAnimal(catSonia);

  //врач + результат проверки
  console.group(veterinarian.getFullName());
  console.log(veterinarian._setDiagnosis(catTom).info);
  console.log(veterinarian._setDiagnosis(dogDruzhok).info);
  console.log(veterinarian._setDiagnosis(catTom));
  console.log(veterinarian._setDiagnosis(dogDruzhok));
  console.log(veterinarian._setDiagnosis(catSonia).info);
  console.groupEnd();

  //животные в клинике
  console.log('Animals in the hospital: ' + hospital.getAnimals().reduce((acc, item) => [...acc, item.nickname], []).join(", "));
}

main();