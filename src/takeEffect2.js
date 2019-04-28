import { take } from "redux-saga/effects";

export function* rootSaga() {
    for (let i = 0; i < 3; i++) {
      const action = yield take("*");
  
      console.log("action", action);
    }
    console.log("Congratulations! Saga completed!");
  }
