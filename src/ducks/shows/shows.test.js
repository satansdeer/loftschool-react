import shows, {
  getShowRequest,
  getShowSuccess,
  getShowFailure,
} from './index';

const INIT_STATE = {
  elements: {},
  isLoading: false,
};

it('', () => {
  const state0 = shows(undefined, {
    type: '@@TEST/INIT',
  });

  expect(state0).toEqual(INIT_STATE);
});

it('', () => {
  const state1 = shows(
    INIT_STATE,
    getShowRequest(),
  );
  expect(state1.isLoading).toBeTruthy();
});

