// aur ye waha kaam ata hai jaha per hum apne website mein cart wagera use kerte hai

// Array.reduce() :-

const meraNUmber = [1,2,3,4,5,6,7,8,9]

const sum = meraNUmber.reduce( function (acc,curr) {
    console.log(`acc:${acc} and current_value ${curr}`);
    return acc+curr
},0)

console.log(sum);


const cartSaman = [1,2,3]

const addSaman = cartSaman.reduce((acc,curr) => acc+curr,0)  // by the help of arow function
console.log(addSaman);