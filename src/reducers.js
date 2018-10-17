import { handleActions } from 'redux-actions'
import { changePosition, gameOver, tutorial1End } from './actions'
import { combineReducers } from 'redux'
import auth from './authReducer'

const position = handleActions(
  {
    [changePosition]: (state, action) => action.payload
  },
  { x: 0, y: 0 }
)

const isGameOver = handleActions(
  {
    [gameOver]: () => true
  },
  false
)

const exitPosition = handleActions({}, { x: 5, y: 5 })

const tutorial1 = handleActions(
  {
    [tutorial1End]: () => true
  },
  false
)

export default combineReducers({
  auth,
  game: combineReducers({
    position,
    isGameOver,
    exitPosition,
    tutorial1
  })
})

export const getPosition = state => state.game.position
export const getExitPosition = state => state.game.exitPosition
export const getIsGameOver = state => state.game.isGameOver
export const getIsTutorial1End = state => state.game.tutorial1
