const fs = require('fs');

const data = fs.readFileSync('./readme.txt');
console.log('1번' , data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번' , data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번' , data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번' , data.toString());