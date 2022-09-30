export const SET_STATE_LOGIN_MODAL = 'SET_STATE_LOGIN_MODAL';
export const setStateLoginModal = (state, value) => ({
  type: SET_STATE_LOGIN_MODAL,
  state,
  value,
});

export const TOGGLE_STATE_LOGIN_MODAL = 'TOGGLE_STATE_LOGIN_MODAL';
export const toggleStateLoginModal = (state) => ({
  type: TOGGLE_STATE_LOGIN_MODAL,
  state,
});

export const RESET_STATES_LOGIN_MODAL = 'RESET_STATES_LOGIN_MODAL';
export const resetStatesLoginModal = () => ({
  type: RESET_STATES_LOGIN_MODAL,
});
