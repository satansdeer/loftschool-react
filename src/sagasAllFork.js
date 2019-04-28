import { fork, call, put, delay } from "redux-saga/effects";

const receiveData = (data) => ({
  type: 'RECEIVE_DATA',
  payload: data
})

const fetchData = url =>
  fetch(`https://pokeapi.co/api/v2${url}`).then(response => response.json());

function* fetchPokemon(resource) {
  const data = yield call(fetchData, resource);
  yield put(receiveData(data));
  console.log(data);
}

export function* fetchAll() {
  yield fork(fetchPokemon, "/type/flying");
  console.log('Fork flying');
  yield fork(fetchPokemon, "/type/fighting");
  console.log('Fork fighting');
  yield delay(1000);
}
