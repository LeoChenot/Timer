export const SET_STATE_REGISTER_MODAL = 'SET_STATE_REGISTER_MODAL';
export const setStateRegisterModal = (state, value) => ({
  type: SET_STATE_REGISTER_MODAL,
  state,
  value,
});

export const TOGGLE_STATE_REGISTER_MODAL = 'TOGGLE_STATE_REGISTER_MODAL';
export const toggleStateRegisterModal = (state) => ({
  type: TOGGLE_STATE_REGISTER_MODAL,
  state,
});

export const RESET_STATES_REGISTER_MODAL = 'RESET_STATES_REGISTER_MODAL';
export const resetStatesRegisterModal = () => ({
  type: RESET_STATES_REGISTER_MODAL,
});
