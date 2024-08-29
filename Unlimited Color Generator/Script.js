// generate random color by the help of  random hex-value

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++) {
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}; 
let interval;
const startChangingColor = function() {
    
    interval = setInterval(bgColorChange,2000);
    function bgColorChange() {
        document.body.style.backgroundColor = randomColor();
        
    }
};

const stopChangingColor = function() {
    clearInterval(interval);
    
}

document.querySelector("#MOVE").addEventListener('click',startChangingColor)
document.querySelector("#STOP").addEventListener('click',stopChangingColor)