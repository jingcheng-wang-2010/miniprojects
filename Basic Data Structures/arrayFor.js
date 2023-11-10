// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      let toAdd = true;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === elem) {
          toAdd = false;
        }
      }
      if (toAdd) { newArr.push(arr[i]); }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[1, 2, 1], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));