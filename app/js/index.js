"use strict";
import Cat from "./class_cat";
import Dog from "./class_dog";
import Hospital from "./class_hospital";
import Veterinarian from "./class_veterinarian";




const animalArr = [
  new Cat("Barsik", "Whiskas", "Dr.Aibolit", false),
  new Dog("Druzhok", "Pedigree", "Cat & Dog", 25),
  new Cat("Vasia", "Whiskas", "Status Vet"),
  new Dog("Bielka", "Pedigree", "Cat & Dog", 10),
  new Cat("Sonia", "Whiskas", "Dr.Aibolit"),
  new Cat("Rizhik", "Whiskas", "Vet City"),
  new Dog("Charli", "Pedigree", "Vet City", 12),
  new Dog("Masia", "Pedigree", "Status Vet", 5),
  new Cat("Tom", "Whiskas", "Dr.Aibolit", false),
  new Dog("Emma", "Pedigree", "Mary Pet", 21)
];

console.log(animalArr)

const peopleArr = [];