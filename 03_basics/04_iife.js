// Immediately Invoked Function Expression (IIFE):-

// An IIFE is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which is also known as a Self-Executing Anonymous Function 
// and contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.  

// Syntax:
(function () {
    // logic here
})();   

// Example:
(function () {
    var message = "Hello, World!";
    console.log(message);
})();   

// In this example, the function is defined and immediately invoked.

// IIFEs are commonly used to avoid polluting the global namespace,
// create private variables, and encapsulate code.  
// They are particularly useful in scenarios where you want to execute some code

console.log("================================================================================")


// Example using arrow function syntax:
( () => {
      console.log("This is an IIFE using arrow function syntax.");  
})()

