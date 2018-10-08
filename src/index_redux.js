import { createStore, combineReducers } from 'redux';

const initPersonState = {
  firstname: 'Artem',
  lastname: 'Samofalov',
};

const person = (state = initPersonState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        firstname: action.newName,
      };

    case 'UPPER_NAME':
      return {
        ...state,
        firstname: state.firstname.toUpperCase(),
      };

    default:
      return state;
  }
};

const initWorkState = {
  name: 'Drive2',
};

const work = (state = initWorkState, action) => {
  switch (action.type) {
    case 'CHANGE_WORK':
      return { ...state, name: action.newName };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  person,
  work,
});

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, 2));
});

const changeName = name => ({
  type: 'CHANGE_NAME',
  newName: name,
});

const changeWork = name => ({
  type: 'CHANGE_WORK',
  newName: name,
});

const upperName = () => ({
  type: 'UPPER_NAME',
});

store.dispatch(upperName());
store.dispatch(changeName('Alexey'));
store.dispatch(upperName());
store.dispatch(changeName('Anton'));
store.dispatch(upperName());
store.dispatch(changeName('Arcadiy'));
store.dispatch(upperName());
store.dispatch(changeWork('Apple'));
