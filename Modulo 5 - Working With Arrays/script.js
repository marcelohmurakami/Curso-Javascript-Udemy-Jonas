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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => {
    return a - b;
  }) : movements;

    movs.forEach(function(mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `       
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML ('afterbegin', html);
    });
}
//displayMovements (account1.movements);


const createUsername = function (accs) {
  accs.forEach((acc) => {
     acc.username = acc.owner.toLowerCase().split(' ').map((word) => {
      return word.at(0); 
    }).join('');
  })
} 
createUsername (accounts);
//console.log(accounts)


const calcPrintBalance = function (acc) {
  console.log(acc)
  const balance = acc.movements.reduce((ac, cur) => {
    return ac + cur;
  }, 0);
  acc.balance = balance;
  return `${balance} EUROS`;
};
//labelBalance.textContent = calcPrintBalance(account1.movements);


const calcDisplayDeposit = function (movements) {
  const incomes = movements.filter ((mov) => {
    return mov > 0;
  }).reduce((acc, mov) => {
    return acc + mov;
  });
  return (`${incomes}$`);
}
//labelSumIn.textContent = calcDisplayDeposit (account1.movements);


const calcDisplayWhidrawl = function (movements) {
  const withdrawal = movements.filter ((mov) => {
    return mov < 0;
  }).reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  return (`${Math.abs(withdrawal)}$`)
}
//labelSumOut.textContent = calcDisplayWhidrawl (account1.movements);


const calcDisplayInterest = function (account) {
  const juros = account.interestRate;
  const interest = account.movements.filter ((mov) => {
    return mov > 0;
  }).reduce ((acc, mov) => {
    return acc + mov;
  }, 0);

  return (`${Math.trunc((interest * juros) / 100)}$`)
};
//labelSumInterest.textContent = calcDisplayInterest (account1.movements);
const updateUI = function (acc) {
    //Display movements
    displayMovements(currentAccount.movements);

    //Display balance
    calcPrintBalance(currentAccount);

    //Display summary
    labelBalance.textContent = calcPrintBalance(currentAccount);
    labelSumIn.textContent = calcDisplayDeposit(currentAccount.movements);
    labelSumOut.textContent = calcDisplayWhidrawl (currentAccount.movements);
    labelSumInterest.textContent = calcDisplayInterest (currentAccount);
  }



//IMPLEMENTANDO O LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //Sempre que um botão é clicado, o padrão do HTML é sempre recarregar a página, o preventDefault previne que isso aconteça

  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //Display tudoooo
    updateUI (currentAccount);
  }
});


//FAZENDO TRANSFERENCIA ENTRE CONTAS
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find((acc) => {
    return acc.username === inputTransferTo.value;
  });


  if (amount > 0 && receiverAccount && amount <= currentAccount.balance && receiverAccount?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some((mov) => {
    return mov >= amount * 0.1;
  })) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})


//FECHAR CONTA COM FINDEX
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username;
    });
    console.log(index);
    console.log(accounts);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false; 
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


















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


  //MAP (LOOP NO ARRAY E CRIA UM NOVO ARRAY )
  /*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const dolar = 6.2;

  const realToDolar = movements.map ((valor, i) => {
    return Math.trunc(valor/dolar);
  });
  console.log(realToDolar);
  */


  /*
//FILTER
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter((movement) => {
  return movement > 0;
});
console.log(deposits);

const withdrawals = movements.filter((movement) => {
  return movement < 0;
});
console.log(withdrawals);*/

/*
//REDUCE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, cur, i, arr) => {
  return acc + cur
}, 0) //valor do acumulador inicial
console.log(balance);

const max = movements.reduce((acc, mov) => {
  return mov > acc ? mov : acc;
}, movements[0]);
console.log(max);*/


/*
//CHAINING METHODS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const dolar = 6.2;
const total = movements.filter((mov) => {
  return mov > 0;
}).map((mov) => {
  return mov / 6.2;
}).reduce((acc, mov) => {
  return acc + mov;
}, 0);
console.log(total); //Sempre ir conferindo etapa por etapa para caso bugar, a gente saber onde está o erro
*/

/*
//FIND (recuperar elemento de um array, e retorna o primeiro elemento do array que satisfaça a condição)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstwithdrawal = movements.find((mov) => {
  return mov < 0;
});
console.log(firstwithdrawal);

const account = accounts.find ((acc) => {
  return acc.owner === 'Steven Thomas Williams';
});
console.log(account);

let accountLoop;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    accountLoop = acc;
    break;
  }
}
console.log(accountLoop);*/


/*
//LASTINDEX E LASTINDEXOF
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const lastWithdrawal = movements.findLast((mov) => {
  return mov < 0;
});
console.log(lastWithdrawal);

const lastBigMov = movements.findLastIndex((mov) => {
  return mov > 1000;
});
console.log(`Your latest movement was ${movements.length - lastBigMov} movements ago`);*/


/*
//SOME AND EVERY
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const havePositive = movements.some((mov) => { //SOME É MT PARECIDO COM INCLUDES, MAS O INCLUDES VERIFICA IGUALDADE, O SOME VERIFICA CONDIÇÃO
  return mov > 0;
});
console.log(havePositive);

const haveSpentToMuch = movements.some((mov) => {
  return mov < -3000;
});
console.log(haveSpentToMuch);


//EVERY SÓ RETORNA TRUE SE TODOS OS ELEMENTOS FOREM VERDADEIROS PERANTE A CONDIÇÃO
console.log(movements.every((mov) => {
  return mov > 0;
}));

console.log(account4.movements.every((mov) => {
  return mov > 0;
}));


//Separate callback
const deposit =  ((mov) => {
  return mov > 0;
});

console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))


//FLAT 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr.flat());
arr = [...arr[0], ...arr[1], ...arr[2]];
console.log(arr)

const arrDeep = [[[1, 2], 3], [4, [5, 6]], [7, 8, 9]];
console.log(arrDeep.flat(1)); //DEFAULT
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => {
  return acc.movements;
}).flat().reduce((acc, movement) => {
  return acc + movement;
}, 0);
console.log(accountMovements);

//FLATMAP COMBINA O FLAT COM O MAP
const accountMovements2 = accounts.flatMap ((mov) => {
  return mov.movements;
}).reduce((acc, mov) => {
  return acc + mov;
})
console.log(accountMovements2);*/


/*
//SORTING ARRAYS
const owners = ['Jonas', 'Zach', 'Marcelo', 'Julha'];
console.log(owners.sort()); //ORDENOU EM ORDEM ALFABÉTICA, MODIFICA O ARRAY ORIGINAL


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); //VAI DAR RUIM PORQUE ELE ORDENA EM STRINGS, 1 PRIMEIRO 2 DPS ETC EM ORDEM

movements.sort((a, b) => { //A é o elemento atual, B é o próximo elemento
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(movements) //ORDEM CRESCENTE

movements.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(movements) //ORDEM DECRESCENTE

//OU PODEMOS FAZER ASSIM
movements.sort((a, b) => {
  return a - b; //Porque se a for menos vai dar negativo e retornar negativo, e vice versa
});
console.log(movements);*/


/*
//ARRAY GROUPING
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const groupedMovements = Object.groupBy((movements, movement) => {
  return movement > 0 ? 'deposits' : 'withdrawals'
});
console.log(groupedMovements);


const groupedByActivity = Object.groupBy((accounts, account) => {
  const movementCounts = account.movements.lenght;

  if (movementCounts >= 8) {
    return 'very active';
  } else if (movementCounts >= 4) {
    return 'Active';
  } else {
    return 'Moderate';
  }
});
console.log(groupedByActivity);*/


/*
//FILLING ARRAYS
const x = new Array(7); //quando passa um argumento, cria um array vazio com o numero de elementos especificado (7 nesse caso)
//x.fill(1); //O array agora será 1 para todos os 7 elementos

//x.fill(1, 3); //Assim como no Slice, a partir do index 3 todos os elementos serão 1

x.fill(23, 2, 6); //vai colocar 23 no index 2 até o 6

//Array.from
const y = Array.from({length: 7}, () => 1) //Vai criar um array de 7 posições e colocar 1 em todas as posições
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

const xy = Array.from({length: 100}, (el) => Math.random() * 100);
console.log(xy);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent));

  console.log(movementsUI)
})*/



//ToReversed, toSorted, toSpliced (NOVOS METODOS IGUAL SEUS ANTECESSORES MAS NÃO ALTERA O ARRAY ORIGINAL)
//movements.toReversed(); //Inverte sem alterar array







//EXERCICIOS DE ARRAY
//Somar todos os depósitos do banco
const bankDepositSum = accounts.flatMap((account) => {
  return account.movements;
}).reduce((acc, movement) => {
  return movement > 0 ? acc + movement : acc;
});
console.log(bankDepositSum);


//Somar quantos depósitos foram feitos com pelo menos 1000 dolares
let sumDeposits = 0;
const deposits1000 = accounts.flatMap((account) => {
  return account.movements;
}).forEach((movement) => {
  if (movement >= 1000) {
    return ++sumDeposits;
  }
});
console.log(sumDeposits);


//Colocar a soma dos depositos e retiradas
const {deposits, withdrawals} = accounts.flatMap((account) => {
  return account.movements;
}).reduce((acc, movement) => {
  movement > 0 ? (acc.deposits += movement) : (acc.withdrawals += movement);
  return acc;
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);
 