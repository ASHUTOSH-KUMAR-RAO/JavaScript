const myArry = ["ashutosh", "awash", "abhisek", "anjli"];

const iplStars = ["Rohit", "Pandya", "Virat", "Dhoni"];

// myArry.push(iplStars);

// console.log(myArry);

//   const allStars = myArry.concat(iplStars) // 2 arrays ko merge use kerte hai

const all_ips_star = [...myArry, ...iplStars]; // spread operators

const bahutSahi = [
  1,
  2,
  3,
  4,
  5,
  [6, 8, 9, 0, [10, 12, 14, (11)[(15, 16, 17)]]],
];

const solution_arrays = bahutSahi.flat(Infinity); //? araays ke andar arrays ko print kara sekte hai isko bolte hai flat arrays

// console.log(allStars);

console.log(all_ips_star);

console.log(solution_arrays);

console.log(Array.from("ASHUTOSH")); //todo arrays mein convert krta hai

console.log(Array.from({ name: "awash" })); //! array ko kisi ke trough karate hai to wo empty ata hai

let abhiScore = 10;

let awashScore = 9;

let ashuScore = 8;

console.log(Array.of(abhiScore, awashScore, ashuScore)); // multipel set of elements ya variabels ko store ko print karata hai
