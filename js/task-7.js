"use strict"

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]
let array = []
let validOrNot
let loginUnigue
let result

let input = prompt(`Log in`)

const isLoginValid = function (login) {
  console.log(input)
  validOrNot = input.length >= 4 && input.length <= 16 ? "true" : "false"
  console.log(validOrNot)
}

const isLoginUnique = function (allLogins, login) {
  loginUnigue = allLogins.includes(input) ? "false" : "true"
  console.log(loginUnigue)
}

const addLogin = function (allLogins, login) {
  isLoginValid()
  if (validOrNot === "false") {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов")
  }
  if (validOrNot === "true") {
    isLoginUnique(logins)
    if (loginUnigue === "false") {
      console.log("Такой логин уже используется!")
    }
    if (loginUnigue === "true") {
      allLogins.push(input)
      console.log("Логин успешно добавлен!")
      console.log(allLogins)
    }
  }
}

addLogin(logins)
