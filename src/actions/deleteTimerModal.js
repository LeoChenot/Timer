export const SET_STATE_DELETE_TIMER_MODAL = 'SET_STATE_DELETE_TIMER_MODAL';
export const setStateDeleteTimerModal = (state, value) => ({
  type: SET_STATE_DELETE_TIMER_MODAL,
  state,
  value,
});

export const RESET_STATES_DELETE_TIMER_MODAL = 'RESET_STATES_DELETE_TIMER_MODAL';
export const resetStatesDeleteTimerModal = () => ({
  type: RESET_STATES_DELETE_TIMER_MODAL,
});
