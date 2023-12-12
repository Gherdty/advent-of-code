import { testInput } from "./testInput"
import { input } from "./input"

export const getSpringArrangements = () => {
  const arrayOfRows = testInput.split("\n")

  const rows = arrayOfRows.map((row) => row.split(" ")[0])
  const springs = arrayOfRows.map((row) => row.split(" ")[1].split(",").map((item) => Number(item)))
  console.log(springs)
}

getSpringArrangements()