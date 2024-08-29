# About Fetch :- 

```javascript
Note :- fetch is a exciting feature of node js {and it is also known as a network base resource}

Note :- jaab bhi hum fetch ka use request send krte hai to wo directly "data" nhi deta hai,pehle "response" deta hai 

Note :- Fetch by defaul hamesa "get request" send krta hai.
```
##                                   How Works Fetch API 😶


```javascript

Note :-   This is a simple example of fetching data from an API using Fetch API in JavaScript. The Fetch API is a modern way to make HTTP requests in web applications. It provides a simple and intuitive way to fetch data from a server, and it's supported by most modern browsers. Here's an example of how to use the Fetch API to fetch data from a JSON API:

Note :- 1st fetch data from API and then parse it as JSON.

fetch("https://dummyjson.com/products").then((response)=>{ 
    return response.json()
}).then((data)=>{ // ? hamne yeha per ".then" ka use isiliye kiya kyuki ye ek promise de raha tha
 console.log(data,"aab humko actual DATA milega Yeha Se ❤️")
})
```