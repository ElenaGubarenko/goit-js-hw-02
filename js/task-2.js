"use strict"

const orderOne = "Proin sociis natoque et magnis parturient montes mus"

const orderTwo = "Donec orci lectus aliquam est magnis"

const calculateEngravingPrice = function (message, pricePerWord) {
  const splitedText = message.split(" ")
  // console.log(splitedText)
  console.log(splitedText.length)
  return console.log(`За гравировку нужно заплатить ${splitedText.length * pricePerWord} кредитов`)
}

calculateEngravingPrice(orderOne, 10)
calculateEngravingPrice(orderOne, 20)
calculateEngravingPrice(orderTwo, 40)
calculateEngravingPrice(orderTwo, 20)
