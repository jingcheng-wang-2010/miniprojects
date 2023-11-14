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
      // if number of open brackets and closed brackets are the same
      if (bracketOpen.length === bracketClose.length) {
        for (let i = 0; i < bracketOpen.length; i++) {
          if (bracketOpen[i] > bracketClose[i]) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    console.log("checkBrackets:", checkBrackets(str));
    
    function checkInvalidChar(str) {
      let regex = /[^0-9\-\s\(\)]/;
      console.log("checkInvalidChar:", regex.test(str));
    }
    
    if(checkInvalidChar(str)) { return false; };
  
    if (!checkBrackets(str)) { return false; }
  
    return true;
  }
  
telephoneCheck("555-555-5555");