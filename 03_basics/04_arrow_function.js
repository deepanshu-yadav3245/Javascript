// Arrow Functions:--
// Arrow functions provide a concise syntax for writing functions in JavaScript.
// They are often used for short functions and callbacks.

// // Example 1: Basic Arrow Function
// const add = (a, b) => {
//   return a + b;
// };  
// console.log(add(2, 3)); // Output: 5

// // Example 2: Implicit Return
// const multiply = (a, b) => a * b;
// console.log(multiply(4, 5)); // Output: 20  

// // Example 3: Single Parameter (no parentheses needed)
// const square = x => x * x;
// console.log(square(6)); // Output: 36   

// // Example 4: No Parameters (empty parentheses needed)
// const greet = () => 'Hello, World!';
// console.log(greet()); // Output: Hello, World!

// // Example 5: Arrow Function as Callback
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]   



// this Keyword in Arrow Functions:--
// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope.
const user = {
  username: "Rahul",
  price: 200,

  welcomeMessage: function () {
    console.log(`Welcome, ${this.username}`);
    console.log(this);
  }
};

user.welcomeMessage();
user.username = "Ankit";
user.welcomeMessage();


// console.log(this)


console.log("==============================================================")


function chai(){
  let username = "LocalUser"
  console.log(this)
}
chai()
