'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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


// Função de quando clicar no item-nav, rolar até a section
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'} );
  };
});


 // Função das operações
 const tabs = document.querySelectorAll('.operations__tab');
 const tabsContainer = document.querySelector('.operations__tab-container');
 const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  clicked.classList.add('operations__tab--active')
})

/*
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
});*/




/*
const h1 = document.querySelector('h1');
const alertH1 = function(e) {
  alert('addEventListener: Great! You are reading the heading!');

  // h1.removeEventListener('mouseenter', alertH1); // Vai remover o event listernet após ouvir o event uma vez
};

h1.addEventListener('mouseenter', alertH1);

/* h1.onmouseenter = function(e) {
  alert('addEventListener: Great! You are reading the heading!')
}; */

//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);*/


/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  //e.stopPropagation(); //vai parar a propagação para os elementos pais
});
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
}, true); //Setando para true, mudará a fase para a fase de captura, ou seja de cima pra baixo, enquanto os outros é de baixo para cima
*/



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

/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
console.log([...h1.parentElement.children]);

[...h1.parentElement.children].forEach((el) => {
  if (el !==  h1) {
    el.style.transform = 'scale(0.5)'
  }
})/*