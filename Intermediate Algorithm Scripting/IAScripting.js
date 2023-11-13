/* Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
    let sum = 0;
    let s = arr[0];
    let l = arr[1];
    if (s > l) {
      s = arr[1];
      l = arr[0];
    }
    for (let i = s; i <= l; i++){
      sum += i;
    }
    return sum;
}
  
sumAll([1, 4]);

// Math.min and max
function sumAll1(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
}

// arithmetic approach
const sumAll2 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

// math.min and max within spread for
function sumAll3(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }

// recursive
function sumAll4(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll4([first + 1, last])
      : first;
  }

/* --- */

/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const newArr = arr1.filter((val) => !arr2.includes(val)).concat(arr2.filter((val) => !arr1.includes(val)));
    return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Imperative Solution
function diffArray1(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

// Declarative Solution, concat then filter
function diffArray3(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// Declarative Solution
function diffArray3(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
}

// Declarative Solution, using set
function diffArray4(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
      difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
  }
/* --- */

/* Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/

function destroyer(arr, ...args) {
    let newArr = arr.slice();
    for (let i = 0; i < args.length; i++){
        newArr = newArr.filter((val) => !(val === args[i]));
    }
    return newArr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// procedural, Object.values(arguments).slice(1)
function destroyer1(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

// Array.from(arguments), includes() shorten for
function destroyer2(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
}

// super short
function destroyer3(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

/* --- */

/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection
        .filter(item => sourceKeys
            .every(key => item[key] === source[key]));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// procedural
function whatIsInAName1(collection, source) {
    // What's in a name?
    const collectionMatches = [];
  
    for (let i = 0; i < collection.length; i++) {
      let foundMismatch = false;
  
      for (const sourceProp in source) {
        if (collection[i][sourceProp] !== source[sourceProp]) {
          foundMismatch = true;
        }
      }
      if (!foundMismatch) {
        collectionMatches.push(collection[i]);
      }
    }
    return collectionMatches;
}

// sourcekeys and filter
function whatIsInAName2(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < sourceKeys.length; i++) {
        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
}
/* --- */

/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
     // Replace low-upper case to low-space-uppercase, put space for every lower uppercase change
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

     // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}
  
spinalCase('This Is Spinal Tap');

// different order
function spinalCase1(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
      .toLowerCase()
      .split(/(?:_| )+/)
      .join("-");
  }
  
// shorter
function spinalCase2(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }


/* --- */

  /* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
    let newStr = "";
    let vowelRegex = /[aeiou]/i;
    // Check if the first character is a vowel
    if (str[0].match(vowelRegex)){
        newStr = str+"way";
    } else if (str.match(vowelRegex) === null) {
        // Check if the string contains only consonants
        newStr = str + "ay";
    } else {
        // Find how many consonants before the first vowel
        var vowelIndice = str.indexOf(str.match(vowelRegex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending
        newStr = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
    return newStr;
  }
  
  translatePigLatin("consonant");


// regex consonant
function translatePigLatin1(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

// consonant cluster
  function translatePigLatin2(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }

// shorter
function translatePigLatin3(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }

// shorter
function translatePigLatin4(str, charPos = 0) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
      ? str + (charPos === 0 ? 'way' : 'ay')
      : charPos === str.length
        ? str + 'ay'
        : translatePigLatin(str.slice(1) + str[0], charPos + 1);
  }

/* --- */

/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
    let newAfter = after;
    if (before[0] === before[0].toUpperCase()) {
      newAfter = after[0].toUpperCase()+after.substring(1);
    } else {
      newAfter = after[0].toLowerCase()+after.substring(1);
    }
    return str.replace(before, newAfter);
}
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// regex to check upper case
function myReplace1(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }

// if apply casing for every letter
function myReplace2(str, before, after) {
    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
      // split the source and target strings to array of letters
      var targetArr = target.split("");
      var sourceArr = source.split("");
      // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
      for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
        // find out the casing of every letter from sourceArr using regular expression
        // if sourceArr[i] is upper case then convert targetArr[i] to upper case
        if (/[A-Z]/.test(sourceArr[i])) {
          targetArr[i] = targetArr[i].toUpperCase();
        }
        // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
        else targetArr[i] = targetArr[i].toLowerCase();
      }
      // join modified targetArr to string and return
      return targetArr.join("");
    }
  
    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
  }

// shorter
function myReplace3(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
  }


/* --- */

/* DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    const baseSet = {
      A: ["A", "T"],
      T: ["T", "A"],
      C: ["C", "G"],
      G: ["G", "C"]
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(baseSet[str[i]]);
    }
    return arr;
}
  
pairElement("GCG");

//map
function pairElement1(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }

/* --- */

