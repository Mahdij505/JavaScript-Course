"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

const controlModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", controlModal);
}

btnCloseModal.addEventListener("click", controlModal);
overlay.addEventListener("click", controlModal);

document.addEventListener("keydown", function (e) {
  if (e.key === " ") e.preventDefault();
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    controlModal();
  }
});
