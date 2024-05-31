
       // ✅ Slect for indivisual purpose ke liye jai se class , id aur aur bhhi jo hote hai unko aise kerte hai ye bhi thoda-thoda thik sa hai 😶

document.getElementById().getAttribute() // aur iska mtlb hota hai hum kisi bhi type ke attribute ko change ker sekte hai jaise ,title,class,id etc

document.setAttribute() // ye hota hai k attribute ko set krta hai 

document.getElementById().setAttribute()

document.getElementById().classList.add() // aur generally ye hota hai ki hum kabhi - kabhi kuch elemnt ko baad mein add kerte hai to usko hum isis selecter ke through kerte hai 

document.getElementById().classList.remove() // class ke element ko hum remove kaar sekte hai jo idd ke andar dye hai 

document.getElementById().className()
document.getElementsByClassName() // iseese hum classs ke element ko select kaar sekte hai 


 var styling = document.getElementById("#box1")  //let suppose ki ye mere ek id hai jisko maine select kiya hai aab humko isme kuch styling aad krna hai jitne type ke styling possibilites hote hai css mein 

 styling.style.color = "red" // hum aise kerte hai aur shirf color hi nhi kuch bhi kr sekte hai any type ke ho padding,border,color,align-items,justify-content,grid,etc any type ke ho 


             //!❤️ Difference btween text and content aur ye bahut important hota hai ✅

  styling.innerText = " " // iska mtlb hota hai ki jo bhi text hume show kaar rhaha hai shirf wahi text ko deta hai

 styling.textContent = " "// iska mtlb hota hai element ke andar ke jo content haa unko bhi print karwa dega , lekin maje ki baat ye hai ki wo displaye-none ho ya nhi usese koi fark nhi padega wo kisi bhi case me print karega hai

 styling.innerHTML = " " // iska mtlb hota hai yedi ek html ke andar ke jo kuch bhi hai wo bi de sakta hai (aur ye tags ko bhi support krta hai ,butu 😶 textContent and innerText ye dono tags ko support nhi krte hai )


       //   ? ✅ But abhi jo hum use kernge wo ek tarah ka universal selector hote hai iska mtlb ye hota hai iske andar hum paranthesis =>(" ") lga ker kisi bhi type ke element ko use kaar sekte hai aur generally yehi use hota hai

document.querySelector("") // SYNTAX:- ye hota hai aise , aur ye real world mein use hota hai aur isme hum jisko chahe usko ker sekte hai but uski value ko dena padega aur ye shif ek hi value ko de skata hai

                  // QuerySelecter ka bada bhai jo ki ek hi sath saab elemnt ko select kr sakta hai ❤️ 




     document.querySelectorAll("") // SYNTAX:- isme hum ek hi baar saab elemnt ko select kr sekte hai


     Array.from() // aise convert hote hai

     const ashu = [11,13,14,15,16,17]
     const ashu_array = Object.from(ashu); // ye hota hai aur ye array mein hum 12,13,14,15 ko store karte hai

    //  console.log(ashu_array);