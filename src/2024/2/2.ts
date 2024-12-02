import { getInputString } from "../../utils";

const answer = async () => {
  const input = await getInputString("/2024/2/input.txt")

  const arrayOfRows = input.split("\n")

  const arrayOfReports = arrayOfRows.map((row) => {
    return row.split(" ").map((num) => {
      return Number(num)
    })
  })

  let safeReports = 0

  for (let i = 0; i < arrayOfReports.length; i += 1) {
    let report = arrayOfReports[i]
    const reportLength = report.length
    let isSafe = true
    let isIncreasing = 0
    let isDecreasing = 0
    for (let j = 0; j < reportLength; j += 1) {
      const currentNum = report[j]
      const nextNum = report[j + 1]
      const difference = nextNum - currentNum
      if (difference >= 1) {
        isIncreasing += 1
      } else if (difference < 0) {
        isDecreasing += 1
      }
      const positiveDifference = Math.abs(nextNum - currentNum)
      if (positiveDifference < 1 || positiveDifference > 3) {
        isSafe = false
        continue
      }
    }
    if (isIncreasing !== reportLength - 1 && isDecreasing !== reportLength - 1) {
      isSafe = false
    }

    if (isSafe) {
      safeReports += 1
    }
  }

  console.log(safeReports)
}

answer();