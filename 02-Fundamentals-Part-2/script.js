"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

function logger() {
    console.log("My name is Mahdi!");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);
console.log(fruitProcessor(12, 9));

const appleOrangeJuice = fruitProcessor(6, 7);
console.log(appleOrangeJuice);

const num = Number("23");

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2002);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(2002);

console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //   return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "Mahdi"));
console.log(yearsUntilRetirement(1992, "John"));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has been already retired!`);
    return -1;
}
};

console.log(yearsUntilRetirement(2002, "Mahdi"));
console.log(yearsUntilRetirement(1950, "Linda"));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreKoalas1 = calcAverage(65, 54, 49);
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas2 = calcAverage(85, 54, 41);
const scoreDolphins2 = calcAverage(34, 23, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins (${avgDolphins} vs ${avgKoalas})`);
}
};

checkWinner(scoreKoalas1, scoreDolphins1);
checkWinner(scoreKoalas2, scoreDolphins2);

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2024);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"];

const firstName = "Mahdi";
const mahdi = [firstName, "Jabbary", 2037 - 2002, "Student", friends];
console.log(mahdi);
console.log(mahdi.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Ahmad");
console.log(friends);
console.log(newLength);

friends.unshift("Mostafa");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

const calcTip = function (bill) {
    if (bill < 0) return -1;
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));
console.log(calcTip(555));

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);

const mahdiArray = [
    "Mahdi",
    "Jabbary",
    2037 - 2002,
    "Student",
    ["Michael", "Peter", "Steven"],
];

const mahdi = {
    firstName: "mahdi",
    lastName: "Jabbary",
    age: 2037 - 1991,
    job: "Student",
    friends: ["Michael", "Peter", "Steven"],
};

const mahdi = {
    firstName: "Mahdi",
    lastName: "Jabbary",
    age: 2037 - 1991,
    job: "Student",
    friends: ["Michael", "Peter", "Steven"],
};
console.log(mahdi);

console.log(mahdi.lastName);
console.log(mahdi["lastName"]);

const nameKey = "Name";
console.log(mahdi["last" + nameKey]);
console.log(mahdi["first" + nameKey]);

const interestedIn = prompt(
    "What do you want to know about mahdi? Choose between firstName, lastName, age, job and friends"
);

if (mahdi[interestedIn]) {
    console.log(mahdi[interestedIn]);
} else {
    console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
);
}

mahdi.location = "IRAN";
mahdi["twitter"] = "blabla";
console.log(mahdi);

// Challenge
console.log(
    `${mahdi.firstName} has ${mahdi.friends.length} friends, and his best friend is called ${mahdi.friends[0]}`
);

const mahdi = {
  firstName: "Mahdi",
  lastName: "Jabbary",
  birthYear: 1991,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${mahdi.firstName} is a ${mahdi.calcAge()}-years old ${
      mahdi.job
    }, and he has ${mahdi.hasDriversLicense ? "a" : "No"} driver's license.`;
  },
};
console.log(mahdi.calcAge());

console.log(mahdi.age);
console.log(mahdi.age);
console.log(mahdi.age);

// Challenge
// console.log(
//   `${mahdi.firstName} is a ${mahdi.age}-years old ${mahdi.job}, and he has ${
//     mahdi.hasDriversLicense ? "a" : "No"
//   } driver's license.`
// );

console.log(mahdi.getSummary());


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`
  );
} else {
  console.log(
    `${mark.fullName} and ${john.fullName} have equal BMIs (${mark.bmi})`
  );
}

// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const mahdiArray = [
  "Mahdi",
  "Jabbary",
  2037 - 2002,
  "Student",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < mahdiArray.length; i++) {
  console.log(mahdiArray[i], typeof mahdiArray[i]);

  // types[i] = typeof mahdiArray[i];
  types.push(typeof mahdiArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = 0; i < mahdiArray.length; i++) {
  if (typeof mahdiArray[i] !== "string") continue;

  console.log(mahdiArray[i], typeof mahdiArray[i]);
}

for (let i = 0; i < mahdiArray.length; i++) {
  if (typeof mahdiArray[i] === "number") break;

  console.log(mahdiArray[i], typeof mahdiArray[i]);
}

const mahdiArray = [
  "Mahdi",
  "Jabbary",
  2037 - 2002,
  "Student",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = mahdiArray.length - 1; i >= 0; i--) {
  console.log(i, mahdiArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------Starting Exercise ${exercise}-------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill < 0) return -1;
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
