// const hackeuser =  new object() ==> ye singelton object hai

const hackeuser = {}; // aur ye non singelton object hai

hackeuser.name = "Ashutosh";
// hackeuser.id = "icoashutosh";

hackeuser.islogdIin = false;
// console.log(hackeuser);

const object1 = {
  email: "icoashutosh@google.in",
  name: "Ashutosh",
};

console.log(object1);

const object2 = { 1: "icoashutosh", 2: "Ashutosh" };

const object3 = { 3: "om", 4: "rajput" };

const object5 = { 5: "awash", 6: "abhisekh" };

//   const allobject4 =  Object.assign(object2,object3,object5)   // this will merge the

const object4 = { ...object2, ...object3, ...object5 }; // ye hamesa karna hai latest hai isko spread bolte hai piche notes mein bhi hai

console.log(object4);

console.log(hackeuser);

console.log(Object.keys(hackeuser));

console.log(Object.values(hackeuser));

console.log(Object.entries(hackeuser)); // arrays ke andar arrays deta hai
