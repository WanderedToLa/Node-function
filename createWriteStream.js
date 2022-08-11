const fs = require('fs');

const writeStream = fs.createWriteStream('./writeMe.txt');
writeStream.on('finish' , () => {
    console.log('write Success');
});

writeStream.write('write . \n');
writeStream.write('one more');
writeStream.end();