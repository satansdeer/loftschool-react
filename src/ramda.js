const R = require('ramda')

const state0 = {
  users: {
    10: {
      id: 10,
      firstname: 'artem',
      lastname: 'samofalov'
    },
    11: {
      id: 11,
      firstname: 'anton',
      lastname: 'bolotov'
    }
  }
}

function createLens(path) {
  const setName = R.assocPath(path)
  const readName = R.path(path)

  const lens = R.lens(readName, setName)
  return lens
}

const nameLens = createLens(['users', '10', 'firstname'])
const state1 = R.set(nameLens, 'arthur', state0)

state1 //?

state0.users['11'] === state1.users['11'] //?

// const state1 = {
//   ...state0,
//   users: {
//     ...state0.users,
//     10: {
//       ...state0.users['10'],
//       firstname: 'arthur'
//     }
//   }
// }
