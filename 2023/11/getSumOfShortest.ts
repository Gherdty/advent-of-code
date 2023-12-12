import { testInput } from "./testInput"
import { input } from "./input"

export const getSumOfShortest = () => {
  const arrayOfRows = input.split("\n")

  const indexIsEmpty = []

  const rowLength = arrayOfRows[0].length

  for (let a = 0; a < rowLength; a += 1) {
    let isEmpty = true
    for (let b = 0; b < arrayOfRows.length; b += 1) {
      if (arrayOfRows[b][a] === "#") {
        isEmpty = false
      }
    }
    indexIsEmpty.push(isEmpty)
  }

  const expandedRows = []

  for (let i = 0; i < arrayOfRows.length; i += 1) {
    const row = arrayOfRows[i]
    let newRow = ""
    for (let z = 0; z < row.length; z += 1) {
      newRow = newRow + row[z]
      if (indexIsEmpty[z]) {
        newRow = newRow + "."
      }
    }
    expandedRows.push(newRow)
    if (!newRow.includes("#")) {
      expandedRows.push(newRow)
    }
  }

  let galaxies: {
    row: number,
    index: number
  }[] = [
    {
      row: 0,
      index: 0
    }
  ]
  let totalGalaxies = 0

  for (let j = 0; j < expandedRows.length; j += 1) {
    const row = expandedRows[j]
    for (let k = 0; k < row.length; k += 1) {
      if (row[k] === "#") {
        totalGalaxies = totalGalaxies + 1

        if (!galaxies) {
          galaxies = [
            {
              row: j,
              index: k
            }
          ]
        }
        
        if (galaxies) {
          galaxies = [
            ...galaxies,
            {
              row: j,
              index: k
            }
          ]
        }
      }
    }
  }

  galaxies.shift()

  let distances = 0
  const pairs = []

  for (let l = 0; l < galaxies.length; l += 1) {
    for (let m = (l + 1); m < galaxies.length; m += 1) {
      pairs.push ([l, m])
    }
  }

  for (let n = 0; n < pairs.length; n += 1) {
    const galaxyOne = galaxies[pairs[n][0]]
    const galaxyTwo = galaxies[pairs[n][1]]

    const yDiff = galaxyTwo.row - galaxyOne.row
    let xDiff = 0
    if (galaxyOne.index > galaxyTwo.index) {
      xDiff = galaxyOne.index - galaxyTwo.index
    } else {
      xDiff = galaxyTwo.index - galaxyOne.index
    }

    const distance = yDiff + xDiff

    distances = distances + distance
  }

  console.log(distances)
}

getSumOfShortest()