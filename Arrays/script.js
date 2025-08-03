// All power is within you: you can do anything and everything :---

// string = immutable(change  nahi ker skate hai value ko )
// array = immutable (value change ho sakti hai)


let marks = [89,79,98,99,45];
console.log(marks);
marks[0] =66;
console.log("Lenght of string  =",marks.length);
console.log("mark at[0] =",marks[0]);
console.log("mark at[1] =",marks[1]);
console.log("mark at[2] =",marks[2]);
console.log("mark at[3] =",marks[3]);
console.log("mark at[4] =",marks[4])
 
console.log()

// looping over an array:--
//  synatx = for(let indx = 0; indx < arr.indx; indx++){
// }

 
// For loop:--
let heroes = ["ironman","thor","hulk","shaktiman","spiderman ","homelander","bucter"];
for(let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

console.log()

// For of loop:--
let cities = ["delhi","pune","rajasthan","kolkata","lucknow","sidhrathnagar"];

for(let city of cities){
    console.log(city.toUpperCase());
}

console.log()

// Practice Question:--
let marks1 = [85,97,44,37,76,60];

let sum = 0;
for (let val of marks1){
    sum = sum + val;

}
let avg = sum/marks1.length;
console.log(`avg marks1 of the class = ${avg}`);

console.log()

// array method:-- push and pop
let foodItem = ["potato","apple","burger","litchi","tomato"];

foodItem.push("chips","burger","paneer");
console.log(foodItem);

console.log()

// toString(): convert array to sting.
let foodItem1 = ["potato","apple","burger","litchi","tomato"];

console.log(foodItem1);
console.log(foodItem.toString());

console.log()

// concat():join multiple arrays & return result
let marvelHeroes = ["Thor","spiderman","Ironman"]
let dcHeroes = ["Superman","batman","deadpol"];

let Heroes = marvelHeroes.concat(dcHeroes);
console.log(Heroes)

console.log()

// Slice method(): returns a piece of array
// slice(startIdx,endIdx)

let marvelHeroes1 = ["Thor","spiderman","Ironman","Dr strang", "antman"];

console.log(marvelHeroes);
console.log(marvelHeroes1.slice(1 ,3));

console.log()

// splice method(): change orignal array(add ,remove, replace)
//  splice (startIdx, delCount,newEl1..)

let arr =[10,20,30,40,50];
arr.splice(2,2,101,102);
console.log(arr);