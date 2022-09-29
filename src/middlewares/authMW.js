/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  CHECK_LOGIN_WITH_TOKEN, LOGIN, LOGOUT, logout, REGISTER, setLoginLoading,
} from '../actions/auth';
import { setNewBoolean } from '../actions/loginModal';
import {
  fetchReadTimer,
  FETCH_DELETE_TIMER_BY_ID,
} from '../actions/timers';
import {
  FETCH_CREATE_TIMER,
  FETCH_CREATE_LIST,
  FETCH_READ_TIMER_LISTS,
  saveLogout,
  saveNewTimerLists,
  saveUserData,
  FETCH_DELETE_TIMER,
  fetchReadTimerLists,
  FETCH_UPDATE_TIMER,
  FETCH_DELETE_LIST,
} from '../actions/user';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const setInstanceAuthorization = () => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
  }
};

const removeInstanceAuthorization = () => {
  delete instance.defaults.headers.common.authorization;
};

const authMW = (store) => (next) => async (action) => {
  if (action.type === LOGIN) {
    const state = store.getState();
    store.dispatch(setNewBoolean('loginLoading', true));
    try {
      const response = await instance.post('/api/login', {
        email: state.loginModalReducer.email,
        password: state.loginModalReducer.password,
      });
      console.log(response.data.message);
      setTimeout(() => {
        store.dispatch(saveUserData(response.data.user));
        store.dispatch(setNewBoolean('loginLoading', false));
        localStorage.setItem('token', response.data.token);
        setInstanceAuthorization();
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        store.dispatch(setNewBoolean('loginLoading', false));
        console.log(error.response.data.message);
      }, 1000);
    }
  }

  else if (action.type === CHECK_LOGIN_WITH_TOKEN) {
    if (localStorage.getItem('token')) {
      console.log('check');
      setInstanceAuthorization();
      try {
        const response = await instance.get('/api/check');
        store.dispatch(saveUserData(response.data.user));
        localStorage.setItem('token', response.data.token);
        setInstanceAuthorization();
      } catch (error) {
        store.dispatch(logout());
      }
    }
  }

  else if (action.type === LOGOUT) {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      removeInstanceAuthorization();
      store.dispatch(saveLogout());
    }
  }

  else if (action.type === REGISTER) {
    const state = store.getState();
    try {
      const response = await instance.post('/api/users', {
        email: state.registerModalReducer.email,
        password: state.registerModalReducer.password1,
      });
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  else if (action.type === FETCH_READ_TIMER_LISTS) {
    const newtimerLists = await instance.get('/api/lists');
    store.dispatch(saveNewTimerLists(newtimerLists.data));
  }

  // ----------------------
  // CRUD List

  else if (action.type === FETCH_CREATE_LIST) {
    const state = store.getState();
    const response = await instance.post('/api/lists', {
      name: state.createListModalReducer.name,
    });
    console.log(response.data.message);
    store.dispatch(fetchReadTimerLists());
  }

  else if (action.type === FETCH_DELETE_LIST) {
    const state = store.getState();
    const response = await instance.delete(`/api/lists/${state.deleteListModalReducer.selectedListId}`);
    console.log(response.data.message);
    store.dispatch(fetchReadTimerLists());
  }

  // ----------------------
  // CRUD Timer

  else if (action.type === FETCH_CREATE_TIMER) {
    const state = store.getState();
    const response = await instance.post(`/api/lists/${state.createTimerModalReducer.selectedListId}/timers`, {
      name: state.createTimerModalReducer.name,
      delay: state.createTimerModalReducer.delay,
      listId: state.createTimerModalReducer.selectedListId,
    });
    console.log(response.data.message);
    store.dispatch(fetchReadTimerLists());
  }

  else if (action.type === FETCH_UPDATE_TIMER) {
    const state = store.getState();
    const response = await instance.patch(`/api/lists/${state.editTimerModalReducer.selectedListId}/timers/${state.editTimerModalReducer.selectedTimer.id}`, {
      name: state.editTimerModalReducer.name,
      delay: state.editTimerModalReducer.delay,
      listId: state.editTimerModalReducer.selectedListId,
    });
    console.log(response.data.message);
    store.dispatch(fetchReadTimerLists());
  }

  else if (action.type === FETCH_DELETE_TIMER) {
    const state = store.getState();
    const response = await instance.delete(`/api/lists/${state.deleteTimerModalReducer.selectedListId}/timers/${state.deleteTimerModalReducer.selectedTimer.id}`);
    console.log(response.data.message);
    store.dispatch(fetchReadTimerLists());
  }
  next(action);
};

export default authMW;
