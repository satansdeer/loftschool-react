import { createStore, combineReducers } from 'redux';

// const ADD_PRODUCT = 'ADD_PRODUCT';
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const total = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const entities = (state = 0, action) => {
  return state;
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'REMOVE_ALL_USERS':
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: combineReducers({
    total,
    entities,
  }),
  users,
});

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  store.getState();
});

const addUser = (id, name) => ({
  type: 'ADD_USER',
  payload: {
    id,
    name,
  },
});

store.dispatch(addUser(1, 'Артём'));
store.dispatch(addUser(2, 'Артём 2'));

// initial action -> reducers
// users -> [] users: []
// products -> []
// {
//    products: []
//
// }

// products(state.products, action)
// users(state.users, action)
