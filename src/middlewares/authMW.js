/* eslint-disable brace-style */
import axios from 'axios';
import { setStateCreateListModal } from '../actions/createListModal';
import { setStateCreateTimerModal } from '../actions/createTimerModal';
import { setStateDeleteListModal } from '../actions/deleteListModal';
import { setStateDeleteTimerModal } from '../actions/deleteTimerModal';
import { setStateEditTimerModal } from '../actions/editTimerModal';
import { FETCH_UPDATE_TIMER_EXPO, setStateHome, setStateTimerExpo } from '../actions/home';
import { setStateLoginModal } from '../actions/loginModal';
import { setStateRegisterModal } from '../actions/registerModal';
import {
  FETCH_CREATE_TIMER,
  FETCH_CREATE_LIST,
  FETCH_DELETE_TIMER,
  FETCH_UPDATE_TIMER,
  FETCH_DELETE_LIST,
  FETCH_READ_LISTS,
  fetchReadLists,
  saveLists,
  FETCH_CREATE_USER,
  FETCH_READ_USER,
  saveUser,
  FETCH_READ_USER_WITH_TOKEN,
  saveLogout,
  logout,
  LOGOUT,
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

const fakeDelay = 1000;

const authMW = (store) => (next) => async (action) => {
  // ----------------------
  // CRUD User

  if (action.type === FETCH_CREATE_USER) {
    const state = store.getState();
    store.dispatch(setStateRegisterModal('loading', true));
    try {
      const response = await instance.post('/api/users', {
        email: state.registerModalReducer.email,
        password: state.registerModalReducer.password1,
      });
      store.dispatch(setStateRegisterModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate(`${action.pathname[action.pathname.length - 1] === '/' ? action.pathname.substring(0, action.pathname.length - 1) : action.pathname}/?login`);
        store.dispatch(setStateRegisterModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      setTimeout(() => {
        if (error && error.response && error.response.data && error.response.data.message) {
          store.dispatch(setStateRegisterModal('responseMessage', error.response.data.message));
        }
        else {
          store.dispatch(setStateRegisterModal('responseMessage', error.message));
        }
        store.dispatch(setStateRegisterModal('loading', false));
      }, fakeDelay);
      console.log(error);
    }
  }

  if (action.type === FETCH_READ_USER) {
    const state = store.getState();
    store.dispatch(setStateLoginModal('loading', true));
    try {
      const response = await instance.post('/api/login', {
        email: state.loginModalReducer.email,
        password: state.loginModalReducer.password,
      });
      store.dispatch(setStateLoginModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate(`${action.pathname[action.pathname.length - 1] === '/' ? action.pathname.substring(0, action.pathname.length - 1) : action.pathname}`);
        store.dispatch(saveUser(response.data.user));
        store.dispatch(setStateLoginModal('loading', false));
        localStorage.setItem('token', response.data.token);
        setInstanceAuthorization();
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateLoginModal('responseMessage', error.message));
      }
      store.dispatch(setStateLoginModal('loading', false));
      console.log({ error });
    }
  }

  if (action.type === FETCH_READ_USER_WITH_TOKEN) {
    if (localStorage.getItem('token')) {
      setInstanceAuthorization();
      try {
        const response = await instance.get('/api/check');
        store.dispatch(saveUser(response.data.user));
        localStorage.setItem('token', response.data.token);
        setInstanceAuthorization();
      } catch (error) {
        store.dispatch(logout());
      }
    }
  }

  if (action.type === LOGOUT) {
    if (localStorage.getItem('token')) {
      setTimeout(() => {
        action.navigate('/');
        localStorage.removeItem('token');
        removeInstanceAuthorization();
        store.dispatch(saveLogout());
      }, fakeDelay);
    }
  }

  // ----------------------
  // CRUD List

  else if (action.type === FETCH_CREATE_LIST) {
    const state = store.getState();
    store.dispatch(setStateCreateListModal('loading', true));
    try {
      const response = await instance.post('/api/lists', {
        name: state.createListModalReducer.name,
      });
      store.dispatch(setStateCreateListModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate('/');
        store.dispatch(fetchReadLists());
        store.dispatch(setStateCreateListModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateCreateListModal('responseMessage', error.message));
      }
      store.dispatch(setStateCreateListModal('loading', false));
      console.log({ error });
    }
  }

  else if (action.type === FETCH_READ_LISTS) {
    const response = await instance.get('/api/lists');
    store.dispatch(saveLists(response.data));
  }

  else if (action.type === FETCH_DELETE_LIST) {
    const state = store.getState();
    store.dispatch(setStateDeleteListModal('loading', true));
    try {
      const response = await instance.delete(`/api/lists/${state.deleteListModalReducer.selectedListId}`);
      store.dispatch(setStateDeleteListModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate('/');
        store.dispatch(fetchReadLists());
        store.dispatch(setStateDeleteListModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateDeleteListModal('responseMessage', error.message));
      }
      store.dispatch(setStateDeleteListModal('loading', false));
      console.log({ error });
    }
  }

  // ----------------------
  // CRUD Timer

  else if (action.type === FETCH_CREATE_TIMER) {
    const state = store.getState();
    store.dispatch(setStateCreateTimerModal('loading', true));
    try {
      const response = await instance.post(`/api/lists/${state.createTimerModalReducer.selectedListId}/timers`, {
        name: state.createTimerModalReducer.name,
        delay: state.createTimerModalReducer.delay,
        listId: state.createTimerModalReducer.selectedListId,
      });
      store.dispatch(setStateCreateTimerModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate('/');
        store.dispatch(fetchReadLists());
        store.dispatch(setStateCreateTimerModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateCreateTimerModal('responseMessage', error.message));
      }
      store.dispatch(setStateCreateTimerModal('loading', false));
      console.log({ error });
    }
  }

  else if (action.type === FETCH_UPDATE_TIMER) {
    const state = store.getState();
    store.dispatch(setStateEditTimerModal('loading', true));
    try {
      const response = await instance.patch(`/api/lists/${state.editTimerModalReducer.selectedListId}/timers/${state.editTimerModalReducer.selectedTimer.id}`, {
        name: state.editTimerModalReducer.name,
        delay: state.editTimerModalReducer.delay,
        listId: state.editTimerModalReducer.selectedListId,
      });
      store.dispatch(setStateEditTimerModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate('/');
        store.dispatch(fetchReadLists());
        store.dispatch(setStateEditTimerModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateEditTimerModal('responseMessage', error.message));
      }
      store.dispatch(setStateEditTimerModal('loading', false));
      console.log({ error });
    }
  }

  else if (action.type === FETCH_DELETE_TIMER) {
    const state = store.getState();
    store.dispatch(setStateDeleteTimerModal('loading', true));
    try {
      const response = await instance.delete(`/api/lists/${state.deleteTimerModalReducer.selectedListId}/timers/${state.deleteTimerModalReducer.selectedTimer.id}`);
      store.dispatch(setStateDeleteTimerModal('responseMessage', response.data.message));
      setTimeout(() => {
        action.navigate('/');
        store.dispatch(fetchReadLists());
        store.dispatch(setStateDeleteTimerModal('loading', false));
      }, fakeDelay);
    } catch (error) {
      if (error.name === 'AxiosError') {
        store.dispatch(setStateDeleteTimerModal('responseMessage', error.message));
      }
      store.dispatch(setStateDeleteTimerModal('loading', false));
      console.log({ error });
    }
  }

  // ----------------------
  // Timer Expo

  else if (action.type === FETCH_UPDATE_TIMER_EXPO) {
    const state = store.getState();
    store.dispatch(setStateHome('loading', true));
    setTimeout(() => {
      store.dispatch(setStateTimerExpo('name', state.editTimerModalReducer.name));
      store.dispatch(setStateTimerExpo('delay', state.editTimerModalReducer.delay));
      store.dispatch(setStateTimerExpo('currentDelay', state.editTimerModalReducer.delay));
      store.dispatch(setStateTimerExpo('isActive', false));
      store.dispatch(setStateTimerExpo('intervalId', undefined));
      action.navigate('/');
      store.dispatch(setStateHome('loading', false));
    }, fakeDelay);
  }
  next(action);
};

export default authMW;
