import { createSelector } from 'reselect';

export const getFeed = state => state.feed;

export const getCaseFeed = createSelector(
  getFeed,
  substate => substate.caseFeed,
);
