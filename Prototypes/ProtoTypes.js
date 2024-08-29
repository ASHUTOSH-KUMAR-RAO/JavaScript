let myName = "Kritika";

// console.log(myName.length);

let myFriends = ["Sabhyam", "Awash", "Abhishek", "Jyoti", "Battery"];

let myFrieendsPower = {
  Sabhyam: "Docoter",
  Awash: "SDE2",
  Abhishek: "JavaDeveloper",
  Jyoti: "OverThinker",
  Battery: "Acting OR Dramabaaz",

  getAwashPower: function () {
    console.log(`the power of Awash is ${this.Awash}`);
  },
};

Object.prototype.Ashu = function () {
  console.log(`kritika is here and its present in all Objects`);
};


Array.prototype.Ashutosh = function(){
  console.log("Hy Ashutosh is Here")
}

// myFrieendsPower.Kritika();
myFriends.Ashu()
myFriends.Ashutosh()
