import { FETCH_FEEDS } from './action-types';

export const fetchCaseFeeds = (caseFeed) => ({
  type: FETCH_FEEDS,
  payload: {
    caseFeed
  }
});
