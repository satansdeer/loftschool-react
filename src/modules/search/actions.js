import { createAction } from 'redux-actions';


export const getRequest = createAction('SEARCH/GET_REQUEST')
export const getSuccess = createAction('SEARCH/GET_SUCCESS')
export const getFailure = createAction('SEARCH/GET_FAILURE')
