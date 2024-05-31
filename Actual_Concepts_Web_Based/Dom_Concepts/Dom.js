//  document.querySelector() :- iska mylb hota hai hm kuch html se select kiye jisko hum apne according features denge
 
 var select = document.querySelector("h1")

   console.log(select);


   var select2 = document.querySelector("h1")

   // Changing in HTML :- iska mtlb hota hai ki jo likha hai uske andar kuch aur likhna hai mean change krna hai taab ye property dete hai


   // Synatx :-.innerHTML

   select2.innerHTML= "Weapon of Frontend is Java.Script"

   var b = document.querySelector("h1")
 // Change in CSS :- aab jaise hum just uper httml mein change kuya thik waise hi css mein bhi krte hai 

//  SYNTAX :-.style.
// aur hum isko hamesa camelCase mein likhte hai
// Aur ye ek string ke jaise behave krta hai isiliye kuch bhi denge css ke andar to string mein hi denge

   b.style.color = "blue"
   b.style.fontSize = "50px"
   b.style.backgroundColor = "black"



//    Event Listener :- jo kuch bhi hum perform krte hai jisko hum Event bolte hai aur jo ye saab kaam karwata hai usko bolte hai hum listner,for Ex:-click.pin.edit,etc


select.addEventListener("click",function(){
    // Aur Hum Jo kuch bhi likhte hai wo saab function ke anadr hi likhte hai
    
    select.innerHTML = "ruko maat,jaw jaldi"
    select.style.color = "yellow"
    select.style.backgroundColor = "crimson"
})
