import { combineReducers } from 'redux'
import { handleActions, createAction } from 'redux-actions'

export const getJwtRequest = createAction('AUTH/GET_JWT_REQUEST')
export const getJwtSuccess = createAction('AUTH/GET_JWT_SUCCESS')
export const getJwtFailure = createAction('AUTH/GET_JWT_FAILURE')
export const getUserSecretRequest = createAction('AUTH/GET_USER_SECRET_REQUEST')
export const getUserSecretSuccess = createAction('AUTH/GET_USER_SECRET_SUCCESS')
export const getUserSecretFailure = createAction('AUTH/GET_USER_SECRET_FAILURE')
export const login = createAction('AUTH/LOGIN')
export const logout = createAction('AUTH/LOGOUT')

const isAuthorized = handleActions(
  {
    [login]: () => true,
    [logout]: () => false
  },
  false
)

const userProfile = handleActions(
  {
    [login]: (state, action) => action.payload,
    [logout]: () => null
  },
  null
)

export default combineReducers({
  isAuthorized,
  userProfile
})

export const getIsAuthorized = state => state.auth.isAuthorized
export const getUserProfile = state => state.auth.userProfile
export const getUserSecret = state => state.auth.userSecret
export const getToken = state => state.auth.userProfile.token
