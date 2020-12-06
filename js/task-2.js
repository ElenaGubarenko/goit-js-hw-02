"use strict"

const orderOne = "Proin sociis natoque et magnis parturient montes mus"

const orderTwo = "Donec orci lectus aliquam est magnis"

const calculateEngravingPrice = function (message, pricePerWord) {
  const splitedText = message.split(" ")
  return splitedText.length * pricePerWord
}

console.log(calculateEngravingPrice(orderOne, 10))
console.log(calculateEngravingPrice(orderOne, 20))
console.log(calculateEngravingPrice(orderTwo, 40))
console.log(calculateEngravingPrice(orderTwo, 20))
