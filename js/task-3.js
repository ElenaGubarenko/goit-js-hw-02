"use strict"

const exampleOne = "The quick brown fox jumped over the lazy dog"
const exampleTwo = "Google do a roll"
const exampleThree = "May the force be with you"

const findLongestWord = function (string) {
  const exampleArray = string.split(" ")
  let maxWord = exampleArray[0]

  for (let i = 1; i < exampleArray.length; i += 1) {
    if (exampleArray[i].length > maxWord.length) {
      maxWord = exampleArray[i]
    }
  }

  return maxWord
}

console.log(findLongestWord(exampleOne))
console.log(findLongestWord(exampleTwo))
console.log(findLongestWord(exampleThree))
