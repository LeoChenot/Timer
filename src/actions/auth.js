export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const setLoginLoading = (newLoginLoading) => ({
  type: SET_LOGIN_LOADING,
  newLoginLoading,
});

export const CHECK_LOGIN_WITH_TOKEN = 'CHECK_LOGIN_WITH_TOKEN';
export const checkLoginWithToken = () => ({
  type: CHECK_LOGIN_WITH_TOKEN,
});

export const REGISTER = 'REGISTER';
export const register = () => ({
  type: REGISTER,
});
