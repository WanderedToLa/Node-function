const { odd, even } = require('./var')

const checkStringOddOrEven = (str) => (str.length % 2 ? odd : even)

console.log(checkStringOddOrEven(10))
