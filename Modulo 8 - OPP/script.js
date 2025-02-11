'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never created a method in construct function
    //this.calcAge = function() {
        //console.log(2037 - this.birthYear);
    //}
}

const jonas = new Person ('Jonas', 1991);
console.log(jonas)

// 1. New {} is created (empty objected)
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person ('Matilda', 2017);
const jack = new Person ('Jack', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person);


// Prototypes
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //True
console.log(jonas.hasOwnProperty('species')); //False

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //vai até aqui
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 1, 4, 5, 76, 4, 2, 5];
console.log(arr.__proto__);
console.log(arr);

Array.prototype.unique = function () {
    return [...new Set(this)];
} // Agora essa função que criamos estará no Array prototype junto com foreach map filter etc...
// Evitar fazer isso com o Array em si

const h1 = document.querySelector('h1');
