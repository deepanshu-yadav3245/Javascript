// Callback hell: Nested callbacks stacked below one another forming s pyramid structure 

    function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    } , 2000);
}

// This is called callback hell:--                                    
// This style of programming becomes difficult to understand & manage.
getData(1,() =>{

    console.log("getting data2.....");  
    getData(2,() =>{
        console.log("getting data3....");
        getData(3,() =>{
            console.log("getting data3....");
            getData(4,() =>{
                console.log("getting data4....");
                getData(5,() =>{
                    console.log("getting data5...")
                    getData(6)
                })
            });
        });
    });
});


//  Promises :--

// Promises is for "eventual"  completion of task. it is an object in JS.
//  It is a solution to callback hell.
// syntax:---
// let promise = new promise((resolve,reject) => {...})

// **resolve & reject are callbacks provided by JS



let promise = new Promise((resolve, reject) => {
    console,log("I am promise");
    resolve("success");
});

function getData(dataId,getNextData) {
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        console.log("data",dataId);
        
        resolve("success");
        if(getNextData){
            getNextData();
        }
    } , 5000);
});
}


// HOW TO USE PROMISES:--

//  .then() & .catch()
// promise.then((resut) => {...})
// promise.catch((error) => {....})

const getPromise  = () =>{
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success")
    });
};

let Promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected",err);
});


// Promises chaning:

function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        }, 4000);
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        }, 4000);
    })
}

console.log("fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data2...");
    let p2 = asyncFunc2();
    p2.then((res) =>{

    })
});