function first() {
  seconde()
  console.log('first')
}
function seconde() {
  third()
  console.log('second')
}
function third() {
  console.log('third')
}
first()

// third - second - first

function run() {
  console.log('3초뒤 시작')
}

console.log('start')
setTimeout(run, 3000)
console.log('end')
