'use strict';
document.querySelector('.message');

const btnagain = document.querySelector('.again');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const highscoreplayer = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20 + 1);

number.textContent = randomNumber;
console.log(randomNumber);
let score = 20;
let highscore = 0;
number.textContent = '?';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let guess;
check.addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (guess === randomNumber) {
      document.querySelector('.message').textContent = 'Excellent guess';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      number.textContent = randomNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== randomNumber) {
      displayMessage(guess > randomNumber ? 'very high' : 'very low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('loser');
  }
});

btnagain.addEventListener('click', function () {
  score = 20;
  highscore = 0;
  displayMessage('start guessing');
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
});
