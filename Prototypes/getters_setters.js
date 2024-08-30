class User {
  constructor(email,password){

    this.email = email
    this.password = password

  }
  get password (){
    return `password is ${this._password}KumarRao`
  }

  set password (value){
    this._password = value.toUpperCase()
  }
}

const Ashutosh = new User("icoashutosh@gmail.com","ashu")


console.log(Ashutosh.password)