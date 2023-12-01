import { puzzleInput } from "./puzzleInput"

const numberWords: Record<string, string> = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9"
}

export const getSumOfNumbers = () => {
  const arrayOfRows = []
  let row = ""
  for (let i = 0; i < puzzleInput.length; i += 1) {
    if (puzzleInput[i] === "\n") {
      arrayOfRows.push(row)
      row = ""
    } else {
      row = row + puzzleInput[i]
    }
  }
  const arrayOfNumberStrings = []
  for (let j = 0; j < arrayOfRows.length; j += 1) {
    const row = arrayOfRows[j]
    let numberString = ""
    let rowLetters = ""
    let numAdded = false
    for (let k = 0; k < row.length; k += 1) {
      if (Number(row[k]) && !numAdded) {
        numberString = numberString += row[k]
        numAdded = true
      }
      rowLetters = rowLetters += row[k]
      const key = Object.keys(numberWords).find((key: string) => {
        if (rowLetters.includes(key)) {
          return key
        }
      })
      if (key && !numAdded) {
        numberString = numberString + numberWords[key]
        numAdded = true
      }
    }
    rowLetters = ""
    numAdded = false
    for (let l = row.length; l >= 0; l -= 1) {
      if (Number(row[l]) && !numAdded) {
        numberString = numberString += row[l]
        numAdded = true
      }
      const letter = row[l]
      rowLetters = letter + rowLetters
      const key = Object.keys(numberWords).find((key: string) => {
        if (rowLetters.includes(key)) {
          return key
        }
      })
      if (key && !numAdded) {
        numberString = numberString + numberWords[key]
        numAdded = true
      }
    }
    arrayOfNumberStrings.push(numberString)
  }
  let sum = 0
  for (let m = 0; m < arrayOfNumberStrings.length; m += 1) {
    sum = sum + Number(arrayOfNumberStrings[m])
  }
  console.log(sum)
}

getSumOfNumbers()
