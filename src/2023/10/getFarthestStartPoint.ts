import { testInput1, testInput2 } from "./testInput"
import { input } from "./input"

const directions: Record<string,number> = {
  north: -140,
  south: 140,
  east: 1,
  west: -1,
}

export const getFarthestStartPoint = () => {
  const arrayOfRows = input.split("\n")

  const gridString = arrayOfRows.join("")

  // Find S Index
  let sIndex = 0
  for (let i = 0; i < gridString.length; i += 1) {
    if (gridString[i] === "S") {
      sIndex = i
    }
  }

  let isCompletedBool = false
  let lastDirection = "west"
  let currentIndex = sIndex + directions[lastDirection]
  let totalMoves = 0

  while (isCompletedBool === false) {
    totalMoves = totalMoves + 1
    // GetNextIndex
    const pipeType = gridString[currentIndex]

    // This direction will be the same as the last
    if (pipeType === "|" || pipeType === "-") {
      currentIndex = currentIndex + directions[lastDirection]
    }

    if (pipeType === "L") {
      if (lastDirection === "south") {
        currentIndex = currentIndex + directions["east"]
        lastDirection = "east"
      } else if (lastDirection === "west") {
        currentIndex = currentIndex + directions["north"]
        lastDirection = "north"
      }
    }

    if (pipeType === "J") {
      if (lastDirection === "south") {
        currentIndex = currentIndex + directions["west"]
        lastDirection = "west"
      } else if (lastDirection === "east") {
        currentIndex = currentIndex + directions["north"]
        lastDirection = "north"
      }
    }

    if (pipeType === "7") {
      if (lastDirection === "north") {
        currentIndex = currentIndex + directions["west"]
        lastDirection = "west"
      } else if (lastDirection === "east") {
        currentIndex = currentIndex + directions["south"]
        lastDirection = "south"
      }
    }
    
    if (pipeType === "F") {
      if (lastDirection === "north") {
        currentIndex = currentIndex + directions["east"]
        lastDirection = "east"
      } else if (lastDirection === "west") {
        currentIndex = currentIndex + directions["south"]
        lastDirection = "south"
      }
    }

    if (pipeType === "S") {
      isCompletedBool = true
    }
  }

  console.log(totalMoves/2)
}

getFarthestStartPoint()