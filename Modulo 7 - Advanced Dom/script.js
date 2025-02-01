'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


// Menu fade animation
const nave = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = nave.querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img'); //Duas formas de fazer
    
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    })

    logo.style.opacity = this;
  }
}

nave.addEventListener('mouseover', handleHover.bind(0.5));
nave.addEventListener('mouseout', handleHover.bind(1));


// Sticky navigation
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}) */

  
//Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      nave.classList.add('sticky');
    } else {
      nave.classList.remove('sticky');
    }
  });
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // Em relação a viewport
  threshold: 0, 
  rootMargin: `-${navHeight}px` //adiciona uma margem para a intersecção acontecer
});
headerObserver.observe(header)


// Reveal elements when you scroll to then
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target); // Para melhorar performance
    }
  });
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});


// Carregar imagens
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target);
    if(entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener('load', function() { // A função load dispara assim que o carregamento da nova imagem termina
        entry.target.classList.remove('lazy-img');
      });

      observer.unobserve(entry.target);
    }
  })
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img)
});


// Building a slider component
const sliderFunction = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  //slider.style.transform = 'scale(0.5)';
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const goToSlide = function(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`
    }); 
  };

  goToSlide(0);

  let curSlide = 0;
  const maxSlide = slides.length;

  const nextSlide = function () {
    if(curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  }

  const prevSlide = function () {
    if(curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  }


  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    };
    e.key === 'ArrowRight' && nextSlide();
  });

  const dotContainer = document.querySelector('.dots');
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active')
    });

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }

  dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      console.log(Number(e.target.dataset.slide));
      goToSlide(curSlide);
      activeDot(curSlide);
    }
  });

  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0)
  }
  init();
}
sliderFunction();


document.addEventListener('DOMContentLoaded', function (e) {

});

window.addEventListener('load', function(e) {

});

window.addEventListener('beforeunload', function(e) { // Quando o usuario fecha pagina
  e.preventDefault();
  e.returnValue = 'message'; // Só usar quando há possibilidade de perder dados no meio do uso do usuario
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
})*/

/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const obsOptions = {
  root: null, // null = Viewport
  threshold: [0, 0.2] // Sempre que a section 1 interceptar com a viewport em 10%
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1)
*/