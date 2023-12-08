import { testInput } from "./testInput"
import { input } from "./input"

const cardTypes: [string, number][][] = [
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
export const getTotalWinnings2 = () => {
  const arrayOfRows = input.split("\n")

  const cardPointValues: [string, number][] = arrayOfRows.map((row) => {
    return [
      row.substring(0, 5),
      Number(row.substring(6).replace(" ", ""))
    ]
  })

  for (let i = 0; i < cardPointValues.length; i += 1) {
    let repetitions = []
    let hand = cardPointValues[i][0]
    let lettersCovered: string[] = []
    for (let j = 0; j < hand.length; j += 1) {
      if (hand[j] !== "J") {
        let currentRep = 1
        if (!lettersCovered.includes(hand[j])) {
          for (let k = j + 1; k < hand.length; k += 1) {
            if (hand[j] === hand[k]) {
              currentRep = currentRep + 1

            }
          }
          repetitions.push(currentRep)
          lettersCovered.push(hand[j])
        }
      }
    }

    const sortedReps = repetitions.sort((a, b) => b - a)

    for (let q = 0; q < hand.length; q += 1) {
      if (hand[q] === "J") {
        if (!sortedReps[0]) {
          sortedReps.push(1)
        } else if (sortedReps[0] < 5) {
          sortedReps[0] = sortedReps[0] + 1
        }
      }
    }

    if (sortedReps.includes(5)) {
      cardTypes[6].push(cardPointValues[i])
    } else if (sortedReps.includes(4)) {
      cardTypes[5].push(cardPointValues[i])
    } else if (sortedReps.includes(3)) {
      if (sortedReps.includes(2)) {
        cardTypes[4].push(cardPointValues[i])
      } else {
        cardTypes[3].push(cardPointValues[i])
      }
    } else if ((sortedReps[0] === 2) && (sortedReps[1] === 2)) {
      cardTypes[2].push(cardPointValues[i])
    } else if (sortedReps[0] === 2) {
      cardTypes[1].push(cardPointValues[i])
    } else {
      cardTypes[0].push(cardPointValues[i])
    }
  }

  console.log(cardTypes)

  let handsByStrength: [string, number][] = []

  const cardOrder: Record<string, number> = {
    "A": 14,
    "K": 13,
    "Q": 12,
    "T": 11,
    "9": 10,
    "8": 9,
    "7": 8,
    "6": 7,
    "5": 6,
    "4": 5,
    "3": 4,
    "2": 3,
    "J": 2
  }

  for (let l = 0; l < cardTypes.length; l += 1) {
    let currentType = cardTypes[l]
    let typeOrder = currentType.sort((a, b) => {
      for (let t = 0; t < 5; t += 1) {
        const aLetter = a[0][t]
        const bLetter = b[0][t]
        if (aLetter === bLetter) {
          continue
        }
        if (cardOrder[aLetter] < cardOrder[bLetter]) {
          return -1
        } else {
          return 0
        }
      }
      return 0
    })
    handsByStrength = [...handsByStrength, ...typeOrder]
  }

  const handByNumbers = handsByStrength.map((value) => value[1])

  const totalWinnings = handByNumbers.reduce((prev, current, index) => {
    return prev + (current * (index + 1))
  }, 0)
  console.log(totalWinnings)
}

getTotalWinnings2()
