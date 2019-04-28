import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { fetchAll } from './sagasAllFork'
// import { rootSaga } from './takeEffect2'
// import { rootSaga } from "./selectExample";
import { rootSaga } from "./SagasCancelExample";

const reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type, payload) => store.dispatch({ type, payload });

document.addEventListener('keypress', (e) => {
    console.log('keypress')
    action('KEY_PRESS', e.code)
});

action("ADD_TO_CART", "apple");
action("ADD_TO_CART", "orange");
action("ADD_TO_CART", "banana");
action("CHECKOUT");