function multiplBy5(num) {
  return num * 5;
}

multiplBy5.power = 2;

console.log(multiplBy5(2));
console.log(multiplBy5.prototype);

console.log(multiplBy5.power); // Error: multiplBy5 is not a function

const createUser = (username, score) => {
  this.username = username;
  this.score = score;
};

createUser.prototype.printMe = function () {
  console.log(`The Score is ${this.score}`);
};
createUser.prototype.increment = function () {
  this.score++;
};

const chai = new createUser("LiptonTea", 25);
const tea = createUser("tea", 230);

chai.printMe()
