import { testInput } from "./testInput";

export const getHashSum = () => {
  // const testInput = "HASH,"
  let sum = 0
  let currentSum = 0
  for (let i = 0; i < testInput.length; i += 1) {
    const char = testInput[i]
    if (char === ",") {
      console.log(currentSum)
      sum = sum + currentSum
      currentSum = 0
    } else {
      const asciiValue = char.charCodeAt(0)
      currentSum = (((asciiValue + currentSum) * 17) % 256)
    }
  }
  console.log(sum)
}

getHashSum()