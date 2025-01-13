'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date (acc.movementsDates[i]);
    const dia = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth()}`.padStart(2, 0);
    const year = `${date.getFullYear()}`;
    const hour = `${date.getHours()}`.padStart(2, 0);
    const minutes = `${date.getMinutes()}`.padStart(2, 0);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${dia}/${month}/${year} ${hour}:${minutes}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // Mostrar data e horário do login
    const now = new Date ();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, 0);;
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(Number('23'));
console.log(+'23'); //mesma forma de converter string para numero

//PARSING
console.log(Number.parseInt('30px', 10)) //Se a string começa com um numero, o parseInt tenta adivinhar, o segundo argumento é a base
console.log(Number.parseFloat('2.5em', 10)) //Mesma coisa que o de cima mas papara decimais

console.log(isFinite(23)); //Melhor forma de verificar se um valor é NUMERO
console.log(isFinite('23'));
console.log(isFinite(+'20'));
console.log(isFinite(23/0));


//Math
console.log(Math.sqrt(25)); //sqrt calcula a raíz quadrada
console.log(25 ** (1 / 2)); //Mesma coisa que o de cima

console.log(Math.max(1, 3 , 5, 78, 39, 36)); //Encontra o valor máximo
console.log(Math.max(1, 3 , 5, '78px', 39, 36)); //Encontra o valor máximo mas nao converte a string com letra
console.log(Math.max(1, 3 , 5, '78', 39, 36)); //Encontra o valor máximo e converte a string

console.log(Math.min(1, 3 , 5, 78, 39, 36)); //Encontra o valor mínimo

console.log(Math.PI * Number.parseFloat('23px') ** 2) //Calcuilo para encontrar a area do circulo

console.log(Math.trunc(Math.random() * 6) + 1); //Trunc tira o decimal, random encontra um numero aleatorio entre 0 e 1, e multiplicação por 6 seria para encontrar um numero entre 1 e 6

const genRan = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //floor arredonda o número quebrado para baixo, sempre, adicionamos mais um para que o máximo seja incluido
};
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));
console.log(genRan(10, 13));

//ROUNDING INTEGERS
console.log(Math.trunc(23.3)); //trunc tira o decimal

console.log(Math.round(23.3)); //round arredonda para o numero inteiro mais proximo
console.log(Math.round(23.7));

console.log(Math.ceil(23.3)); //arredonda para o numero inteiro maior
console.log(Math.floor(23.3)); //arredonda para o numero inteiro menor

//ROUNDING DECIMALS
console.log((2.4369).toFixed(0)); //O TOOfIXED sempre converte para uma string
console.log((2.4369).toFixed(3)); //3 casas decimais
console.log(+(2.4369).toFixed(2)); //converte para um numero

//RESTO DE DIVISÃO
labelBalance.addEventListener('click', function () {
  console.log(document.querySelectorAll('.movements__row').slice(0));
  document.querySelectorAll('.movements__row').slice(0).forEach((moviment, i) => {
    if (i % 2 === 0) {
      moviment.style.backgroundColor = 'blue';
    }

    if (i % 3 === 0) {
      moviment.style.backgroundColor = 'red';
    }
  });
})


//USANDO SUBLINHADO PARA UMA MELHOR LEITURA
console.log(218_473_298_047); //Não funciona em números em strings e nem no começo do número

//BigInt
console.log(Number.MAX_SAFE_INTEGER); //esse é o maior número que o JS consegue trabalhar com segurança, a partir desse número ele começa a dar problemas e fazer operações erradas
console.log(789031250906750185729397239532598334312n) //adicionando o N no final, torna o inteiro em um BigInt

const huge = 9281749847293084732985239842394239n;
const min = 10000;

const mult = huge * BigInt(min); //transformando o numero min em bigint para dar certo a multiplicação

//BigInt (exceptions)
console.log(10n > 5);
console.log(10n === 10);
console.log(10n === '10');
console.log(typeof 2183091283091n);

//BigInt (divisoes) a divisao sempre vai aproximar
console.log(10n / 3n);


//DATES AND TIME
const now = new Date (); //Vai retornar o horário atual
console.log(now);

console.log(new Date ('Aug 02 2020 18:05:41'));
console.log(new Date ('December 24, 2015'));
console.log(new Date (2037, 10, 19, 15, 23, 5));
console.log(new Date (2037, 10, 31));

const future = new Date ((2037, 10, 19, 15, 23, 5));
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getSeconds());
console.log(future.toISOString()); //Transforma em uma string no formato escrito padrao de data internacional

console.log(future.getTime()); //Data em milissegundos desde 1 de janeiro de 1970

console.log(Date.now());


