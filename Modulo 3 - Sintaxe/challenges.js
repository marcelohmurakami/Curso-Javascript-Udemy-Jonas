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