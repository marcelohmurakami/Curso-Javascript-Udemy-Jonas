'use strict';

/*
document.querySelector('.message').textContent = '❤️ Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);
*/

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess'));
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🛑 No number'
    }
})