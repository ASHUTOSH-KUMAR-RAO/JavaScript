class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is: ${this.username}`);
  }

  static createId(){ // ye hum isiliye use krte hai kyuki jisko hum chahenge wahi print hoga 
    return `1,2,3`
  }
}

const Ashu = new User ("Ashutosh Kumar Rao")

Ashu.createId()

console.log(Ashu.createId())
 