/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


//1. Create one player array for each team (variables 'players1' and 'players2')
const [...bayern] = game.players[0];
const [...borussia] = game.players[1];
const bayern1 = [...game.players[0]];
//console.log(bayern, borussia);
console.log(bayern);
console.log(bayern1);


//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = game.players[0];
//console.log(gk, fieldPlayers);


//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...game.players[0], ...game.players[1]];
//console.log(allPlayers);


//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...bayern, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);


//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, odds, team2} = game.odds;
//console.log(team1, x, team2);


//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  let goals = 0;
  for (let a = 0; a < players.length; a++) {
    for (let i = 0; i < game.scored.length; i++) {
      if (players[a] === game.scored[i]){
        goals += 1;
      }
    }
    //console.log(`Player ${players[a]} scored ${goals} in the match`);
    goals = 0;
  }
}
printGoals ('Davies', 'Muller', 'Lewandowski', 'Kimmich');


//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const winner = game.odds.team1 || game.odds.team2;
//console.log(winner);


//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

 
//Let's continue with our football betting app!

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, player] of game.scored.entries()) {
  //console.log(`Goal ${goal + 1}: ${player}`);
}


//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let soma = 0;
let qtdOdds = 0;
const oddsParaMedia = Object.values(game.odds);
for (const odd of oddsParaMedia) {
  soma += odd;
  qtdOdds++;
}
const media = (soma / qtdOdds).toFixed(3);
//console.log(`A média das odds é de ${media}`);


//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      //Odd of victory Bayern Munich: 1.33
      //Odd of draw: 3.25
      //Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team] ?? 'draw'}: ${odd}`);
};


/*BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const scorers = {}
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers);

/*
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);


//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const qtdEvents = 90 / (gameEvents.size);
console.log(`An event happened, on average, every ${qtdEvents} minutes`);


//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽️ GOAL
for (const [time, event] of gameEvents) {
  console.log(time <= 45 ? `[FIRST HALF] ${time}: ${event}` : `[SECOND HALF] ${time}: ${event}`);
}

// Coding Challenge #4


/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const palavras = text.split('\n');
  let certinho = 1;
  const espacamento = 20;
  for (const palavra of palavras) {
    const allLowerCase = palavra.toLowerCase().trim();
    const firstWord = allLowerCase.slice(0, allLowerCase.indexOf('_'));
    let secondWord = allLowerCase.slice(allLowerCase.indexOf('_') + 1);
    secondWord = secondWord[0].toUpperCase() + secondWord.slice(1);
    const finalWord = firstWord + secondWord;
    console.log(finalWord.padEnd(espacamento, ' ') + '✅'.padStart(certinho, '✅'));
    certinho++
}})
//palavra('underscore_case',' first_name', 'Some_Variable', ' calculate_AGE', 'delayed_departure');



/*
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)*/

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');

const frase = function (flightSplit) {
  return `${flightSplit[0].replaceAll('_', ' ').replace(';', ' from ').replaceAll(';', ' ')} from ${flightSplit[1].slice(0, 3).toUpperCase()} to ${flightSplit[2].slice(0, 3).toUpperCase()} (${flightSplit[3].replace(':', 'h')})`; 
}

for (const fligth of flightsArr) {
  const tamanhoFrase = 50;
  const flightSplit = fligth.split(';');

  if (fligth.includes('Delayed')) {
    const flight = `🔴 ${frase(flightSplit)}`;
    console.log(flight.padStart(tamanhoFrase, ' '));
  } 
  else {
    const flight = frase(flightSplit);
    console.log(flight.padStart(tamanhoFrase, ' '));
  }
}

const championship = {
  matches: [
    {
      team1: 'Barcelona',
      team2: 'Real Madrid',
      score: '2:1',
      scored: ['Messi', 'Benzema', 'Messi'],
      odds: {
        team1: 1.5,
        draw: 3.5,
        team2: 4.0,
      },
    },
    {
      team1: 'Manchester City',
      team2: 'Liverpool',
      score: '1:3',
      scored: ['Salah', 'De Bruyne', 'Salah', 'Firmino'],
      odds: {
        team1: 2.0,
        draw: 3.0,
        team2: 2.5,
      },
    },
  ],
};

// TAREFAS:

// 1. Crie uma função `generateReport` que recebe o objeto `championship` e retorna um relatório detalhado de cada partida.
// - Para cada partida, exiba: 
//    - Os times que jogaram, o placar e os jogadores que marcaram.
//    - Qual time tinha mais chance de ganhar (com base nas odds).

// 2. Crie um array com os nomes únicos dos jogadores que marcaram gols em todo o campeonato (use `Set`).

// 3. Calcule a média das odds de todas as partidas e exiba o resultado.

// 4. Para cada partida, calcule qual foi o intervalo médio de tempo entre os gols (assuma que os gols estão distribuídos uniformemente nos 90 minutos).

// 5. Use `padStart` para formatar o relatório com uma aparência bonita, ex: 
// "Match: Barcelona vs Real Madrid"
// "Score: 2:1"
// "Top Scorer: Messi"

// 6. Bônus: Crie um objeto chamado `topScorers` que mostre quantos gols cada jogador marcou em todo o campeonato.


/*Listar os nomes e posições dos jogadores:
Crie um código que percorra o array de jogadores e imprima no console uma frase no formato:
"Jogador: Ronaldo - Posição: Forward"

Adicionar um jogador ao time:
Escreva uma função que receba os dados de um novo jogador (nome, posição, gols e assistências) e retorne uma nova lista de jogadores contendo o jogador adicionado, sem modificar a lista original.

Verificar se um jogador está no time:
Escreva uma função que procure um jogador pelo nome e retorne:

O objeto com as informações do jogador, caso ele exista.
null, caso não seja encontrado.
Criar uma lista com informações dos jogadores e suas posições:
Escreva um código que gere um novo array contendo frases no formato:
["Ronaldo joga como Forward", "Messi joga como Forward", "De Bruyne joga como Midfielder"]

Mostrar as estatísticas de um jogador como frase:
Crie uma função que receba o nome de um jogador e retorne uma frase no formato:
"Ronaldo marcou 12 gols e deu 4 assistências."
Se o jogador não for encontrado, exiba uma mensagem dizendo que ele não está no time.*/