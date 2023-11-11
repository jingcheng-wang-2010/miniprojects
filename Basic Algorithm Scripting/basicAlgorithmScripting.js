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

// initiate product as 1, for loop won't trigger unless num is greater than 1
  function factorialize2(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }

// recurive solution
function factorialize3(num) {
    if (num <= 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }

// tail recursion solution
  function factorialize(num, factorial = 1) {
    if (num <= 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }

  // Find the Longest Word in a String
  function findLongestWordLength(str) {
    let longest = 0;
    let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longest) {
            longest = splitStr[i].length;
        }
    }
    return longest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  // loop through whole str and calculate when encounter space
  function findLongestWordLength2(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }

    // use .reduce()
    function findLongestWordLength3(s) {
        return s
          .split(' ')
          .reduce((longest, word) => Math.max(longest, word.length), 0);
      }

      // Using .map()
      function findLongestWordLength4(str) {
        return Math.max(...str.split(" ").map(word => word.length));
      }

      // recursive
      function findLongestWordLength5(str) {
        // split the string into individual words
        const words = str.split(" ");
      
        // words only has 1 element left that is the longest element
        if (words.length == 1) {
          return words[0].length;
        }
      
        // if words has multiple elements, remove the first element
        // and recursively call the function
        return Math.max(
          words[0].length,
          findLongestWordLength5(words.slice(1).join(" "))
        );
      }

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let largestArray = [];
    for (let i = 0; i < arr.length; i++) {
        largestArray.push(Math.max(...arr[i]));
    }
    return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// procedural approach

function largestOfFour2(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }

  // declarative approach
  function largestOfFour3(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }
// declarative approach, map + apply.bind
  function largestOfFour4(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }

// recursive approach
function largestOfFour5(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
  }

// Confirm the Ending
  function confirmEnding(str, target) {
    let regex = new RegExp(target + "$", "i");
    return regex.test(str);
  }
  
  confirmEnding("Bastian", "n");

  // Declarative approach
  function confirmEnding2(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    return str.slice(str.length - target.length) === target;
  }
  // slice using negative number
  function confirmEnding3(str, target) {
    return str.slice(-target.length) === target
  }

  // Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }

    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);

// recursive
function repeatStringNumTimes2(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }

  // recursive shorter
  function repeatStringNumTimes3(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
  }

// Truncate a String

function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

// shorter form
function truncateString2(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }


// Finders Keepers

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  // find()
  function findElement2(arr, func) {
    return arr.find(func);
  }

  // recursive
  function findElement3(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
      return findElement(arr.slice(1), func);
    } else {
      return arr[0];
    }
  }

  //Boo who
  function booWho(bool) {
    return typeof bool == "boolean" ? true : false;
  }
  
  booWho(null);

  // shorter
  function booWho(bool) {
    return typeof bool === "boolean";
  }


  // Title Case a Sentence
  function titleCase(str) {
    words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  // map
  function titleCase2(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
  }
// regex
  function titleCase3(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
  }


  //Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2.slice();
    //console.log("1. arr3:", arr3);
    arr3.splice(n, 0, ...arr1);
    //console.log("2. arr3:", arr3);
    return arr3;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  // procedural, insert one by one
  function frankenSplice2(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
// slice() start end end, insert middle
  function frankenSplice3(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }

// Falsy Bouncer
  function bouncer(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (Boolean(arr[i])) {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
  
  bouncer([7, "ate", "", false, 9]);

  // shorter
  function bouncer(arr) {
    return arr.filter(Boolean);
  }

  // Where do I Belong
  function compareNumbers(a, b) {
    return a - b;
  }

  function getIndexToIns(arr, num) {
    arr.sort(compareNumbers);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);

  // shorter
  function getIndexToIns2(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  }

  // count number of smaller values using filter()
  function getIndexToIns3(arr, num) {
    return arr.filter(val => num > val).length;
  }

  // sort then findIndex()
  function getIndexToIns4(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
  }
  
  // concat num, then sort, then indexof
  function getIndexToIns5(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }

  // Mutations
  function mutation(arr) {
    for (let i = 0; i < arr[1].length; i++ ) {
      if (arr[0].toLowerCase().search(arr[1][i].toLowerCase()) == -1) {
        return false;
      } 
    }
    return true;
  }

  mutation(["hello", "hey"]);

  // Declarative
  function mutation2(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
  }
  
  // recursive
  function mutation3([ target, test ], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
      ? true
      : !target.includes(test[i])
        ? false
        : mutation3([ target, test ], i + 1);
  }

  // regex negate character set
  function mutation4([elem1, elem2]) {
    const regex = new RegExp(`[^${elem1}]`, 'i');
    return !regex.test(elem2);
  }
  