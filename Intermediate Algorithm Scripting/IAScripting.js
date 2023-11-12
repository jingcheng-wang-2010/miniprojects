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
function sumAll2(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
}

// arithmetic approach
const sumAll3 = arr => {
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
function diffArray2(arr1, arr2) {
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
function diffArray4(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
}

// Declarative Solution, using set
function diffArray5(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
      difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
  }
/* --- */
