export const SET_STATE_EDIT_TIMER_MODAL = 'SET_STATE_EDIT_TIMER_MODAL';
export const setStateEditTimerModal = (state, value) => ({
  type: SET_STATE_EDIT_TIMER_MODAL,
  state,
  value,
});

export const RESET_STATES_EDIT_TIMER_MODAL = 'RESET_STATES_EDIT_TIMER_MODAL';
export const resetStatesEditTimerModal = () => ({
  type: RESET_STATES_EDIT_TIMER_MODAL,
});
