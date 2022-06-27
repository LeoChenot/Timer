export const START_TIMER_BY_ID = 'START_TIMER_BY_ID';
export const startTimerById = (timerId) => ({
  type: START_TIMER_BY_ID,
  timerId,
});

export const STOP_TIMER_BY_ID = 'STOP_TIMER_BY_ID';
export const stopTimerById = (timerId) => ({
  type: STOP_TIMER_BY_ID,
  timerId,
});

export const RESET_TIMER_BY_ID = 'RESET_TIMER_BY_ID';
export const resetTimerById = (timerId) => ({
  type: RESET_TIMER_BY_ID,
  timerId,
});

export const DECREASE_TIMER_BY_ID = 'DECREASE_TIMER_BY_ID';
export const decreaseTimerById = (timerId) => ({
  type: DECREASE_TIMER_BY_ID,
  timerId,
});

export const SAVE_INTERVAL_ID = 'SAVE_INTERVAL_ID';
export const saveIntervalId = (timerId, intervalId) => ({
  type: SAVE_INTERVAL_ID,
  timerId,
  intervalId,
});

export const DELETE_INTERVAL_ID = 'DELETE_INTERVAL_ID';
export const deleteIntervalId = (timerId) => ({
  type: DELETE_INTERVAL_ID,
  timerId,
});
