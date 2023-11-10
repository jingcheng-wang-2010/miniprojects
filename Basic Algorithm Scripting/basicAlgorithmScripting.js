// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertCtoF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
  
convertCtoF(30);

// Reverse a String
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length-1; i > -1; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
  
reverseString("hello"); 

function reverseString2(str) {
    return str
    .split("")
    .reverse()
    .join("");
}

// Factorialize a Number
function factorialize(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
  }
  
  factorialize(5);