import { createAction } from 'redux-actions';

export const getXkcdImageRequest = createAction(
  'XKCD/IMAGE_REQUEST',
);
export const getXkcdImageSuccess = createAction(
  'XKCD/IMAGE_SUCCESS',
);
export const getXkcdImageFailure = createAction(
  'XKCD/IMAGE_FAILURE',
);
