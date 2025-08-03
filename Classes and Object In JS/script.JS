// // Object
// const student = {
//      fullName:"Deepanshu Yadav",
//      marks: 69.4,
//      printMarks:function(){
//         console.log("marks =",this.marks);                                                                
//      },
// };





// Prototypes in JS:--
// A javascript object is an entity having state and behaviour.

// JS object have a special property called prototype.

// We can set prototype using __proto__



const employee ={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun1 ={
    salary:60060,
};

const karanArjun2 ={
    salary:6000,
};

const karanArjun3 ={
    salary:70000,
};

const karanArjun4 ={
    salary:80000,
};

const karanArjun5 ={
    salary:90000,
};


karanArjun1.__proto__ = employee
karanArjun2.__proto__ = employee
karanArjun3.__proto__ = employee
karanArjun4.__proto__ = employee
karanArjun5.__proto__ = employee


// Classes in JS:--
// Class is program-code template for creating Objects

// Those object will have some state (variable)& some behaviour(function) inside it.

class ToyotaCar {
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
     setBrand(brand){
        this.brnadName =brand;
     }
}

let fortuner = new ToyotaCar();
fortuner.setBrand = ("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand =("lexus");
let maruti = new ToyotaCar();
maruti.setBrand =("maruti");



// Inheritance in Js
// Inheritance is passing down properties & method from parent class to child class

//  class Parent{
// }

// class child extends parent {
// }

// note:- if child & parent have same method child method will be used.[method overloading]



class Person {
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Enginner extends Person{
    work(){
        console.log("solve gand fhad problem")
    }
}

let DeepanshuObj = new Enginner();



// You are creating a website for your college.create a class User with 2 Properties ,name & eamil 
//  it also has a method called viewData() that allows user to view website data

let DATA = "secret information";

class user{
    constructor(name,email){
        this.name = name;
        this.eamil = email;

    }

    viewData(){
        console.log("data =" ,DATA);
    }
}

let student1 = new user ("rahul","rahul@email.com");
let student2  = new user("deepanshu","deepanshu@email.com");
