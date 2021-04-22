"use strict";

// Selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEL = document.querySelector(".dice");
const active0 = document.querySelector(".player--0");
const active1 = document.querySelector(".player--1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Event listeners
btnNew.addEventListener("click", function () {
  console.log("I was clicked");
  // score0EL.textContent = 0;
  // score1EL.textContent = 0;
  // diceEL.classList = "hidden";
});

btnRoll.addEventListener("click", function () {
  diceEL.classList.remove("hidden");
  console.log(btnRoll);
  const diceValue = Math.trunc(Math.random() * 6 + 1);

  console.log(diceValue);

  diceEL.src = `dice-${diceValue}.png`;

  if (diceValue !== 1) {
    currentScore += diceValue;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // Switch to next player
    // target currentScore1 textContent
    // add current score to currentScore1 text content
    //switch shaded gray to that side
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

    //ternary operator to achieve if/else above in shorter lines
    activePlayer = activePlayer === 0 ? 1 : 0;

    active0.classList.toggle("player--active");
    active1.classList.toggle("player--active");
  }
});

console.log(score0EL);
console.log(score1EL);
console.log(diceEL);
console.log(btnRoll);
console.log(active0);
console.log(active1);
