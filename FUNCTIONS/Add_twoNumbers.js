function addthreeNumbers(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

addthreeNumbers("2", 4, 5); // jo kuch bhi hum paranthesis ke andar dete hai usko hum arguments bolte hai

function practiseName(string1, string2, string3) {
  console.log(string1 + string2 + string3);
}
practiseName("awash", "shivanshi", "💕");

// 2nd Method of using function

function addtwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2; // aise bhi kara sekte hai hum

  // aur yedi hum return de diye phir iske baad hum kuch bhi print nhi kara sekte hai
}
const result = addtwoNumbers("23", 45);

console.log("result :", result);
