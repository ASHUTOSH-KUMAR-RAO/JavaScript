// console.log(Date);

let myDate = new Date();

console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let kyaDate = new Date();

console.log(kyaDate.getDay());

// let iplDate = new Date (2024,0,5,6)

let iplDate = new Date("2024-03-22");
console.log(iplDate.toLocaleString()); // with time  yee bahut baar kaam ayega

console.log(Math.floor(iplDate.now() / 1000)); // isese hota hai hum milli sec se sec mein convert kaar sekte hai

// ? ye basicaly independent format hota hai aur ye january 1st ,19970 se start hua

// ! aur generally date ko hum hamesa "milli sec" mein store karate hai
