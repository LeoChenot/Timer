export const SET_STATE_CREATE_TIMER_MODAL = 'SET_STATE_CREATE_TIMER_MODAL';
export const setStateCreateTimerModal = (state, value) => ({
  type: SET_STATE_CREATE_TIMER_MODAL,
  state,
  value,
});

export const RESET_STATES_CREATE_TIMER_MODAL = 'RESET_STATES_CREATE_TIMER_MODAL';
export const resetStatesCreateTimerModal = () => ({
  type: RESET_STATES_CREATE_TIMER_MODAL,
});
