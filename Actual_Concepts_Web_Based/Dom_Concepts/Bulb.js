var a = document.querySelector("#bulb")
var b = document.querySelector("button")
var H1 = document.querySelectorAll("#htttt")




// console.log(H1);

H1.forEach(function (e) {
    console.log(e);
})

var flag = 0;

b.addEventListener("click",function (){

    if (flag == 0) {
        
        a.style.backgroundColor = "yellow"
        
        console.log("cliocked");
    
    flag == 1
    }
    else {
        a.style.backgroundColor = "transparent"
        
        console.log("Again cliocked");
        flag == 0;
    }
})

//  agar ek hi type ek element hai aur all select krna hai to uske queerySelecterAll krna hota hai document ke aage 💕

// var Cls = document.getElementsByClassName();

// var Id = document.getElementById(); :- issese ye hota hai ki hum direct class ko utha sekte hai html se 