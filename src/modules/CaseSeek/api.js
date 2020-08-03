import axios from 'axios';
import { fetchCaseFeeds } from './actions';
const API_URL = 'http://www.mohfw.gov.in/data/datanew.json';

export function getCaseFeeds() {
  return function(dispatch) {
    axios.get('http://localhost:8001/cases')
    .then(json => {
      dispatch(fetchCaseFeeds(json.data));
      return 1;
    }).catch(err => {
      console.log(err, '=======error====');
    })
    setInterval(() => {
      axios.get('http://localhost:8001/cases')
      .then(json => {
        dispatch(fetchCaseFeeds(json.data));
        return 1;
      }).catch(err => {
        console.log(err, '=======error====');
      })
    }, 20000)
  }
}
