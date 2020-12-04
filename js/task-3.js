"use strict"

const exampleOne = "The quick brown fox jumped over the lazy dog"
let result
let numberOfLetters

const findLongestWord = function (string) {
  const exampleArray = string.split(" ")
  console.log(exampleArray)
  let newArray = []
  for (let i = 0; i < exampleArray.length; i += 1) {
    numberOfLetters = exampleArray[i].length
    console.log(numberOfLetters)
    newArray.push(numberOfLetters)
    console.log(newArray)
    Number(newArray)
  }
  console.log(Math.max(newArray))
}

findLongestWord(exampleOne)

// console.log(`Самое длиное слово - `)
// let maxItem = exampleArray[i].length
//
