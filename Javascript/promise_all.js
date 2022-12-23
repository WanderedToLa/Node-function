/**
 * @description Promise.all 하나라도 실패 할 경우 -> catch
 * all 대신 allSattled로 실패만 추려 낼 수 있음.
 */

const promise1 = new Promise.resolve('성공1')
const promise2 = new Promise.resolve('성공2')

Promise.all([promise1, promise2]) // ['성공1' , '성공2']
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
