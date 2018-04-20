import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { schema, normalize } from 'normalizr';

const personSchema = new schema.Entity('person');
const characterSchema = new schema.Entity('character');
const showSchema = new schema.Entity('show', {
  _embedded: {
    cast: [{ person: personSchema, character: characterSchema }],
  },
});

const {
  shows: {
    getDataRequest: getShowRequest,
    getDataSuccess: getShowSuccess,
    getDataFailure: getShowFailure,
  },
} = createActions({
  SHOWS: {
    GET_DATA_REQUEST: null,
    GET_DATA_SUCCESS: [show => normalize(show, showSchema), () => {}],
    GET_DATA_FAILURE: null,
  },
});

const isLoading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowFailure]: () => false,
    [getShowSuccess]: () => false,
  },
  false,
);

const elements = handleActions(
  {
    [getShowSuccess]: (state, action) => ({ ...state, ...action.payload.entities.show }),
  },
  {},
);

export default combineReducers({
  elements,
  isLoading,
});

export { getShowRequest, getShowSuccess, getShowFailure };
