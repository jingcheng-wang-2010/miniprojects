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