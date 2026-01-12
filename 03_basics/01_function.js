// What is a Function?
// A function is a reusable block of code that performs a specific task.
// Functions help to organize code, make it more readable, and allow for code reuse.    

// Defining a Function
function greet(name) {
    console.log("Hello, " + name + "!");
}



// Calling a Function
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!  


console.log("==============================================================");

// Function with Return Value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum:", sum); // Output: Sum: 8

console.log("==============================================================");

// Function with Default Parameters
function multiply(a, b = 2) {
    return a * b;
}   
console.log("Multiply:", multiply(4));    // Output: Multiply: 8
console.log("Multiply:", multiply(4, 3)); // Output: Multiply: 12   

console.log("==============================================================");

// Arrow Function
const square = (x) => x * x;
console.log("Square:", square(5)); // Output: Square: 25    

console.log("==============================================================");

// Function Expression
const divide = function(a, b) {
    return a / b;
};  
console.log("Divide:", divide(10, 2)); // Output: Divide: 5

console.log("==============================================================");

function addTwoNumbers(num1, num2) {

    return num1 + num2;
}

const result = addTwoNumbers(3, 7);
console.log("The result is : ", result); // Output: The result is: 10


console.log("==============================================================");

function loginUserMessage(username){
    return `Welcome back, ${username}!`;
}

loginUserMessage("Rahul")
