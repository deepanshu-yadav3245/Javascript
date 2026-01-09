const name = "rahul"
const repoCount = 50

// console.log("Hello " + name + ", you have " + repoCount + " repositories.")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another way to write  strings
const gameName = new String("Fall Guys")
// console.log(gameName);
// console.log(typeof gameName); // object

// String Properties and Methods
console.log(name.length); // property

console.log(name.toUpperCase());    
console.log(name.toLowerCase());

console.log(name.slice(0,3));
console.log(name.replace("rahul", "Rahul"));    
console.log(name.includes("ha"));
console.log(name.split(""));    
console.log(name.split("a"));
console.log(name.startsWith("ra"));
console.log(name.endsWith("ul"));           
console.log(name.charAt(2));
console.log(name.indexOf("h"));
console.log(name.lastIndexOf("l"));
console.log(name.repeat(3));
console.log(name.trim()); // removes whitespace from both ends  
console.log(name.concat(" Kumar"));
console.log(name.padStart(10, "*")); // total length 10
console.log(name.padEnd(10, "-"));   // total length 10 
console.log(name.search("hu"));
console.log(name.match("ah"));
console.log(name.substr(1, 3)); // from index 1 , length 3
console.log(name.valueOf());

