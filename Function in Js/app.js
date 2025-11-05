//  A Block of code That perform particular task.


// Parameter.
// let add = function(num1,num2)
// {
//     return num1 + num2;
// }

// let result = add(40,50);
// console.log(result);



 2 // Unlimated Arguments 
function addNumber() {
    let ans = 0;
    for (let i = 0;   i < arguments.length; i++){
          ans = ans + arguments[i]
    }
    return ans;
} 

let result = addNumber(23,45,56);
console.log(result);