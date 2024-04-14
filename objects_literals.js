// singelton ==> ye hamesa "constructor" se hi banta hai
// Object.create ==> constructor
// aur jaab bhi "literals" se banega to singelton nhi banega

//  object 1st type = literals

const asHutosh = {
  Name: "Ashutosh",
  age: 21,
  country: "India",
  emai: "icoashutoshrao@gmail.com", // aur jaab symbol pta raha ho to square brackate lgate hai
}; // literals ke through declare karate hai aise

console.log(asHutosh.email);

console.log(asHutosh["email"]);

console.log(asHutosh["country"]);

console.log(asHutosh["Name"]);

asHutosh.greeting = function () {
  // function ko hum aise hi define kerte hai
  console.log("HELLOW FUNCTION BHAIYA KYA HALL HAI APKA ");
};
console.log(asHutosh.greeting());
