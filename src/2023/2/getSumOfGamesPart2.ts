import { input } from "./input";
import { testInput } from "./textInput";

export const getSumOfGamesPart2 = () => {
  const arrayOfRows = []
  let row = ""
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i]
    if (char === "\n") {
      arrayOfRows.push(row)
      row = ""
    } else {
      row = row + char
    }
  }
  const arrayOfObjs = []
  for (let j = 0; j < arrayOfRows.length; j += 1) {
    let substringStart = 8
    if (j > 8) substringStart = 9
    if (j === 99) substringStart = 10
    const string = arrayOfRows[j].substring(substringStart)

    let num = 0
    let currentString = ""
    let red = []
    let green = []
    let blue = []
    for (let i = 0; i < string.length; i += 1) {
      if ((string[i] === ",") || (string[i] === ";") || (i === string.length - 1)) {
        if (i === string.length - 1) currentString = currentString + string[i]
        if (currentString === "red") {
          red.push(num)
        } else if (currentString === "green") {
          green.push(num)
        } else if (currentString === "blue") {
          blue.push(num)
        }
      } else if (string[i] === " ") {
        if (Number(currentString)) {
          num = Number(currentString)
        }
        currentString = ""
      } else {
        currentString = currentString + string[i]
      }
    }
    arrayOfObjs.push({
      red,
      green,
      blue
    })
  }
  let sumOfGames = 0
  for (let k = 0; k < arrayOfObjs.length; k += 1) {
    let bool = true
    const currentObj = arrayOfObjs[k]
    let lowestRed = 0
    let lowestGreen = 0
    let lowestBlue = 0
    for (let l = 0; l < currentObj.red.length; l += 1) {
      if (l === 0) lowestRed = currentObj.red[l]
      if (currentObj.red[l] > lowestRed) lowestRed = currentObj.red[l]
      // if (Number(currentObj.red[l]) > 12) bool = false
    }
    for (let m = 0; m < currentObj.green.length; m += 1) {
      if (m === 0) lowestGreen = currentObj.green[m]
      if (currentObj.green[m] > lowestGreen) lowestGreen = currentObj.green[m]
      // if (Number(currentObj.green[m]) > 13) bool = false
    }
    for (let n = 0; n < currentObj.blue.length; n += 1) {
      if (n === 0) lowestBlue = currentObj.blue[n]
      if (currentObj.blue[n] > lowestBlue) lowestBlue = currentObj.blue[n]
      // if (Number(currentObj.blue[n]) > 14) bool = false
    }
    if (bool === true) {
      console.log(lowestRed, lowestGreen, lowestBlue)
      const multiples = lowestRed * lowestGreen * lowestBlue
      // console.log(k+1)
      sumOfGames = sumOfGames + multiples
    }
  }
  console.log(sumOfGames)
}

getSumOfGamesPart2()