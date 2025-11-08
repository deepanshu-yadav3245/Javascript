// Scope in JavaScript defines where variables and functions can be accessed in your code. It decides the lifetime and visibility of a variable.


// GLobal Scope:-A variable declared outside any function or block is global.It can be accessed anywhere in the program.
let name = "Rahul";  // Global scope

function greet() {
  console.log("Hello " + name); // Accessible here
}

greet();
console.log(name); // Accessible here too





// 2. Function Scope (Local Scope) :-- Variables declared inside a function are accessible only within that function.
function test() {
  let message = "Inside function";
  console.log(message); // Accessible here
}

test();
console.log(message); // ❌ Error: message is not defined.




// 3. Block Scope :--- Variables declared using let or const inside a block ({}) are only accessible within that block.
if (true) {
  let city = "Delhi";
  const country = "India";
  console.log(city, country); // Accessible here
}

console.log(city); // ❌ Error
console.log(country); // ❌ Error
