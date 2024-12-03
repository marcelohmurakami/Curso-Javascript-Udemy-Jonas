'use strict';

/*
document.querySelector('.message').textContent = '❤️ Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);
*/

const number = Math.floor(Math.random() * 20 + 1);
let tentativas = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.btn.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        document.querySelector('.message').textContent = '😥 You have to input a number!';
    } else if (guess === number){
        document.querySelector('.message').textContent = '😍 You WON! Congratilations';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '25rem';
    } else if (guess > number) {
        document.querySelector('.message').textContent = '⬆ Too high!';
        tentativas--
        document.querySelector('.score').value = tentativas;
    } else {
        document.querySelector('.message').textContent = '⬇ Too low!;'
        tentativas--
        document.querySelector('.score').value = tentativas;
    }
})