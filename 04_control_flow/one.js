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


console.log("============================================================") 

// Nested If statement :-- An if statement inside another if statement.

const NetBalance = 1500;

if (NetBalance > 1000) {
    console.log("You have a good balance.");    
} else if (NetBalance > 2000) {
        console.log("You have a great balance!");
    } else if (NetBalance > 3000) {
            console.log("You have an excellent balance!");
        }   else {
                console.log("You have a low balance.");
            } 


console.log("============================================================")

