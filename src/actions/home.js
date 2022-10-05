export const FETCH_UPDATE_TIMER_EXPO = 'FETCH_UPDATE_TIMER_EXPO';
export const fetchUpdateTimerExpo = (navigate) => ({
  type: FETCH_UPDATE_TIMER_EXPO,
  navigate,
});

export const SET_STATE_HOME = 'SET_STATE_HOME';
export const setStateHome = (state, value) => ({
  type: SET_STATE_HOME,
  state,
  value,
});

export const SET_STATE_TIMER_EXPO = 'SET_STATE_TIMER_EXPO';
export const setStateTimerExpo = (state, value) => ({
  type: SET_STATE_TIMER_EXPO,
  state,
  value,
});
