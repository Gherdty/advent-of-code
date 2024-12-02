import fs from "fs"

const answer = async () => {
  const readFileLines = async (fileName: string) => {
    return fs.readFileSync(fileName, 'utf-8')
  }
  let input = await readFileLines(`${__dirname}/input.txt`)
  let arrayOfRows = input.split("\n")
  const listOne = arrayOfRows.map((row) => {
    return Number(row.substring(0, 5))
  }).sort((a, b) => {
    return a - b
  })
  const listTwo = arrayOfRows.map((row) => {
    return Number(row.substring(8, 13))
  }).sort((a, b) => {
    return a - b
  })
  let similarityScore = 0
  for (let i = 0; i < listOne.length; i += 1) {
    let numberOfMatches = 0
    for (let j = 0; j < listTwo.length; j += 1) {
      if (listOne[i] === listTwo[j]) {
        numberOfMatches += 1
      }
    }
    similarityScore += (listOne[i] * numberOfMatches)
  }
  console.log(similarityScore)
}

answer();
