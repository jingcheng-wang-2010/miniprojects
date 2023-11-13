/* Roman Numeral Converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    if (num > 3999) { return "too big for roman numeral"; }
    const numStr = num.toString();
    let thousands = "";
    let hundreds = "";
    let tens = "";
    let ones = "";
  
    if (num > 999) {
      // how many M for the thousands place
      for (let i = 1; i <= Number(numStr[0]); i++) {
        thousands += "M";
      }
    }
    if (num > 99) {
      // Roman numeral for hundreds digit
      const digit100 = Number(numStr[numStr.length-3]);
      hundreds = formRoman(digit100, "C", "D", "M");
    } 
    if (num > 9) {
      // Roman numeral for tens digit
      const digit10 = Number(numStr[numStr.length-2]);
      tens = formRoman(digit10, "X", "L", "C");
    }
    if (num > 0) {
      // Roman numeral for ones digit
      const digit1 = Number(numStr[numStr.length-1]);
      ones = formRoman(digit1, "I", "V", "X");
    }
    function formRoman(digit, one, five, ten) {
      let tempStr = "";
      switch (digit) {
        case 0:
        case 1:
        case 2:
        case 3:
          for (let i = 1; i <= digit; i++){
            tempStr += one;
          }
          break;
        case 4:
          tempStr += one + five;
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          tempStr += five;
          for (let i = 6; i <= digit; i++){
            tempStr += one;
          }
          break;
        case 9:
          tempStr += one + ten;
          break;
      }
      return tempStr;
    }
  
    const whole = thousands + hundreds + tens + ones;
    return whole;
  }
  
  convertToRoman(36);