import { input } from "./input"
import { testInput } from "./testInput"

const numberOfWinners = 10

const getTotalPoints = () => {
  const arrayOfRows = input.split("\n")

  const rowsSansCardNumber = arrayOfRows.map((row) => {
    return row.substring(10).replace("|", "").split(" ").flat().filter((value) => {
      return value !== ""
    })
  })

  const rowMatchCount = []
  for (let i = 0; i < rowsSansCardNumber.length; i += 1) {
    const row = rowsSansCardNumber[i]
    let matchCount = 0
    for (let j = 0; j < numberOfWinners; j += 1) {
      const currentNum = row[j]
      for (let k = numberOfWinners; k < row.length; k += 1) {
        if (currentNum === row[k]) {
          matchCount = matchCount + 1
        }
      }
    }
    rowMatchCount.push(matchCount)
  }

  let arrayOfWinners = []
  for (let m = 0; m < rowMatchCount.length; m += 1) {
    let points = 0
    if (rowMatchCount[m] > 0) {
      for (let n = 0; n < rowMatchCount[m]; n += 1) {
        points = points + 1
      }
    }
    arrayOfWinners.push(points)
  }

  const totalCopies: number[] = arrayOfWinners.map((row) => 1)
  for (let o = 0; o < arrayOfWinners.length; o += 1) {
    const copies = totalCopies[o]
    for (let q = 0; q < copies; q += 1) {
      for (let p = 1; p <= arrayOfWinners[o]; p += 1) {
        totalCopies[o + p] = totalCopies[o + p] + 1
      }
    }
  }
  
  let sum = 0
  for (let r = 0; r < totalCopies.length; r += 1) {
    sum = sum + totalCopies[r]
  }
  console.log(sum)
}

getTotalPoints()