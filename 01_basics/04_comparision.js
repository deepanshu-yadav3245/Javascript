console.log("2" + 1);
console.log("02" > 1);



console.log(null == undefined);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);    
console.log(undefined > 0);
console.log(undefined < 0);

console.log(false == 0);
console.log(false === 0);
console.log(false >= 0);
console.log(false <= 0);        

console.log(' \t\r\n' == 0);
console.log(' \t\r\n' === 0);   
console.log(' \t\r\n' > 0);
console.log(' \t\r\n' < 0); 
console.log(' \t\r\n' >= 0);    

const score = 100
const scoreValue = 100.3
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Statck adn Heap Memory  
let num1 = 6;          // Stack
let num2 = num1;      // Stack          
console.log("num1", num1);  // 6        
console.log("num2", num2);  // 6

num1++;     
console.log("After Incrementing num1");
console.log("num1", num1);
console.log("num2", num2);      
// num2 is not changed because it was copied by value       

let arr1 = ["item1", "item2"];   // Heap
let arr2 = arr1;                 // Stack
console.log("arr1", arr1);   // ["item1", "item2"]
console.log("arr2", arr2);   // ["item1", "item2"]
arr1.push("item3");
console.log("After Pushing item3 to arr1");
console.log("arr1", arr1);  
console.log("arr2", arr2);
// arr2 is also changed because both arr1 and arr2 point to the same array in heap memory
