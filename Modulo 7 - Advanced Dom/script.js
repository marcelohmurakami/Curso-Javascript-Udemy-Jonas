'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();  
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1'); 

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect(); // Sempre em relaçao a viewport
    console.log(s1coords) // Varias coordenadas do DOM

    console.log(e.target.getBoundingClientRect());

    console.log('current scroll X/Y', scrollX, scrollY);

    //Scrolling
    window.scrollTo({
        left: s1coords.left, 
        top: s1coords.top + window.scrollY,
        behavior: 'smooth',
    });
})

////////////////////////////////
////////////////////////////////
/*
console.log(document.documentElement); //Seleciona o documento inteiro
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //Seleciona o primeiro ''header'' que encontrar no documento
const allSections = document.querySelectorAll('.section'); //Seleciona todas as classes section
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //Seleciona todos os elementos com o nome button
console.log(allButtons); // Retorna um HTMLCollection, ela eh atualizada sempre que o DOM eh alterado (nao acontece o mesmo com uma nodelist, que eh retornada pelo queryselectorall)

document.getElementsByClassName('btn'); //Tambem vai retornar um HTMLCollection


// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

//header.prepend(message); // Coloca um HTML dentro de um elemento especifico
header.append(message); // Mesma coisa do de cima, mas agora sera o last child
//Cada elemento no DOM eh unico, e so pode estar em um lugar. o append moveu o header para baixo, e nao criou um novo

//header.append(message.cloneNode(true)); //Vai fazer um clone, dessa forma vai criar um novo message e sera exibido duas vezes na tela

// header.before(message); // Vira antes do elemento header, como irmao
// header.after(message);


//Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
});


// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; // Sempre retorna o style INLINE, dentro do HTML

console.log(getComputedStyle(message).height); // Encontra o estilo dentro do CSS

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');


// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt)
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist'); // Cria um novo atributo dentrodo logo

console.log(logo.src); // Aqui seleciona o endereço como um todo da imagem (http://etc)
console.log(logo.getAttribute('src')); // Aqui seleciona somente o elemento do html (img/logo.png)

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //idem aqui, aqui referencia o http
console.log(link.getAttribute('href')); //Ja aqui, o atributo em si do HTML


// Data attributes
console.log(logo.dataset.versionNumber);


// Classes
logo.classList.add('c', 'j', 'u');
logo.classList.remove('c', 'j');
logo.classList.toogle('c');
logo.classList.contains('c');
logo.className = 'jonas' //Nao usar, mas bom saber da existencia */
