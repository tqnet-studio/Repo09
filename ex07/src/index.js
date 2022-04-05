//only change code below this line

function randomRangeNumber(minNumber, maxNumber) {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  
  }
  
  console.log(randomRangeNumber(5, 15));

//only change code above this line
module.exports = randomRangeNumber;