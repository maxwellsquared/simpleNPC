

export function wordPicker(inputArray, num) {
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
    localList.push(
      inputArray.filter((word) {
        localList.includes
      })
    )
  }

  for (let i = 0; )

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
}