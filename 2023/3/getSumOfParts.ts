import { input } from "./input";
import { testInput } from "./testInput";

export const getSumOfParts = () => {
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

  const rowLength = arrayOfRows[0].length
  const rowLengthMinus1 = rowLength - 1
  const rowLengthPlus1 = rowLength + 1

  let singleString = ""
  for (let j = 0; j < arrayOfRows.length; j += 1) {
    const row = arrayOfRows[j]
    singleString = singleString + row
  }

  let symbolArray = []
  let symbolZones = []
  for (let k = 0; k < singleString.length; k += 1) {
    const char = singleString[k]
    if (char !== "." && !Number(char) && char !== "0") {
      if (k !== 0 && (k % rowLength !== 0)) {
        symbolArray.push(
          k - rowLengthPlus1,
          k - 1,
          k + rowLengthMinus1
        )
      }
      if (k !== rowLengthMinus1 && ((k + 1) % rowLength !== 0)) {
        symbolArray.push(
          k - rowLengthMinus1,
          k + 1,
          k + rowLengthPlus1
        )
      }
      symbolArray.push(
        k - rowLength,
        k + rowLength,
      )
      symbolZones.push(symbolArray)
    }
    symbolArray = []
  }

  let numbers = []
  let numberString = ""
  let numberZones = []
  let numberZoneArray = []
  for (let l = 0; l < singleString.length; l += 1) {
    const char = singleString[l]
    if (Number(char) || char === "0") {
      numberString = numberString + char
      numberZones.push(l)
      if (l === singleString.length - 1) {
        numberZoneArray.push(
          {
            [numberString]: numberZones
          }
        )
      }
    }
    if (!Number(char) && char !== "0") {
      if (numberString.length > 0) {
        numbers.push(numberString)
        numberZoneArray.push(
          {
            [numberString]: numberZones
          }
        )
      }
      numberString = ""
      numberZones = []
    }
  }

  let sumOfParts = 0
  for (let m = 0; m < numberZoneArray.length; m += 1) {
    let isAdded = false
    const row = numberZoneArray[m]
    const values = Object.values(row).flat()
    for (let n = 0; n < values.length; n += 1) {
      if (symbolZones.flat().includes(values[n]) && !isAdded) {
        sumOfParts = sumOfParts + Number(Object.keys(row).flat()[0])
        isAdded = true
      }
    }
  }
  console.log(sumOfParts)
}

getSumOfParts()