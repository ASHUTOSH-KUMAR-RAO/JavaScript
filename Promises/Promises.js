                                // ! How to make a promises :- 1st Method

const promisesOne = new Promise(function (resolve, reject) {
  // resolve ka connection hota hai "".then" ke sath directly

  // Do async task
  // dataBase calls , cryptoGraphy, netwrk

  setTimeout(function (params) {
    console.log(
      "Hi ashu kaise ho , aur kaisa laag raha hai promisese padh ker chai e sath"
    );
    resolve(); // yedi hum ye kaam nhi kare to bottom wala function chalega hi nhi kyuki .then ka direct connection hota hai isiliye.
  }, 1000);
});

promisesOne.then(function () {
  console.log("Promise Consumed");
}); // iska connection hota hai directly "resolve" ke sath , aur isko hum consumption bhi bolte hai

// ? 2nd METHOD =>
// ye hum iski ke sath ek promise define krte hai, aur isko hum directly consumption bhi karte hai
new Promise(function (resolve, reject) {
  setTimeout(function (params) {
    console.log("2nd Method to define promisese");
    resolve();
  }, 1000);
}).then(function (params) {
  console.log("2nd Promises is also Consumed");
});

//  3rd Promises bana Rehe Hai HUm Yeha Per  :- aur yeha per hum sikh ki koi data kahi se aa raha hai to hum usko kaise pass karenge through the promises.

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function (params) {
    resolve({ username: "Ashutoh Kumar Rao", Email: "icoashutosh@gmail.com" }); // aur hum jitna bhi data pass krte hai iske andar wo data maximu case mein "object" ke form mein hi pass hota hai.
  }, 1000);
});

promiseThree.then(function (Data) {
  console.log(Data);
});

                                            // TODO 4th Promises :-
//  Aur yeha per hum iski ke sath ek promise define krte hai, aur isko hum directly consumption bhi karte hai

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function (params) {
    let error = true;

    if (!error) {
      resolve({ username: "Awash Kumar", password: "awash@123" });
    } else {
      reject("Error: SOmething Goes Wrong"); // Basically rejection error dene ka kaam krta hai.
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // isko bolte hum Chaining Process
    console.log(username);
  })
  .catch(function (Error) {
    console.log(Error);
  })
  .finally(() => {
    console.log("Promise Execution Finished"); // isko bolte hum finally block
  });

                                                        //! 5th PROMISES :-{2nd Methods}

const promiseFifth = new Promise(function (resolve,reject) {
    setTimeout(function (params) {
        let error = false;

        if (!error) {
          resolve({ username: "Awash Kumar", password: "awash@123" });
        } else {
          reject("Error: SOmething Goes Wrong"); // Basically rejection error dene ka kaam krta hai.
        }
    },1000)
})
async  function consumePromiseFifth () { 
    try {
        const awashKumar = promiseFifth;
        console.log(awashKumar);

    } catch (error) {
        console.log(error)
    }
}

consumePromiseFifth();
