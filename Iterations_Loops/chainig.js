const myNumber = [1,2,3,4,5,6,7,8,9,0]
 // by  The Mapping :-
 const newNumber = myNumber.map((num)=>{
 return num+10
 
})
console.log(newNumber);


// Chaining :-

const newNumber2 = myNumber
                   .map((num) => num * 10)
                   .map((num)=>num + 1)
                   .filter((num) =>num>=40) // aur jaab bhi hum filter lgate hai hum usme condition lgana must hota hai
    console.log(newNumber2);