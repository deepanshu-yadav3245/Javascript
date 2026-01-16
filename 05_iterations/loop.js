
/**
 * JavaScript Loops - Control Flow Iteration
 * 
 * Loops are programming constructs that repeat a block of code multiple times
 * until a specified condition is met. They are essential for iterating over
 * data structures and automating repetitive tasks.
 * 
 * @typedef {Object} LoopTypes
 * @property {string} forLoop - Traditional loop with initialization, condition, and increment
 * @property {string} whileLoop - Executes code while condition is true
 * @property {string} doWhileLoop - Executes code at least once, then checks condition
 * @property {string} forOfLoop - Iterates over iterable values (arrays, strings, etc.)
 * @property {string} forInLoop - Iterates over object property keys
 * @property {string} forEachMethod - Array method that executes function for each element
 * @property {string} mapMethod - Array method that returns new array with transformed elements
 * 
 * @example
 * // for loop syntax: for (initialization; condition; increment/decrement)
 * for (let i = 0; i < 5; i++) { ... }
 * 
 * // while loop syntax: while (condition)
 * while (i < 5) { ... }
 * 
 * // do...while syntax: do { ... } while (condition)
 * do { ... } while (j < 5);
 * 
 * // for...of syntax: for (const variable of iterable)
 * for (const value of arr) { ... }
 * 
 * // for...in syntax: for (const key in object)
 * for (const key in obj) { ... }
 * 
 * // forEach syntax: array.forEach((element, index, array) => { ... })
 * arr.forEach((value, index) => { ... });
 * 
 * // map syntax: array.map((element, index, array) => { ... })
 * const result = arr.map(val => val * 2);
 */



// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("===========================================================")

// 2. while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log("==========================================================")

// 3. do...while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

console.log("==========================================================")


// 4. for...of loop (for arrays and iterables)
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
}

console.log("===========================================================")

// 5. for...in loop (for object keys)
const obj = { name: 'John', age: 30 };
for (const key in obj) {
    console.log(key, obj[key]);
}

console.log("===========================================================")

// 6. forEach method
arr.forEach((value, index) => {
    console.log(index, value);
});

console.log("============================================================")

// 7. map method (returns new array)
const doubled = arr.map(val => val * 2);
console.log(doubled);


console.log("=============================================================")

for (let i = 0; i < 10; i++){
    const element =  i;
    if (element == 5){
        // console.log("5 Is Best Number:- ")
    }
    // console.log(element)
}

console.log("=============================================================")


for (let i = 0; i <= 4; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 4; j++){
        // console.log(`Inner Loop Value: ${j} and inner loop ${i}`)
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

console.log("=============================================================")

// BREAK: Terminates the loop immediately when condition is met
console.log("Break Example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i equals 5
    }
    console.log(i);
}

console.log("=============================================================")

// CONTINUE: Skips the current iteration and moves to the next one
console.log("Continue Example:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip when i equals 5
    }
    console.log(i);
}

console.log("=============================================================")

// Break in nested loop (breaks inner loop only)
console.log("Break in Nested Loop:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break; // Only breaks inner loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

console.log("=============================================================")

// Continue in nested loop
console.log("Continue in Nested Loop:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue; // Skips only current iteration of inner loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}


