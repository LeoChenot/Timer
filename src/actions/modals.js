export const SET_STATE_MODAL = 'SET_STATE_MODAL';
export const setStateModal = (state, value) => ({
  type: SET_STATE_MODAL,
  state,
  value,
});

export const HIDE_ALL_MODALS = 'HIDE_ALL_MODALS';
export const hideAllModals = () => ({
  type: HIDE_ALL_MODALS,
});
