import { testInput } from "./testInput"
import { input } from "./input"

export const getMarginOfError = () => {
  const arrayOfRows = input.split("\n")

  const times = arrayOfRows[0].replace("Time:       ", "").split("   ")
  const distances = arrayOfRows[1].replace("Distance:   ", "").split("   ")

  const timeNums = times.map((time) => Number(time))
  const distanceNums = distances.map((distance) => Number(distance))

  console.log(timeNums, distanceNums)

  const waysToWin = []
  for (let i = 0; i < timeNums.length; i += 1) {
    const currentTime = timeNums[i]
    const possibleDistances = []
    for (let j = 0; j < currentTime; j += 1) {
      const distance = j * (currentTime - j)
      possibleDistances.push(distance)
    }
    console.log(possibleDistances)
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