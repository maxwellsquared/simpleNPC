

export default function wordPicker(inputArray, num) {
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
    // initialize a variable and set to random word from array
    let newWord = newArray[Math.floor(Math.random() * newArray.length)];
    while (localList.includes(newWord)) {
      // set newWord to new random word while localList includes it
      newWord = newArray[Math.floor(Math.random() * newArray.length)];
    }
    localList.push(newWord);
  }

  for (let i = 0; i < num; i++) {
    if (i === (num - 1)) return toReturn + "and " + localList[i];
    toReturn += localList[i] + ", ";
  }

}
