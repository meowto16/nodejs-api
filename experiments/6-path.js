const path = require('path')

// Returns the last portion of the path
const basename = path.win32.basename('C:\\temp\\myfile.html')
console.log(basename)

const delimeter = path.delimiter
console.log(delimeter)

const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..')
console.log(normalizedPath)

const dirname = path.dirname(__filename)
console.log(dirname)

const extname = path.extname(__filename)
console.log(extname)

console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // Returns: '/foo/bar/baz/asdf'

const parsed = path.parse(__filename)
/**
 {
    root: '/',
    dir: '/Users/maximkirshin/Learn/nodejs-api/experiments',
    base: '6-path.js',
    ext: '.js',
    name: '6-path'
  }
 */
console.log(parsed)

const relative = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(relative) // Returns: '../../impl/bbb'

console.log(path.sep)

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
