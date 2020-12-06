"use strict"

const numbers = []
let input
let total = 0

const sum = function (sumNumbers) {
  while (input !== null) {
    input = prompt(`Введите число`)

    if (isNaN(input)) {
      console.log("Вы ввели не число")
      continue
    }
    if (input === null) {
      console.log("Отмена")
      break
    }
    numbers.push(input)
  }

  for (let i = 0; i < numbers.length; i += 1) {
    total = total + parseInt(numbers[i])
  }
  return console.log(`Сумма числе равна ${total}`)
}

sum()
