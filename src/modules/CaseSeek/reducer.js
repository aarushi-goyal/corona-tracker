import { FETCH_FEEDS } from './actions/action-types';

const initialState = {
  caseFeed: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    
    case FETCH_FEEDS:
      return {
        ...state,
        caseFeed: action.payload.caseFeed
      }

    default:
      return state;
  }
}