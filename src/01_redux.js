import { createStore } from 'redux';

[1, 2, 'a', 3].reduce((acc, el) => {
  if (Number.isInteger(el)) {
    return acc + el;
  }
  return acc;
}, 0);

const reducer = (state = { users: [] }, action) => {
  // console.log({ state, action });
  switch (action.type) {
    case 'ADD_USER':
      // такой код запрещен
      // state.users.push(action.payload)
      return {
        ...state,
        users: [...state, action.payload],
      };
    case 'REMOVE_ALL_USERS':
      return { ...state, users: [] };
    default:
      return state;
  }
};

const addUser = payload => ({
  type: 'ADD_USER',
  payload,
});

const removeAllUsers = () => ({
  type: 'REMOVE_ALL_USERS',
});

const store = createStore(reducer);
// console.log(store.getState());

store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(
  addUser({
    id: 1,
    name: 'Артём',
  }),
);

store.dispatch(
  addUser({
    id: 2,
    name: 'Алексей',
  }),
);

store.dispatch(
  addUser({
    id: 3,
    name: 'Роман',
  }),
);

store.dispatch(removeAllUsers());

export const users = reducer;
