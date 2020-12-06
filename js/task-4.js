"use strict"

const stringOne = "Curabitur ligula sapien, tincidunt non."
const stringTwo = "Vestibulum facilisis, purus nec pulvinar iaculis."
const stringThree = "Curabitur ligula sapien."
const stringFour = "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."

const formatString = function (string) {
  const splitedString = string.split("")
  console.log(splitedString)

  for (let i = 0; i <= splitedString.length; i += 1) {
    if (splitedString.length <= 40) {
      console.log(string)
    }
    if (i === 41) {
      const shortString = splitedString.slice(0, 40)
      console.log(`${shortString.join("")}...`)
    }
  }
}

formatString(stringOne)
formatString(stringTwo)
formatString(stringThree)
formatString(stringFour)
