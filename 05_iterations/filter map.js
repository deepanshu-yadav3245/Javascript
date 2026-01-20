// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);

console.log('=====================================================')

const favNumbers = [1,2,3,4,5,6,7,8,9,10]

const newFav = favNumbers.map( (num) => num + 10)
console.log(newFav)

console.log("=====================================================")

// chaining ekk ya do method ekk sath laga sakte hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums)