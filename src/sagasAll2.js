import { call, all } from "redux-saga/effects";

const fetchData = url =>
  fetch(`https://pokeapi.co/api/v2${url}`).then(response => response.json());

export function* fetchAll() {
  const [flyingPokemons, fightingPokemons] = yield all([
    yield call(fetchData, "/type/flying"),
    yield call(fetchData, "/type/fighting")
  ]);
  console.log('Flying pokemons', flyingPokemons)
  console.log('Fighting pokemons', fightingPokemons)
  console.log('Done!')
}
