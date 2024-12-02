import fs from "fs"

const direction: Record<string, number> = {
  U: -10,
  D: 10,
  R: 1,
  L: -1,
}

const getTiles = async () => {
  const readFileLines = (fileName: string) => {
    return fs.readFileSync(fileName)
      .toString('utf8')
      .split("")
      .map((char) => {
        if (char === "\\") {
          char = "L"
        }
        if (char === "/") {
          char = "R"
        }
        return char
      }).filter((ch) => {
        return ch !== "\n"
      }).join("")
  }
  let input = (`${__dirname}/testInput.txt`)

  let energizedTiles = [0]
  let currentDir = "R"

  const currentLocation = energizedTiles[energizedTiles.length - 1]
  const newLocation = currentLocation + direction[currentDir]
  energizedTiles.push(newLocation)

  console.log(energizedTiles)
}

getTiles()