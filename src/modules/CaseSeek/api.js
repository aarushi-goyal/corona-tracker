import axios from 'axios';
import { fetchCaseFeeds } from './actions';
const API_URL = 'https://wrapper-service.herokuapp.com/cases';

export function getCaseFeeds() {
  return function(dispatch) {
    axios.get(API_URL)
    .then(json => {
      dispatch(fetchCaseFeeds(json.data));
      return 1;
    }).catch(err => {
      console.log(err, '=======error====');
    })
    setInterval(() => {
      axios.get(API_URL)
      .then(json => {
        dispatch(fetchCaseFeeds(json.data));
        return 1;
      }).catch(err => {
        console.log(err, '=======error====');
      })
    }, 20000)
  }
}