/*Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    console.log("str:", str);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const firstLetterIndex = alphabet.indexOf(str[0]);
    const lastLetterIndex = alphabet.indexOf(str[str.length-1]);
    const fullLetterString = alphabet.slice(firstLetterIndex, lastLetterIndex + 1);
    console.log("fullLetterString:", fullLetterString);
    if (str.length === fullLetterString.length){
      console.log("same length, no missing letter");
      return undefined;
    } else {
      console.log(fullLetterString.split(""));
      let missingLetter = fullLetterString
      .split("")
      .filter(letter => str.split("").indexOf(letter) == -1)
      .join("");
      console.log("missingLetter:", missingLetter);
      return missingLetter;
    }
  }
  
fearNotLetter("abce");

// use charCodeAt()
function fearNotLetter1(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }

  //shorter
  function fearNotLetter2(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }

/* --- */

/* Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(...arr) {
    console.log(arr);
    let uniqueValues = [];
    for (let list of arr) {
        console.log("list:", list);
        for (let val of list) {
            console.log("val:", val);
            if (uniqueValues.indexOf(val) == -1) {
                uniqueValues.push(val);
            }
        }
    }
    console.log(uniqueValues);
    return uniqueValues;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// ...arguments, push
function uniteUnique1(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

// Set, flat
function uniteUnique2(...arr) {
    return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique3 = (...arr) => [...new Set(arr.flat())];

// flat filter
function uniteUnique4() {
    return [...arguments]
      .flat()
      .filter((item, ind, arr) => arr.indexOf(item) === ind);
  }
/* --- */

/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let temp = str.split("");
    for (let i = 0; i < temp.length; i++) {
        switch(temp[i]) {
            case "&":
                temp[i] = "&amp;";
                break;
            case "<":
                temp[i] = "&lt;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }
    temp = temp.join("");
    console.log(temp);
    return temp;
}
  
  convertHTML("Dolce & Gabbana");

// object lookup
function convertHTML1(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }

// object lookup, map
function convertHTML2(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }

  /* --- */


  /* Sum All Odd Fibonacci Numbers 
  Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
  */

  function sumFibs(num) {
    console.log("num:", num);
    let fibA = 0;
    let fibB = 1;
    let fibNumbers = [fibA];
    while (fibB <= num) {
      fibNumbers.push(fibB);
      let fibC = fibA + fibB;
      fibA = fibB;
      fibB = fibC;
    }
    console.log("fibNumbers:", fibNumbers);
    let result = fibNumbers.filter(val => val % 2 === 1).reduce((sum, val) => sum + val, 0);
    console.log("result:", result);
    return result;
  }

  sumFibs(4);

  // add sum and calculate fib at the same time
  function sumFibs1(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }

  // similar to mine, but shorter
  function sumFibs2(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;
  
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }

  // calc three fibs at a time
  function sumFibs3(num) {
    // Every third Fibbonaci number is even
    //   and the rest are odd
    let f0 = 0;
    let f1 = 1;
    let f2 = 1;
  
    // Generate triples until num is reached
    let sum = 0;
    while (f1 <= num) {
      // Update sum
      sum += f1;
      if (f2 <= num) sum += f2;
  
      // Compute next three Fibonacci numbers
      [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
      f2 = f0 + f1;
    }

  /* --- */


/* Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  console.log("num:", num);
  let primeSum = 0;
  for (let i = 2; i <= num; i++){
    let hasOtherDivisor = false;
    for (let j = 2; j < i; j++){
      if (i % j === 0) {
        hasOtherDivisor = true;
      }
    }
    if (!hasOtherDivisor) { primeSum += i };
    console.log("hasOtherDivisor:", hasOtherDivisor, primeSum);
  }
  return primeSum;
}

sumPrimes(10);

// divisible checking: only need to check between 2 and square root of num, because square root of num is the largest possible unique divisor
function sumPrimes1(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

// List of prime numbers
/*This solution is very similar to Solution 1.
In this solution we retain a list of all primes found so far and check if any of these numbers divide into each number in our range.
Note that this solution is actually less efficient than Solution 1 for very large values of n. Frequently growing the size of an array in JavaScript can be inefficient and slow.
*/
function sumPrimes2(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
/* --- */

/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1,5]);


// ES6 looping
function smallestCommons1(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

// finding GCD and LCM
function smallestCommons2(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

// Prime factorization
// Find the SCM of a range of numbers
function smallestCommons3(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % i) === 0) {
      factors[i] = (factors[i]) ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}
/* --- */

/* Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });


//while with shift
function dropElements1(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// use findIndex and func as the checking function
function dropElements2(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// limit loop times to original arr length, keep shifting first item
function dropElements3(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// recursive
function dropElements4(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? (dropElements4(arr.slice(1), func))
    : arr;
}

/* --- */

/* Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);
/* --- */