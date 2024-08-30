//!  Realted To Object :-

// console.log(Math.PI)

// const Ashu = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Ashu);

const friends = {
  //? Aise Object bnate hai hum
  friends1: "Kamla Pasand 😀",
  quality : "Topper",
  loyalty : true
};

// console.log(Object.getOwnPropertyDescriptor(friends,"loyalty")); //todo aur isko hum overwrite bhi kaar sekte hai 

Object.defineProperty(friends,"loyalty",{
  writable:false,
  enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(friends, "loyalty"));

