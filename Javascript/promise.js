// code 분리의 필요성 -> promise 원할 때 실행함
const condition = true
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공')
  } else {
    reject('실패')
  }
})

promise
  .then((response) => {
    console.log(response) //성공
  })
  .catch((err) => {
    console.log(err) //실패
  })
