import { take } from "redux-saga/effects";

export function* rootSaga() {
  while (true) {
    const action = yield take("*");

    console.log("action", action);
  }
}
