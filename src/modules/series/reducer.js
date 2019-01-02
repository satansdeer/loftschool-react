import {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure,
} from './actions';

const initialState = {
  series: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getSeriesRequest.toString():
      return {
        ...state,
        series: [],
        isLoading: true,
      };

    case getSeriesSuccess.toString():
      return {
        ...state,
        series: action.payload,
        isLoading: false,
      };

    case getSeriesFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
