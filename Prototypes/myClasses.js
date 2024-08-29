//!  ye saab jitna bhi padh rehe hai wo saab ES^6 ke baad hi kaar rehe hai 

class user {
  constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
  }

 encryptedPassword(){
  return `${this.password}abc, ${this.username.toUpperCase()}` // yeha se hum modify kaar sekte hai value ko 
 }

}

const data = new user ("Ashutosh","icoashutosh@gmail.com",54321)

console.log(data.encryptedPassword())