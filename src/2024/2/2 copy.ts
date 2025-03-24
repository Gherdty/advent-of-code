import { getInputString } from "../../utils";

const answer = async () => {
  const input = await getInputString("/2024/2/input.txt")

  const arrayOfRows = input.split("\n")

  const arrayOfReports = arrayOfRows.map((row) => {
    return row.split(" ").map((num) => {
      return Number(num)
    })
  })

  const fixedReports = arrayOfReports.map((report) => {
    const reportLength = report.length
    let firstIndexType = null
    let differenceOfZero = []
    let isOutOfRange = []
    let isIncreasing = []
    let isDecreasing = []
    for (let j = 0; j < reportLength; j += 1) {
      const currentNum = report[j]
      const nextNum = report[j - 1]
      const difference = nextNum - currentNum
      if (difference >= 1) {
        isIncreasing.push(j)
      } else if (difference < 0) {
        isDecreasing.push(j)
      } else if (difference === 0) {
        if (!firstIndexType) firstIndexType = "zero"
        differenceOfZero.push(j)
      }
      const positiveDifference = Math.abs(nextNum - currentNum)
      if (positiveDifference < 1 || positiveDifference > 3) {
        if (!firstIndexType) firstIndexType = "out of range"
        isOutOfRange.push(j)
      }
    }

    if (differenceOfZero.length === 1 && firstIndexType === "zero") {
      report.splice(differenceOfZero[0], 1)
      return report
    }

    if (isOutOfRange.length === 1 && firstIndexType === "out of range") {
      // remove the out of range number
      report.splice(isOutOfRange[0], 1)
      return report
    }

    if (isIncreasing.length === 1) {
      report.splice(isIncreasing[0], 1)
      return report
    }

    if (isDecreasing.length === 1) {
      report.splice(isDecreasing[0], 1)
      return report
    }

    return report
  })

  let safeReports = []

  for (let i = 0; i < fixedReports.length; i += 1) {
    let report = fixedReports[i]
    const reportLength = report.length
    let isSafe = true
    let isIncreasing = 0
    let isDecreasing = 0
    for (let j = 0; j < reportLength; j += 1) {
      const currentNum = report[j]
      const nextNum = report[j - 1]
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
      safeReports.push(report)
    }
  }

  console.log(safeReports)
}

answer();