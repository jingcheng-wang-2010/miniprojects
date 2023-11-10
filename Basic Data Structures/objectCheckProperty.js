// Check if an Object has a Property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if (userObj.hasOwnProperty('Alan') == false ||
        'Jeff' in userObj == false ||
        userObj.hasOwnProperty("Sarah") == false ||
        "Ryan" in userObj == false ) {
        return false;
    } else {
        return true;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));