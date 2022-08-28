'use strict';
const randomNumberBox = document.querySelector('.number');
const randomNumber = function () {
  const x = Math.trunc(Math.random() * 20) + 1;
  return x;
};
let x = randomNumber();
const range = document.querySelector('.message');

const score = document.querySelector('.score');
let scorevalue = 20;
const highscore = document.querySelector('.highscore');

const check = document.querySelector('.check');
const checkF = function () {
  const guess = document.querySelector('.guess').value;
  if (guess == x) {
    randomNumberBox.textContent = x;
    range.textContent = 'good work';
    document.querySelector('body').style.background = 'green';
    if (scorevalue > +highscore.textContent) {
      highscore.textContent = scorevalue;
    }
  } else {
    if (guess > x + 3) {
      range.textContent = 'too high';
    } else if (guess > x && guess < x + 3) {
      range.textContent = 'high';
    } else if (guess < x && guess > x - 3) {
      range.textContent = 'low';
    } else if (guess < x - 3) {
      range.textContent = 'too low';
    }
    scorevalue--;
    score.textContent = scorevalue;
  }
};
check.addEventListener('click', checkF);

const again = document.querySelector('.again');
const againF = function () {
  document.querySelector('body').style.background = 'black';
  scorevalue = 20;
  score.textContent = scorevalue;
  randomNumberBox.textContent = '?';
  range.textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
  x = randomNumber();
};
again.addEventListener('click', againF);
