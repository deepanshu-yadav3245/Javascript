// If statement :-- is used to execute a block of code only if a specified condition is true.

// Syntax :--
// if (condition) {
//     // code to be executed if condition is true
// }    

const isUserLoggedIn = true;
const temperature = 50;

if (temperature === 51) {
    console.log("It's a bit chilly outside.");
} else{
    console.log("The temperature is greater than 50.");
}
 
console.log("============================================================")

const score = 200;

if (score > 100){
    const power = "Super Strength";
    console.log(`You have unlocked ${power}!`);
}
// console.log(`Your power is ${power}.`); // This will throw an error because 'power' is not defined outside the if block


console.log("============================================================")

const balance = 1000;

if (balance > 500) console.log("You have a healthy balance!"); // this is explicit way of writing if statement without curly braces

