'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  openingHours,

  orderDelivery ({
  time = '20:00',
  adress = 'Salim Emer, 331',
  mainIndex = 1,
  starterIndex = 3
  }) {
    console.log(`Pedido redebido. Horário de entrega: ${time}, endereço: ${adress}, pedido ${this.mainMenu[mainIndex]} e entrada ${this.starterMenu[starterIndex]}`)
  },

  orderPasta (item1, item2, item3) {
    console.log(`Aqui está sua deliciosa pasta com ${item1}, ${item2} e ${item3}`)
  },

  orderPizza (mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  }

};

restaurant.orderDelivery({
  time: '23:00',
  adress: 'Salim Emer, 331'
});

//DESESTRUTURANDO ARRAYS
/*const [starter, main] = restaurant.order(0 ,1);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
//const [i, ,h] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [a = 1, b = 1, c = 1] = [2, 5];
console.log(a, b, c);

//const {name, openingHours, categories} = restaurant;
//console.log(name, openingHours, categories);*/




//DESESTRUTURANDO OBJETOS
/*const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating variabels
let a = 111;
let b = 999;

const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
//console.log(a, b);

//Nested objects
const {fri: {open: abertura}} = restaurant.openingHours;
console.log(abertura);*/




//THE SPREAD OPERATOR
/*const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const arr2 = [7, 8, 9];
arr2.push(1, 2);
console.log(arr2);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

const mainMenuCopy = [...restaurant.mainMenu];

const menuComplete = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuComplete);

const str = 'Marcelo';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingredients = [prompt('Lets make pasta! Ingredient 1: '), prompt('Lets make pasta! Ingredient 2: '), prompt('Lets make pasta! Ingredient 3: ')]

restaurant.orderPasta(...ingredients);

const newRestaurant = {foundedYear: 2009, ...restaurant, founder: 'Marcelinho'};

const mostrarNumeros = function (num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
}
const nums = [1, 2, 3, 4, 5];
mostrarNumeros(...nums);*/


//REST PATTERN
/*
const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

const { sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let a = 0; a < numbers.length; a++) {
    sum = sum + numbers[a];
  }
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5,3 ,1 ,6 ,7);

restaurant.orderPizza('Mussarela', 'presunto', 'frango', 'batta palha');*/

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Leclerc',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest1.numGuests || 10;
rest1.numGuests ??= 10;
rest2.numGuests ||= 10;
//console.log(rest1.numGuests);
//console.log(rest2.numGuests);

rest1.owner ||= 'ANONYMOUS';
rest2.owner ||= 'ANONYMOUS';
//console.log(rest1.owner);
//console.log(rest2.owner);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  //console.log(`${i + 1}: ${el}`);
}


//Optional Chaining
//console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //console.log(`On ${day} we open at ${open}`);
}

//console.log(restaurant.order?.(1, 3, 4) ?? 'Função não existe');
//console.log(restaurant.orderRisoto?.(1, 3, 4) ?? 'Função não existe');

const users = [
  {name: 'Jonas', email: 'naosei@gmail.com'}
];
//console.log(users[0]?.name ?? 'User dont exist');
//console.log(users[9]?.name ?? 'User dont exist');


//LOOPING OBJECTS
for (const day of Object.keys(openingHours)) {
 // console.log(day);
}

const properties = Object.keys(openingHours);

let openStr = `We are open in ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
}
//console.log(openStr);

const values = Object.values(openingHours);
//console.log(values);


const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, open] of entries) {
  //console.log(`On ${key} we open at ${open} and close at`)
}


// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Roma, Italy');
rest.set(2, 'Sao Paulo, Brazil');
console.log(rest);

rest 
  .set('categories', ['Italian', 'Mexican', 'Barbacue'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are not open');

console.log(rest.get('categories'));
console.log(rest.get(true));
console.log(rest.get('close'));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));


//MAPS ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Wrong'],
]);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Awner ${key}: ${value}`);
}
const awnser = Number(prompt('Chute sua resposta: '))
console.log(question.get(awnser === question.get('Correct')));
 

//STRINGS
const airline = 'TAP Air Portugal';
//const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, lastIndexOf(' ')));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const letter = seat.slice(-1);
  if (letter === 'B' || letter === 'E') {
    console.log('You got a Middle Seat')
  } else {
    console.log('You are in the pitches')
  }
}
console.log(checkMiddleSeat('34B'));
console.log(checkMiddleSeat('56E'));
console.log(checkMiddleSeat('4A'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passanger = 'MaRcElO';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

const email = 'marcelo@gmail.com';
const loginEmail = '  Marcelo@Gmail.COM ';
const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); //Criar uma função para verificar se é igual

const priceGB = '288,97$';
const priceUS = priceGB.replace('$', 'R$').replace(',', '.');
console.log(priceUS);

const annoucement = 'All passangers come to door 23. Please come to door 23';
console.log(annoucement.replaceAll('door', 'gate'));
 
console.log(annoucement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A'));

if(newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) console.log('Part of the new AIRBUS family')
  else console.log('Dont make part of the new airbus family');

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board')
  } else {
    console.log('Welcome aboard')
  }
}
checkBaggage('i have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('got somes snacks and a gun for protect');


console.log('Marcelo Murakami'.split(' '));
const [firstName, lastName] = ('Marcelo Murakami'.split(' '));
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('Marcelo murakami');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('Marcelo'.padEnd(50, '!'));


const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(1234123412341234));
maskCreditCard('7465829308567124');


const message2 = 'Bad weather... All departues delayed...';
console.log(message2.repeat(10));