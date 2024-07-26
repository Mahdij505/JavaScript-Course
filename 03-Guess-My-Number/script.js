"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 1;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const changeTextContent = function (cls, message) {
  document.querySelector(cls).textContent = message;
};

const resetGame = function () {
  secretNumber = randomNumber();
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  changeTextContent(".number", "?");
  displayMessage("start guessing...");
  document.querySelector(".guess").value = "";
  changeTextContent(".score", score);
  console.log(secretNumber);
};

document.querySelector(".again").addEventListener("click", function () {
  resetGame();
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score >= 1) {
    if (!guess) {
      // When there is no input
      displayMessage("⛔ No number! ");
    } else if (guess === secretNumber) {
      // When player wins
      displayMessage("🥳 Correct Number!");

      document.querySelector("body").style.backgroundColor = "#60b344";
      document.querySelector(".number").style.width = "30rem";
      changeTextContent(".number", secretNumber);

      if (score > highScore) {
        highScore = score;
        changeTextContent(".highscore", highScore);
      }
    } else if (guess !== secretNumber) {
      // When guess is wrong
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        changeTextContent(".score", --score);
      } else {
        displayMessage("🥺 You lost the game");
        document.querySelector("body").style.backgroundColor = "red";
        score = 0;
        changeTextContent(".score", score);
      }
    }
  } else if (score === 0) {
    resetGame();
  }
});
