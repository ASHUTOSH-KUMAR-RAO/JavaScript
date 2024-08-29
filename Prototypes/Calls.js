function setUsername(username) {
  this.username = username;
  console.log("called to ho raha hai ");
}

function createUsername(username, password, emails) {
  setUsername.call(this, username);
  // this.username = username
  this.password = password;
  this.emails = emails;
}

const chai = new createUsername(
  "Ashutosh Kumar Rao",
  12345,
  "icoashutosh@gmail.com"
);

console.log(chai);
