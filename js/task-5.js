"use strict"

const messageOne = "Latest technology news"
const messageTwo = "JavaScript weekly newsletter"
const messageThree = "Get best sale offers now!"
const messageFour = "[SPAM] How to earn fast money?"
const spam = "spam"
const sale = "sale"

const checkForSpam = function (message) {
  const lowerMessage = message.toLowerCase()
  console.log(lowerMessage)
  if (lowerMessage.includes(sale) || lowerMessage.includes(spam)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

checkForSpam(messageOne)
checkForSpam(messageTwo)
checkForSpam(messageThree)
checkForSpam(messageFour)
