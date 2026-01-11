const tinderUser = {}

tinderUser.name = "John Doe"
tinderUser.age = 28
tinderUser.isVerified = true    

console.log(tinderUser)

console.log("=================================================================")

//  Another way to create an object

const regularUser = {
    email:"deepanshu@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Deepanshu",
            lastName: "Yadav Ji"
        }
    }     
}

console.log(regularUser.fullname.userFullname.firstName)


console.log("=================================================================")

// Combine An Object 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"} 
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1,obj2} // This will not work as expected
// const obj3 = Object.assign({}, obj1, obj2) // Correct way to combine objects

const obj3 = {...obj1, ...obj2, ...obj4} // Using Spread Operator to combine objects
console.log(obj3)  // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  


 
console.log("=================================================================")        


// Destructuring Objects

