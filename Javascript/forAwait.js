//resolve의 값을 반복할 때
const promise1 = Promise.resolve('성공1')
const promise2 = Promise.resolve('성공2')(
  //
  async () => {
    for await (promise of [promise1, promise2]) {
      console.log(promise)
    }
  }
)()
