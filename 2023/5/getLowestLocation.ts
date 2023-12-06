import { testInput } from "./testInput"
import { input } from "./input"

export const getLowestLocation = () => {
  const arrayOfRows = input.split("\n")

  const seeds = arrayOfRows[0].replace("seeds: ", "").split(" ")

  const arrayOfMaps: string[][][] = []

  let listNum = 0
  for (let i = 2; i < arrayOfRows.length; i += 1) {
    const row = arrayOfRows[i]
    if (row.includes(":")) {
      continue
    } else if (row === "") {
      listNum = listNum + 1
    } else {
      try {
        arrayOfMaps[listNum].push(row.split(" "))
      } catch {
        arrayOfMaps.push([])
        arrayOfMaps[listNum].push(row.split(" "))
      }
    }
  }

  const seedNums = seeds.map((seed) => Number(seed))

  // const seedNums = []
  // for (let s = 0; s < seeds.length; s += 1) {
  //   if (s === 0 || (s % 2 === 0)) {
  //     const baseNum = Number(seeds[s])
  //     const seedRange = Number(seeds[s + 1]) 
  //     for (let r = 0; r < seedRange; r += 1) {
  //       seedNums.push(baseNum + r)
  //     }
  //   }
  // }

  const soils = seedNums.map((item) => {
    const map = arrayOfMaps[0]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const fertilizers = soils.map((item) => {
    const map = arrayOfMaps[1]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const waters = fertilizers.map((item) => {
    const map = arrayOfMaps[2]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const lights = waters.map((item) => {
    const map = arrayOfMaps[3]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const temperatures = lights.map((item) => {
    const map = arrayOfMaps[4]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const humiditys = temperatures.map((item) => {
    const map = arrayOfMaps[5]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  const locations = humiditys.map((item) => {
    const map = arrayOfMaps[6]
    for (let j = 0; j < map.length; j += 1) {
      const desStart = Number(map[j][0])
      const sourceStart = Number(map[j][1])
      const range = Number(map[j][2])

      for (let k = 0; k < range; k += 1) {
        if (item === (sourceStart + k)) {
          return desStart + k
        }
      }
    }
    return item
  })

  let lowestNumber = 0
  for (let k = 0; k < locations.length; k += 1) {
    if (lowestNumber === 0) {
      lowestNumber = locations[k]
    } else if (lowestNumber > locations[k]) {
      lowestNumber = locations[k]
    }
  }

  console.log(lowestNumber)
}

getLowestLocation()