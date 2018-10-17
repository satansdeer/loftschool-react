import { createAction } from 'redux-actions';

export default createAction('TEST');

function a(value) {
  if (value) {
    return 1;
  } else {
    return 2;
  }
}
