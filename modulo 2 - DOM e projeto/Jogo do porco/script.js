'use strict';

// Atribuindo variáveis aos elementos
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Condições do jogo
score0el.textContent = 0;
score1el.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0 , 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}


//Rolagem do dado
btnRoll.addEventListener('click', function(){
    // Selecionando um número aleatório ao dado
        if (playing) {
            const dice = Math.trunc(Math.random() * 6) + 1;
            console.log(dice);
        
            //Mostrar dado
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;
        
            // Condição se o dado foi 1
            if (dice !== 1) {
                currentScore += dice;
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            } else {
                switchPlayer();
            }
        }
    });


btnHold.addEventListener('click', function () {
    // Adicionar pontuação atual a pontuação do jogador
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Checar se a pontuação é 100  
        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Mudar de jogador
            switchPlayer();
        }
    } 
});
   
btnNew.addEventListener('click', function () {
    // Resetar as pontuações
    for (let a = 0; a < scores.length; a++) {
        scores[a] = 0;
        document.querySelector(`#score--${a}`).textContent = 0;
    }

    // Resetar os currents
    currentScore = 0;
    for (let a = 0; a < scores.length; a++) {
        document.getElementById(`current--${a}`).textContent = currentScore;
    }

    // Resetar o estilo
        document.querySelector(`.player--0`).classList.add('player--active');
        document.querySelector(`.player--1`).classList.remove('player--active');
        //Definir o player 0 como o active
        activePlayer = 0;

    for (let a = 0; a < scores.length; a++) {
        if (document.querySelector(`.player--${a}`).classList.contains ('player--winner')) {
            document.querySelector(`.player--${a}`).classList.remove ('player--winner');
        }
    }

    if (!diceEl.classList.contains('hidden')) {
        diceEl.classList.add('hidden');
    }

    // Definir variável controladora como verdadeira
    playing = true;
});

