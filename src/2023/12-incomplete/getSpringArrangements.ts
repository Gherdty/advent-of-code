import { testInput } from "./testInput"
import { input } from "./input"

export const getSpringArrangements = () => {
  const arrayOfRows = testInput.split("\n")

  const rows = arrayOfRows.map((row) => row.split(" ")[0])
  const springNums = arrayOfRows.map((row) => row.split(" ")[1].split(",").map((item) => Number(item)))

  const springsAsHashes = springNums.map((springs) => {
    return springs.map((spring) => {
      let newString = ""
      for (let i = 0; i < spring; i += 1) {
        newString = newString + "#"
      }
      return newString
    }).sort((a, b) => {
      if (a > b) {
        return -1
      } else {
        return 0
      }
    })
  })

  const newRowArrays = []

  for (let j = 0; j < rows.length; j += 1) {
    let row = rows[j]
    const currentHashes = springsAsHashes[j]
    let newRow = ""
    for (let k = 0; k < currentHashes.length; k += 1) {
      const currentHash = currentHashes[k]
      if (currentHash.length !== 1) {
        if (row.indexOf(`${currentHash}?`) === 0) {
          row = row.replace(`${currentHash}?`, ".")
        } else if (row.indexOf(`${currentHash}.`) === 0) {
          row = row.replace(`${currentHash}.`, ".")
        } else if (row.includes(`?${currentHash}?`)) {
          row = row.replace(`?${currentHash}?`, ".")
        } else if (row.includes(`.${currentHash}.`)) {
          row = row.replace(`.${currentHash}.`, ".")
        } else if (row.includes(`?${currentHash}`)) {
          row = row.replace(`?${currentHash}`, ".")
        } else if (row.includes(`.${currentHash}`)) {
          row = row.replace(`.${currentHash}`, ".")
        }
      }

      if (currentHash.length === 1) {
        
      }
    }
    newRowArrays.push(row)
  }

  console.log(newRowArrays)
}

getSpringArrangements()
