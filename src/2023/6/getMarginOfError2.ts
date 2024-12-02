import { testInput2 } from "./testInput2"
import { input2 } from "./input2"

export const getMarginOfError = () => {
  const arrayOfRows = input2.split("\n")

  const timeNums = [Number(arrayOfRows[0].replace("Time:        ", ""))]
  const distanceNums = [Number(arrayOfRows[1].replace("Distance:   ", ""))]

  console.log(timeNums, distanceNums)

  const waysToWin = []
  for (let i = 0; i < timeNums.length; i += 1) {
    const currentTime = timeNums[i]
    const possibleDistances = []
    for (let j = 0; j < currentTime; j += 1) {
      const distance = j * (currentTime - j)
      possibleDistances.push(distance)
    }
    const distanceRecord = distanceNums[i]
    let numberOfWays = 0
    for (let k = 0; k < possibleDistances.length; k += 1) {
      if (possibleDistances[k] > distanceRecord) {
        numberOfWays = numberOfWays + 1
      }
    }
    waysToWin.push(numberOfWays)
  }
  
  let multipliedNums = 0
  for (let l = 0; l < waysToWin.length; l += 1) {
    if (multipliedNums === 0) {
      multipliedNums = waysToWin[l]
    } else {
      multipliedNums = multipliedNums * waysToWin[l]
    }
  }
  console.log(multipliedNums)
}

getMarginOfError()