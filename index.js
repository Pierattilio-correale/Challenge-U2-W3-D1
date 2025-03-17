class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(secondUser) {
    if (this.age > secondUser.age) {
      return `${this.firstName} è più vecchio di ${secondUser.firstName}`;
    } else if (this.age < secondUser.age) {
      return `${this.firstName} è più giovane di ${secondUser.firstName}`;
    } else {
      return `${this.firstName} e ${secondUser.firstName} hanno la stessa età`;
    }
  }
}

const x = new User("Matteo", "Franco", 22, "Roma");
const y = new User("Francesco", "Mirardi", 42, "Bologna");

console.log(x.compareAge(y));
console.log(y.compareAge(x));

const z = new User("Riccardo", "Provenzano", 34, "Torino");
const u = new User("Gennaro", "Esposito", 34, "Milano");

console.log(z.compareAge(u));
console.log(u.compareAge(z));

let firstPet = null;
class PetAnimals {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compareOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

const myPetName = document.getElementById("petName");
const myOwnerName = document.getElementById("ownerName");
const myspecies = document.getElementById("species");
const mybreed = document.getElementById("breed");

const myForm = document.getElementById("FORMPIR");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("petName:", myPetName.value);
  console.log("ownerName:", myOwnerName.value);
  console.log("species:", myspecies.value);
  console.log("breed:", mybreed.value);

  if (!firstPet) {
    firstPet = new PetAnimals(
      myPetName.value,
      myOwnerName.value,
      myspecies.value,
      mybreed.value
    );
    console.log("Primo pet salvato:", firstPet);
  } else {
    const secondPet = new PetAnimals(
      myPetName.value,
      myOwnerName.value,
      myspecies.value,
      mybreed.value
    );
    console.log("Secondo pet:", secondPet);
    console.log(firstPet.compareOwner(secondPet)); // Confronto tra i due oggetti
    firstPet = secondPet;
  }
});
