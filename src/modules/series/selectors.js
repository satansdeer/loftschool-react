import { createSelector } from 'reselect';

export const getSeries = createSelector(
  state => state.series,
  series =>
    series.map(({ id, name, image: { original } }) => ({
      id,
      name,
      image: original,
    })),
);
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;
