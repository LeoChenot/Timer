export const SET_STATE_CREATE_LIST_MODAL = 'SET_STATE_CREATE_LIST_MODAL';
export const setStateCreateListModal = (state, value) => ({
  type: SET_STATE_CREATE_LIST_MODAL,
  state,
  value,
});

export const RESET_STATES_CREATE_LIST_MODAL = 'RESET_STATES_CREATE_LIST_MODAL';
export const resetStatesCreateListModal = () => ({
  type: RESET_STATES_CREATE_LIST_MODAL,
});
