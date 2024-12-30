'use strict';
/* 1. Default Parameters
Implemente uma função chamada calculateTripCost que calcula o custo de uma viagem. Ela deve ter os seguintes parâmetros:

distance (distância em km, padrão: 100),
pricePerKm (preço por km, padrão: 0.5),
tollFee (taxa de pedágio, padrão: 10).
A função deve retornar o custo total da viagem (distância × preço por km + pedágio).*/

const calculateTripCost = function (distance = 100, pricePerKM = 0.5, tollFee = 10) {
    return distance * pricePerKM + tollFee;
}
const trip1 = calculateTripCost ();
console.log(trip1);

const trip2 = calculateTripCost (200, 0.7, 15);
console.log(trip2);

const trip3 = calculateTripCost (150, undefined, 20);
console.log(trip3);



/* 2. Value vs Reference
Crie uma função chamada updateProfile que aceita um objeto profile contendo as propriedades:

name,
age,
email.
Dentro da função, atualize as propriedades do objeto. Depois, crie uma função chamada resetProfile que redefine o objeto para os valores originais.

Teste o comportamento alterando e redefinindo o objeto. */

const marcelo = {
    nameOfPerson: undefined,
    age: undefined,
    email: undefined
}
let job = 'Administrator';

const updateProfile = function (person) {
    person.nameOfPerson = 'Marcelo Henrique Murakami';
    person.age = 26;
    person.email = 'marcelo.murakami100@gmail.com';

    job = 'Science computer';
    console.log(job);
}
updateProfile (marcelo);
console.log(marcelo);
console.log(job);

const resetProfile = function (person) {
    person.nameOfPerson = undefined;
    person.age = undefined;
    person.email = undefined;
}
resetProfile (marcelo);
console.log(marcelo);


/* 3. Higher-Order Functions
Escreva uma função chamada stringManipulator que:

Receba uma string e duas funções de callback:
uppercaseFirstLetter (deve transformar a primeira letra em maiúscula),
reverseString (deve inverter a string).
Chame ambas as funções na string fornecida e retorne o resultado. */
const upperFirstLetter = function (str) {
    return str.replace(str[0], str[0].toUpperCase());
}

const reverteString = function (str) {
    const strSplit = str.split(' '); // Divide a string em palavras
    let a = strSplit.length; // Corrigido "length"
    const reverseWord = []; // Array para armazenar as palavras na ordem invertida

    for (let i = a - 1; i >= 0; i--) {
        reverseWord.push(strSplit[i]); // Corrigido "i" no lugar de "a"
    }

    return reverseWord.join(' '); // Junta as palavras em uma string novamente
};

const stringManipulator = function (str, fn1) {
    return fn1 (str);
}
const manipulate1 = stringManipulator ('Marcelo Henrique Murakami', upperFirstLetter);
const manipulate2 = stringManipulator ('Marcelo Henrique Murakami', reverteString);
console.log(manipulate1);
console.log(manipulate2);



/* 4. Functions Returning Functions
Crie uma função chamada createMultiplier que retorna uma outra função. A função retornada deve multiplicar qualquer número por um fator definido na primeira função. */
const createMultiplier = function (fator) {
    return function (number) {
        return fator * number;
    }
}

const multiplierBy2 = createMultiplier(2);
console.log(multiplierBy2(5)); // Deve retornar 10
console.log(multiplierBy2(8)); // Deve retornar 16


/*
5. The call, apply, and bind Methods
Crie um objeto chamado account com as seguintes propriedades:
owner,
balance (saldo inicial),
um método chamado deposit que aumenta o saldo.
Crie outro objeto chamado sharedAccount e utilize os métodos call e bind para fazer depósitos nesse objeto, usando o método deposit do primeiro objeto. */

const account = {
    owner: 'Marcelo Henrique Murakami',
    balance: 10000,

    deposit (valor) {
        this.balance += valor;
    }
}

const sharedAccount = {
    owner: 'Marcelo e Julia viagens',
    balance: 0
}

account.deposit.call(sharedAccount, 500);
console.log(sharedAccount);

const sharedAcountDeposit = account.deposit.bind(sharedAccount);
sharedAcountDeposit (1500);
console.log(sharedAccount);


const car = {
    brand: 'Toyota',
    model: 'Corolla',
    mileage: 50000,

    addMileage(km) {
        this.mileage += km;
        console.log(`${this.brand} ${this.model} now has ${this.mileage} km`);
    },
};

const bike = {
    brand: 'Yamaha',
    model: 'MT-07',
    mileage: 20000,
};

// EXERCÍCIO
// 1. Use o método `call` para adicionar 1000 km à moto (bike) usando o método `addMileage` do objeto `car`.
car.addMileage.call (bike, 1000);

// 2. Use o método `bind` para criar uma nova função chamada `addBikeMileage` que adiciona quilometragem especificamente à moto (bike).
const addBikeMileage = car.addMileage.bind (bike);

// 3. Use a função `addBikeMileage` para adicionar 500 km à moto.
addBikeMileage (500);

// 4. Imprima o objeto `bike` para verificar as alterações.
console.log(bike);
