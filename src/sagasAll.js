import { call } from "redux-saga/effects";

const fetchData = url =>
  fetch(`https://pokeapi.co/api/v2${url}`).then(response => response.json());

export function* fetchAll() {
  const flyingPokemons = yield call(fetchData, "/type/flying");
  console.log(flyingPokemons);
  const fightingPokemons = yield call(fetchData, "/type/fighting");
  console.log(fightingPokemons);
}
