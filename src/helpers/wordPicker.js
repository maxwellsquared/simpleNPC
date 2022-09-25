

function wordPicker(inputArray, num) {
  if (num === 1) return inputArray[Math.floor(Math.random() * inputArray.length)];

  let newArray = [...inputArray];
  let localList = [];
  let toReturn = "";

  if (num === 2) {
    localList.push(inputArray[Math.floor(Math.random() * inputArray.length)]);
    localList.push((inputArray.filter(word => word !== localList[0]))[Math.floor(Math.random() * (inputArray.length - 1))])
    return localList[0] + " and " + localList[1];
  }
  for (let i = 0; i < num; i++) {
    localList.push(newArray[
      Math.floor(Math.random() * newArray.length)
      ]
    )
  }
  for (let i = 0; i < localList.length; i++) {
    for (let j = 0; j < localList.length; j++) {
      if (localList[i] === localList[j]) {
        localList[i] = newArray.filter(w => w != localList[i])[Math.floor(Math.random() * newArray.filter(w => w != localList[i]).length)];
      }
    }
  }

  for (let i = 0; i < num; i++) {
    if (i === (num - 1)) return toReturn + "and " + localList[i];
    toReturn += localList[i] + ", ";
  }

}

  // loop through the number of words
  // add to the localList:
  // a random word from the array...
  // ...which has been filtered to not include any words currently in localList
  // ...at index position between 0 and the length of the inputArray - number of words in localList (same as i)

  // given an array of strings, return an array consisting of a given number of randomly selected strings from the original list, none of which repeat.
  //   input: length of 3, array of["gabagool", "meatball", "spaghet", "linguine", "pizza pie", "good food"]
  // output: ["good food", "pizza pie", "gabagool"]

  

  // if number === 1 return random entry from array
  // set localList to empty array
  // set toReturn to empty string
  // set localArray to ...array
  // if number === 2
  //   localList.push(random entry from localArray)
  //   localList.push(random entry from (localArray with localList[0] filtered out))
  //   return localList[0] + " and " + localList[1];
  // loop through number
  //   localList.push(random entry from (localArray with localList filtered out))
  // loop through number
  //   if i === number return toReturn + "and " + (random entry from (localArray with localList[0] filtered out))
  //   toReturn += localList[i] + ", "
