/* Telephone Number Validator
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    console.log("Input:", str);
    let countryCode = "";
    let areaCode = "";
  
    function checkBrackets(str) {
      // check if all brackets are opened and closed properly
      let bracketOpen = [...str.matchAll(/\(/g)];
      let bracketClose = [...str.matchAll(/\)/g)];
      //console.log("CB | bracketOpen:", bracketOpen);
      //console.log("CB | bracketClose:", bracketClose);
      // if no brackets present
      if (bracketOpen.length === 0 && bracketClose.length === 0) {
        return true;
      }
      // only 1 set of brackets is valid
      if (bracketOpen.length === 1 && bracketClose.length === 1) {
        // check if the numbers between brackets are 3 digits
        if (bracketClose[0].index - bracketOpen[0].index !== 4) {
          return false;
        }
        return true;
      }
      return false;
    }
    
    
    function checkInvalidChar(str) {
      // first test for invalid characters
      let regexInvalid = /[^0-9\-\s\(\)]/;
      // second test for first character is valid
      if (regexInvalid.test(str) === false) {
        let regexFirst = /[0-9\(]/;
        return regexFirst.test(str[0]);
      }
      return false;
    }
  
    function checkPhoneNumber(str) {
      let processed = str.slice()
      .split("")
      .filter(digit => digit.match(/[0-9]/))
      .join("");
      console.log("CPN | processed:", processed);
      if (processed.length === 11) {
        console.log("11 digits, must include country code");
        return (processed[0] === "1");
      } else if (processed.length === 10) {
        console.log("10 digits, no country code");
        let splitNums = str.split(/[^0-9]/);
        console.log("CPN | splitNums:", splitNums);
        if (splitNums.length === 1) {
          return true;
        }
        if (splitNums[0] === "") {
          splitNums.shift();
        }
        console.log("CPN | splitNums:", splitNums);
        if (splitNums[0].length !== 3) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
  
    if(!checkInvalidChar(str)) { return false; };
    if (!checkBrackets(str)) { return false; }
    console.log("checkInvalidChar:", checkInvalidChar(str));
    console.log("checkBrackets:", checkBrackets(str));
    console.log("checkPhoneNumber: ", checkPhoneNumber(str));
  
  
    return checkPhoneNumber(str);
  }
  
telephoneCheck("555-555-5555");