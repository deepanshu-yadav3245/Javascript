const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc  +  currval
} ,0)

console.log(myTotal);

console.log("=========================================")


// From arrow function

const myNums1 = [1, 2, 3, 4, 50]

const myTotal1 = myNums1.reduce( (acc,curr) => acc + curr, 0)

console.log(myTotal1);




