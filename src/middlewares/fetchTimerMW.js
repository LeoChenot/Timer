/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  FETCH_CREATE_TIMER,
  FETCH_READ_TIMER,
  FETCH_UPDATE_TIMER_BY_ID,
  FETCH_DELETE_TIMER_BY_ID,
  saveTimerListResponse,
} from '../actions/timers';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

const fetchTimerMW = (store) => (next) => async (action) => {
  if (action.type === FETCH_CREATE_TIMER) {
    console.log('Je veux créer un timer');
  }
  else if (action.type === FETCH_READ_TIMER) {
    console.log('Je veux lire les timers');
    const timerListResponse = await instance.get('/api/timer');
    console.log(timerListResponse.data);
    store.dispatch(saveTimerListResponse(timerListResponse.data));
  }
  else if (action.type === FETCH_UPDATE_TIMER_BY_ID) {
    console.log('Je veux update un timer');
  }
  else if (action.type === FETCH_DELETE_TIMER_BY_ID) {
    console.log('Je veux supprimer un timer');
  }
  next(action);
};

export default fetchTimerMW;
