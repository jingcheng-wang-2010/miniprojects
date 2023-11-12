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