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

  openingHours: {
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
  },

  orderDelivery: function ({
  time = '20:00',
  adress = 'Salim Emer, 331',
  mainIndex = 1,
  starterIndex = 3
  }) {
    console.log(`Pedido redebido. Horário de entrega: ${time}, endereço: ${adress}, pedido ${this.mainMenu[mainIndex]} e entrada ${this.starterMenu[starterIndex]}`)
  },

  orderPasta: function (item1, item2, item3) {
    console.log(`Aqui está sua deliciosa pasta com ${item1}, ${item2} e ${item3}`)
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
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

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
console.log(abertura);




//THE SPREAD OPERATOR
const arr = [7, 8, 9];
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
