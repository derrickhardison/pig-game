"use strict";

// Selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const newGameBTN = document.querySelector(".btn--new");
const rollDiceBTN = document.querySelector(".btn--roll");
const diceEL = document.querySelector(".dice");

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Event listeners
newGameBTN.addEventListener("click", function () {
  console.log("I was clicked");
  // score0EL.textContent = 0;
  // score1EL.textContent = 0;
  // diceEL.classList = "hidden";
});

rollDiceBTN.addEventListener("click", function () {
  diceEL.classList.remove("hidden");
  console.log(rollDiceBTN);
});

console.log(score0EL);
console.log(score1EL);
console.log(diceEL);
console.log(rollDiceBTN);
