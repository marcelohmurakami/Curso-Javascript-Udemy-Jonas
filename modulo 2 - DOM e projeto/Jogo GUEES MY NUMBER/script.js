'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let tentativas = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const widthNumber = function (width) {
    document.querySelector('.number').style.width = width;
}

const textNumber = function (text) {
    document.querySelector('.number').textContent = text;
}

const tentativasNumber = function (chances) {
    document.querySelector('.score').textContent = tentativas;
}

document.querySelector('.btn.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        displayMessage('😥 You have to input a number!');

    } else if (guess === number){
        displayMessage('😍 You WON! Congratilations');
        document.querySelector('body').style.backgroundColor = 'green';
        widthNumber('25rem');
        document.querySelector('.number').textContent = number;

        if (tentativas > highscore) {
            highscore = tentativas;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess != number) {
        if (tentativas > 0) {
            displayMessage(guess > number ? '⬆ Too high!' : '⬆ Too low!');
            tentativas--
           tentativasNumber(tentativas);
        } else {
            displayMessage('You lost!');
        }
    }
});

document.querySelector('.btn.again').addEventListener('click', function () {
    tentativas = 20;
    number = Math.floor(Math.random() * 20 + 1);

    document.querySelector('body').style.backgroundColor = 'black';
    widthNumber('15rem');
    textNumber('?');

    displayMessage('Start guessing...');
    tentativasNumber(tentativas);
})