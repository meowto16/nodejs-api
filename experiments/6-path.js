const path = require('path')

// Returns the last portion of the path
const basename = path.win32.basename('C:\\temp\\myfile.html');
console.log(basename)

const delimeter = path.delimiter
console.log(delimeter)

