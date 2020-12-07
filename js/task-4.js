"use strict"

const stringOne = "Curabitur ligula sapien, tincidunt non."
const stringTwo = "Vestibulum facilisis, purus nec pulvinar iaculis."
const stringThree = "Curabitur ligula sapien."
const stringFour = "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."

const formatString = function (string) {
  for (let i = 0; i <= string.length; i += 1) {
    if (string.length <= 40) {
      return string
    } else {
      const shortString = string.slice(0, 40)
      return `${shortString}...`
    }
  }
}

console.log(formatString(stringOne))
console.log(formatString(stringTwo))
console.log(formatString(stringThree))
console.log(formatString(stringFour))
