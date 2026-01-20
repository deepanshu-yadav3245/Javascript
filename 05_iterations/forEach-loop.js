// forEach-loop.js
// Syntax of for...of loop and brief examples

// Basic syntax:
// for (const element of iterable) {
//   // use element
// }

// Example 1: iterate an array
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
   console.log(fruit);
}


// Example 2: iterate a string
const greeting = 'hi';
for (const ch of greeting) {
    // console.log(ch);
}




// Example 3: get index + value using Array.prototype.entries()
for (const [index, value] of fruits.entries()) {
    // console.log(index, value);
}



// Example 4: iterate a Map
// const map = new Map([['a', 1], ['b', 2]]);
// for (const [key, val] of map) {
//     // console.log(key, val);
// }




// // Example 5: iterate a Set
// const set = new Set([1, 2, 3]);
// for (const num of set) {
//     // console.log(num);
// }

// Note: for...of works with any iterable (arrays, strings, Maps, Sets, generators, etc.)

console.log('=================================================')

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "france")

// console.log(map);

for (const [key, value] of map){   // accessing maps for for-of-loop
    console.log(key, ':-', value);
}

console.log('=================================================')

// maps for object
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  for-of-loop  Not working on object          
// }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log('=================================================')

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]





 