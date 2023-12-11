import { testInput1, testInput2 } from "./testInput"
import { input } from "./input"

export const getNumberOfSteps = () => {
  const arrayOfRows = input.split("\n")

  const rightLefts = arrayOfRows[0]

  arrayOfRows.shift()
  arrayOfRows.shift()

  let nodes: Record<string, {"L": string, "R": string}> = {}

  for (let i = 0; i < arrayOfRows.length; i += 1) {
    const node = arrayOfRows[i]
    nodes = {
      ...nodes,
      [node.substring(0, 3)]: {
        L: node.substring(7, 10),
        R: node.substring(12, 15)
      }
    }
  }

  let currentNode = "AAA"
  let steps = 0
  let rightLeftsIndex = 0
  while (currentNode !== "ZZZ") {
    steps = steps + 1
    let currentDir = rightLefts[rightLeftsIndex] as "L" | "R"

    if (rightLeftsIndex === rightLefts.length - 1) {
      rightLeftsIndex = 0
    } else {
      rightLeftsIndex = rightLeftsIndex + 1
    }

    currentNode = nodes[currentNode][currentDir]

    console.log(currentNode)
  }

  console.log(steps)
}

getNumberOfSteps()