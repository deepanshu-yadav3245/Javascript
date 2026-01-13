//  Nested Scope :-

function one(){
    const username = "John Show";

    function two(){
        const website = "youtube.com";
        console.log(username);
        // console.log(website);
    }
    // console.log(website);

    two();
}
one(); 

// Output :-
// ReferenceError: website is not defined   
// Explanation :-
// In this example, the function `one` defines a variable `username` and a nested function `two`. 
// The nested function `two` can access the variable `username` because it is defined in its outer scope. 
// However, when we try to access the variable `website` from the outer function `one`, it results in a ReferenceError 
// because `website` is defined within the scope of the nested function `two` and is not accessible from `one`.

console.log("====================================================================================================================================");


function outerFunction() {
    const outerVariable = 'I am from the outer function';   
    function innerFunction() {
        const innerVariable = 'I am from the inner function';
        console.log(outerVariable); // Accessing outer function variable
        console.log(innerVariable); // Accessing inner function variable
    }       
    innerFunction();
    // console.log(innerVariable); // This will cause a ReferenceError
}
outerFunction();

// Output :-
// I am from the outer function
// I am from the inner function
// Explanation :--
// In this example, `innerFunction` can access `outerVariable` because it is defined in its outer scope. 
// However, if we try to access `innerVariable` from `outerFunction`, it will result in a ReferenceError 
// because `innerVariable` is defined within the scope of `innerFunction` and is not accessible from `outerFunction`.

//  I hope ab tumhe nested scope ka concept clear ho gya hoga


console.log("====================================================================================================================================");

//  what is  Lexical Scope :-
// Lexical Scope ka matlab hota hai ki ek function apne surrounding scope k variables ko access kr skta hai
// chahe wo surrounding scope me kitni bhi nested functions k ander kyu na ho
// Lexical Scope me function apne definition k time pe hi apne surrounding scope k variables ko access kr skta hai
// chalo ek example dekhte hai lexical scope ka

function lexicalExample() {
    const outerVar = "I am outside!";
    function innerFunction() {
        console.log(outerVar); // Accessing outer function variable
    }   
    innerFunction();
}
lexicalExample();

// Output :-
// I am outside!    
// Explanation :-
// In this example, `innerFunction` is defined within `lexicalExample`. It can access the variable `outerVar` 
// because it is defined in its surrounding scope. This demonstrates lexical scoping, where a function 
// can access variables from its outer scope based on where it was defined, not where it is called from.    

console.log("====================================================================================================================================");

//  what is Closure :-
// Closure ek aisa concept hai jisme ek function apne surrounding scope k variables ko yaad rakh sakta hai
// chahe wo surrounding scope ab exist na krta ho
// Closure me inner function apne outer function k variables ko access kr skta hai
// chalo ek example dekhte hai closure ka

function closureExample() {
    const outerVar = "I am from the outer function!";
    function innerFunction() {
        console.log(outerVar); // Accessing outer function variable
    }   
    return innerFunction;
}   
const myClosure = closureExample();
myClosure();

// Output :-
// I am from the outer function!
// Explanation :-
// In this example, `closureExample` returns the `innerFunction`. 
// Even after `closureExample` has finished executing, `innerFunction` retains access to the variable `outerVar` 
// because of closure. When we call `myClosure`, it still remembers the value of `outerVar` from its lexical scope.
//  I hope ab tumhe lexical scope aur closure ka concept clear ho gya hoga

console.log("====================================================================================================================================");

//  Example

console.log(addone(5)); 
function addone (num){
    return num + 1;
}


addtwo(5);       // Error: Cannot access 'addtwo' before initialization because of temporal dead zone
const addtwo = function (num){
    return num + 2;
}


