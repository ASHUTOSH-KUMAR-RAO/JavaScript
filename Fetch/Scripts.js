fetch('https://dummyjson.com/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // ? hamne yeha per ".then" ka use isiliye kiya kyuki ye ek promise de raha tha
    console.log(data, "aab humko actual DATA milega Yeha Se ❤️");
  });
