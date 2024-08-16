"use strict";

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = "NEW OUTPUT!";
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Mahdi";
calcAge(1991);
*/

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Mahdi";
let job = "student";
const year = 2024;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log(`All product deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// console.log(this);

const clacAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
clacAge(1998);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1950);

const mahdi = {
  year: 1940,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
mahdi.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = mahdi.calcAge;
matilda.calcAge();

const f = mahdi.calcAge;
f();
*/

/*
// var firstName = "Matilda";

const mahdi = {
  firstName: "Mahdi",
  year: 1982,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
mahdi.greet();
mahdi.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 12, 13, 99);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 14, 67, 89);
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Mahdi",
  age: 20,
};
const friend = me;
friend.age = 27;
console.log("Friend", friend);
console.log("Me", me);
*/

/*
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

const jessicaCopy2 = structuredClone(jessica2);
jessicaCopy2.lastName = "Smith";
console.log(jessicaCopy2);
*/
