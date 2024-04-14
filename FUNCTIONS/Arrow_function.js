const user = {
    userName : "ashutosh kumar rao",
    price :1000,
    
    entryTime: function() {
  console.log(`${this.userName},welcome to website`);
  console.log(this);// ye curent contest ko print karata hai
    }

}

// NOTE ===> 👍 "this" kabhi-bhi globel scope mein print nhi hota ye shirf block scope mein hi print hota hai

// user.entryTime()
// user.userName="awash"
// user.entryTime()

// console.log(this);

        //  +++++++*********Actuall mein arrow function ye hai ++++++
        
    //     const ashutosh =(num1,num2) => {

// ==> ye hai 1st method (implicit return)
    //         return num1 + num2
    //     } // Syntax of arow function 
    //  console.log(ashutosh(4,6));

    //  ye hai second methods (exxplicit return) 

    const awashlove = (num1, num2) => (num1 + num2)

    console.log(awashlove("💕awash","❤️ shivanshi"));
