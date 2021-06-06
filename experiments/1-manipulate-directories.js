const fs = require('fs')

console.log('------------------------------------')
console.log('Experiment: 1-manipulate-directories')
console.log('------------------------------------')

// List of directory files
const apiFsDirectory = '../api/fs'
const files = fs.readdirSync(apiFsDirectory)
console.log(`Directory "${apiFsDirectory}" contains:`, files)

// Check if file or directory
const apiFsReadmeFile = '../api/fs/README.md'
const stats = fs.statSync(apiFsReadmeFile)
const isFile = stats.isFile()
const isDirectory = stats.isDirectory()
console.info(`File "${apiFsReadmeFile}", check is file:`, isFile)
console.info(`File "${apiFsReadmeFile}", check is directory:`, isDirectory)

// Create directory
const exampleDirPath = '../dummy/example-dir'

try {
  fs.mkdirSync(exampleDirPath, { recursive: true })
  console.info(`Directory "${exampleDirPath}" was successfully created`)
} catch (e) {
  if (e.code === 'EEXIST') console.info(`Directory "${exampleDirPath}" is already created`)
  else console.error(e)
}

// Rename directory
const newExampleDirPath = '../dummy/example-dir-renamed'
try {
  fs.renameSync(exampleDirPath, newExampleDirPath)
  console.info(`Directory "${exampleDirPath}" was successfully renamed to "${newExampleDirPath}"`)
} catch (e) {
  console.error(e)
}

// Delete directory
try {
  fs.rmdirSync(newExampleDirPath)
  console.info(`Directory "${newExampleDirPath}" was successfully deleted`)
} catch (e) {
  if (e.code === 'ENOENT') console.info(`Directory "${newExampleDirPath}" was not found`)
  else console.error(e)
}

console.log('------------------------------------')
