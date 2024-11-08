/*function describeCountry (country, population, capitalCity){
    const place = `${country} have a ${population} million people and his capital is ${capitalCity}`;
    return place;
}

const country1 = describeCountry("Brazil", 300, "Brasilia");
const country2 = describeCountry("Argentina", 30, "Buenos Aires");
const country3 = describeCountry("Chile", 20, "Santiago");
console.log(country1, country2, country3);*/

/*const worldPopulation = 8000;
function calcPercentage(population){
    const percentage = (population / worldPopulation) * 100;
    return percentage;
}

const percentageOfWorld = function(population, country){
    const perc = calcPercentage(population);
    return `The percentage of ${country} is ${perc}% in relation of the population of the world!\n`
}

const country1 = percentageOfWorld(300, "Brazil");
const country2 = percentageOfWorld(30, "Argentina");
const country3 = percentageOfWorld(20, "Chile");
console.log(country1, country2, country3);*/

/*const neighbours = ['Argentina', 'Uruguai', 'Paraguai'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);

neighbours.includes('Paraguai') ? console.log('Its a central country') : console.log('Isnt a central country');

neighbours[neighbours.indexOf('Argentina')] = 'Colombia';
console.log(neighbours);
*/

/*myCountry = {
  country: "Brasil",
  capital: "Brasília",
  language: "Portuguese",
  population: "250",
  neighbours: ["Argentina", "Colombia", "Paraguai"],

  describe: function () {
    console.log(
      `${this.country} has a ${this.population} million people poluation, ${this.neighbours.length} neighbours and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(
  `${myCountry.country} has ${
    myCountry.population
  } million people population, ${
    myCountry.neighbours.length
  } neighbours and a capital called ${myCountry.capital}, this is ${
    myCountry.isIsland ? "a island" : "not a island"
  }`
);

const x = 90;
console.log(x);
*/

//Criar função para contabilizar votos
/*let candidato1 = 0;
let candidato2 = 0;
function resEleicao(opcao, votante){
  if (opcao === 1){
    console.log(`O votante ${votante} fez seu voto no candidato ${opcao}`)
    candidato1 ++;
  } else if (opcao === 2){
    (`O votante ${votante} fez seu voto no candidato ${opcao}`)
    candidato2 ++;
  } else{
    console.log("Voto nulo!")
  }
}

//Criar loop para todos os votantes
for(let a = 1; a <= 50; a++){
  let escolha = Number(prompt("Faça seu voto: "));
  resEleicao(escolha, a);
}*/

const worldPopulation = 8000;
function calcPercentage(population) {
  const percentage = (population / worldPopulation) * 100;
  return percentage;
}

/*
const populations = [300, 50, 30, 2000];
console.log(populations.length === 4 ? true : false);
for(let a = 0; a < populations.length; a++){
  console.log(calcPercentage(populations[a]))
}*/

/*const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let a = 0; a < listOfNeighbours.length; a++){
  for(let b = 0; b < listOfNeighbours[a].length; b++){
    console.log(listOfNeighbours[a][b])
  }
}*/

const populations3 = [300, 50, 30, 2000];
let a = 0;
while (a < populations3.length) {
  console.log(calcPercentage(populations3[a]));
  a++;
}

const teste = "eu sou lindo";
