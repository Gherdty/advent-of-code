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

  let sum = 0
  for (let m = 0; m < rowMatchCount.length; m += 1) {
    if (rowMatchCount[m] > 0) {
      let points = 1
      for (let n = 1; n < rowMatchCount[m]; n += 1) {
        points = points * 2
      }
      sum = sum + points
    }
  }
  console.log(sum)
}

getTotalPoints()