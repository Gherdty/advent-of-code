import { testInput } from "./testInput";

export const getHashSum = () => {
  const arrayOfRows = testInput.split(",")
  const arrayOfBoxes: any[][] = []
  let i = 256
  while (i > 0) {
    arrayOfBoxes.push([])
    i = i - 1
  }
  for (let i = 0; i < arrayOfRows.length; i += 1) {
    const row = arrayOfRows[i]
    if (row.includes("=")) {
      const equalsIndex = row.indexOf("=")
      const hash = row.substring(0, equalsIndex)
      const lense = row.substring(equalsIndex + 1)
      const boxNumber = Array(...hash).reduce((prev, current) => {
        return ((prev + current.charCodeAt(0)) * 17) % 256
      }, 0)

      let exists = false
      for (let j = 0; j < arrayOfBoxes[boxNumber].length; j += 1) {
        const arrayString = arrayOfBoxes[boxNumber][j][0]
        if (arrayString.includes(hash)) {
          const indexToRemove = arrayOfBoxes[boxNumber].indexOf(arrayOfBoxes[boxNumber][j])
          arrayOfBoxes[boxNumber][indexToRemove] = [`${hash} ${lense}`]
          exists = true
        }
      }
      if (exists === false) {
        arrayOfBoxes[boxNumber].push([`${hash} ${lense}`])
      }
    } else if (row.includes("-")) {
      const minusIndex = row.indexOf("-")
      const hash = row.substring(0, minusIndex)
      const boxNumber = Array(...hash).reduce((prev, current) => {
        return ((prev + current.charCodeAt(0)) * 17) % 256
      }, 0)

      for (let j = 0; j < arrayOfBoxes[boxNumber].length; j += 1) {
        const arrayString = arrayOfBoxes[boxNumber][j][0]
        if (arrayString.includes(hash)) {
          const indexToRemove = arrayOfBoxes[boxNumber].indexOf(arrayOfBoxes[boxNumber][j])
          arrayOfBoxes[boxNumber].splice(indexToRemove, 1)
        }
      }
    }
  }
  let sum = 0
  for (let k = 0; k < arrayOfBoxes.length; k += 1) {
    const box = arrayOfBoxes[k]
    for (let l = 0; l < box.length; l += 1) {
      const item = box[l][0]
      console.log(item)
      sum = sum + ((k + 1) * (l + 1) * Number(item[item.length - 1]))
    }
  }
  console.log(sum)
}

getHashSum()