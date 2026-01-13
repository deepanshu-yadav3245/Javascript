// Scope In JavaScript
// Scope determines the accessibility of variables, functions, and objects in some particular part of your code.

// Global Scope
let globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here too  


console.log("==============================================================");

// Local Scope
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}   

localScopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

console.log("==============================================================");

// Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}

console.log("==============================================================");



let a  = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log ("Inner Value of a:", a); // Output: Inner Value of a: 10
}

console.log("Value of a:", a); // Output: Value of a: 300
// console.log(b);
// console.log(c)