//loop through an array with for each

let pokemon = ['squirtle', 'bulbasaur', 'pikachu', 'charmander'];

const allPokemon = pokemon.forEach(starter => console.log(starter));

// loop through pokemon and uppercase all of the elements.

var numbers = [1, 2, 3, 4, 5];

let multiplyNumbers = numbers.map((change) => change * 2);
console.log(multiplyNumbers);

// log the first instance of a number that is > 4 from numbers

const greaterThanFour = numbers.find((value) => value > 4);
console.log(greaterThanFour);

//find the index of number 1

const findOne = number => number === 1;
console.log(numbers.findIndex(findOne));

//go though pokemon and filter through a pokemon that have characters less than 8

const findLessThanEight = pokemon.filter((value) => value.length < 8)
console.log(findLessThanEight);

//go through every pokemon to see if one is equal to pikachu

const equalToPikachu = pokemon.every((value) => value === "pikachu");
console.log(equalToPikachu); //returns false cause not every value is pikachu

//go through every number to see if at least one is equal to 3

const equalToThree = numbers.some((value) => value === 3)
console.log(equalToThree);

//sort numbers in ascending order

console.log(numbers.sort(function (a, b){return a-b}));

//sort numbers in descending order
console.log(numbers.sort(function(a, b){return b-a}));

//find the lowest value of numbers using sort

var ascending = numbers.sort(function(a, b){return a-b});
var lowestValue = numbers[0];
console.log(lowestValue);

//find the highest value of numbers using sort

var descending = numbers.sort(function(a,b){return b-a});
var highestValue = numbers[0];
console.log(highestValue);
