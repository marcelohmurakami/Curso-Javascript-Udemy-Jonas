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

