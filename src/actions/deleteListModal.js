export const SET_STATE_DELETE_LIST_MODAL = 'SET_STATE_DELETE_LIST_MODAL';
export const setStateDeleteListModal = (state, value) => ({
  type: SET_STATE_DELETE_LIST_MODAL,
  state,
  value,
});

export const RESET_STATES_DELETE_LIST_MODAL = 'RESET_STATES_DELETE_LIST_MODAL';
export const resetStatesDeleteListModal = () => ({
  type: RESET_STATES_DELETE_LIST_MODAL,
});
