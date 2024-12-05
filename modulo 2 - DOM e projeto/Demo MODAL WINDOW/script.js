'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let a = 0; a < btnsShowModal.length; a++) {
    btnsShowModal[a].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const close = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

overlay.addEventListener('click', close);
btnCloseModal.addEventListener('click', close);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        close();
    }
});