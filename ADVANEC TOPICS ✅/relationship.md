# PARENT AUR CHILDREN KE BICH KA RELATIONSHIP:-

console.log(parent.children); ==> aise hum kisi parent ke andar ke children ko pta kerte hai aur hum isko ek property bhi dete hai jisko bolte hai children ✅

console.log(parent);
console.log(parent.children);
console.log(parent.children[2].innerHTML);

##                     ⬇️

### 2nd way se bhi kaar sekte hai jo ki easy hai aur clear bhi rehta hai code likhne mein

#                   ⬇️

for (let i = 0; i < parent.children.length; i++) {
console.log (parent.children[i].innerHTML);

}
## for styling

##          ⬇️
parent.children[2].style.color = "red"; ==> aise hum styling bhi kar sekte hai easly.

 ## Nodes se Related Concepts:-

    Syntax:-😑(parent.childNodes)generally dekha jaye to nodelist ek bahut achi property hai jo saab elements ko node form mein print karwata hai ,but ek condition ye hota hai ki yedi hum ek line likhne ke baad kitna bhi enter kare usko node 1st hi lega kyuki browser mein enter shirf ek hi baar rander hota hai

 ## tips :- Hamesa humko yehi use krna  hai append child ka kyuki ye bahut benifts bhi hota hai aur bada code easly optimise kaar deta hai 😎
 #                    ⬇️
var addOptiLanguage = (langName) =>{
const li = document.createElement(`li`)
li.appendChild(document.createTextNode(langName) )
document.querySelector('.Language').appendChild(li)
}

[click here](https://www.google.com) ==> aur iss sign ke andar hu aise kuch bhi likhenge to to wo as link add ho jata jata hai jiska syntax hai =>" []()"

## ye bhi maine example ke liye:-

```javaScript
aur iss sign ke andar hum jo kuch bhi likhte hai wo ek tarah diffrent fomate hota hai jaise hum code likhete hai "``` iske andar hum kuch bhi likhte hai to wo as a code code formating type mein likhta hai tq hitesh bhaiya ```"
for Ex:- console.log("Ashutosh Markdown File")

```
 # c++ code example ke liye maine
```c++

#include<iostream>
using namespace std;
int main (){
  cout << "my self ashutosh kumar rao" << endl;
  return 0; 
}
```
