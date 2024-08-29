const Form = document.querySelector('form')
// yedi hum isko yeha per write krte to empty value deta 
//  const height = parseInt(document.querySelector("#Height").value);
Form.addEventListener('submit', function (ashu) {
    ashu.preventDefault();

    const height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const Results = document.querySelector("#result");

    if (height==='' || height<0 || isNaN(height)) {
        Results.innerHTML = `please give a vald height ${height}`;
    }

    else if (weight === "" || weight < 0 || isNaN(weight)) {
      Results.innerHTML = `please give a vald weight ${weight}`;
    }

    else {
      const calculateBmi = (weight / ((height * height) / 10000)).toFixed(2); // tofixed(2) => iska usecase hai ki decimal ke 2 value ke baad fix kr dega.

      //  Show the reault by using formula

      Results.innerHTML = `<span>${calculateBmi}</span>`;
    }

})