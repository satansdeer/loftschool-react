import { take, fork, select } from 'redux-saga/effects'

const getCart = state => state.cart

function* checkout() {
  const cart = yield select(getCart)

  console.log(cart)
}

export function* rootSaga() {
  while (true) {
    yield take('CHECKOUT')
    yield fork(checkout)
  }
}