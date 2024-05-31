// ! Aur arrays pe Loop Lgana Bahut common hota hai kyuki iska kaam bahut hota hai

//Todo: higher Order arrays & loops aur ye saab arrays specific loop hote hai 

//  For of 

const arr = [1,2,3,4,5,6]

for (const num of arr) {

    console.log(num);
    
}

const card = "hello world !"

for (const greeting of card) {
    console.log(`Each char is ${greeting}`);
    
}

// Maps : aur ye uniqe value ke liye hota hai

const myMap = new Map();

myMap.set("name","Ashutosh");
myMap.set("age",21);
myMap.set("email","icoashutosh@google.in");

// console.log(myMap);

for (const [key,value] of myMap) {
    console.log(key,':-',value);
}

// const meraObject = {
//     'name': "Ashutosh",
//     'age': 21,
//     'email': "icoashutosh@google.in",
// }

// for (const [key,value] of meraObject) {
//     console.log(key,':-',value);
// }  ye print nhi hoga kyuki object ka method dusra hota hai print karane ke



// For in loop :- ye genrally object ko print karata hai aur bhi kaam ko hum kara sekte hai

const meraObject = {
    cpp : "c++",
    py : "python",
    js : "javascript",
    java : "java",
    c : "c",
    csharp : "c#",
    rb : "ruby"
}

for (const key in meraObject) {

    console.log(`${key} Short form of:- ${meraObject[key]}`);
    
}


//  Kye Points :-

// !1. For of loop is used for iterating over iterable objects like arrays, strings, maps, sets etc.

//TODO 2. For in loop is used for iterating over properties of objects.