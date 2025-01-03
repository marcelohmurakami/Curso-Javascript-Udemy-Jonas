'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    movements.forEach(function(movements, i) {
        const html =       
        `<div class="movements">
            <div class="movements__row">
            <div class="movements__type movements__type--deposit">2 deposit</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">4 000€</div>
            </div>
            <div class="movements__row">
            <div class="movements__type movements__type--withdrawal">
                1 withdrawal
            </div>
            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">-378€</div>
            </div>
      </div>`
    })
}
displayMovements (account1.movements)




















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/*
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));

//SPLICE (QUASE IGUAL O SLICE MAS MUDA O ARRAY ORIGINAL)
console.log(arr.splice(2));
console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //o 2 aqui eh a quantidade de elementos que queremos excluir, diferente do slice
console.log(arr);

//REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //Muda o array original

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));*/

/*
//METODO AT (Muito bom para encadeamento de metodos e buscar ultimos elementos de um array)
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]); //Forma tradicional de obter o ultimo numero de um array
console.log(arr.at(-1)); //Com o metodo AT, o -1 puxa o ultimo elemento do array, assim como o metoco slice


//FOR EACH 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, index, array) {//A ordem importa, 1 o elemento, 2 o elemento, 3 o array que estamosf azendo o loop
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  }); */
  
  