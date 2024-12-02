import fs from "fs"

export const getInputString = async (filePath: string) => {
  const localPath = __dirname.replace("/utils", "") + filePath
  return fs.readFileSync(`${localPath}`, 'utf-8')
}
