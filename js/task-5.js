"use strict"

const messageOne = "Latest technology news"
const messageTwo = "JavaScript weekly newsletter"
const messageThree = "Get best sale offers now!"
const messageFour = "[SPAM] How to earn fast money?"
const spam = "spam"
const sale = "sale"

const checkForSpam = function (message) {
  let result
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes(sale) || lowerMessage.includes(spam)) {
    return true
  } else {
    return false
  }
}

console.log(checkForSpam(messageOne))
console.log(checkForSpam(messageTwo))
console.log(checkForSpam(messageThree))
console.log(checkForSpam(messageFour))
