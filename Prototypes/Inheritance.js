class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`the username is ${this.username}`);
  }
}

class teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}
