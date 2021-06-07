const fs = require('fs')
const crypto = require('crypto')

console.log('------------------------------------')
console.log('Experiment: 2-manipulate-files')
console.log('------------------------------------')

let fd
const fileName = crypto.randomBytes(6).toString('base64').slice(0, 6)
const filePath = `../dummy/${fileName}.txt`

// Create empty file
/*
  1. r - Open file for reading. An exception occurs if the file does not exist.
  2. r+ - Open file for reading and writing. An exception occurs if the file does not exist.
  3. rs - Open file for reading in synchronous mode.
  4. rs+ - Open file for reading and writing, asking the OS to open it synchronously.
  5. w - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
  6. wx - Like 'w' but fails if the path exists.
  7. w+ - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
  8. wx+ - Like 'w+' but fails if path exists.
  9. a - Open file for appending. The file is created if it does not exist.
  10. ax - Like 'a' but fails if the path exists.
  11. a+ - Open file for reading and appending. The file is created if it does not exist.
  12. ax+ - Like 'a+' but fails if the the path exists.
 */
try {
  fd = fs.openSync(filePath, 'a')
  console.log(`File opened. File descriptor of the file "${filePath}":`, fd)
} catch (e) {
  console.error(e)
}

// Reads file
try {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  console.log(`File content (utf-8) of the file "${filePath} is:"`)
  console.log(fileContent) // string
} catch (e) {
  console.error(e)
}

// File stat
try {
  const fileStat = fs.statSync(filePath)
  console.log(`File stat of the file "${filePath} is:"`, fileStat)
  /*
    {
      dev: 16777231,
      mode: 33188,
      nlink: 1,
      uid: 501,
      gid: 20,
      rdev: 0,
      blksize: 4096,
      ino: 17565837,
      size: 42,
      blocks: 8,
      atimeMs: 1623088903719.0098,
      mtimeMs: 1623088902351.723,
      ctimeMs: 1623088902351.723,
      birthtimeMs: 1623088872879.1133,
      atime: 2021-06-07T18:01:43.719Z,
      mtime: 2021-06-07T18:01:42.352Z,
      ctime: 2021-06-07T18:01:42.352Z,
      birthtime: 2021-06-07T18:01:12.879Z
    }
   */
} catch (e) {
  console.error(e)
}

// Write file. Returns the number of bytes written
try {
  const newText = `Appended content\r\n`
  const bytes = fs.writeSync(fd, newText)
  console.log(`File "${filePath}" was written with text: ${newText}. Bytes written: ${bytes}`)
} catch (e) {
  console.error(e)
}

// Close file. Removes file descriptor
try {
  fd && fs.closeSync(fd)
  console.log(`File was closed. File descriptor of the file "${filePath} was:"`, fd)
} catch (e) {
  console.error(e)
}

// Delete file
try {
  fs.unlinkSync(filePath)
  console.log(`File "${filePath}" was deleted.`)
} catch (e) {
  console.error(e)
}
