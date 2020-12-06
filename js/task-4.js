"use strict"

const stringOne = "Curabitur ligula sapien, tincidunt non."
const stringTwo = "Vestibulum facilisis, purus nec pulvinar iaculis."
const stringThree = "Curabitur ligula sapien."
const stringFour = "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."

const formatString = function (string) {
  for (let i = 0; i <= string.length; i += 1) {
    if (string.length <= 40) {
      console.log(string)
    } else {
      const shortString = string.slice(0, 40)
      console.log(`${shortString}...`)
    }
  }
}

formatString(stringOne)
formatString(stringTwo)
formatString(stringThree)
formatString(stringFour)
