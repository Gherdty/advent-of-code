import { testInput } from "./testInput"
import { input } from "./input"

export const getEcoReadings = () => {
  const arrayOfRows = input.split("\n")

  const rowsOfNumbers = arrayOfRows.map(
    (row) => {
      return [
        row.split(" ").map((item) => Number(item))
      ]
    })

  for (let i = 0; i < rowsOfNumbers.length; i += 1) {
    const row = rowsOfNumbers[i]
    let zerod = false
    let depth = 0
    while (zerod === false) {
      const newRow: number[] = []
      for (let j = 1; j < row[depth].length; j += 1) {
        newRow.push(row[depth][j] - row[depth][j - 1])
      }
      const notAllZeros = newRow.filter((num) => num !== 0)
      if (notAllZeros.length === 0) {
        zerod = true
        depth = 0
        rowsOfNumbers[i].push(newRow)
      } else {
        depth = depth + 1
        rowsOfNumbers[i].push(newRow)
      }
    }
  }

  const newValues = []
  for (let k = 0; k < rowsOfNumbers.length; k += 1) {
    const currentGroup = rowsOfNumbers[k]
    let value = 0
    for (let l = currentGroup.length - 1; l >= 0; l -= 1) {
      value = value + currentGroup[l][currentGroup[l].length - 1]
    }
    newValues.push(value)
  }

  const sum = newValues.reduce((prev, current) => {
    return prev + current
  })

  console.log(sum)
}

getEcoReadings()