//  singleton: an object created from an object literal


// What is an object literal?
// An object literal is a comma-separated list of name-value pairs wrapped in curly braces.
// It is a way to create objects in JavaScript.

const JsUser = {
    name: "rahul",
    age: 24,
    isAdmin: true,
    courses: ["html", "css", "js"],
    email:"rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.name); // rahul
console.log(JsUser.age); // 24
console.log(JsUser.courses); // ["html", "css", "js"]
console.log(JsUser.courses[2]); // js   


console.log("=============================================================")


JsUser.email = "rahulyadav@gmail.com" // update email
Object.freeze(JsUser) // freeze the object to prevent further changes
JsUser.email = "deepanshu yadav"
console.log(JsUser.email); // rahulyadav@gmail.com


console.log("=============================================================")


JsUser.greeting = function() { // method
    console.log("Hello Js user");
}


JsUser.greetingTwo = function() { // method
    console.log(`Hello Js user,${this.name}`);
}


console.log(JsUser.greeting()); // Hello Js user
console.log(JsUser.greetingTwo()); // Hello Js user,rahul