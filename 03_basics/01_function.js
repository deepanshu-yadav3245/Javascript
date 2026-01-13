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



function loginUserMessage(username = "Rahul"){
    if (username === undefined){
        console.log("Please Enter a UserName")
        return
    }
    return `Welcome back, ${username}!`;
}
console.log(loginUserMessage("Deepanshu"));


console.log(("=============================================================="));    

function calculateCartprice(...num1){ // rest operator:- rest operator collects all the arguments into an array
    return num1 
}
console.log(calculateCartprice(200,400,500))

console.log("==============================================================");  

const user = {
    username: "sachin",
    price: 5000,
}
function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and price is: ${anyobject.price}`);


}
// handleObject(user);
handleObject({
    username: "virat",
    price: 10000,   
})

console.log("==============================================================");

const myNewArray = [10,20,30,40,50];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40,50 ]));


