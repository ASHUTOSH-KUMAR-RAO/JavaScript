//! For "of" Loop :-

const friends = ["Awash", "Abhishek", "Battery", "Jyoti"];

for (const Ashu of friends) {
  console.log(Ashu);
}

const myName = "Ashutosh Kumar Rao ❤️";

for (const selfLove of myName) {
  console.log(`Each Word of My Name is ${selfLove}`);
}

//? Maps :-

const map = new Map();

map.set("India", 91);
map.set("USA", 321);

// console.log(map)

for (const [Ashutosh, value] of map) {
  console.log(Ashutosh, ":-", value);
}
