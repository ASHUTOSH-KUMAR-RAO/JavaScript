# About Events :-
```javascript

Note:- js mein jitna bhi events run hota hai wo saab sequence wise hi hota hai ,kabhi-kabhi ho jata unsquently mein.

Note :- js mein hum kabhi bhi html ke andar hamein kabhi bhi (onclick = "") => aise nhi lgana chaiye kyuki ye scalable nhi hota hai aur ye sahi tarika bhi nhi hota hai ,hm error nhi dega but sahi approach nhi hota hai.

document.getElementById('Lion').onmousemove= function () {
             alert("This is a king of Jungle") 
}
    // hum aise bhi events laga sekte hai but ye right approach nhi hota hai aur jaab kabhi bhi hum bada project likhenge to bahut badd-badi problems phase karna pad sakta hai .
          

Note:- isiliye hamesa hamein (.addEventListner) => use karna chaiye aur ye thoda propogation bhi hota hai, aur sabse badi baat ye kisi bhi type ke events per kaam kaar sekta hai {draganddrop,click,mousemove,mouseenter etc}

 document.getElementById('Monkey').addEventListener('click',function(){
                alert("This is a king of tree")
            }) 
// ye hota hai events ka right useCase jo sabhi type ke events per kaam karta hai aru kabhi problems nhi krta hai.

Note :- Aur mostly humko 2 types ke events hi milte hai {Browser type, Enviornment type}

Important :- type,timestamp,defaultPrevent,target,toElement,srcElement ,clientX,clienty,altKey,ctrlKey,shiftKey,keyCode etc => ye important interview max of the time pucha jata hai padhna hai MDN se .
```
## Event Propogation :-

Notes :- Basicaly iske 2 types ke context hote hai. 
        1. Capturing Phase :- is case mein element ko "top to bottom" read krta hai aur print bhi krta hai
        2. Bubbling Phase :- is case mein element ko "bottom to top" read krta hai aur print bhi krta hai, abhi ke time mein market mein yehi jyada use hota hai
