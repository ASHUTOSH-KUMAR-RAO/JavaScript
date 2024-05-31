//  TODO: For Loop:-

for (let i = 0; i <= 10; i++) {
    const element =i;

    if (element == 5) {
        console.log("Hi ashutosh kaise ho aap");
    }
    console.log(element);
    
}

for (let j = 1; j <= 10; j++) {


    for (let k = 1; k <10; k++) {
        // const element2 = k;

        // console.log(`aur ye inner loop hai ${k}`);
        console.table(j+'*'+ k + '='+ j*k);
    }
    // const element = j;
    
    console.table(`ye outer loop hai ${j}`);
}

let myWeapon = ["Awash","abhisek","nikhil","sabhyam"]
  console.log(myWeapon.length);

for (let index = 0; index < myWeapon.length; index++) {
  const element = myWeapon[index];


  console.table(element);
}

//! Sum Basics Keywords :- 
// 1:- Break 
// 2:-continue
         // Uses Of Break :
for (let index = 1; index < 10; index++) {

    if (index == 5) {
        console.log(`5 ko Maine dekh liye hai aab to tum isese aage nhi badh sekte ho`);
        break; // lekin break wahi se code ko terminate kaar deta hai
    }
   console.log(`value i is ${index}`);
    
}
              // Usese Of Continue:-
for (let index = 1; index < 10; index++) {

    if (index == 5) {
        console.log(`5 ko Maine dekh liye hai aab to tum isese aage nhi badh sekte ho`);
        continue; // ye ek baar chala deta hai 
    }
   console.log(`value i is ${index}`);
    
}