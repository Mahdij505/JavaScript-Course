"use strict";

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

/*
const flight = "LH234";
const mahdi = {
  name: "Mahdi Jabbary",
  passport: 24384589384,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24384589384) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, mahdi);
// console.log(flight);
// console.log(mahdi);

// const flightNum = flight;
// const passenger = mahdi;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(mahdi);
checkIn(flight, mahdi);
*/

/*

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Mahdi", "Martha", "Adam"].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}!`);

const greeterHey = greet("Hey");
greeterHey("Mahdi");
greeterHey("Steven");

greet("Hello")("Mahdi");
greet("Hi")("Mahdi");
*/

/*

//  Apply and Call Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Mahdi Jabbary");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah Williams");
book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Marry Cooper");
console.log(swiss);

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Mahdi Jabbary");
bookEW23("Martha Cooper");

// With Event Listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//   Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate =
  (rate = 0.23) =>
  (value) =>
    value + value * rate;

const addVATRate = addTaxRate();
console.log(addVATRate(2000));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀



const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  //   answers: [2, 13, 4, 5],

  registerNewAnswer() {
    //   1.1
    const userInput = +prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    // 1.2
    typeof userInput === "number" &&
      userInput < this.answers.length &&
      this.answers[userInput]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    // 3.
    type === "array"
      ? console.log(this.answers)
      : type === "string"
      ? console.log(`Poll results are ${this.answers.join(", ")}`)
      : undefined;
  },
};

// 2.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//   Bonus
const newDisplayResults1 = poll.displayResults.bind({ answers: [5, 2, 3] });
newDisplayResults1();
newDisplayResults1("string");

const newDisplayResults2 = poll.displayResults.bind({
  answers: [1, 5, 3, 9, 6, 1],
});
newDisplayResults2();
newDisplayResults2("string");
*/

/*
const runOnce = function () {
  console.log("This will never run again!****");
};
runOnce();
runOnce();
runOnce();
runOnce();

// IIFE
(function () {
  console.log("1. This will never run again!");
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log("2. This will never run again!"))();

{
  const isPrivate = 23;
  var notPrivate = 50;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const answerPollBtn = document.querySelector(".poll");

const poll = {
  question: "What is your favourite programing language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" &&
    answer >= 0 &&
    answer <= 3 &&
    this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    type === "array" && console.log(this.answers);
    type === "string" &&
    console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

// poll.registerNewAnswer();

answerPollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

*/

/*

//// IIFE
const runOnce = function () {
  console.log("This will never run again!");
};
runOnce();

(function () {
  console.log("This will never run aaaggggain!!!");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again!"))();

{
  const isPrivate = 23;
  var notPrivate = 10;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
// ////////////// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(
      `${passengerCount} passenger${passengerCount === 1 ? "" : "s"}`
    );
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
/*
// Example 1

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assinging f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  return header.addEventListener("click", () => (header.style.color = "blue"));
})();
