//async , await 으로 promise 축약
function FindAndUserSave(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'wooseok'
      return user.save()
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' })
    })
    .then((user) => {
      //...
    })
    .catch((err) => {
      console.log(err)
    })
}

/**
 * @description 변수 = await ... 일 때 resolve된 값이 변수에 저장
 */

async function AsyncFindAndUserSave(Users) {
  let user = await User.findOne({})
  user.name = 'wooseok'
  user = await user.save()
  user = await Users.findOne({ gender: 'm' })
  //...
}
const AsyncFindAndUserSaveTryCatch = async (Users) => {
  try {
    let user = await User.findOne({})
    user.name = 'wooseok'
    user = await user.save()
    user = await Users.findOne({ gender: 'm' })
    //...
  } catch (err) {
    console.log(err)
  }
}
