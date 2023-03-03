const superheroes = require('superheroes');
const supervillains = require('supervillains');

const hero = superheroes.random();
const villain = supervillains.random();

// Calculate the "power" of each name
const heroPower = getPowerScore(hero);
const villainPower = getPowerScore(villain);

// Determine the winner of the fight
let winner;
if (heroPower > villainPower) {
    winner = `${hero} wins!`;
} else if (heroPower < villainPower) {
    winner = `${villain} wins!`;
} else {
    winner = "It's a tie!";
}

// Print the matchup and the winner
console.log(`It's a fight between ${hero} and ${villain}!`);
console.log(`And the winner is... ${winner}`);

// Function to calculate the "power" of a name based on the sum of its character codes
function getPowerScore(name) {
    let power = 0;
    for (let i = 0; i < name.length; i++) {
        power += name.charCodeAt(i);
    }
    return power;
}

