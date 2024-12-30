'use strict';

//DEFAULT PARAMETERS
const bookings = [];

const createBooking = function ( 
    fligthNum, 
    numPassagers = 1, //Aqui estamos definindo parametros DEFAULT caso
    //não tenha sido passado valores nos argumentos
    price = 199 * numPassagers
) {

    const booking = {
        fligthNum,
        numPassagers,
        price
    } //Criando objeto com os valores passados para a função
    bookings.push(booking);
}

createBooking ('LM123');
createBooking ('LM123', 2, 600);
createBooking ('LM123', 5);
createBooking ('LM123', undefined, '500'); //undefined é um truque caso queiramos pular um argumento, pois não é possível definir o PRICE antes do numPassagers sem antes especificar o numPassagers



//VALUE VS REFERENCE (HOW TO PASS WORK TO FUNCTIONS)
const flight = 'LM234';
const marcelo = {
    name: 'Marcelo Murakami',
    passport: 'FZ34892',
}

const checkIn = function (flight, passager) {
    passager.name = 'Mr.' + passager.name;

    passager.passport === 'FZ34892' ? alert('Checked in') : alert('Wrong passport');
}

checkIn (flight, marcelo);
console.log(flight); //Muda o valor apenas dentro da função, fora continua o mesmo (VALOR)
console.log(marcelo); //Muda o objeto global, pois referencia o espaço na memória (REFERENCIA)

//BUGGG
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jonas); //Essa função está manipulando o objeto real (marcelo) pois é apenas uma referencia na memória, e pode causar bugs (se sua intenção for apenas criar uma cópia do objeto, por exemplo)
checkIn (flight, marcelo); //Aqui vai dar passaporte errado, pois a função de cima alterou o passaporte do objeto Marcelo


//FIRST CLASS (SÃO AS FUNÇÕES SIMPLES) AND HIGHER ORDER FUNCTIONS (SÃO AS FUNÇÕES DENTRO DE FUNÇÕES OU FUNÇÕES QUE RETORNAM OUTRAS FUNÇÕES)
//FUNCTIONS ACEPPT CALLBACK FUNCTIONS
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

console.log(oneWord('Marcelo Henrique Murakami'));
console.log(upperFirstWord('Marcelo Henrique Murakami'));

//Higher Order Function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transform string: ${fn(str)}`); //fn recebeu como argumento a função upperFristWord/oneWord, e aqui estamos chamando a função passando STR como argumento
}

transformer ('Javascript is the best', upperFirstWord); //transformer é a high order function e upperFirstWord é a callback function
transformer ('Javascript is the best', oneWord);

const high5 = function () {
    console.log('❤');
}
document.body.addEventListener('click', high5);//Outro exemplo de callbackfunction

const nameCorrect = function (str) {
    let nameArray = [];
    const nameSplit = str.split(' ');
    for (const partOfName of nameSplit) {
        const partOfNameCorrect = partOfName.replace(partOfName[0], partOfName[0].toUpperCase());
        nameArray.push(partOfNameCorrect);
    }
    return nameArray.join(' ');
}

const nameWithMr = function (str) {
    const [firstName, ...otherNames] = str.split (' ');
    return 'Mr. ' + [firstName.toUpperCase(), ...otherNames].join(' ');
}


const nameTransformMr = function (str, fn, fn2) {
    const name = fn(str);
    return fn2 (name);
}

console.log(nameTransformMr('Marcelo Henrique Murakami', nameCorrect, nameWithMr));


//FUNCTIONS RETURNING FUCTIONS
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey ('Jonas');
greeterHey ('Marcelo');

greet('Hello')('Jonas');

const nameComplete = function (firstName) {
    return function (RestOfName) {
        console.log(`${firstName} ${RestOfName}`);
    }
}
const myName = nameComplete ('Marcelo');
myName ('Henrique Murakami');


//THE CALL AND APPLY METHODS
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LM',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} book the seat on ${this.airline} flight with ${this.iataCode} IATA code on fligth ${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
}

lufthansa.book(239, 'Marcelo Murakami')
lufthansa.book(635, 'Julião')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book; //A variável 'book' está simplesmente copiando o metodo de reserva do 'book' do objeto Lufthansa, entao funcionará perfeitamente

//book(23, 'Sarah Williams'); //Desse jeito vai dar ERRADO porque agora o 'book' apenas indica uma função, e a palabra this vai retornar undefined

book.call(eurowings, 23, 'Sarah Williams'); //Primeiramente voce apontao o objeto que a palabra THIS vai se referencias, e depois os argumentos
console.log(eurowings);

book.call(lufthansa, 324, 'Maria Loka');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 232, 'Marcelinho henrique') //Para dar certo, os objetos precisam estar todos iguais, com o msmo nome de variáveis e etc...

const flightData = [582, 'George cooper'];
book.apply(swiss, flightData); //Funciona da mesma forma que o método Call, porém ao invés de receber uma lista de argumentos, recebe um array como argumento
console.log(swiss);

book.call(swiss, ...flightData); //Isso é o mesmo do que o APPLY method


const bookEW = book.bind(eurowings) //O método bind, diferente de apply e call, ele define uma nova função mas referenciando, nesse caso, a palavra THIS para o objeto eurowings.
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW (23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //O número do voo 23 já estaria pré definido, e posteriormente só precisaria do argumento do nome
bookEW23 ('Marcelo Murakami');
bookEW23 ('Bela dog');

lufthansa.planes = 300;
lufthansa.buyNewPlane = function () {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener ('click', lufthansa.buyNewPlane.bind(lufthansa)); //cada vez que clicar no botão, vai adicionar um nos planes pois chamou a função, o bind é necessário para o this referenciar o objeto lufthansa, caso nao seja usado o this vai referenciar a classe 'buy', pois em uma função manipualdora de eventos o THIS sempre aponta para o elemento que o manipulador está anexado


const addTax = function (rate, value) {
    return value + value * rate;
}
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23) //Aqui não estamos nem ai para a palavra THIS, por isso o null. E estamos colocando um valor fixo para o rate para ser sempre 0.23
console.log(addVAT(100));
console.log(addVAT(23));
console.log(addVAT(190));

//REFAZER ESSE METODO DE CIMA MAS FAZENDO O METODO DE UMA FUNÇÃO CHAMAR OUTRA FUNÇÃO
const addTax2 = function (rate) {
    return function (value) {
        return value + rate * value;
    }
}

const tax1 = addTax2 (0.2);
console.log(tax1(200));


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (função que só é chamada uma vez e dps desaparece)
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})(); //Invoca entre parenteses e chama ela imediatamente

console.log(isPrivate); //ERROOO


//CLOSURES 
const secureBooking = function () {
    let passangerCount = 0;

    return function () {
        passangerCount++;
        console.log(`${passangerCount} passagers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker(); 
//Uma função SEMPRE vai ter acesso as variáveis do contexto de execução (escopo) que ela foi criada, mesmo após ela ter desaparecido, isso se da através do CLOSURE
//a FUNÇÃO NÃO PERDE CONEXÃO COM AS VARIÁVEIS DA FUNÇÃO PAI

let f;

const g = function () {
    const a = 23,
    f = function () {
        console.log(a * 2)
    };
};

const h = function () {
    const b = 777,
    f = function () {
        console.log(b * 777);
    }
}

g();
f(); //A função f contem a constante a ''salva'' pelo closure

h();
f(); //A função vira a função dentro da const h, perde a variável a do closure mas entra a variável b



const boardPassagers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are boarding all ${n} passagers`);
        console.log(`The are 3 groups, each with ${perGroup} passangers`)
    }, wait * 1000)
    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassagers(180, 3);