/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    console.log("start:", str);
  
    const shift13 = (oldChar) => {
      let newChar = "";
      if (oldChar.charCodeAt(0) - 13 < 65) {
        newChar = String.fromCharCode(oldChar.charCodeAt(0) - 13 + 90 - 64);
      }
      else {
        newChar = String.fromCharCode(oldChar.charCodeAt(0) - 13);
      }
      return newChar;
    };
  
    let arr = str
    .toUpperCase()
    .split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(/[A-Z]/)){
        arr[i] = shift13(arr[i]);
      }
    }
    arr = arr.join("");
  
    console.log("result:", arr);
    return arr;
  }
  
  rot13("SERR PBQR PNZC");

