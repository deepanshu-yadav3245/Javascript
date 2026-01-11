// Arrays in JavaScript are used to store multiple values in a single variable.
// They are ordered collections of items, which can be of any data type.


// Creating an array
const myArray = [1, 2, 3, 4, 5,"Hello", true]; // An array containing numbers, a string, and a boolean

const myArray2 = new Array(10, 20, 30); // Another way to create an array using the Array constructor   
// console.log(myArray[1]); // Accessing the second element (index 1) of the array
// console.log(myArray2[0]); // Accessing the first element (index 0) of the second array  
// console.log(myArray.length); // Getting the length of the array


// Modifying an array
myArray[0] = 10; // Changing the first element of the array
// console.log(myArray); // Output the modified array  



// +++++++++++++++++++++ Array methods ++++++++++++++++++++++++
// Adding elements
myArray.push(6); // Adds 6 to the end of the array
myArray.unshift(0); // Adds 0 to the beginning of the array
console.log(myArray); // Output the array after adding elements     

// Removing elements
myArray.pop(); // Removes the last element of the array
myArray.shift(); // Removes the first element of the array
console.log(myArray); // Output the array after removing elements

// Finding elements
const index = myArray.indexOf(3); // Finds the index of the element 3
console.log(index); // Output the index of element 3

// Slicing an array
const newArray = myArray.slice(1, 4); // Creates a new array from index 1 to 3
console.log(newArray); // Output the sliced array  

// Splicing an array
myArray.splice(2, 1, 99); // Removes 1 element at index 2 and adds 99
console.log(myArray); // Output the array after splicing

// Iterating over an array
myArray.forEach((item, index) => {
    console.log(`Element at index ${index}: ${item}`); // Output each element with its index
});

// Mapping an array
const mappedArray = myArray.map(item => item * 2); // Creates a new array with each element multiplied by 2
console.log(mappedArray); // Output the mapped array    

// Filtering an array
const filteredArray = myArray.filter(item => item > 2);
console.log(filteredArray); // Output the filtered array with elements greater than 

// Reducing an array
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output the sum of all elements in the array    

console.log(myArray.includes(1)); // Check if the array includes the element 1
console.log(myArray.indexOf(4)); // Get the index of the element 4

// jioning arrays
const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);



// Arrays are versatile and powerful, making them essential for handling collections of data in JavaScript.