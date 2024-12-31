'use strict';
const message = document.querySelector('.message');
let squre = Math.trunc(Math.random() * 20) + 1;
const again = document.querySelector('.again');
const check = document.querySelector('.check');
let highscore = 0;
let score = 20;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'no number inserted';
  } else if (squre === guess) {
    message.textContent = 'you are correct';
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (squre > guess) {
    if (score > 1) {
      message.textContent = 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😭😭😭😭';
      document.querySelector('body').style.backgroundColor = 'pink';
    }
  } else if (squre < guess) {
    if (score > 1) {
      message.textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😭😭😭😭';
      document.querySelector('body').style.backgroundColor = 'pink';
    }
  }
});
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  squre = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
});
