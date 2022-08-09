const { odd , even } = require('./module');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2){
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));