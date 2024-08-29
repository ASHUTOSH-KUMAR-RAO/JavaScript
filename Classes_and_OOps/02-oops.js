// !                     Related to Constructor Function :-

// ?  => Constructor Function is a special type of function that creates objects. It is used to initialize objects with properties and methods. {"aur ye hamein haar baar ek new instance deta hai."}

// TODO Syntax:

// function ConstructorName(parameters) {
  //  this.property1 = parameter1;
  //  this.property2 = parameter2;
  //  this.method1 = function() {
  //  };
  // }

// const PROMISE  = new Promise() // * yeha per jo new keyword hai isko hi hum constructor function bolte hai {aur new kya keyword naya context bnane ke liye hamare kaam ata hai .}
// ! => const DATE = new Date() 



//  ?                  How Works Constructor Functions :- 

// * hum constructor function ke andar hum object bana deta hai, iske properties and methods jo hum define karte hai wo object ke andar hote hai.


function Details (username,Email,Phone) {
    this.username = username
    this.Email = Email
    this.Phone = Phone

    return this  // * aur hum yeha per likhe ya nhi likhe iss koi fark nhi padta hai kyuki ye already defin hota hai implicitly.
}

const allDetails =  new Details("Ashutosh Kumar Rao","icoashutosh@gmail.com",9026868343)
const allDetailsTwo = new Details("Awash Kumar ","kumarawash@gmail.com", 9415252963); //! => yedi yeha per hum new keyword ka use nhi krte to { detailsTwo => allDetails } ki value ki place per apna object print krwa deta isiliye hamne dono place per new keyword introduce kiya hai.

console.log(allDetails)

console.log(allDetailsTwo)


// *                            Importance Of "this"  keywords :-

// TODO => jaise hum this keyword ka use karenge to sabse pehle ek empty object create hota hai,jisko instance bola jata hai.

// * => phir ek constructor function call hota hai new keyword ke wajah se , isese hota ye hai ki jitna bhi aurgument hota ye sabko ek hi sath de deta hai .




