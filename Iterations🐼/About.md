# For of Loop :-

- Note :- for of loop mein by default value print hota 

- Aur ye object ko iterate nhi kar sakta hai .

```javaScript
 ye example ke liye hai:-

for(const "variable name" of "jiske andar value store hai saab"){
  console.log(variable name);
}

Actual Synatx :-

for(const element of object){

}
```

# Map :-

```javaScript

- Syntax :-

-Note:- Map hamesa (uniqe value hi leta hai) mtlb ki hum ek hi value ek se jyada time store karae phir bhi ek hi baar lega wo .

- ye order ko bhi maintaine krta hai hamesa

const map = new Map ()

map.set ("India",91)
map.set ("USA",321) 

// console.log(map)

for(const [Ashutosh,value] of map){ // yeha per [Ashutosh,Value] isiliye diye hai kyuki humko iss method mein value aur key dono print karwana hota hai, aur isko hum aise square bracket ke andar likhte hai.

  console.log(Ashutosh,":-" , value)
}
```


# for in Loop :-

```javaScript
// ! How to Iterrate on object:- (By The Help Of of for in loop)

- Note :- for in loop mein by default key print hota hai (1,2,3) ,but humko uski value ok manually print krwana padta hai 

const Friends = {
  friends1 :  "Awash",
  friends2 : "Abhishek",
  friends3 : "Battery",
  friends4 : "Jyoti"
}

for (const key in Friends) {
  console.log(`${key} is name of ${Friends[key]}`)
}
```

# for each Loop :-

```javaScript
const codingLanguage = [
  "python",
  "java",
  "c++",
  "javaScript",
  "Django-Framwork",
]

varName.forEach((elem)=>{
console.log(elem)
})

            OR
            
.forEach((item,index,arr)=>{
  console.log(item,index,arr)
})
```