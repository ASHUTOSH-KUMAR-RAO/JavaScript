 

                /* MEMORY TYPES  ****************  */
 
 //  Generally "2" Types ke hote hai 1st one is "STACK" and 2nd is "HEAP"

//  useses of "Stack" ==> ye PRIMITIVE datatype ke andar use hota hai < aur ye copy value milta hai>

//  useses of "Heap" ==> ye NON - PRIMITIVE datatype ke andar use hota hai < ye original value milta hai >


/* ********STRING DATA TYPES **************** 👀👀 */

console.log(typeof "ANJALI" + " BATTERY"); // but ye sahi method nhi hai

const userName = "BUDDHU-ASHU"; //

console.log(userName.charAt(3)); // isese hum pta hai kerte hai iss number ke jagah per kya word hai 

console.log(userName.indexOf("H")); //TODO aur isese pta chalta hai ki ye kitne position  per hai ye word

const newString = userName.substring(0,5)

console.log(newString); // ! iska mtlb hota hai jitne word hai 5 taak utna o/p de deta hai

const awashBeta = "   cudbaile   "
console.log(awashBeta);

console.log(awashBeta.trim()); //  ? iska mtlb hota hai ye space ko count nhi krta hai 

const url = "http://icoashutoshack.com " 

console.log(url.replace('hack','web.D'));

// iska mtlb hota hai apko kisi word ko replace krna during website bnane ke time to uske liye use kerte hai 

console.log(url.includes('rao')); // iska mtlb hota hai ki hum isese puch rehe hai ki ye word isme hai ya nhi yedi hoga to "TRUE" aur nhi hoga to "FALSE"


console.log('helow my name is  ${name}');