/**
 * Determines whether a value is truthy or falsy in JavaScript.
 * 
 * In JavaScript, a value is considered truthy if it evaluates to true in a boolean context.
 * A value is considered falsy if it evaluates to false in a boolean context.
 * 
 * Falsy values in JavaScript:
 * - false (boolean)
 * - 0 (number zero)
 * - -0 (negative zero)
 * - 0n (BigInt zero)
 * - "" (empty string)
 * - null
 * - undefined
 * - NaN (Not-a-Number)
 * 
 * All other values are considered truthy, including:
 * - true (boolean)
 * - Non-zero numbers (1, -1, 3.14, etc.)
 * - Non-empty strings ("hello", "0",'false'etc.)
 * [],{},function(){}
 * - Objects and Arrays (even empty ones)
 * - Functions
 * - Symbols
 * 
 * @returns {void}
 * @example
 * if (value) { // Checks if value is truthy }
 * if (!value) { // Checks if value is falsy }
 */


const userEmail = []

if (userEmail) {
    console.log("Got User Email")
} else {
    console.log("Don't Have User Email")
}

if (userEmail.length === 0){
    console.log("Array is empty")
}

const  emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1  = null ?? 10 ?? 50


console.log(val1)


// Terniary Operator:

// Syntax :-
// condition ? true : false

// Example:-

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80")

