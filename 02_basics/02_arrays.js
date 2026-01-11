
const marvelHeroes = ["Spider-Man", "Iron Man", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];


// (#) Two Array ko add karne ke mtehod ;

// (1) push() method
// marvelHeroes.push(dcHeroes) 
// console.log(marvelHeroes);

// (2) concat() method
// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// (3) Spread Operator
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

console.log("======================================================");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const another_array = [1, 2, 3,[4, 5, 6], 7,[8, 9,[10, 11, 12]]];

const real_another_array = another_array.flat(Infinity); // flat() method is used to remove nested arrays . and make it single array.
console.log(real_another_array);

console.log("======================================================");

console.log(Array.isArray("rahul")) // false
console.log(Array.from("rahul")) // [ 'r', 'a', 'h', 'u', 'l' ] 
console.log(Array.from({length:5}, (_, index) => index + 1)) // [ 1, 2, 3, 4, 5 ]   
console.log(Array.of(1, 2, 3, 4, 5)) // [ 1, 2, 3, 4, 5 ]   
console.log(Array.from({name:"rahul"}))  // [ undefined ]  , because there is no length property in the object.

console.log("======================================================");

let score1 = 100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

