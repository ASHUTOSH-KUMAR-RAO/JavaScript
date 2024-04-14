"user strict"; // "user strict" ==> ye new version mein automatically code ko converter kar deta hain

// alert("ashutosh"+ "awash");  ye isliye nhi pop-up show kaar raha hai  syntax sahi phir bhi kyuki hum node js use kaar rehe hai  but ye browser mein pop-up show karega

let awashage = 18;

let Username = "awash kumar";

let loggingid = false;

let ashu = null;

let anjali;

console.log(awashage);

console.log(Username);

console.log(loggingid);

console.log(ashu);

console.log(typeof loggingid);

console.log(typeof ashu);

console.log(anjali);

console.table(typeof anjali);

// aise hum kisi type ke data type ko check kara sekte hai aur ye mujhe bahut pasand hai

// console.table([Username,loggingid,ashu,awashage]);   ==> ye second method hai jisko ek hi sath hum print kara sekte hai

// aur sabse badi baat code hamesa read bel hona chaiye

//   DIFFRENT TYPES OF DATATYPE ===> 👍👍 ( primitive datatype ==> "aur ye call by value" hota hai mtlb ki inki original value nhi diya jata hai kahi bhi hum denge to inki original value ko cpoy karke hi dete hai aur ye by default bhi copy value hi store krta hai

//  number type ==> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 lekin number ki bhi ek range hoti hai jiski value hai 2^52 aur in case isese jyada jata hai value to hum "bigint" use kerte hai

// string type ==> " string "

// boolean type ==> sahi aur galat ko btata hai means "true or false"

//  undefined type ==> jisko hum define nhi kerte hai value

// null type ==> mtlb ki empty ho

// symbol type ==> website  per kis bhi value ko uniqe bnane ke liye hum jo bhi use kerte wo saab isi se hota hai

//   NON PRIMITIVE DATATYPE 🙏 ==> isko hum "call by reference"  kyuki iski refrence hum direct le sekte hai

// Arrays type , object type ,  Function type only bass yehi hote hai

const superHeroes = ["ashutosh", "awash", "abhisek"]; // Arrays type

let myObj = {
  student: "Ashutosh",
  kitnSallkahu: 21,
};

console.log(typeof superHeroes);
