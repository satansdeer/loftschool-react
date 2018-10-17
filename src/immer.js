const produce = require('immer').default

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

state0.users[10].firstname = 'arthur'

const state1 = produce(state0, draft => {
  draft.users['10'].firstname = 'arthur'
  draft.users['12'] = { id: 12, firstname: 'john', lastname: 'lenon' }
})

state1 //?


state0 === state1 //?
state0.users === state1.users //?
state0.users['11'] === state1.users['11'] //?
