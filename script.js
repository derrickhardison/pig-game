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
const current0EL = document.querySelector("#current--0");
const current1EL = document.querySelector("#current--1");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  active0.classList.toggle("player--active");
  active1.classList.toggle("player--active");
};

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add("hidden");
  active0.classList.add("player--active");
  active1.classList.remove("player--active");
  active0.classList.remove("player--winner");
  active1.classList.remove("player--winner");
};

init();

// // Starting conditions
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// diceEL.classList.add("hidden");

// Event listeners
btnNew.addEventListener("click", init);

btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add current score to score of active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check to see if score is 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      diceEL.classList.add("hidden");
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
