let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#Submit");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const Result = document.querySelector(".lastResult");
const lowerAurHigh = document.querySelector(".lowerAndHigh");
const startOver = document.querySelector(".resultParas");

const paragraph = document.createElement('p')

let prevGuess = []

let numGuess = 1;

let playGame = true;

if (playGame) {
submit.addEventListener('click',function(e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
    
});   
}

function validateGuess(guess) {

if (isNaN(guess)) {
    alert("Please enter a number");
} else if (guess < 1){
    alert("please Enter a Number should be greater than 0");
} else if (guess > 100){
    alert("please Enter a Number should be less than 100");
} else {
    prevGuess.push(guess);
    if (numGuess === 1) {
          displayGuess(guess)
          displayMessage(`Game over .random numbmer was ${random}`)
          endGame();
    } else{
        displayGuess(guess)
        checkGuess(guess);
    }
}
    
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage("apne right number guess kaar liya hai ")
        endGame();
    } else if (guess < random){
        displayMessage("Sorry,because your number is very loo")
    }
    else {
        displayMessage("Sorry, because your number is very hi")
    }
}
function displayGuess(guess) {
userInput.value = '';
guessesSlot.innerHTML += `${guess} `
numGuess++;
Remaining.innerHTML - `${11 - numGuess}`;
    
}
function displayMessage(message) {
    lowerAurHigh.innerHTML = `<h2> ${message} </h2>`
}

function endGame(params) {
    userInput.value = ''
    userInput.setAttribute('disabeld','')
    paragraph.classList.add('button')
    paragraph.innerHTML = `<h2 id ="newGame"> start a new game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();

}

function startGame(params) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess= 1;
    guessesSlot.innerHTML = '';
    Remaining.innerHTML - `${11 - numGuess}`
    userInput.removeAttribute('disabeld')
    startOver.removeChild(p);
    playGame = true
    
}


