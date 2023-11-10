// Copy Array Items Using slice()

function forecast(arr) {
    // Only change code below this line
    let weather = arr.slice(2,4);
    return weather;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));