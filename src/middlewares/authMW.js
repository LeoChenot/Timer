/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { CHECK_LOGIN_WITH_TOKEN, LOGIN } from '../actions/auth';
import { saveLogout, saveUserData } from '../actions/user';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3001',
});

const setInstanceAuthorization = () => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    instance.defaults.headers.common.authorization = token;
  }
};

const removeInstanceAuthorization = () => {
  delete instance.defaults.headers.common.authorization;
};

const authMW = (store) => (next) => async (action) => {
  if (action.type === LOGIN) {
    const state = store.getState();
    try {
      const response = await instance.post('/api/login', {
        email: state.loginModalReducer.emailValue,
        password: state.loginModalReducer.passwordValue,
      });
      store.dispatch(saveUserData(response.data.user));
      localStorage.setItem('token', response.data.token);
      setInstanceAuthorization();
    } catch (error) {
      if (typeof error.response.data !== 'undefined') {
        if (typeof error.response.data.message !== 'undefined') {
          console.log(error.response.data.message);
        }
      }
      else {
        console.log(error.message);
      }
    }
  }
  else if (action.type === CHECK_LOGIN_WITH_TOKEN) {
    if (localStorage.getItem('token')) {
      try {
        const response = await instance.post('/api/check', {
          token: localStorage.getItem('token'),
        });
        store.dispatch(saveUserData(response.data.user));
        localStorage.setItem('token', response.data.token);
        setInstanceAuthorization();
      } catch (error) {
        console.log(error);
      }
    }
  }
  else if (action.type === 'LOGOUT') {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      removeInstanceAuthorization();
      store.dispatch(saveLogout());
    }
  }
  next(action);
};

export default authMW;
