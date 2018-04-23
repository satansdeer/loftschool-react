
// export function* loginFlow() {
//   while (true) {
//     const isAuthorized = yield select(isUserAuthorized);
//     let task;

//     if (!isAuthorized) {
//       const {payload: {user, password}} = yield take(
//         'LOGIN_REQUEST',
//       );

//       task = yield fork(authorize, user, password);
//     }

//     const action = yield take(['LOGOUT', 'LOGIN_FAILURE']);

//     if (action.type === 'LOGOUT') yield cancel(task);
//     yield call(Api.clearItem, 'token');
//   }
// }

// function* authorize(user, password) {
//   try {
//     const token = yield call(Api.authorize, user, password);
//     yield call(Api.storeItem, {token});
//     yield put({type: 'LOGIN_SUCCESS', token});

//   } catch (error) {
//     yield put({type: 'LOGIN_FAILURE', error});
//   }
// }
