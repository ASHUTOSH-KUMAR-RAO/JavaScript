// ! True Or False:-

const userEmail = "icoashutosh@gmail.com"
const Checkemail = []

if (userEmail) {

    console.log("Yes This is My Gmail.ID");
    
}

else
{
         console.log("This Is Not My Mail");
 }

// Falsy Value:- false,0,-0,BigInt 0n,"",null,undefined,NaN etc

// Truthy Value:- "0",'false'," ",{},[],function(){}==>Empty Function

if (Checkemail.length ===0) {

    console.log("THis is A Array & it is a empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) { // way of checking Object by conditionals
    console.log("Object khali hai");
    
}

//  Nullish coalesceing operaoter (??) :- only depend on this=> null and undefined

let val1;
val1 = 5??10

console.log(val1);

let val2;

val2 =  null ?? 100

console.log(val2);

//  Terniary Operator :-

const age = 20;
const isEligible = age <= 18 ? true : false;

console.log(isEligible);