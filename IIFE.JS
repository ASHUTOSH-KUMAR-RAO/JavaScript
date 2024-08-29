// ! ==> Immediately Invoked Function Expressions (IIFE)

// ? Global scope ke pollution se problems hoti hai bahut baar to usese bachne ke liye ya usko htane ke liye hum IIFE ka use kerte hai 


(function ashu (){
    console.log("Ashu")
})();  // TODO => yeha extra parenthesis ke wajah se hi ye statment print ho raha hai aur isko hi bolte hai IIFE jo ki jaldi krta hai 
//  ashu ()

( (name) =>{
    console.log(`aur kya haal chal hai apke ${name}`);
} )(`aur kya haal chal hai apke`)
// ashutosh ()

// aur yedi hum firts code ko end nhi karete hai to humko error deta hai isiliye humne 1st code mein semit colo ; lgaya hai




// ************** HOW TO EXECUTE JAVASCRIPT CONTETX *********


// ! {} ==> Global Execution Context
// ! ==> 2nd hota hai Function Execution Context

//  TODO ==> aur ye 2 creation phase per kaam kerta hai 


// ? 1st hai Memory Creation phase (iska mtlb hota hum jitna kuch bhi define karat hai wo saab bass store hota hai memory allocation ke andar,jaise variabels,addition aur bhi jitna kuch hum declare karate hai )



// ?2nd hota hai Execution phase hota hai 