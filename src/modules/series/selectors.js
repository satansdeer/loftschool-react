import { createSelector } from 'reselect';

export const getIsLoading = state => state.series.isLoading;
export const getError = state => state.series.error;
export const getSeriesImages = createSelector(
  state => state.series.elements,
  elements =>
    elements.map(({ id, image: { original }, name }) => ({
      id,
      image: original,
      name,
    })),
);
