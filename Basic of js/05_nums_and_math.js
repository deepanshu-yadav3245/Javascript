// Number and Math In JavaScript
// JavaScript has a single number type: 64-bit floating point (like Java's double).


// It can represent both integers and floating-point numbers.       
let integerNum = 42;          // An integer
let floatNum = 3.14;         // A floating-point number     
let negativeNum = -7;        // A negative number
let scientificNum = 1.5e3;   // Scientific notation (1.5 * 10^3 = 1500) 
// console.log(integerNum, floatNum, negativeNum, scientificNum);

// Special numeric values  
let infinityNum = Infinity;          // Represents positive infinity
let negativeInfinityNum = -Infinity; // Represents negative infinity
let notANumber = NaN;               // Represents an invalid number
// console.log(infinityNum, negativeInfinityNum, notANumber);  

// Basic arithmetic operations
let sum = 5 + 3;          // Addition
let difference = 10 - 4;  // Subtraction
let product = 6 * 7;    // Multiplication       
let quotient = 20 / 5;   // Division    
let remainder = 10 % 3;  // Modulus (remainder of division)
// console.log(sum, difference, product, quotient, remainder);

// Math object for advanced mathematical operations
let roundedNum = Math.round(4.7);
let powerNum = Math.pow(2, 3); // 2 raised to the power of 3
let squareRoot = Math.sqrt(16); // Square root of 16
let randomNum = Math.random();   // Random number between 0 and 1
// console.log(roundedNum, powerNum, squareRoot, randomNum);



// *********************************Maths*********************************

console.log(Math);

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E);  // 2.718281828459045  
// console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.SQRT1_2);
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LOG2E); // 1.4426950408889634
// console.log(Math.LOG10E); // 0.4342944819032518

console.log(Math.abs(-7)); // 7
console.log(Math.ceil(4.2)); // 5   // Rounds up to the nearest integer
console.log(Math.floor(4.7)); // 4  // Rounds down to the nearest integer
console.log(Math.round(4.5)); // 5  // Rounds to the nearest integer
console.log(Math.max(3, 7, 2, 9, 4)); // 9  // Returns the largest of the given numbers
console.log(Math.min(3, 7, 2, 9, 4)); // 2  // Returns the smallest of the given numbers
console.log(Math.pow(2, 3)); // 8           // 2 raised to the power of 3
console.log(Math.sqrt(25)); // 5            // Square root of 25                      
console.log(Math.random());                // Random number between 0 and 1
console.log(Math.sin(Math.PI / 2)); // 1 
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1        
console.log(Math.log(Math.E)); // 1
console.log(Math.exp(2)); // 7.3890560989306495     
console.log(Math.cbrt(27)); // 3      // Cube root of 27
console.log(Math.trunc(4.9)); // 4   // Removes the decimal part
console.log(Math.fround(1.337)); // 1.3370000123977661  // Rounds to the nearest 32-bit single precision float
console.log(Math.hypot(3, 4)); // 5  // Returns the square root of the sum of squares of its arguments
console.log(Math.clz32(1)); // 31  // Counts leading zero bits in the 32-bit binary representation
console.log(Math.imul(2, 4)); // 8  // Performs C-like 32-bit multiplication
console.log(Math.sign(-5)); // -1  // Returns the sign of a number
console.log(Math.sinh(0)); // 0  // Hyperbolic sine
console.log(Math.cosh(0)); // 1      // Hyperbolic cosine
console.log(Math.tanh(0)); // 0      // Hyperbolic tangent