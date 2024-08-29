const basicsArrays = [1,2,4,5,6,7] // declare aise kerte hai 
  // aur hum kabhi bhi arrays mein 0 se indexing kerte hai

 const favPlayer = ["ROHIT SHARMA" , "MS.DHONI" , "VIRAT" , "ARYAN BHAIYA"]

 console.log(basicsArrays[1]); //aise print hota hai

console.log(favPlayer[2]); 

//! aur ye resizable hote hai iska mtlb hota hai ki hum arrays ke andar ke andar ki value ko change bhi kaar sekte hai "aur hum iske andar kisi bhi type ke element ko le sekte hai "

// * +++++++ METHODS OF ARRAYS ++++++++++

basicsArrays.push(7) // iska mtlb hota jo kuch bhi hum push ke andar ke likhte hai usko arrays ke andar hi add kar deta hai 

favPlayer.push(5);

basicsArrays.pop();

favPlayer.pop() ;   // pop method use kar ke index se element remove kr skte ho



console.log(favPlayer);

console.log(basicsArrays);
 console.log(basicsArrays.includes(6)); // element exists kaar raha hai iss arrays mein ya nhi ye btata hai

console.log(basicsArrays.indexOf(2)); // positon of elemnt btata 

const newArr = basicsArrays.join(); // ye arrays ko string mein convert karta hai 

console.log(newArr);
console.log(typeof newArr ); 

// slice,splice

 console.log("AR",basicsArrays);
const chutiyaArrni = basicsArrays.slice(1,4)

console.log(chutiyaArrni);
console.log("AB",basicsArrays);

const chutiyaArrni2 = basicsArrays.splice(1,4)

console.log(chutiyaArrni2);
 

//  +++++++++++++ REVISION +++++++++++++++++++++++


const ageName =   (1,2,3,4)

const myDate = new Date ("2023-06-13");

console.log(myDate.toLocaleString());

console.log(Math.floor(ageName));
console.log(Math.ceil(ageName));

console.log(Math.round(ageName));

console.log(Math.abs(-4));

console.log(Math.max(1,2,3,5,6,7,8));

console.log(Math.min(1,2,3,4,5,6,7));

// console.log(ageName.includes(4));  

const myName = "ASHUTOSH KUMAR RAO"
console.log(myName.includes("singh"));
console.log(myName.replace("RAO","RAJPUT"));

// console.log(Math.includes(ageName)(1));
