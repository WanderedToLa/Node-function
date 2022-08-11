const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writeme.txt');
readStream.pipe(zlibStream).pipe(writeStream);