const ashuAge = 45

if (ashuAge>=45) {
    console.log("Ashutosh is a olde man");
}

else {
    console.log("Ashutosh is a young man");
}

console.log("hi ashu 💕"); // ?  ye isiliye execute ho raha hai kyuki ye scope se bahar hai isiliye

const marksMaths = 98

if(marksMaths == 98){
//  var ashu = "Ashutosh Kumar rao" // TODO :iss case mein code isiliye execute hoga kyuki var keywords scope per depends nhi hote hai

let ashu = "Ashutosh Kumar rao" // ! : iss case mein error ayega aur isiliye ayega kyuki jo let aur conts key words hote hai ye scope per depend hote hai jisi ki humko pta chalta hai ki roght way kya hai code execute karane ka==> isiliye saab log hamesa suggest kerte hai ki let aur const hi use kiya karo
    console.log(`topper of class is :- ${ashu}`);
}
// console.log(`topper of class is:- ${ashu}`);

// ************* Short Hand Notation ************


// 2nd way to execute but ye sahi nhi hai  likhen way :- 

const balance = 50000

// if(balance == 50000) console.log("pass"),console.log("test2");


// ************* NESTED IF-ELSE ************ ☕

if (balance <30000) {
    console.log("bhai yaar kaam paisa hai ");
}
 else if (balance <45000) {

    console.log("Bhai yrr abhi 500 kaam  paad raha hai ");
}
 else if (balance == 50000){
    console.log("bhai aab ho gye pasie mere pass");
}
else{
    console.log("beta de diye hai paisa ");
}


// ! : How to Use if-else in Projects real 

const userLoggedIn = true
const debitCard = true
const creditcard = true

const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard && creditcard) {
    console.log("Alow to buy anything");
    
}

if (loggedInFromGoogle || loggedInFromEmail) { // testing for multipel statement
    console.log(`Verifed`);
}
